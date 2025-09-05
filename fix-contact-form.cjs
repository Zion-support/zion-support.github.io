#!/usr/bin/env node

const fs = require('fs');

const filePath = './components/ContactForm.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix all className issues
content = content.replace(/className="\s+/g, 'className="');
content = content.replace(/\s+"/g, '"');
content = content.replace(/grid-cols-1md:grid-cols-2gap-6/g, 'grid-cols-1 md:grid-cols-2 gap-6');
content = content.replace(/block text-sm font-mediumtext-gray-700mb-2/g, 'block text-sm font-medium text-gray-700 mb-2');
content = content.replace(/w-full px-3 py-2 border border-gray-300rounded-mdshadow-smfocus:outline-nonefocus:ring-2focus:ring-blue-500focus:border-blue-500/g, 'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500');
content = content.replace(/text-sm text-red-600mt-1/g, 'text-sm text-red-600 mt-1');
content = content.replace(/w-full px-3 py-2 border border-gray-300rounded-mdshadow-smfocus:outline-nonefocus:ring-2focus:ring-blue-500focus:border-blue-500resize-vertical/g, 'w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical');
content = content.replace(/w-full bg-blue-600 text-white py-2 px-4rounded-mdhover:bg-blue-700focus:outline-nonefocus:ring-2focus:ring-blue-500focus:ring-offset-2disabled:opacity-50disabled:cursor-not-allowed/g, 'w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed');

fs.writeFileSync(filePath, content);
console.log('✅ Fixed ContactForm.tsx className issues');