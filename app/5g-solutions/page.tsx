import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Right, Wifi, Circle } from 'lucide-react';

const FiveGSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Ultra-Fast Speeds',
      description: 'Experience lightning-fast 5G connectivity with speeds up to 10 Gbps',
      benefits: ['10x faster than 4G', 'Low latency', 'High bandwidth', 'Reliable connection']
    },
    {
      icon: Circle,
      title: 'Global Coverage',
      description: 'Comprehensive 5G network coverage across multiple regions',
      benefits: ['Wide coverage', 'Seamless roaming', 'International support', 'Network redundancy']
    },
    {
      icon: Wifi,
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
    <>
      <Helmet>
        <title>5G Solutions - Next-Gen Connectivity | Zion Tech Group</title>
        <meta name="description" content="Transform your business with cutting-edge 5G solutions. Ultra-fast connectivity, IoT support, and mobile optimization for the future." />
        <meta name="keywords" content="5G solutions, 5G network, mobile connectivity, IoT, ultra-fast internet, wireless technology" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              5G
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge 5G solutions. 
              Ultra-fast connectivity, IoT support, and mobile optimization for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Get Started
                <Right className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              5G Technology Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                          <Circle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Our 5G Solutions
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <p className="text-cyan-400 font-bold text-lg mb-4">{solution.price}</p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                        <Circle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready for 5G?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the 5G revolution and transform your business with ultra-fast connectivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Your 5G Journey
                <Right className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGSolutionsPage;