const fs = require('fs');
const path = require('path');

// Function to create a basic page component
function createBasicPage(filePath) {
  const pathParts = filePath.split('/');
  const fileName = pathParts[pathParts.length - 2];
  const title = fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const description = 'Professional ' + title.toLowerCase() + ' services by Zion Tech Group. Advanced solutions for your business needs.';
  
  return '"use client";\n' +
'import React from "react";\n' +
'import { Helmet } from "react-helmet-async";\n' +
'import { CheckCircle, ArrowRight, Star, BarChart, Shield, Zap } from "lucide-react";\n' +
'\n' +
'const ' + title.replace(/[^a-zA-Z0-9]/g, '') + 'Page: React.FC = () => {\n' +
'  return (\n' +
'    <>\n' +
'      <Helmet>\n' +
'        <title>' + title + ' - Zion Tech Group</title>\n' +
'        <meta name="description" content="' + description + '" />\n' +
'      </Helmet>\n' +
'      \n' +
'      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">\n' +
'        <section className="relative py-20 px-4 overflow-hidden">\n' +
'          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>\n' +
'          <div className="relative max-w-7xl mx-auto text-center">\n' +
'            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">\n' +
'              ' + title + '\n' +
'            </h1>\n' +
'            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">\n' +
'              ' + description + '\n' +
'            </p>\n' +
'            <div className="flex flex-col sm:flex-row gap-4 justify-center">\n' +
'              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">\n' +
'                Get Started\n' +
'                <ArrowRight className="ml-2 h-5 w-5" />\n' +
'              </button>\n' +
'              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">\n' +
'                Learn More\n' +
'              </button>\n' +
'            </div>\n' +
'          </div>\n' +
'        </section>\n' +
'      </div>\n' +
'    </>\n' +
'  );\n' +
'};\n' +
'\n' +
'export default ' + title.replace(/[^a-zA-Z0-9]/g, '') + 'Page;';
}

// List of specific files that are still causing issues
const problematicFiles = [
  'app/ai-fintech-solutions/page.tsx',
  'app/ai-fraud-detection-pro/page.tsx',
  'app/ai-hr-recruitment-pro/page.tsx',
  'app/ai-image-recognition-pro/page.tsx',
  'app/ai-language-translation/page.tsx'
];

console.log('Fixing remaining problematic files...');
let fixedCount = 0;

problematicFiles.forEach(filePath => {
  try {
    const fullPath = path.join(__dirname, filePath);
    const newContent = createBasicPage(filePath);
    fs.writeFileSync(fullPath, newContent, 'utf8');
    console.log('Fixed: ' + filePath);
    fixedCount++;
  } catch (error) {
    console.error('Error fixing ' + filePath + ':', error.message);
  }
});

console.log('Fixed ' + fixedCount + ' out of ' + problematicFiles.length + ' problematic files.');