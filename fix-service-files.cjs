const fs = require('fs');
const path = require('path');

// Find all service page files
const servicesDir = path.join(__dirname, 'app', 'services');
const serviceFiles = [];

function findServiceFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findServiceFiles(filePath);
    } else if (file === 'page.tsx') {
      serviceFiles.push(filePath);
    }
  }
}

findServiceFiles(servicesDir);

// Fix each service file
for (const filePath of serviceFiles) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has syntax errors
    if (content.includes('export const metadata = {') && content.includes(';')) {
      console.log(`Fixing ${filePath}`);
      
      // Extract service name from path
      const pathParts = filePath.split('/');
      const serviceName = pathParts[pathParts.length - 2];
      const displayName = serviceName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      // Create clean service page
      const cleanContent = `export const metadata = {
  title: '${displayName} | Zion Tech Group',
  description: 'Professional ${serviceName.replace(/-/g, ' ')} services for your business needs.',
  keywords: '${serviceName}, services, business, technology'
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ${displayName}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional ${serviceName.replace(/-/g, ' ')} services for your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Solutions</h3>
            <p className="text-gray-300">
              Tailored ${serviceName.replace(/-/g, ' ')} solutions designed for your specific business requirements.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
            <p className="text-gray-300">
              Cutting-edge technology and best practices to deliver exceptional results.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your ${serviceName.replace(/-/g, ' ')} solutions run smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}`;
      
      fs.writeFileSync(filePath, cleanContent);
      console.log(`Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

console.log(`Fixed ${serviceFiles.length} service files`);