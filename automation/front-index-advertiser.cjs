#!/usr/bin/env node

<<<<<<< HEAD
/**
 * Front Index Advertiser - Promotes new content on the homepage
 * Automatically updates the main page with new promotional content
 */
=======
'use strict';
>>>>>>> origin/auto/autonomy-17186719616

const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
class FrontIndexAdvertiser {
  constructor() {
    this.mainPagePath = path.join(__dirname, '../app/page.tsx');
    this.componentsPath = path.join(__dirname, '../components');
    this.logFile = path.join(__dirname, '../automation/logs/front-advertiser.log');
  }

  async initialize() {
    try {
      // Ensure logs directory exists
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }

      this.log('Front Index Advertiser initialized');
      return true;
    } catch (error) {
      console.error('Failed to initialize Front Index Advertiser:', error);
      return false;
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error);
    }
    
    console.log(`[Front Advertiser] ${message}`);
  }

  async advertiseNewContent() {
    try {
      this.log('Starting new content advertisement process');

      // Check if main page exists
      if (!fs.existsSync(this.mainPagePath)) {
        this.log('Main page not found, skipping advertisement');
        return false;
      }

      // Read current main page content
      let mainPageContent = fs.readFileSync(this.mainPagePath, 'utf8');
      
      // Check for new promotional components
      const newComponents = this.findNewPromotionalComponents();
      
      if (newComponents.length === 0) {
        this.log('No new promotional components found');
        return false;
      }

      this.log(`Found ${newComponents.length} new promotional components: ${newComponents.join(', ')}`);

      // Add new components to main page
      const updatedContent = this.integrateNewComponents(mainPageContent, newComponents);
      
      if (updatedContent !== mainPageContent) {
        // Backup original content
        const backupPath = `${this.mainPagePath}.backup.${Date.now()}`;
        fs.writeFileSync(backupPath, mainPageContent);
        this.log(`Created backup: ${backupPath}`);

        // Write updated content
        fs.writeFileSync(this.mainPagePath, updatedContent);
        this.log('Successfully updated main page with new promotional content');
        
        return true;
      } else {
        this.log('No changes needed to main page');
        return false;
      }

    } catch (error) {
      this.log(`Error during content advertisement: ${error.message}`);
      return false;
    }
  }

  findNewPromotionalComponents() {
    const newComponents = [];
    
    // Look for AI 2027 promotional components
    const ai2027Components = [
      'AI2027UltimateBreakthroughBanner',
      'AI2027ContentShowcaseBanner'
    ];

    for (const component of ai2027Components) {
      const componentPath = path.join(this.componentsPath, `${component}.tsx`);
      if (fs.existsSync(componentPath)) {
        newComponents.push(component);
      }
    }

    return newComponents;
  }

  integrateNewComponents(content, newComponents) {
    let updatedContent = content;

    // Add imports for new components
    for (const component of newComponents) {
      const importStatement = `import ${component} from '../components/${component}';`;
      
      // Check if import already exists
      if (!updatedContent.includes(`import ${component} from`)) {
        // Find the last import statement and add after it
        const lastImportIndex = updatedContent.lastIndexOf('import ');
        const nextLineIndex = updatedContent.indexOf('\n', lastImportIndex) + 1;
        
        updatedContent = updatedContent.slice(0, nextLineIndex) + 
                        importStatement + '\n' + 
                        updatedContent.slice(nextLineIndex);
        
        this.log(`Added import for ${component}`);
      }
    }

    // Add component usage in the JSX
    for (const component of newComponents) {
      const componentUsage = `        {/* ${component} - NEW CONTENT */}\n        <${component} />\n`;
      
      // Check if component is already being used
      if (!updatedContent.includes(`<${component} />`)) {
        // Add after the opening div
        const divIndex = updatedContent.indexOf("<div className='min-h-screen bg-white'>");
        const nextLineIndex = updatedContent.indexOf('\n', divIndex) + 1;
        
        updatedContent = updatedContent.slice(0, nextLineIndex) + 
                        componentUsage + 
                        updatedContent.slice(nextLineIndex);
        
        this.log(`Added ${component} to main page layout`);
      }
    }

    return updatedContent;
  }

  async generateContentReport() {
    try {
      this.log('Generating content advertisement report');

      const report = {
        timestamp: new Date().toISOString(),
        newComponents: this.findNewPromotionalComponents(),
        mainPageExists: fs.existsSync(this.mainPagePath),
        componentsDirectory: this.componentsPath,
        status: 'active'
      };

      const reportPath = path.join(__dirname, '../automation/logs/front-advertiser-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.log(`Content report generated: ${reportPath}`);
      return report;

    } catch (error) {
      this.log(`Error generating content report: ${error.message}`);
      return null;
    }
  }

  async run() {
    try {
      const initialized = await this.initialize();
      if (!initialized) {
        return false;
      }

      // Advertise new content
      const advertised = await this.advertiseNewContent();
      
      // Generate report
      await this.generateContentReport();

      this.log(`Front advertisement process completed. New content advertised: ${advertised}`);
      return advertised;

    } catch (error) {
      this.log(`Front advertisement process failed: ${error.message}`);
      return false;
    }
  }
}

// CLI interface
if (require.main === module) {
  const advertiser = new FrontIndexAdvertiser();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'advertise':
      advertiser.run().then(success => {
        process.exit(success ? 0 : 1);
      });
      break;
      
    case 'report':
      advertiser.generateContentReport().then(report => {
        console.log(JSON.stringify(report, null, 2));
        process.exit(0);
      });
      break;
      
    default:
      console.log('Usage: node front-index-advertiser.cjs [advertise|report]');
      process.exit(1);
  }
}

module.exports = FrontIndexAdvertiser;
=======
const ROOT = process.cwd();
const FRONT_PAGE = path.join(ROOT, 'pages', 'main', 'front', 'index.tsx');
const START_MARKER = '/* AUTO-GENERATED: FRONT_ADS_START */';
const END_MARKER = '/* AUTO-GENERATED: FRONT_ADS_END */';

function titleCase(slug) {
  return slug
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ');
}

function discoverInternalPages() {
  const pagesDir = path.join(ROOT, 'pages');
  const results = [];

  function push(href, label, tagline) {
    results.push({ type: 'internal', href, label, tagline });
  }

  // Priority pages
  const priority = [
    { href: '/automation', label: 'Automation Hub', tagline: 'Live agents & workflows' },
    { href: '/site-health', label: 'Site Health', tagline: 'A11y, performance, links' },
    { href: '/reports/link-health', label: 'Link Health', tagline: 'Live link checks' },
    { href: '/reports/seo', label: 'SEO Audit', tagline: 'Continuous improvements' },
    { href: '/reports/ai-trends', label: 'AI Trends', tagline: 'Intelligence signals' },
    { href: '/newsroom', label: 'Newsroom', tagline: 'Latest autonomous updates' },
  ];
  for (const p of priority) {
    const check = p.href.startsWith('/reports/')
      ? path.join(ROOT, 'pages', 'reports', p.href.split('/').pop() + '.tsx')
      : p.href === '/automation'
      ? path.join(ROOT, 'pages', 'automation', 'index.tsx')
      : path.join(ROOT, 'pages', p.href.replace(/^\//, '') + '.tsx');
    if (fs.existsSync(check)) push(p.href, p.label, p.tagline);
  }

  // Fallback discovery of other top-level pages
  try {
    const entries = fs.readdirSync(pagesDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('_')) continue;
      if (entry.isFile() && entry.name.endsWith('.tsx')) {
        const base = entry.name.replace(/\.tsx$/, '');
        if (['index', 'front'].includes(base)) continue;
        push('/' + base, titleCase(base), 'Explore more');
      }
      if (entry.isDirectory()) {
        const indexPath = path.join(pagesDir, entry.name, 'index.tsx');
        if (fs.existsSync(indexPath)) {
          push('/' + entry.name, titleCase(entry.name), entry.name === 'automation' ? 'Live agents & workflows' : 'Explore more');
        }
      }
    }
  } catch {}

  // Add anchor deep-links for capabilities and benefits on the same page
  results.push({ type: 'internal', href: '/main/front#features', label: 'Features', tagline: 'Explore capabilities' });
  results.push({ type: 'internal', href: '/main/front#capabilities', label: 'Capabilities', tagline: 'What agents can do' });
  results.push({ type: 'internal', href: '/main/front#benefits', label: 'Benefits', tagline: 'Outcomes & ROI' });

  // Unique by href, limit
  const seen = new Set();
  const unique = [];
  for (const r of results) {
    if (!seen.has(r.href)) {
      seen.add(r.href);
      unique.push(r);
    }
  }
  return unique.slice(0, 16);
}

function discoverExternalLinks() {
  const links = [
    { type: 'internal', href: '/.netlify/functions/docs-index-runner', label: 'Docs — technical notes & guides', tagline: 'Documentation' },
    { type: 'internal', href: '/newsroom', label: 'AI Changelog — highlights', tagline: 'Summarized updates' },
    { type: 'internal', href: '/.netlify/functions/unused-media-scanner', label: 'Unused Media Scanner', tagline: 'Find and report unreferenced assets' },
    { type: 'internal', href: '/.netlify/functions/orphan-pages-detector', label: 'Orphan Pages Detector', tagline: 'Discover pages with no inbound links' },
    { type: 'internal', href: '/.netlify/functions/component-size-report', label: 'Component Size Report', tagline: 'Largest components by lines and bytes' },
  ];
  return links;
}

function buildCard(item) {
  const common = 'group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo';
  const inner = `\n  <div className=\"text-base font-semibold\">${item.label}</div>\n  <div className=\"mt-1 text-sm text-white/75\">${item.tagline || ''}</div>\n`;
  if (item.type === 'external') {
    return `              <a href=\"${item.href}\" target=\"_blank\" rel=\"noopener\" className=\"${common}\">${inner}  <div className=\"mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90\">Open <span aria-hidden>↗</span></div></a>`;
  }
  return `              <Link href=\"${item.href}\"><a className=\"${common}\">${inner}  <div className=\"mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90\">Open <span aria-hidden>→</span></div></a></Link>`;
}

function generateSection(items) {
  return [
    '<section id="auto-promoted" className="mx-auto max-w-7xl px-6 pb-14">',
    '  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Auto‑Promoted Features</h2>',
    '  <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Continuously curated promos linking to live hubs, reports, and docs.</p>',
    '  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">',
    items.map(buildCard).join('\n'),
    '  </div>',
    '</section>'
  ].join('\n');
}

function replaceBetweenMarkers(source, startMarker, endMarker, replacement) {
  const startIdx = source.indexOf(startMarker);
  const endIdx = source.indexOf(endMarker);
  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    throw new Error('Markers not found or invalid order in front index');
  }
  const before = source.slice(0, startIdx + startMarker.length);
  const after = source.slice(endIdx);
  return `${before}\n${replacement}\n${after}`;
}

(function main() {
  if (!fs.existsSync(FRONT_PAGE)) {
    console.log('Front page not found, skipping');
    process.exit(0);
  }
  const internal = discoverInternalPages();
  const external = discoverExternalLinks();
  const combined = [...internal, ...external].slice(0, 16);
  const block = generateSection(combined);
  const original = fs.readFileSync(FRONT_PAGE, 'utf8');
  let updated;
  try {
    updated = replaceBetweenMarkers(original, START_MARKER, END_MARKER, block);
  } catch (e) {
    console.log('Could not replace between markers:', e.message);
    process.exit(0);
  }
  if (updated !== original) {
    fs.writeFileSync(FRONT_PAGE, updated);
    console.log('Front index auto‑promotions updated.');
  } else {
    console.log('No updates required.');
  }
})();
>>>>>>> origin/auto/autonomy-17186719616
