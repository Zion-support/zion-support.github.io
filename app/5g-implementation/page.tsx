'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Wifi, Zap, Shield, Globe, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Users, BarChart } from 'lucide-react';

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: '5G Network Design',
      description: 'Complete 5G network design and implementation with optimal coverage and performance.',
      benefits: ['Network planning', 'Coverage optimization', 'Performance tuning']
    },
    {
      icon: Zap,
      title: 'Ultra-Low Latency',
      description: 'Ultra-low latency 5G networks for real-time applications and mission-critical operations.',
      benefits: ['< 1 ms latency', 'Real-time apps', 'Mission critical']
    },
    {
      icon: Clock,
      title: '24/7 Network Monitoring',
      description: 'Continuous monitoring of 5G network performance with real-time analytics and alerts.',
      benefits: ['Network monitoring', 'Performance analytics', 'Proactive maintenance']
    },
    {
      icon: Users,
      title: 'Scalable Infrastructure',
      description: 'Scalable 5G infrastructure that grows with your business needs and user demands.',
      benefits: ['Auto-scaling', 'Capacity planning', 'Future-proof design']
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced encryption and security protocols for enterprise-grade protection',
      benefits: ['End-to-end encryption', 'Security protocols', 'Threat detection']
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Advanced analytics and reporting for 5G network performance and optimization.',
      benefits: ['Performance insights', 'Usage analytics', 'Optimization recommendations']
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G Network Implementation - Zion Tech Group | Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Complete 5G network implementation services with ultra-low latency, high-speed connectivity, and advanced features for modern applications and IoT ecosystems." />
        <meta name="keywords" content="5G implementation, network design, ultra-low latency, IoT connectivity, enterprise 5G" />
      </Helmet> <//Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">{/* Hero Section */}</div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">5G Network</h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Implementation</span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Complete 5G network implementation services with ultra-low latency, high-speed connectivity,
              and advanced features for modern applications and IoT ecosystems.</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2">Get Started</button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">Schedule Demo</button className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              </button>
            </div>
        </section>{/* Features Section */}<//section>
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Advanced 5G Features</h2>
              <p className="text-xl text-gray-300">Cutting-edge 5G technology for the next generation of connectivity</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>{feature.benefits && (<//p>
                    <ul className="space-y-2">{feature.benefits.map((benefit, idx) => (</ul className="space-y-2">
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-2" />{benefit}</CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                        </li>))}<//li>
                    </ul>)}<//ul>
                </div>))}<//div>
            </div>
        </section>{/* CTA Section */}<//section>
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Implement 5G?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Transform your business with next-generation 5G connectivity and unlock new possibilities.</p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">Start Your 5G Journey</button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
            </button>
          </div>
        </section>
      </div>
    </>);
};

export default FiveGImplementationPage;<//>