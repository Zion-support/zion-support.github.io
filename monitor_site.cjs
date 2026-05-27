const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function log(msg) {
  console.log(`[Monitor] ${msg}`);
}

// 1. Check missing alt attributes
function checkAltAttributes() {
  log('Checking for missing alt attributes...');
  const appDir = path.join(__dirname, 'app');
  const issues = [];

  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
        const content = fs.readFileSync(filePath, 'utf8');
        const imgRegex = /<img([^>]*?)\/?>/g;
        let match;
        while ((match = imgRegex.exec(content)) !== null) {
          const imgTag = match[0];
          const attrs = match[1];
          if (!/alt\s*=/.test(attrs)) {
            const lines = content.split('\n');
            let lineNumber = -1;
            for (let i = 0; i < lines.length; i++) {
              if (lines[i].includes(imgTag)) {
                lineNumber = i + 1;
                break;
              }
            }
            issues.push({
              file: filePath,
              line: lineNumber,
              tag: imgTag.trim()
            });
          }
        }
      }
    }
  }

  walkDir(appDir);
  if (issues.length === 0) {
    log('✅ All images have alt attributes.');
  } else {
    log(`❌ Found ${issues.length} image(s) missing alt attributes:`);
    issues.forEach(issue => {
      log(`  ${issue.file}:${issue.line} - ${issue.tag}`);
    });
  }
  return issues;
}

