import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pageFiles = [
  { file: 'app/5g-consulting/page.tsx', name: 'FiveGConsultingPage' },
  { file: 'app/5g-deployment/page.tsx', name: 'FiveGDeploymentPage' },
  { file: 'app/5g-integration/page.tsx', name: 'FiveGIntegrationPage' },
  { file: 'app/5g-maintenance/page.tsx', name: 'FiveGMaintenancePage' },
  { file: 'app/5g-migration/page.tsx', name: 'FiveGMigrationPage' },
  { file: 'app/5g-modernization/page.tsx', name: 'FiveGModernizationPage' },
  { file: 'app/5g-monitoring/page.tsx', name: 'FiveGMonitoringPage' },
  { file: 'app/5g-optimization/page.tsx', name: 'FiveGOptimizationPage' },
  { file: 'app/5g-performance/page.tsx', name: 'FiveGPerformancePage' },
  { file: 'app/5g-reliability/page.tsx', name: 'FiveGReliabilityPage' },
  { file: 'app/5g-scalability/page.tsx', name: 'FiveGScalabilityPage' },
  { file: 'app/5g-security/page.tsx', name: 'FiveGSecurityPage' },
  { file: 'app/5g-support/page.tsx', name: 'FiveGSupportPage' },
  { file: 'app/5g-testing/page.tsx', name: 'FiveGTestingPage' },
  { file: 'app/5g-training/page.tsx', name: 'FiveGTrainingPage' },
  { file: 'app/5g-transformation/page.tsx', name: 'FiveGTransformationPage' },
  { file: 'app/5g-upgrade/page.tsx', name: 'FiveGUpgradePage' }
];

pageFiles.forEach(({ file, name }) => {
  const filePath = path.join(__dirname, file);
  
  const content = `import React from 'react';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

function ${name}() {
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
        title="${name.replace('Page', '')} - Zion Tech Group"
        description="Professional ${name.replace('Page', '').toLowerCase()} services"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              ${name.replace('Page', '')} Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional ${name.replace('Page', '').toLowerCase()} solutions for your business needs.
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

export default ${name};
`;
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${file}`);
});

console.log('All 5G page files fixed!');