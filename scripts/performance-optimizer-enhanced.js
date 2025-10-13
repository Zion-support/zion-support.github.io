import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
console.log('🖼️  Optimizing images...'';
///
console.log('✅ Images optimized'';
console.log('🎨 Optimizing CSS...'';
const cssFiles = glob.sync('dist/assets//;'
let content = fs.readFileSync(file, 'utf8'';
content = content.replace(/\/\*[\s\S]*?\*\///;
content = content.replace(/\s+//;
content = content.replace(/;\s*}//;
console.log('✅ CSS optimized'';
console.log('⚡ Optimizing JavaScript...'';
const jsFiles = glob.sync('dist/assets//;'
let content = fs.readFileSync(file, 'utf8'';
content = content.replace(/\/\*[\s\S]*?\*\///;
content = content.replace(/\s+//;
console.log('✅ JavaScript optimized'';
console.log('📄 Optimizing HTML...'';
const htmlFile = 'dist//;'
let content = fs.readFileSync(htmlFile, 'utf8'';
content = content.replace(/\s+//;
content = content.replace(/>\s+<//;
console.log('✅ HTML optimized'';
console.log('🔧 Adding performance headers...'';
const headersFile = 'dist//;'
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:///;
console.log('✅ Performance headers added'';
console.log('🔧 Generating service worker...'';
const CACHE_NAME = 'zion-tech-group-v1'';
'//;'
'/static/css//;'
'/static/js//;'
self.addEventListener('install'';
self.addEventListener('fetch'';
fs.writeFileSync('dist//;'
console.log('✅ Service worker generated'';
console.log('🤖 Generating robots.txt...'';
fs.writeFileSync('dist//;'
console.log('✅ robots.txt generated'';
console.log('📱 Generating manifest.json...'';
)))))))))))))))))))))))))))))))