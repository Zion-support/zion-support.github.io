import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Lock, Shield, Network, Zap, Building, Database } from 'lucide-react';

export default function FiveGPrivateNetworksPage() {
  const features = [
    {
      title: "Private 5G Networks",
      description: "Deploy dedicated 5G networks for enterprise and industrial applications",
      icon: <Lock className="w-8 h-8" />
    },
    {
      title: "Enhanced Security",
      description: "Isolated network infrastructure with enterprise-grade security controls",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Custom Configuration",
      description: "Tailored network configuration to meet specific business requirements",
      icon: <Network className="w-8 h-8" />
    },
    {
      title: "Ultra-Low Latency",
      description: "Achieve sub-millisecond latency for critical industrial applications",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Industrial IoT",
      description: "Connect and manage industrial IoT devices with private 5G networks",
      icon: <Building className="w-8 h-8" />
    },
    {
      title: "Data Sovereignty",
      description: "Keep sensitive data within your private network infrastructure",
      icon: <Database className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Private Networks - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G private network solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            5G Private Networks
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deploy dedicated 5G networks for secure, high-performance enterprise applications
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
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Why Choose Our 5G Private Networks?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Complete Control</h3>
              <p className="text-gray-300 mb-4">
                Maintain complete control over your network infrastructure, security policies, and data flow.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Enhanced Security</h3>
              <p className="text-gray-300 mb-4">
                Isolate your network from public infrastructure for maximum security and compliance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Custom Performance</h3>
              <p className="text-gray-300 mb-4">
                Optimize network performance specifically for your applications and use cases.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Compliance Ready</h3>
              <p className="text-gray-300 mb-4">
                Meet industry-specific compliance requirements with dedicated network infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}