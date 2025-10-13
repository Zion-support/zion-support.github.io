import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Shield, Zap, Wifi, Cpu, Globe } from 'lucide-react';

export default function FiveGSolutions() {
  const features = [
    {
      title: "5G Infrastructure",
      description: "Complete 5G network infrastructure setup and management for enterprise-grade connectivity",
      icon: <Wifi className="w-8 h-8" />
    },
    {
      title: "Edge Computing",
      description: "Ultra-low latency edge computing solutions for real-time applications and IoT devices",
      icon: <Cpu className="w-8 h-8" />
    },
    {
      title: "IoT Integration",
      description: "Connect and manage IoT devices with high-speed 5G connectivity and smart analytics",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Advanced Technology",
      description: "Cutting-edge 5G solutions powered by the latest technology and AI integration",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security and reliability for your 5G network infrastructure",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Fast Implementation",
      description: "Quick deployment and implementation of 5G solutions for immediate business impact",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G solutions by Zion Tech Group - Next-generation connectivity for your business" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            5G Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Next-generation 5G technology solutions for your business. Experience ultra-fast connectivity, 
            ultra-low latency, and massive device connectivity with our advanced 5G infrastructure.
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
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Choose Our 5G Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Ultra-Fast Speeds</h3>
              <p className="text-gray-300 mb-4">
                Experience speeds up to 100x faster than 4G, enabling real-time data processing and 
                seamless connectivity for your business operations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Ultra-Low Latency</h3>
              <p className="text-gray-300 mb-4">
                Achieve latency as low as 1ms, perfect for applications requiring real-time responsiveness 
                like autonomous vehicles and industrial automation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Massive Device Connectivity</h3>
              <p className="text-gray-300 mb-4">
                Connect up to 1 million devices per square kilometer, enabling comprehensive IoT 
                implementations and smart city solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Enhanced Security</h3>
              <p className="text-gray-300 mb-4">
                Built-in security features including network slicing, encryption, and advanced 
                authentication protocols to protect your data and operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}