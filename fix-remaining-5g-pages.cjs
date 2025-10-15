const fs = require('fs');
const path = require('path');

// Template for remaining 5G pages
const create5GPageTemplate = (serviceName, title, description, keywords) => `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Wifi, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Page${serviceName}Page: React.FC = () => {
  const services = [
    {
      title: '${title} Strategy & Planning',
      description: 'Comprehensive ${title.toLowerCase()} strategy development and implementation planning tailored to your business needs.',
      icon: <Wifi className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Custom Implementation',
      description: 'Tailored ${title.toLowerCase()} implementations for your specific requirements and use cases.',
      icon: <Zap className="w-8 h-8 text-purple-400" />
    },
    {
      title: '24/7 Support & Maintenance',
      description: 'Round-the-clock support and maintenance for all your ${title.toLowerCase()} needs.',
      icon: <Shield className="w-8 h-8 text-green-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${keywords}" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ${description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page${serviceName}Page;`;

// Remaining 5G pages to fix
const pages5G = [
  {
    file: 'app/5g-modernization/page.tsx',
    serviceName: 'FiveGModernization',
    title: '5G Modernization',
    description: 'Complete 5G modernization services to upgrade your existing infrastructure to next-generation standards.',
    keywords: '5G modernization, network upgrade, 5G migration, infrastructure modernization'
  },
  {
    file: 'app/5g-monitoring/page.tsx',
    serviceName: 'FiveGMonitoring',
    title: '5G Monitoring',
    description: 'Advanced 5G network monitoring solutions for real-time performance tracking and optimization.',
    keywords: '5G monitoring, network monitoring, performance tracking, 5G analytics'
  },
  {
    file: 'app/5g-optimization/page.tsx',
    serviceName: 'FiveGOptimization',
    title: '5G Optimization',
    description: 'Expert 5G optimization services to maximize network performance, efficiency, and user experience.',
    keywords: '5G optimization, network optimization, performance tuning, 5G efficiency'
  },
  {
    file: 'app/5g-reliability/page.tsx',
    serviceName: 'FiveGReliability',
    title: '5G Reliability',
    description: 'Comprehensive 5G reliability solutions ensuring consistent performance and uptime for critical applications.',
    keywords: '5G reliability, network reliability, uptime, 5G stability'
  },
  {
    file: 'app/5g-scalability/page.tsx',
    serviceName: 'FiveGScalability',
    title: '5G Scalability',
    description: 'Scalable 5G solutions designed to grow with your business and adapt to changing demands.',
    keywords: '5G scalability, network scaling, 5G growth, scalable solutions'
  },
  {
    file: 'app/5g-security/page.tsx',
    serviceName: 'FiveGSecurity',
    title: '5G Security',
    description: 'Advanced 5G security solutions protecting your network and data from emerging threats.',
    keywords: '5G security, network security, cybersecurity, 5G protection'
  },
  {
    file: 'app/5g-support/page.tsx',
    serviceName: 'FiveGSupport',
    title: '5G Support',
    description: 'Comprehensive 5G support services ensuring your network operates at peak performance.',
    keywords: '5G support, technical support, network maintenance, 5G assistance'
  },
  {
    file: 'app/5g-testing/page.tsx',
    serviceName: 'FiveGTesting',
    title: '5G Testing',
    description: 'Professional 5G testing services to validate performance, security, and compliance standards.',
    keywords: '5G testing, network testing, performance validation, 5G compliance'
  },
  {
    file: 'app/5g-training/page.tsx',
    serviceName: 'FiveGTraining',
    title: '5G Training',
    description: 'Comprehensive 5G training programs to upskill your team and maximize technology adoption.',
    keywords: '5G training, technical training, 5G education, skill development'
  },
  {
    file: 'app/5g-transformation/page.tsx',
    serviceName: 'FiveGTransformation',
    title: '5G Transformation',
    description: 'Complete 5G transformation services to modernize your business operations and capabilities.',
    keywords: '5G transformation, digital transformation, business modernization, 5G adoption'
  },
  {
    file: 'app/5g-upgrade/page.tsx',
    serviceName: 'FiveGUpgrade',
    title: '5G Upgrade',
    description: 'Seamless 5G upgrade services to enhance your existing infrastructure with next-generation capabilities.',
    keywords: '5G upgrade, network upgrade, infrastructure enhancement, 5G improvement'
  }
];

// Fix all remaining 5G pages
pages5G.forEach(page => {
  const content = create5GPageTemplate(
    page.serviceName,
    page.title,
    page.description,
    page.keywords
  );
  
  // Ensure directory exists
  const dir = path.dirname(page.file);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(page.file, content);
  console.log(`Fixed: ${page.file}`);
});

console.log('All remaining 5G pages have been fixed!');