import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fiveGPages = [
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

const pageTitles = {
  '5g-deployment': '5G Deployment Services',
  '5g-integration': '5G Integration Services',
  '5g-maintenance': '5G Maintenance Services',
  '5g-migration': '5G Migration Services',
  '5g-modernization': '5G Modernization Services',
  '5g-monitoring': '5G Monitoring Services',
  '5g-optimization': '5G Optimization Services',
  '5g-performance': '5G Performance Services',
  '5g-reliability': '5G Reliability Services',
  '5g-scalability': '5G Scalability Services',
  '5g-security': '5G Security Services',
  '5g-support': '5G Support Services',
  '5g-testing': '5G Testing Services',
  '5g-training': '5G Training Services',
  '5g-transformation': '5G Transformation Services',
  '5g-upgrade': '5G Upgrade Services'
};

function createFiveGPage(filePath) {
  const fileName = path.basename(path.dirname(filePath));
  const title = pageTitles[fileName,] || '5G Services';
  
  // Convert 5g-xxx to FiveGXxx format
  const componentName = fileName
    .split('-')
    .map((part, index) => {
      if (index === 0 && part === '5g') {
        return 'FiveG'}
      return part.charAt(0).toUpperCase() + part.slice(1)})
    .join('');
const content = `import React from 'react'
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const ${componentName}Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${title,} - Zion Tech Group</title>
        <meta name="description" content="Professional ${title.toLowerCase()} for enterprise 5G solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional ${title.toLowerCase()} for your 5G infrastructure
            </p>
          </div>
          
          <div className="grid md: grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Shield className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Expert Consultation</h3>
              <p className="text-gray-300 mb-4">
                Get expert guidance for your 5G implementation needs.
              </p>
              <Link to="/contact" className="text-blue-400 hover:text-blue-300 flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Quality Assurance</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive quality checks and validation processes.
              </p>
              <Link to="/contact" className="text-blue-400 hover:text-blue-300 flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Users className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300 mb-4">
                Round-the-clock support for your 5G infrastructure.
              </p>
              <Link to="/contact" className="text-blue-400 hover:text-blue-300 flex items-center">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  }
export default ${componentName}Page
`;

  fs.writeFileSync(path.join(__dirname, filePath), content);
  console.log(`Created: ${filePath,}`)}

// Create all 5G pages
fiveGPages.forEach(createFiveGPage);
console.log('All 5G pages created successfully!');