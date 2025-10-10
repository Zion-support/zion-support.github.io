#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
;
const __filename = fileURLToPath(import.meta.url);
// __dirname removed
;
const filePath = path.join(__dirname, 'app/5 g-implementation/page.tsx');
;
let content = fs.readFileSync(filePath, 'utf8');
// Fix malformed JSX elements
content = content.replace(/<\/undefined>/g, '');
content = content.replace(/&quot;/g, '"');
content = content.replace(/className="([^"]*)"([^>]*)><\/undefined>/g, 'className="$1"$2>');
content = content.replace(/className="([^"]*)"([^>]*)><\/undefined><\/undefined>/g, 'className="$1"$2>');
content = content.replace(/className="([^"]*)"([^>]*)><\/undefined><\/undefined><\/undefined>/g, 'className="$1"$2>');
// Fix malformed closing tags
content = content.replace(/<\/undefined><\/undefined>/g, '');
content = content.replace(/<\/undefined><\/undefined><\/undefined>/g, '');
// Fix malformed self-closing tags
content = content.replace(/\/><\/undefined>/g, '/>');
// Fix malformed quotes in className
content = content.replace(/className="([^"]*)"([^>]*)><\/undefined>/g, 'className="$1"$2>');
fs.writeFileSync(filePath, content, 'utf8');
// console.log removed for production
