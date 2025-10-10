'use client';
import React from 'react';
import { Globe, Shield, Zap, BarChart, Users, Settings, CheckCircle, ArrowRight, Star, Brain, Cloud, Code, Database, Smartphone, Lock, TrendingUp, Calendar, Target, Clock, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Share2, Mic, Wrench, Truck, FileText } from 'lucide-react';

const AINetworkSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Network Optimization',
      description: 'AI-powered network optimization for maximum performance and efficiency',
      benefits: ['Traffic analysis', 'Bandwidth optimization', 'Load balancing', 'Performance monitoring']
    },
    {
      icon: Shield,
      title: 'Security Monitoring',
      description: 'Advanced AI-driven network security and threat detection',
      benefits: ['Threat detection', 'Anomaly detection', 'Real-time alerts', 'Automated response']
    },
    {
      icon: Zap,
      title: 'Performance Analytics',
      description: 'Comprehensive network performance analytics and insights',
      benefits: ['Real-time metrics', 'Historical analysis', 'Predictive insights', 'Custom dashboards']
    },
    {
      icon: BarChart,
      title: 'Traffic Management',
      description: 'Intelligent traffic management and routing optimization',
      benefits: ['Smart routing', 'QoS management', 'Traffic shaping', 'Congestion control']
    },
    {
      icon: Users,
      title: 'User Experience',
      description: 'Enhanced user experience through intelligent network management',
      benefits: ['Latency optimization', 'Connection stability', 'Seamless handoffs', 'Quality assurance']
    },
    {
      icon: Settings,
      title: 'Automation',
      description: 'Automated network configuration and management',
      benefits: ['Auto-configuration', 'Self-healing networks', 'Predictive maintenance', 'Zero-touch deployment']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Globe className="w-4 h-4 mr-2" />
              AI Network Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Network
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {' '}Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your network infrastructure with AI-powered solutions. 
              Optimize performance, enhance security, and ensure seamless connectivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="#features"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900 hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build and manage intelligent network infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 transition-all duration-700 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your Network?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of organizations already using our AI network solutions to enhance their infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
            >
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="tel:+13024640950"
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900 hover:scale-105"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AINetworkSolutionsPage;