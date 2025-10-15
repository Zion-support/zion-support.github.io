const fs = require('fs');
const path = require('path');

// Template for 5G pages
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

// 5G pages to fix
const pages5G = [
  {
    file: 'app/5g-data-analytics/page.tsx',
    serviceName: 'FiveGDataAnalytics',
    title: '5G Data Analytics',
    description: 'Advanced 5G data analytics solutions to extract insights and optimize network performance.',
    keywords: '5G data analytics, network analytics, 5G insights, data optimization'
  },
  {
    file: 'app/5g-edge-computing/page.tsx',
    serviceName: 'FiveGEdgeComputing',
    title: '5G Edge Computing',
    description: 'Revolutionary 5G edge computing solutions for ultra-low latency and high-performance applications.',
    keywords: '5G edge computing, edge analytics, low latency, edge infrastructure'
  },
  {
    file: 'app/5g-implementation/page.tsx',
    serviceName: 'FiveGImplementation',
    title: '5G Implementation',
    description: 'Complete 5G implementation services from planning to deployment and optimization.',
    keywords: '5G implementation, 5G deployment, network rollout, 5G services'
  },
  {
    file: 'app/5g-infrastructure/page.tsx',
    serviceName: 'FiveGInfrastructure',
    title: '5G Infrastructure',
    description: 'Robust 5G infrastructure solutions designed for scalability, reliability, and performance.',
    keywords: '5G infrastructure, network infrastructure, 5G towers, wireless infrastructure'
  },
  {
    file: 'app/5g-iot-solutions/page.tsx',
    serviceName: 'FiveGIotSolutions',
    title: '5G IoT Solutions',
    description: 'Comprehensive 5G IoT solutions connecting devices and enabling smart applications.',
    keywords: '5G IoT, internet of things, smart devices, connected solutions'
  },
  {
    file: 'app/5g-mobile-applications/page.tsx',
    serviceName: 'FiveGMobileApplications',
    title: '5G Mobile Applications',
    description: 'Next-generation 5G mobile applications leveraging ultra-fast connectivity and low latency.',
    keywords: '5G mobile apps, mobile development, 5G applications, mobile solutions'
  },
  {
    file: 'app/5g-network-infrastructure/page.tsx',
    serviceName: 'FiveGNetworkInfrastructure',
    title: '5G Network Infrastructure',
    description: 'Advanced 5G network infrastructure solutions for enterprise and carrier deployments.',
    keywords: '5G network, network infrastructure, carrier solutions, enterprise 5G'
  },
  {
    file: 'app/5g-network-optimization/page.tsx',
    serviceName: 'FiveGNetworkOptimization',
    title: '5G Network Optimization',
    description: 'Expert 5G network optimization services to maximize performance and efficiency.',
    keywords: '5G optimization, network optimization, performance tuning, 5G efficiency'
  },
  {
    file: 'app/5g-private-networks/page.tsx',
    serviceName: 'FiveGPrivateNetworks',
    title: '5G Private Networks',
    description: 'Secure 5G private network solutions for enterprise and industrial applications.',
    keywords: '5G private networks, enterprise 5G, private wireless, industrial 5G'
  },
  {
    file: 'app/5g-smart-city-solutions/page.tsx',
    serviceName: 'FiveGSmartCitySolutions',
    title: '5G Smart City Solutions',
    description: 'Innovative 5G smart city solutions for connected urban infrastructure and services.',
    keywords: '5G smart city, smart infrastructure, urban connectivity, smart solutions'
  },
  {
    file: 'app/5g-solutions/page.tsx',
    serviceName: 'FiveGSolutions',
    title: '5G Solutions',
    description: 'Comprehensive 5G solutions for businesses looking to leverage next-generation wireless technology.',
    keywords: '5G solutions, wireless technology, 5G services, next-gen connectivity'
  }
];

// Fix all 5G pages
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

console.log('All 5G pages have been fixed!');