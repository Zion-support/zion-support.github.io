import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Zap, Shield, Globe, Cpu, Database, ArrowRight } from 'lucide-react';

export default function FiveGSolutions() {
  const solutions = [
    {
      title: "5G Network Infrastructure",
      description: "Complete 5G network infrastructure setup and management for optimal performance",
      icon: <Wifi className="w-8 h-8" />,
      features: ["Core network deployment", "RAN optimization", "Network slicing"]
    },
    {
      title: "Edge Computing",
      description: "Ultra-low latency edge computing solutions for real-time applications",
      icon: <Cpu className="w-8 h-8" />,
      features: ["Sub-millisecond latency", "Distributed processing", "Cloud integration"]
    },
    {
      title: "IoT Integration",
      description: "Connect and manage millions of IoT devices with 5G connectivity",
      icon: <Database className="w-8 h-8" />,
      features: ["Massive IoT connectivity", "Device management", "Data analytics"]
    },
    {
      title: "Private Networks",
      description: "Dedicated 5G private networks for enterprise and industrial applications",
      icon: <Shield className="w-8 h-8" />,
      features: ["Isolated infrastructure", "Enhanced security", "Custom configuration"]
    },
    {
      title: "Mobile Applications",
      description: "Develop next-generation mobile applications powered by 5G technology",
      icon: <Zap className="w-8 h-8" />,
      features: ["Ultra-fast apps", "Real-time streaming", "Enhanced UX"]
    },
    {
      title: "Global Deployment",
      description: "Worldwide 5G network deployment with local compliance and regulations",
      icon: <Globe className="w-8 h-8" />,
      features: ["Global reach", "Local compliance", "Scalable infrastructure"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G solutions by Zion Tech Group - Transform your business with cutting-edge 5G technology" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            5G Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with cutting-edge 5G technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-6">
                {solution.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 text-center">{solution.title}</h3>
              <p className="text-gray-300 mb-6 text-center">{solution.description}</p>
              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                    <ArrowRight className="w-4 h-4 text-cyan-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Why Choose Our 5G Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Expert Implementation</h3>
              <p className="text-gray-300 mb-4">
                Our team of 5G experts ensures proper implementation and optimization of your 5G infrastructure.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Future-Ready Technology</h3>
              <p className="text-gray-300 mb-4">
                Build on cutting-edge 5G technology that's ready for future advancements and use cases.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Comprehensive Support</h3>
              <p className="text-gray-300 mb-4">
                Get ongoing support and maintenance to ensure optimal performance of your 5G solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Scalable Solutions</h3>
              <p className="text-gray-300 mb-4">
                Scale your 5G solutions as your business grows and requirements evolve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}