#!/usr/bin/env node

import fs from 'fs';

const filePath = '/workspace/app/components/Navigation.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix common syntax errors
content = content.replace(/;\s*</g, '<');
content = content.replace(/;\s*}/g, '}');
content = content.replace(/;\s*\)/g, ')');
content = content.replace(/;\s*\]/g, ']');
content = content.replace(/;\s*$/gm, '');
content = content.replace(/;\s*\/\//g, ' //');
content = content.replace(/;\s*\/\*/g, ' /*');

// Fix specific patterns
content = content.replace(/onClick=\{\(\) => toggleDropdown\('services'\)\};/g, "onClick={() => toggleDropdown('services')}");
content = content.replace(/onClick=\{\(\) => toggleDropdown\('it-services'\)\};/g, "onClick={() => toggleDropdown('it-services')}");
content = content.replace(/onClick=\{toggleMenu\};/g, "onClick={toggleMenu}");
content = content.replace(/className="[^"]*";/g, (match) => match.replace(';', ''));
content = content.replace(/;\s*<\/div>/g, '</div>');
content = content.replace(/;\s*<\/button>/g, '</button>');
content = content.replace(/;\s*<\/Link>/g, '</Link>');

// Fix malformed JSX
content = content.replace(/;\s*<\/div>\s*\)\}/g, '</div>)}');
content = content.replace(/;\s*<\/div>\s*\)\}/g, '</div>)}');

// Fix missing closing tags
content = content.replace(/;\s*<\/div>\s*\)\}/g, '</div>)}');

// Clean up extra semicolons
content = content.replace(/;\s*;\s*/g, ';');
content = content.replace(/;\s*$/gm, '');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed Navigation.tsx');