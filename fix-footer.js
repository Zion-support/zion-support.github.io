#!/usr/bin/env node

import fs from 'fs';

const filePath = '/workspace/app/components/Footer.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix malformed JSX structure
content = content.replace(/className="text-gray-300 hover:text-white text-sm transition-colors"\s*\n\s*>\s*<ArrowRightIcon className="w-4 h-4 mr-2" \/>\s*{link\.name}/g, 
  'className="text-gray-300 hover:text-white text-sm transition-colors">\n                    {service.name}');

// Fix duplicate h3 tags
content = content.replace(/<h3 className="text-white font-bold text-lg mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Company<\/h3>\s*<ul className="space-y-3">\s*<h3 className="text-white font-semibold text-lg mb-4">Company<\/h3>/g, 
  '<h3 className="text-white font-semibold text-lg mb-4">Company</h3>');

// Fix malformed closing tags
content = content.replace(/<\/Link>\s*<\/li>\s*\)\)\}\s*<\/ul>\s*<\/div>/g, 
  '                  </Link>\n                </li>\n              ))}\n            </ul>\n          </div>');

// Fix malformed social links structure
content = content.replace(/<a href="#" className="text-gray-400 hover:text-white transition-colors">\s*<Linkedin className="w-5 h-5" \/>\s*<\/a>\s*<a href="#" className="text-gray-400 hover:text-white transition-colors">\s*<Github className="w-5 h-5" \/>\s*<\/a>\s*<span className="sr-only">\{social\.name\}<\/span>/g, 
  '<a href="#" className="text-gray-400 hover:text-white transition-colors">\n                <Linkedin className="w-5 h-5" />\n              </a>\n              <a href="#" className="text-gray-400 hover:text-white transition-colors">\n                <Github className="w-5 h-5" />\n              </a>');

// Fix malformed social links mapping
content = content.replace(/\{socialLinks\.map\(\(social\) => \(\s*<a key=\{social\.name\} href=\{social\.href\} className="text-gray-400 hover:text-white transition-colors">\s*<span className="sr-only">\{social\.name\}<\/span>\s*<div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">\s*\{social\.icon === 'linkedin' && <span className="text-xs">in<\/span>\}\s*\{social\.icon === 'twitter' && <span className="text-xs">t<\/span>\}\s*\{social\.icon === 'github' && <span className="text-xs">g<\/span>\}\s*<\/div>\s*<\/a>\s*\)\)\}/g, 
  '{socialLinks.map((social) => (\n              <a key={social.name} href={social.href} className="text-gray-400 hover:text-white transition-colors">\n                <span className="sr-only">{social.name}</span>\n                <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">\n                  {social.icon === \'linkedin\' && <span className="text-xs">in</span>}\n                  {social.icon === \'twitter\' && <span className="text-xs">t</span>}\n                  {social.icon === \'github\' && <span className="text-xs">g</span>}\n                </div>\n              </a>\n            ))}');

fs.writeFileSync(filePath, content);
console.log('Fixed Footer component');