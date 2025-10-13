import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cpu, Zap, Globe, Shield, Database, Wifi } from 'lucide-react';

const FiveGEdgeComputingPage: React.FC = () => {
  const features = [
    {
      icon: Cpu,
      title: 'Edge Processing',
      description: 'Process data locally at the edge for ultra-low latency and real-time responses.',
      benefits: ['Sub-1ms latency', 'Local data processing', 'Real-time analytics', 'Offline capability']
    },
    {
      icon: Zap,
      title: 'Ultra-Fast Computing',
      description: 'Leverage 5G speeds for lightning-fast edge computing operations.',
      benefits: ['10x faster processing', 'High bandwidth', 'Low latency', 'Efficient resource usage']
    },
    {
      icon: Globe,
      title: 'Distributed Architecture',
      description: 'Distribute computing power across multiple edge locations for optimal performance.',
      benefits: ['Geographic distribution', 'Load balancing', 'Fault tolerance', 'Scalable infrastructure']
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Secure edge computing with advanced encryption and access controls.',
      benefits: ['Data encryption', 'Secure protocols', 'Access controls', 'Compliance standards']
    },
    {
      icon: Database,
      title: 'Edge Data Management',
      description: 'Intelligent data management and storage at the edge for optimal performance.',
      benefits: ['Local storage', 'Data synchronization', 'Cache management', 'Backup systems']
    },
    {
      icon: Wifi,
      title: '5G Integration',
      description: 'Seamless integration with 5G networks for optimal edge computing performance.',
      benefits: ['Network optimization', 'Bandwidth management', 'Quality of service', 'Connection reliability']
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Edge Computing - Ultra-Low Latency Processing | Zion Tech Group</title>
        <meta name="description" content="Transform your computing with 5G edge computing solutions. Ultra-low latency, real-time processing, and distributed architecture." />
        <meta name="keywords" content="5G edge computing, edge processing, low latency, distributed computing, real-time analytics, edge infrastructure" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              5G Edge
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Computing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your computing with 5G edge computing solutions. 
              Ultra-low latency, real-time processing, and distributed architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Get Started
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
              5G Edge Computing Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                          <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
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

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Computing Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our 5G edge computing solutions and achieve ultra-low latency processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                Start Your Edge Computing Journey
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

export default FiveGEdgeComputingPage;