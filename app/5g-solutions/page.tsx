import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Zap, Globe, Smartphone } from 'lucide-react';

const FiveGSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Ultra-Fast Speeds',
      description: 'Experience lightning-fast 5G connectivity with speeds up to 10 Gbps',
      benefits: ['10x faster than 4G', 'Low latency', 'High bandwidth', 'Reliable connection']
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Comprehensive 5G network coverage across multiple regions',
      benefits: ['Wide coverage', 'Seamless roaming', 'International support', 'Network redundancy']
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimization',
      description: 'Optimized 5G solutions for mobile devices and applications',
      benefits: ['Mobile-first design', 'App optimization', 'Battery efficiency', 'Device compatibility']
    },
    {
      icon: Wifi,
      title: 'IoT Connectivity',
      description: 'Connect thousands of IoT devices with 5G technology',
      benefits: ['Massive IoT support', 'Low power consumption', 'Real-time monitoring', 'Scalable solutions']
    }
  ];
  
  const solutions = [
    {
      title: '5G Network Infrastructure',
      description: 'Complete 5G network setup and optimization',
      price: 'Starting at $50,000',
      features: ['Network planning', 'Tower installation', 'Signal optimization', 'Performance monitoring']
    },
    {
      title: '5G Mobile Applications',
      description: 'Custom mobile apps optimized for 5G networks',
      price: 'Starting at $25,000',
      features: ['App development', '5G optimization', 'Testing & QA', 'Deployment support']
    },
    {
      title: '5G IoT Solutions',
      description: 'IoT device connectivity and management platform',
      price: 'Starting at $35,000',
      features: ['Device management', 'Data analytics', 'Real-time monitoring', 'Scalable architecture']
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="5G Solutions - Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">5G Solutions</h1>
          <p className="text-gray-300 text-lg mb-12">
            Professional 5G implementation solutions tailored to your business needs.
          </p>
          
          {/* Features Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <Icon className="h-8 w-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Solutions Section */}
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-2">{solution.title}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <div className="text-blue-400 font-semibold mb-4">{solution.price}</div>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FiveGSolutionsPage;