const fs = require('fs');
const path = require('path');

// Template for 5G pages
const create5GPage = (title, description, icon) => `import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ${icon} } from 'lucide-react';

export default function ${title.replace(/\s+/g, '').replace(/^5G/, 'G5')}Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${title} | Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            ${title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ${description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <${icon} className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Advanced Technology</h3>
            <p className="text-gray-300">Cutting-edge solutions powered by the latest 5G technology.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <${icon} className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">High Performance</h3>
            <p className="text-gray-300">Ultra-fast speeds and low latency for optimal user experience.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <${icon} className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Scalable Solutions</h3>
            <p className="text-gray-300">Enterprise-grade solutions that scale with your business needs.</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-300 mb-8">
            Ready to transform your business with ${title.toLowerCase()}?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}`;

// All 5G page configurations
const fiveGPages = [
  {
    file: 'app/5g-data-analytics/page.tsx',
    title: '5G Data Analytics',
    description: 'Advanced data analytics solutions powered by 5G networks for real-time insights.',
    icon: 'BarChart3'
  },
  {
    file: 'app/5g-edge-computing/page.tsx',
    title: '5G Edge Computing',
    description: 'Deploy applications at the network edge with ultra-low latency and high performance.',
    icon: 'Cpu'
  },
  {
    file: 'app/5g-implementation/page.tsx',
    title: '5G Implementation',
    description: 'Complete 5G network implementation and deployment services for your organization.',
    icon: 'Settings'
  },
  {
    file: 'app/5g-infrastructure/page.tsx',
    title: '5G Infrastructure',
    description: 'Build robust 5G infrastructure with our comprehensive network solutions.',
    icon: 'Network'
  },
  {
    file: 'app/5g-iot-solutions/page.tsx',
    title: '5G IoT Solutions',
    description: 'Connect and manage IoT devices with high-speed 5G connectivity.',
    icon: 'Wifi'
  },
  {
    file: 'app/5g-mobile-applications/page.tsx',
    title: '5G Mobile Applications',
    description: 'Develop next-generation mobile applications leveraging 5G capabilities.',
    icon: 'Smartphone'
  },
  {
    file: 'app/5g-network-infrastructure/page.tsx',
    title: '5G Network Infrastructure',
    description: 'Design and implement comprehensive 5G network infrastructure solutions.',
    icon: 'Globe'
  },
  {
    file: 'app/5g-network-optimization/page.tsx',
    title: '5G Network Optimization',
    description: 'Optimize your 5G network performance for maximum efficiency and reliability.',
    icon: 'Zap'
  },
  {
    file: 'app/5g-private-networks/page.tsx',
    title: '5G Private Networks',
    description: 'Deploy secure private 5G networks for enterprise and industrial applications.',
    icon: 'Shield'
  },
  {
    file: 'app/5g-smart-city-solutions/page.tsx',
    title: '5G Smart City Solutions',
    description: 'Transform cities with smart infrastructure powered by 5G technology.',
    icon: 'Building'
  },
  {
    file: 'app/5g-solutions/page.tsx',
    title: '5G Solutions',
    description: 'Comprehensive 5G solutions for businesses of all sizes and industries.',
    icon: 'Layers'
  }
];

// Fix all 5G pages
fiveGPages.forEach(page => {
  const content = create5GPage(page.title, page.description, page.icon);
  fs.writeFileSync(page.file, content);
  console.log(`Fixed: ${page.file}`);
});

console.log('All 5G pages have been fixed!');
