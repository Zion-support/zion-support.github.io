'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Monitor, Cpu, HardDrive, Wifi } from 'lucide-react';

interface SystemMetrics {
  cpu: number;
  memory: number;
  disk: number;
  network: number;
}

const SystemMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<SystemMetrics>({
    cpu: 0,
    memory: 0,
    disk: 0,
    network: 0,
  });

  useEffect(() => {
    // Simulate system metrics
    const updateMetrics = () => {
      setMetrics({
        cpu: Math.random() * 100,
        memory: Math.random() * 100,
        disk: Math.random() * 100,
        network: Math.random() * 100,
      });
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 2000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Monitor,
      title: 'Real-time Monitoring',
      description: 'Monitor system performance in real-time with advanced analytics',
    },
    {
      icon: Cpu,
      title: 'CPU Optimization',
      description: 'Optimize CPU usage and performance for maximum efficiency',
    },
    {
      icon: HardDrive,
      title: 'Storage Management',
      description: 'Manage and optimize storage space and disk performance',
    },
    {
      icon: Wifi,
      title: 'Network Analysis',
      description: 'Analyze network performance and connectivity issues',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>System Monitor | Zion Tech Group</title>
        <meta name="description" content="Professional System Monitor services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="System Monitor, AI solutions, IT services, Zion Tech Group, system monitoring" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                System
              </span>
              <br />
              <span className="text-white">Monitor</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Monitor and optimize your system performance with our advanced monitoring solutions.
import { ArrowRight } from 'lucide-react';
'use client'

import { ArrowRight } from 'lucide-react';
  ];
              </span>
              <br / />
              <span const className = "text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xlmx-auto">
              Transform your business with our advanced systemmonitor solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-rowgap-4justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300flex items-center" />
                Get Started
                <ArrowRight className="ml-2h-5w-5" />
              </button>
              <button className="border border-gray-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              System Metrics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time system performance monitoring and analytics.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  {metrics.cpu.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-400">CPU Usage</div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  {metrics.memory.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-400">Memory Usage</div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  {metrics.disk.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-400">Disk Usage</div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  {metrics.network.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-400">Network Usage</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SystemMonitor;
