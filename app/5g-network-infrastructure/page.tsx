import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Network, Shield, Zap, Server, Wifi, Database } from 'lucide-react';

export default function FiveGNetworkInfrastructurePage() {
  const features = [
    {
      title: "5G Core Network",
      description: "Deploy and manage 5G core network infrastructure for optimal performance",
      icon: <Network className="w-8 h-8" />
    },
    {
      title: "RAN Optimization",
      description: "Optimize Radio Access Network (RAN) for maximum coverage and capacity",
      icon: <Wifi className="w-8 h-8" />
    },
    {
      title: "Network Security",
      description: "Implement comprehensive security measures for 5G network infrastructure",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Edge Computing",
      description: "Integrate edge computing capabilities into 5G network infrastructure",
      icon: <Server className="w-8 h-8" />
    },
    {
      title: "High-Speed Connectivity",
      description: "Deliver ultra-fast connectivity with 5G's enhanced speed capabilities",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Data Management",
      description: "Advanced data management and analytics for 5G network operations",
      icon: <Database className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Network Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G network infrastructure solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            5G Network Infrastructure
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build and manage robust 5G network infrastructure for optimal performance and reliability
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
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Why Choose Our 5G Infrastructure?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Scalable Design</h3>
              <p className="text-gray-300 mb-4">
                Design 5G network infrastructure that can scale with growing demand and future technology advances.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">High Performance</h3>
              <p className="text-gray-300 mb-4">
                Optimize network performance for maximum speed, capacity, and reliability across all use cases.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Security First</h3>
              <p className="text-gray-300 mb-4">
                Implement comprehensive security measures to protect your 5G network from threats and vulnerabilities.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Future-Ready</h3>
              <p className="text-gray-300 mb-4">
                Build infrastructure that's ready for future 5G advancements and emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}