// 2. Check internal links (href and next/link href)
function checkInternalLinks() {
  log('Checking internal links...');
  const appDir = path.join(__dirname, 'app');
  const pagesDir = path.join(appDir, 'pages'); // Note: Next.js 13+ uses app directory, but we have both?
  // In our project, we have app directory (Next.js 13 app router) and maybe pages? Let's check.
  // We'll check both app and pages directories for existing routes.
  const routePaths = new Set();

  // Collect all possible routes from the file system (app router)
  function collectAppRoutes(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        // Skip certain directories like components, lib, etc.
        const dirName = file;
        if (dirName.startsWith('_') || dirName === 'components' || dirName === 'lib' || dirName === 'data' || dirName === 'styles') {
          // still recurse into these? maybe not for routes.
          // For app router, routes are defined by page.js, layout.js, etc.
          // We'll still recurse but we'll look for page files.
          walkForRoutes(filePath);
        } else {
          walkForRoutes(filePath);
        }
      } else {
        if (file === 'page.tsx' || file === 'page.jsx' || file === 'page.js' || file === 'page.ts' ||
            file === 'loading.tsx' || file === 'loading.jsx' || // not a route
            file === 'route.ts' || file === 'route.tsx' || file === 'route.js' || file === 'route.jsx') {
          // This is a route endpoint. Convert file path to route.
          // Remove the 'app' prefix and the file name.
          let route = filePath.replace(/\\/g, '/').replace(__dir, '').replace(/\/page(\.[tj]sx?)$/, '');
          // Ensure route starts with /
          if (!route.startsWith('/')) route = '/' + route;
          // Remove trailing slash? Keep as is.
          routePaths.add(route);
          // Also add the route with trailing slash if not present? We'll handle both.
          if (route !== '/' && !route.endsWith('/')) {
            routePaths.add(route + '/');
          }
        }
      }
    }
  }

  function walkForRoutes(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        walkForRoutes(filePath);
      } else {
        if (file === 'page.tsx' || file === 'page.jsx' || file === 'page.js' || file === 'page.ts') {
          let route = filePath.replace(/\\/g, '/').replace(__dir, '').replace(/\/page(\.[tj]sx?)$/, '');
          if (!route.startsWith('/')) route = '/' + route;
          routePaths.add(route);
          if (route !== '/' && !route.endsWith('/')) {
            routePaths.add(route + '/');
          }
        }
      }
    }
  }

  // We need to get the __dirname of the app directory.
  const __dir = path.join(__dirname, 'app').replace(/\\/g, '/');
  walkForRoutes(path.join(__dirname, 'app'));

  // Also check pages directory if exists (for compatibility)
  const pagesDirPath = path.join(__dirname, 'app', 'pages'); // Actually, in Next.js 13, pages is inside app? No, pages is replaced by app.
  // But we might have a pages directory for compatibility? Let's check.
  if (fs.existsSync(path.join(__dirname, 'pages'))) {
    const pagesDir = path.join(__dirname, 'pages');
    function collectPagesRoutes(dir) {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          collectPagesRoutes(filePath);
        } else {
          if (file === 'page.tsx' || file === 'page.jsx' || file === 'page.js' || file === 'page.ts' ||
              file === 'index.tsx' || file === 'index.jsx' || file === 'index.js' || file === 'index.ts') {
            let route = filePath.replace(/\\/g, '/').replace(__dirname, '').replace(/(index|page)(\.[tj]sx?)$/, '');
            if (!route.startsWith('/')) route = '/' + route;
            if (route === '') route = '/';
            routePaths.add(route);
            if (route !== '/' && !route.endsWith('/')) {
              routePaths.add(route + '/');
            }
          }
        }
      }
    }
    collectPagesRoutes(pagesDir);
  }

  log(`Found ${routePaths.size} possible routes from file system.`);

  // Now scan all .tsx, .jsx files for href and Link href
  const linkRegex = /href\s*=\s*["']([^"']*)["']/g;
  const linkFromNextLinkRegex = /<Link\s+[^>]*?href\s*=\s*["']([^"']*)["'][^>]*>/g;

  const brokenLinks = [];

  function scanFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    let match;

    // Find all href attributes
    while ((match = linkRegex.exec(content)) !== null) {
      let link = match[1];
      // Ignore external links, anchors, javascript:, mailto:, tel:, etc.
      if (link.startsWith('http') || link.startsWith('#') || link.startsWith('mailto:') || link.startsWith('tel:') || link.startsWith('javascript:')) {
        continue;
      }
      // Normalize link: remove leading ./ or ../? We'll assume it's relative to the current file or root?
      // For simplicity, we check if the link corresponds to a route in routePaths.
      // We'll also consider that the link might be a path like "/services/ai-compliance"
      // We'll check if the link (as is) is in routePaths, or if adding a trailing slash makes it match.
      // Also, we might need to handle dynamic routes? We'll skip for now.
      if (link.startsWith('/')) {
        if (!routePaths.has(link) && !(link.endsWith('/') ? false : routePaths.has(link + '/'))) {
          brokenLinks.push({
            file: filePath,
            link: link,
            match: match[0]
          });
        }
      }
    }

    // Find all <Link href="...">
    while ((match = linkFromNextLinkRegex.exec(content)) !== null) {
      let link = match[1];
      if (link.startsWith('http') || link.startsWith('#') || link.startsWith('mailto:') || link.startsWith('tel:') || link.startsWith('javascript:')) {
        continue;
      }
      if (link.startsWith('/')) {
        if (!routePaths.has(link) && !(link.endsWith('/') ? false : routePaths.has(link + '/'))) {
          brokenLinks.push({
            file: filePath,
            link: link,
            match: match[0]
          });
        }
      }
    }
  }

  function scanDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        // Skip node_modules, .next, etc.
        if (file === 'node_modules' || file === '.next' || file === 'out') {
          continue;
        }
        scanDir(filePath);
      } else if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
        scanFile(filePath);
      }
    }
  }

  scanDir(path.join(__dirname, 'app'));
  // Also scan components? They might have links too.
  scanDir(path.join(__dirname, 'app', 'components'));

  if (brokenLinks.length === 0) {
    log('✅ All internal links are valid.');
  } else {
    log(`❌ Found ${brokenLinks.length} broken internal link(s):`);
    brokenLinks.forEach(b => {
      log(`  ${b.file}: ${b.link}`);
      log(`    ${b.match}`);
    });
  }
  return brokenLinks;
}

// Main
function main() {
  log('Starting automated monitoring...');
  const altIssues = checkAltAttributes();
  const linkIssues = checkInternalLinks();
  log('Monitoring complete.');
  process.exit((altIssues.length + linkIssues.length) > 0 ? 1 : 0);
}

main();