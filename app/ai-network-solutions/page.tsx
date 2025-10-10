'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Globe, Shield, Zap, Cpu, Database, Network, Wifi, Router, Server, Cloud, CheckCircle, ArrowRight, Users, BarChart } from 'lucide-react';

export default function AINetworkSolutionsPage() {
  const features = [
    {
      icon: Globe,
      title: 'Global Network Infrastructure',
      description: 'Worldwide network coverage with intelligent routing and load balancing'
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Multi-layered security protocols with AI-powered threat detection'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Ultra-low latency networks optimized for real-time applications'
    },
    {
      icon: Cpu,
      title: 'AI-Powered Optimization',
      description: 'Intelligent network management with predictive analytics'
    }
  ];

  const services = [
    {
      title: 'Network Design & Architecture',
      description: 'Custom network solutions designed for your specific requirements',
      icon: Network
    },
    {
      title: 'Wireless Solutions',
      description: 'Advanced WiFi and wireless connectivity solutions',
      icon: Wifi
    },
    {
      title: 'Router Configuration',
      description: 'Professional router setup and optimization services',
      icon: Router
    },
    {
      title: 'Server Management',
      description: 'Comprehensive server infrastructure management',
      icon: Server
    },
    {
      title: 'Cloud Integration',
      description: 'Seamless cloud network integration and management',
      icon: Cloud
    },
    {
      title: 'Network Monitoring',
      description: '24/7 network monitoring and performance optimization',
      icon: BarChart
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Network Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered network solutions for modern businesses. Global infrastructure, security, and performance optimization." />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Network Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Intelligent network infrastructure powered by AI for global connectivity, security, and performance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Network Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology to optimize your network infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Network Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive network solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-blue-400 mr-3 group-hover:text-blue-300" />
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="flex items-center text-blue-400 group-hover:text-blue-300">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Network?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our experts to discuss your network requirements and get a customized solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
              Contact Us
            </button>
            <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}