const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all .tsx files in the app directory
const files = glob.sync('app/**/*.tsx', { cwd: __dirname });

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if the file has the problematic pattern
  if (content.includes('const ') && content.includes('Page: React.FC = () => {};') && content.includes('return (')) {
    console.log(`Fixing ${file}...`);
    
    // Extract the component name and create a proper component
    const componentNameMatch = content.match(/const (\w+): React\.FC = \(\) => \{\};/);
    if (componentNameMatch) {
      const componentName = componentNameMatch[1];
      const titleMatch = content.match(/title="([^"]+)"/);
      const descriptionMatch = content.match(/description="([^"]+)"/);
      
      const title = titleMatch ? titleMatch[1] : componentName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      const description = descriptionMatch ? descriptionMatch[1] : `Zion Tech Group ${title} service page`;
      
      const newContent = `import SEOHead from '../components/SEOHead';

const ${componentName}: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="${title} - Zion Tech Group"
        description="${description}"
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">${title}</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default ${componentName};`;
      
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed ${file}`);
    }
  }
});

console.log('Done fixing JSX fragment issues!');