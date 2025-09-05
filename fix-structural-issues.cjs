const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix about.tsx - remove stray team data
    if (filePath.includes('about.tsx')) {
      // Remove the stray team data that got mixed in
      content = content.replace(/const team = \[\{[\s\S]*?\}\];/g, '');
      // Fix missing comma in values array
      content = content.replace(/(\s+}\s*)(\s*{)/g, '$1,$2');
    }
    
    // Fix contact.tsx - remove duplicate function definition
    if (filePath.includes('contact.tsx')) {
      // Remove duplicate export default function
      content = content.replace(/export default function ContactPage\(\) \{\s*return \(\s*<>[\s\S]*?<\/>\s*\);\s*\}\s*export default function ContactPage\(\)/g, 'export default function ContactPage()');
    }
    
    // Fix micro-saas.tsx - remove duplicate Clock import
    if (filePath.includes('micro-saas.tsx')) {
      // Remove duplicate Clock from imports
      content = content.replace(/Clock,\s*DollarSign,\s*Trash2,\s*Camera,\s*HardDrive,\s*Droplets,\s*Calendar/g, 'DollarSign, Trash2, Camera, HardDrive, Droplets');
    }
    
    // Fix team.tsx - ensure proper JSX structure
    if (filePath.includes('team.tsx')) {
      // Ensure proper closing tags
      content = content.replace(/<\/div>\s*<\/Layout>/g, '</div>\n    </Layout>');
    }
    
    // Fix api.tsx - ensure proper JSX structure
    if (filePath.includes('api.tsx')) {
      // Ensure proper JSX structure
      content = content.replace(/export default function APIPage\(\) \{\s*const apiEndpoints/g, 'export default function APIPage() {\n  return (\n    <>\n      <Head>\n        <title>API Documentation - Zion Tech Group</title>\n        <meta name="description" content="Comprehensive API documentation for Zion Tech Group services" />\n      </Head>\n      <div className="min-h-screen bg-gray-50">\n        <div className="container mx-auto px-4 py-8">\n          <h1 className="text-4xl font-bold text-center mb-8">API Documentation</h1>\n          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">\n            {apiEndpoints.map((endpoint) => (\n              <div key={endpoint.id} className="bg-white rounded-lg shadow-md p-6">\n                <h2 className="text-xl font-semibold mb-2">{endpoint.title}</h2>\n                <p className="text-gray-600 mb-4">{endpoint.description}</p>\n                <p className="text-sm text-blue-600">{endpoint.baseUrl}</p>\n              </div>\n            ))}\n          </div>\n        </div>\n      </div>\n    </>\n  );\n}\n\nconst apiEndpoints');
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix specific problematic files
const filesToFix = [
  '/workspace/pages/about.tsx',
  '/workspace/pages/contact.tsx',
  '/workspace/pages/micro-saas.tsx',
  '/workspace/pages/team.tsx',
  '/workspace/pages/api.tsx'
];

filesToFix.forEach(file => {
  if (fs.existsSync(file)) {
    fixFile(file);
  }
});

console.log('Structural issues fixed!');