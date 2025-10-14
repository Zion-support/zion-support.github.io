import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pageFiles = [
  'app/5g-consulting/page.tsx',
  'app/5g-deployment/page.tsx',
  'app/5g-integration/page.tsx',
  'app/5g-maintenance/page.tsx',
  'app/5g-migration/page.tsx',
  'app/5g-modernization/page.tsx',
  'app/5g-monitoring/page.tsx',
  'app/5g-optimization/page.tsx',
  'app/5g-performance/page.tsx',
  'app/5g-reliability/page.tsx',
  'app/5g-scalability/page.tsx',
  'app/5g-security/page.tsx',
  'app/5g-support/page.tsx',
  'app/5g-testing/page.tsx',
  'app/5g-training/page.tsx',
  'app/5g-transformation/page.tsx',
  'app/5g-upgrade/page.tsx'
];

pageFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  const componentName = file.split('/')[2].split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  
  const content = `import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function ${componentName}() {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Strategy Development',
      description: 'Comprehensive implementation strategies tailored to your business needs.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Assessment',
      description: 'Complete security evaluation for network implementation.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Training',
      description: 'Expert training for your team on technologies and best practices.'
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="${componentName.replace('Page', '')} - Zion Tech Group"
        description="Professional ${componentName.replace('Page', '').toLowerCase()} services"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              ${componentName.replace('Page', '')} Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional ${componentName.replace('Page', '').toLowerCase()} solutions for your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ${componentName};
`;
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${file}`);
});

console.log('All 5G page files fixed!');