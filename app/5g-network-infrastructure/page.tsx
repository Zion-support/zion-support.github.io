import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Server, Shield, Zap, Globe, Settings } from 'lucide-react';

const FiveGNetworkInfrastructurePage: React.FC = () => {
  const features = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "5G Core",
      description: "Advanced 5G core network infrastructure for optimal performance and scalability."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Edge Servers",
      description: "Distributed edge computing infrastructure for ultra-low latency applications."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security",
      description: "Comprehensive security solutions for 5G network infrastructure protection."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Performance",
      description: "Optimized infrastructure for maximum throughput and minimal latency."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Scale",
      description: "Worldwide network infrastructure deployment and management capabilities."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Management",
      description: "Advanced network management and monitoring tools for optimal performance."
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Network Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G network infrastructure solutions for modern businesses. Complete 5G network deployment and management services." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              5G Network Infrastructure
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build and manage robust 5G network infrastructure with our comprehensive solutions. 
              From core networks to edge computing, we provide end-to-end infrastructure services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
                <div className="text-purple-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Build 5G Infrastructure?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your 5G network infrastructure needs and get a customized solution for your business.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default G5gNetworkInfrastructurePage;
