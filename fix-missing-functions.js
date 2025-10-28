import fs from 'fs';
import { glob } from 'glob';

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if the file has a function definition
    const hasFunction = content.includes('function ');
    
    if (!hasFunction) {
      // Extract the service name from the path
      const pathParts = filePath.split('/');
      const serviceName = pathParts[pathParts.length - 2] || 'Service';
      const functionName = serviceName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('') + 'Page';
      
      // Create a basic function structure
      const functionCode = `
function ${functionName}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          ${serviceName.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ')}
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Professional services by Zion Tech Group.
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
          <p className="text-gray-300">
            This service is currently under development. Contact us to learn more about our upcoming services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Wrapped(props: Record<string, any>) {
  return (
    <ErrorBoundary>
      <${functionName} {...props} />
    </ErrorBoundary>
  );
}`;

      // Replace the export with the function
      content = content.replace(/export default \w+;/, functionCode);
      
      // Add ErrorBoundary import if not present
      if (!content.includes('import ErrorBoundary')) {
        content = content.replace(
          /'use client'\n/,
          "'use client'\nimport ErrorBoundary from '../components/ErrorBoundary'\n"
        );
      }
      
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all page.tsx files
async function fixAllFiles() {
  try {
    const files = await glob('app/**/page.tsx');
    files.forEach(fixFile);
    console.log('All files processed!');
  } catch (error) {
    console.error('Error:', error);
  }
}

fixAllFiles();