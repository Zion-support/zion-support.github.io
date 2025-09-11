import fs from 'fs';
import path from 'path';

const missingServices = [
  {
    name: 'ai-financial-trading',
    title: 'AI Financial Trading',
    description:
      'Advanced AI-powered trading algorithms and financial market analysis.',
    icon: 'TrendingUp',
    color: 'from-green-500 to-emerald-600',
    features: [
      {
        title: 'Algorithmic Trading',
        description: 'AI-driven trading strategies and automated execution.',
      },
      {
        title: 'Market Analysis',
        description: 'Real-time market data analysis and trend prediction.',
      },
      {
        title: 'Risk Management',
        description: 'Advanced risk assessment and portfolio optimization.',
      },
    ],
  },
  {
    name: 'ai-supply-chain-optimization',
    title: 'AI Supply Chain Optimization',
    description:
      'Intelligent supply chain management with predictive analytics and automation.',
    icon: 'Workflow',
    color: 'from-orange-500 to-red-600',
    features: [
      {
        title: 'Demand Forecasting',
        description: 'AI-powered demand prediction and inventory optimization.',
      },
      {
        title: 'Route Optimization',
        description: 'Intelligent logistics and transportation planning.',
      },
      {
        title: 'Supplier Management',
        description:
          'Automated supplier evaluation and relationship management.',
      },
    ],
  },
  {
    name: 'micro-saas',
    title: 'Micro SaaS Products',
    description:
      'AI-powered micro SaaS solutions with transparent pricing and rapid deployment.',
    icon: 'ShoppingCart',
    color: 'from-purple-500 to-pink-600',
    features: [
      {
        title: 'Rapid Deployment',
        description: 'Quick setup and deployment of AI-powered SaaS solutions.',
      },
      {
        title: 'Transparent Pricing',
        description: 'Clear, predictable pricing with no hidden costs.',
      },
      {
        title: 'Scalable Solutions',
        description: 'Flexible scaling options to grow with your business.',
      },
    ],
  },
  {
    name: 'innovative-2025',
    title: 'Innovative Services 2025',
    description:
      'Cutting-edge AI services and solutions for the future of business.',
    icon: 'Rocket',
    color: 'from-indigo-500 to-purple-600',
    features: [
      {
        title: 'Next-Gen AI',
        description: 'Latest AI technologies and innovative solutions.',
      },
      {
        title: 'Future-Ready',
        description: 'Services designed for the evolving business landscape.',
      },
      {
        title: 'Innovation Hub',
        description: 'Center for AI innovation and technological advancement.',
      },
    ],
  },
];

const generateServicePage = service => {
  const template = `import React from 'react';
import { motion } from 'framer-motion';
import { ${service.icon}, Shield, Zap, CheckCircle, ArrowRight, Clock, Users } from 'lucide-react';

const ${service.name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')}: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center">
              <${service.icon} className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-6">
            ${service.title}
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            ${service.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
${service.features
  .map(
    (feature, index) => `
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: ${0.1 + index * 0.1} }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-${service.color.split('-')[1]}-500/20"
          >
            <${service.icon} className="w-12 h-12 text-${service.color.split('-')[1]}-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">${feature.title}</h3>
            <p className="text-slate-300">
              ${feature.description}
            </p>
          </motion.div>`
  )
  .join('')}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <button className="bg-gradient-to-r ${service.color} hover:from-${service.color.split('-')[1]}-600 hover:to-${service.color.split('-')[3]}-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Get Started with ${service.title}
            <ArrowRight className="w-5 h-5 ml-2 inline" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ${service.name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')};
`;

  return template;
};

// Create missing service pages
missingServices.forEach(service => {
  const fileName = `${service.name}.tsx`;
  const filePath = path.join('src/pages/services', fileName);

  if (!fs.existsSync(filePath)) {
    const content = generateServicePage(service);
    fs.writeFileSync(filePath, content);
    console.log(`Created: ${fileName}`);
  } else {
    console.log(`Skipped: ${fileName} (already exists)`);
  }
});

console.log('Missing service pages created successfully!');
