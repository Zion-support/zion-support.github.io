#!/usr/bin/env node
<<<<<<< HEAD

/**
 * Footer Injector Script
 * Injects dynamic content into the footer after build
 */
=======
'use strict';
>>>>>>> origin/auto/autonomy-17186719616

const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
console.log('🔧 Running footer injector...');

try {
  const distPath = path.join(__dirname, '..', 'dist');
  const indexPath = path.join(distPath, 'index.html');
  
  if (!fs.existsSync(indexPath)) {
    console.log('⚠️  index.html not found in dist folder');
    process.exit(0);
  }
  
  let html = fs.readFileSync(indexPath, 'utf8');
  
  // Add build timestamp
  const timestamp = new Date().toISOString();
  const buildInfo = `<!-- Build: ${timestamp} -->`;
  
  if (!html.includes(buildInfo)) {
    html = html.replace('</head>', `${buildInfo}\n</head>`);
    fs.writeFileSync(indexPath, html);
    console.log('✅ Footer injection completed');
  } else {
    console.log('ℹ️  Footer already injected');
  }
  
} catch (error) {
  console.log('⚠️  Footer injection failed:', error.message);
  // Don't fail the build for this
  process.exit(0);
}
=======
function safeRead(filePath) {
	try {
		return fs.readFileSync(filePath, 'utf8');
	} catch {
		return '';
	}
}

(function main() {
	const outDir = path.join(process.cwd(), 'out');
	if (!fs.existsSync(outDir)) {
		console.log('[footer:inject] No out/ directory; skipping.');
		process.exit(0);
	}
	const files = fs.readdirSync(outDir).filter(f => f.endsWith('.html'));
	for (const file of files) {
		const full = path.join(outDir, file);
		const html = safeRead(full);
		if (!html) continue;
		const footer = '\n<!-- automated footer -->\n';
		const updated = html.includes('</body>') ? html.replace('</body>', `${footer}</body>`) : (html + footer);
		try {
			fs.writeFileSync(full, updated);
		} catch {}
	}
	console.log('[footer:inject] Completed.');
	process.exit(0);
})();
>>>>>>> origin/auto/autonomy-17186719616
