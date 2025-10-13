import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Cpu, Shield, Zap, Network, Database } from 'lucide-react';

export default function FiveGIotSolutionsPage() {
  const features = [
    {
      title: "Massive IoT Connectivity",
      description: "Connect millions of IoT devices with 5G's enhanced capacity and efficiency",
      icon: <Wifi className="w-8 h-8" />
    },
    {
      title: "Ultra-Reliable Communication",
      description: "Ensure 99.999% reliability for critical IoT applications and industrial automation",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Low Power Consumption",
      description: "Extend battery life of IoT devices with 5G's power-efficient communication protocols",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Edge Processing",
      description: "Process IoT data locally at the edge for real-time decision making",
      icon: <Cpu className="w-8 h-8" />
    },
    {
      title: "Network Slicing",
      description: "Create dedicated network slices for different IoT applications and requirements",
      icon: <Network className="w-8 h-8" />
    },
    {
      title: "Data Analytics",
      description: "Advanced analytics and insights from massive IoT data streams",
      icon: <Database className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>5G IoT Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G IoT solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            5G IoT Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with 5G-powered Internet of Things solutions
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
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Why Choose Our 5G IoT Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Massive Scale</h3>
              <p className="text-gray-300 mb-4">
                Connect and manage millions of IoT devices simultaneously with 5G's enhanced capacity.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Ultra-Low Latency</h3>
              <p className="text-gray-300 mb-4">
                Enable real-time control and monitoring of IoT devices with sub-millisecond latency.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Energy Efficiency</h3>
              <p className="text-gray-300 mb-4">
                Extend device battery life with 5G's power-efficient communication protocols.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Enhanced Security</h3>
              <p className="text-gray-300 mb-4">
                Protect your IoT ecosystem with advanced 5G security features and encryption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}