import fs from 'fs';
import { glob } from 'glob';

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix micro-saas files with duplicate exports and wrong import paths
    if (filePath.includes('micro-saas-services/') && content.includes('import { ErrorBoundary } from \'./components/ErrorBoundary\'')) {
      const serviceName = filePath.split('/').slice(-2, -1)[0] || 'Service';
      const title = serviceName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      content = `import ErrorBoundary from '../../components/ErrorBoundary'

export const metadata = {
  title: '${title} - Zion Tech Group',
  description: 'Professional ${serviceName} services and solutions by Zion Tech Group.',
  keywords: '${serviceName}, technology, services, Zion Tech Group',
  openGraph: {
    title: '${title} - Zion Tech Group',
    description: 'Professional ${serviceName} services and solutions by Zion Tech Group.',
    type: 'website',
  },
};

function ${serviceName.split('-').map(word => 
  word.charAt(0).toUpperCase() + word.slice(1)
).join('')}Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          ${title}
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

export default function Wrapped(props) {
  return (
    <ErrorBoundary>
      <${serviceName.split('-').map(word => 
  word.charAt(0).toUpperCase() + word.slice(1)
).join('')}Page {...props} />
    </ErrorBoundary>
  );
}`;
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

// Get micro-saas page.tsx files
async function fixAllFiles() {
  try {
    const files = await glob('app/micro-saas-services/**/page.tsx');
    files.forEach(fixFile);
    console.log('All files processed!');
  } catch (error) {
    console.error('Error:', error);
  }
}

fixAllFiles();