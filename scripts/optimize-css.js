const fs = require('fs');
const path = require('path');

function optimizeCSS() {
  console.log('🎨 Starting CSS optimization...\n');

  const distPath = path.join(__dirname, '../dist');
  const assetsPath = path.join(distPath, 'assets');
  
  if (!fs.existsSync(assetsPath)) {
    console.log('❌ Assets folder not found. Run npm run build first.');
    return;
  }

  const cssFiles = fs.readdirSync(assetsPath).filter(file => file.endsWith('.css'));
  
  if (cssFiles.length === 0) {
    console.log('⚠️  No CSS files found to optimize.');
    return;
  }

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;

  cssFiles.forEach(cssFile => {
    const filePath = path.join(assetsPath, cssFile);
    const originalContent = fs.readFileSync(filePath, 'utf8');
    const originalSize = Buffer.byteLength(originalContent, 'utf8');
    
    // Basic CSS optimizations
    let optimizedContent = originalContent
      // Remove comments
      .replace(/\/\*[\s\S]*?\*\//g, '')
      // Remove unnecessary whitespace
      .replace(/\s+/g, ' ')
      // Remove spaces around specific characters
      .replace(/\s*{\s*/g, '{')
      .replace(/\s*}\s*/g, '}')
      .replace(/\s*;\s*/g, ';')
      .replace(/\s*:\s*/g, ':')
      .replace(/\s*,\s*/g, ',')
      // Remove trailing semicolons
      .replace(/;}/g, '}')
      // Remove empty rules
      .replace(/[^{}]+{\s*}/g, '')
      // Remove duplicate semicolons
      .replace(/;+/g, ';')
      .trim();

    const optimizedSize = Buffer.byteLength(optimizedContent, 'utf8');
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    // Write optimized CSS
    fs.writeFileSync(filePath, optimizedContent);
    
    totalOriginalSize += originalSize;
    totalOptimizedSize += optimizedSize;
    
    console.log(`✅ ${cssFile}: ${Math.round(originalSize / 1024)}KB → ${Math.round(optimizedSize / 1024)}KB (${savings}% savings)`);
  });

  console.log(`\n📊 Total CSS optimization: ${Math.round(totalOriginalSize / 1024)}KB → ${Math.round(totalOptimizedSize / 1024)}KB (${((totalOriginalSize - totalOptimizedSize) / totalOriginalSize * 100).toFixed(1)}% savings)`);
  
  // Generate critical CSS extraction
  generateCriticalCSS();
}

function generateCriticalCSS() {
  const criticalCSS = `
/* Critical CSS for above-the-fold content */
body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; }
.loading { display: flex; align-items: center; justify-content: center; min-height: 100vh; }
.spinner { width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #3b82f6; border-radius: 50%; animation: spin 1s linear infinite; }
@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }

/* Navigation styles */
.bg-slate-900 { background-color: #0f172a; }
.border-slate-700 { border-color: #334155; }
.text-white { color: #ffffff; }
.text-gray-300 { color: #cbd5e1; }
.hover\\:text-white:hover { color: #ffffff; }
.hover\\:bg-slate-700:hover { background-color: #1e293b; }

/* Hero section */
.bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
.from-purple-900\\/30 { --tw-gradient-from: rgb(88 28 135 / 0.3); --tw-gradient-to: rgb(88 28 135 / 0); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to); }
.via-slate-900 { --tw-gradient-to: rgb(15 23 42 / 0); --tw-gradient-stops: var(--tw-gradient-from), rgb(15 23 42), var(--tw-gradient-to); }
.to-cyan-900\\/30 { --tw-gradient-to: rgb(14 116 144 / 0.3); }

/* Responsive utilities */
@media (max-width: 640px) {
  .sm\\:text-5xl { font-size: 3rem; line-height: 1; }
  .sm\\:text-xl { font-size: 1.25rem; line-height: 1.75rem; }
}

@media (min-width: 1024px) {
  .lg\\:text-7xl { font-size: 4.5rem; line-height: 1; }
  .lg\\:text-2xl { font-size: 1.5rem; line-height: 2rem; }
}
`;

  const criticalPath = path.join(__dirname, '../dist/critical.css');
  fs.writeFileSync(criticalPath, criticalCSS);
  console.log('📝 Generated critical CSS file');
}

optimizeCSS();