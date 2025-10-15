import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cpu, Zap, Network, Shield, Database, Cloud } from 'lucide-react';

const FiveGEdgeComputingPage: React.FC = () => {
  const features = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Ultra-Low Latency",
      description: "Process data at the edge with sub-millisecond response times for real-time applications."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Performance",
      description: "Leverage 5G's high bandwidth for intensive edge computing workloads and AI processing."
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Distributed Architecture",
      description: "Deploy computing resources closer to data sources for optimal performance and efficiency."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enhanced Security",
      description: "Process sensitive data locally with advanced security protocols and compliance standards."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Processing",
      description: "Handle massive data volumes with edge-based processing and intelligent data filtering."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Hybrid Cloud",
      description: "Seamlessly integrate edge computing with cloud services for scalable, flexible solutions."
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Edge Computing - Zion Tech Group</title>
        <meta name="description" content="Revolutionary 5G edge computing solutions for ultra-low latency, high performance, and distributed processing. Transform your applications with edge computing technology." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              5G Edge Computing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Revolutionize your applications with 5G edge computing. Process data closer to the source
              for ultra-low latency, enhanced security, and superior performance.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                View Demo
              </button>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-purple-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Applications?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join leading enterprises using our 5G edge computing solutions to achieve unprecedented performance and efficiency.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-12 rounded-lg transition-colors duration-200 text-lg">
              Start Edge Computing Today
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiveGEdgeComputingPage;