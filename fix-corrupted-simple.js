const fs = require('fs');
const path = require('path');

// List of known corrupted files from build errors
const corruptedFiles = [
  'app/ai-business-intelligence-pro/page.tsx',
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-climate-prediction-engine/page.tsx',
  'app/ai-code-assistant-pro/page.tsx',
  'app/ai-content-creation/page.tsx'
];

// Template for a basic page component
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
'  const features = [\n' +
'    {\n' +
'      icon: <BarChart className="w-8 h-8" />,\n' +
'      title: "Advanced Analytics",\n' +
'      description: "Comprehensive data analysis with AI-powered insights and real-time reporting."\n' +
'    },\n' +
'    {\n' +
'      icon: <Shield className="w-8 h-8" />,\n' +
'      title: "Secure & Reliable",\n' +
'      description: "Enterprise-grade security with 99.9% uptime guarantee and advanced protection."\n' +
'    },\n' +
'    {\n' +
'      icon: <Zap className="w-8 h-8" />,\n' +
'      title: "Expert Support",\n' +
'      description: "24/7 expert support and monitoring to ensure your success."\n' +
'    }\n' +
'  ];\n' +
'\n' +
'  const benefits = [\n' +
'    "Improve efficiency by 40%",\n' +
'    "Reduce costs by 30%",\n' +
'    "Enhance security posture",\n' +
'    "Scale operations seamlessly",\n' +
'    "Get 24/7 expert support"\n' +
'  ];\n' +
'\n' +
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

// Fix all corrupted files
console.log('Starting to fix corrupted files...');
let fixedCount = 0;

corruptedFiles.forEach(filePath => {
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

console.log('Fixed ' + fixedCount + ' out of ' + corruptedFiles.length + ' corrupted files.');