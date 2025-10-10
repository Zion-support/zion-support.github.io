'use client';
import React from 'react';
import { Zap, Gauge, Database, Cloud, ArrowRight, Phone, Mail, CheckCircle, TrendingUp, Shield, Clock } from 'lucide-react';
import Link from 'next/link';

const PerformanceOptimizationPage: React.FC = () => {
  const services = [
    {
      icon: Database,
      title: 'Database Optimization',
      description: 'Optimize database queries, indexing, and performance tuning'
    },
    {
      icon: Cloud,
      title: 'Cloud Performance',
      description: 'Optimize cloud infrastructure and resource allocation'
    },
    {
      icon: Gauge,
      title: 'Application Tuning',
      description: 'Fine-tune applications for maximum performance and efficiency'
    },
    {
      icon: Shield,
      title: 'Security Optimization',
      description: 'Enhance security without compromising performance'
    }
  ];

  const benefits = [
    {
      title: '50% Faster Load Times',
      description: 'Dramatically improve application and website performance',
      metric: '50% improvement'
    },
    {
      title: 'Reduced Server Costs',
      description: 'Optimize resource usage to reduce infrastructure costs',
      metric: '40% cost savings'
    },
    {
      title: 'Better User Experience',
      description: 'Faster, more responsive applications for your users',
      metric: '85% user satisfaction'
    },
    {
      title: 'Scalability',
      description: 'Prepare your systems for future growth and demand',
      metric: '10x scalability'
    }
  ];

  const optimizationAreas = [
    {
      title: 'Web Performance',
      description: 'Optimize websites and web applications for speed',
      features: ['CDN optimization', 'Image compression', 'Code minification', 'Caching strategies']
    },
    {
      title: 'Database Performance',
      description: 'Optimize database queries and data structures',
      features: ['Query optimization', 'Index tuning', 'Connection pooling', 'Data archiving']
    },
    {
      title: 'Server Optimization',
      description: 'Optimize server configurations and resource usage',
      features: ['Resource monitoring', 'Load balancing', 'Memory optimization', 'CPU tuning']
    },
    {
      title: 'Network Optimization',
      description: 'Optimize network performance and connectivity',
      features: ['Bandwidth optimization', 'Latency reduction', 'Protocol optimization', 'Traffic management']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Performance <span className="text-cyan-400">Optimization</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Maximize your system performance with our comprehensive optimization services. 
            We analyze, tune, and optimize every aspect of your infrastructure for maximum speed and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Optimized
            </Link>
            <Link
              href="/consultation"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
              <Gauge className="w-5 h-5 mr-2" />
              Free Assessment
            </Link>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our <span className="text-cyan-400">Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="p-3 bg-cyan-400 rounded-lg w-fit mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Optimization Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Optimization <span className="text-cyan-400">Areas</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {optimizationAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-600 hover:border-cyan-400/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{area.title}</h3>
                <p className="text-gray-300 mb-6">{area.description}</p>
                <ul className="space-y-2">
                  {area.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-cyan-400">
                      <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Performance <span className="text-cyan-400">Benefits</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-fit mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-cyan-400 font-bold text-lg">{benefit.metric}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our <span className="text-cyan-400">Process</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Analysis</h3>
              <p className="text-gray-300">Comprehensive performance analysis and bottleneck identification</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Planning</h3>
              <p className="text-gray-300">Develop optimization strategy and implementation roadmap</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Implementation</h3>
              <p className="text-gray-300">Execute optimization changes with minimal downtime</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Monitoring</h3>
              <p className="text-gray-300">Continuous monitoring and fine-tuning for optimal performance</p>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Performance <span className="text-cyan-400">Metrics</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-8 text-center">
              <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Load Time</h3>
              <p className="text-3xl font-bold text-cyan-400 mb-2">1.2s</p>
              <p className="text-gray-300">Average page load time after optimization</p>
            </div>
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-8 text-center">
              <Gauge className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Uptime</h3>
              <p className="text-3xl font-bold text-green-400 mb-2">99.9%</p>
              <p className="text-gray-300">System availability and reliability</p>
            </div>
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 text-center">
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Efficiency</h3>
              <p className="text-3xl font-bold text-purple-400 mb-2">85%</p>
              <p className="text-gray-300">Resource utilization efficiency</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Boost Your Performance Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't let slow performance hold your business back. Let our experts optimize your systems for maximum speed and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Started Now
            </Link>
            <Link
              href="/pricing"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
            >
              <Zap className="w-5 h-5 mr-2" />
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOptimizationPage;