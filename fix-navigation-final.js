#!/usr/bin/env node

import fs from 'fs';

const filePath = '/workspace/app/components/Navigation.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix semicolons in JSX attributes
content = content.replace(/onClick=\{([^}]+)\};/g, 'onClick={$1}');
content = content.replace(/className="([^"]*)"\s*;/g, 'className="$1"');
content = content.replace(/;\s*<\/div>/g, '</div>');
content = content.replace(/;\s*<\/button>/g, '</button>');
content = content.replace(/;\s*<\/Link>/g, '</Link>');
content = content.replace(/;\s*<\/nav>/g, '</nav>');
content = content.replace(/;\s*<\/ul>/g, '</ul>');
content = content.replace(/;\s*<\/li>/g, '</li>');

// Fix malformed JSX
content = content.replace(/;\s*<\/div>\s*\)\}/g, '</div>)}');
content = content.replace(/;\s*<\/div>\s*\)\}/g, '</div>)}');

// Fix missing closing tags
content = content.replace(/;\s*<\/div>\s*\)\}/g, '</div>)}');

// Clean up extra semicolons
content = content.replace(/;\s*;\s*/g, ';');
content = content.replace(/;\s*$/gm, '');

// Fix specific patterns
content = content.replace(/onClick=\{\(\) => toggleDropdown\('services'\)\};/g, "onClick={() => toggleDropdown('services')}");
content = content.replace(/onClick=\{\(\) => toggleDropdown\('it-services'\)\};/g, "onClick={() => toggleDropdown('it-services')}");
content = content.replace(/onClick=\{toggleMenu\};/g, "onClick={toggleMenu}");

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed Navigation.tsx');