import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cpu, Cloud, Zap, Shield, Network, Server } from 'lucide-react';

export default function FiveGEdgeComputingPage() {
  const features = [
    {
      title: "Ultra-Low Latency",
      description: "Process data at the edge with sub-millisecond latency for real-time applications",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Distributed Computing",
      description: "Deploy computing resources closer to data sources for optimal performance",
      icon: <Cpu className="w-8 h-8" />
    },
    {
      title: "Cloud Integration",
      description: "Seamlessly integrate edge computing with cloud infrastructure",
      icon: <Cloud className="w-8 h-8" />
    },
    {
      title: "Secure Edge Nodes",
      description: "Enterprise-grade security for distributed edge computing environments",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Network Optimization",
      description: "Optimize 5G network performance with intelligent edge computing",
      icon: <Network className="w-8 h-8" />
    },
    {
      title: "Scalable Infrastructure",
      description: "Scale edge computing resources based on demand and usage patterns",
      icon: <Server className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Edge Computing - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G edge computing solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            5G Edge Computing Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bring computing power closer to the source with 5G-enabled edge computing infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Why Choose Our 5G Edge Computing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Reduced Latency</h3>
              <p className="text-gray-300 mb-4">
                Process data locally at the edge to minimize latency and improve user experience for real-time applications.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Bandwidth Optimization</h3>
              <p className="text-gray-300 mb-4">
                Reduce bandwidth usage by processing data locally and only sending essential information to the cloud.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Enhanced Security</h3>
              <p className="text-gray-300 mb-4">
                Keep sensitive data local with edge computing while maintaining secure connections to central systems.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Cost Efficiency</h3>
              <p className="text-gray-300 mb-4">
                Reduce cloud computing costs by processing data locally and only using cloud resources when necessary.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}