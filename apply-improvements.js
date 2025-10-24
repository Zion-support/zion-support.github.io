const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
function applyImprovements(filePath) {
=======
function applyImprovements(filePa, t, h) {
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let improved = false;

    // Add proper error boundaries
    if (content.includes('export default function') && !content.includes('ErrorBoundary')) {
      // Add error boundary wrapper if not present
      if (content.includes('return (') && !content.includes('ErrorBoundary')) {
        content = content.replace(
          /return \(\s*<>/g,
          'return (\n    <ErrorBoundary>\n      <>'
        );
        content = content.replace(
          /<\/>\s*\);/g,
          '</>\n    </ErrorBoundary>\n  );'
        );
        improved = true;
      }
    }

    // Add proper TypeScript types
    if (content.includes('const ') && !content.includes(': ')) {
<<<<<<< HEAD
      content = content.replace(/const features = \[/g, 'const features: Array<{icon: any, title: string, description: string}> = [');
      content = content.replace(/const benefits = \[/g, 'const benefits: Array<string> = [');
      content = content.replace(/const team = \[/g, 'const team: Array<{name: string, role: string, description: string}> = [');
=======
      content = content.replace(/const features = \[/g, 'const features: Array<{icon: any,: string, description: string}> = [');
      content = content.replace(/const benefits = \[/g, 'const benefits: Array<string> = [');
      content = content.replace(/const team = \[/g, 'const team: Array<{name: string,
      role: string, description: string}> = [');
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
      improved = true;
    }

    // Add proper accessibility attributes
    if (content.includes('<button') && !content.includes('aria-label')) {
<<<<<<< HEAD
      content = content.replace(/<button([^>]*)>/g, '<button$1 aria-label="Action button">');
=======
      content = content.replace(/<button([^>]*)>/g, '<button$1 aria-label='Action button'>');
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
      improved = true;
    }

    // Add proper SEO meta tags
    if (content.includes('<Head>') && !content.includes('og:title')) {
      content = content.replace(
<<<<<<< HEAD
        /<meta property="og:type" content="website" \/>/g,
        '<meta property="og:type" content="website" />\n        <meta property="og:title" content="Zion Tech Group - AI & IT Solutions" />\n        <meta property="og:description" content="Advanced AI and IT solutions for modern businesses" />\n        <meta property="og:image" content="/og-image.jpg" />'
=======
        /<meta property='og:type' content='website' \/>/g,
        '<meta property='og:type' content='website' />\n        <meta property='og:title' content='Zion Tech Group - AI & IT Solutions' />\n        <meta property='og:description' content='Advanced AI and IT solutions for modern businesses' />\n        <meta property='og:image' content='/og-image.jpg' />'
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
      );
      improved = true;
    }

    // Add proper loading states
<<<<<<< HEAD
    if (content.includes('className="') && !content.includes('loading')) {
      content = content.replace(
        /className="([^"]*)"([^>]*)>/g,
        'className="$1" loading="lazy"$2>'
=======
    if (content.includes('className='') && !content.includes('loading')) {
      content = content.replace(
        /className='([^']*)"([^>]*)>/g,
        'className='$1' loading='lazy'$2>'
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
      );
      improved = true;
    }

<<<<<<< HEAD
    if (improved) {
      fs.writeFileSync(filePath, content);
      console.log(`Improved: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx')) {
      applyImprovements(filePath);
=======
    if (improv, e, d) {
      fs.writeFileSync(filePath, content);
      console.log(`Improved: ${ filePa, t, h }`);
    }
  } catch (err, o, r) {
    console.error(`Error processing ${ filePa, t, h }:`, error.message);
  }
}

function processDirectory(dirPa, t, h) {
  const files = fs.readdirSync(dirPa, t, h);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePa, t, h);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      processDirectory(filePa, t, h);
    } else if (file.endsWith('.tsx')) {
      applyImprovements(filePa, t, h);
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
    }
  }
}

// Process the app directory
const appDir = path.join(__dirname, 'app');
<<<<<<< HEAD
if (fs.existsSync(appDir)) {
  processDirectory(appDir);
=======
if (fs.existsSync(appD, i, r)) {
  processDirectory(appD, i, r);
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
  console.log('Improvements applied successfully!');
} else {
  console.log('App directory not found');
}
