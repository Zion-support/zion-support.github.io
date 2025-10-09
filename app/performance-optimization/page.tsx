'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Zap, Target, BarChart, Settings, CheckCircle, ArrowRight, Star, Award, TrendingUp, Clock } from 'lucide-react';

const PerformanceOptimizationPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Speed Optimization',
      description: 'Dramatically improve application and system performance with advanced optimization techniques.'
    },
    {
      icon: Target,
      title: 'Resource Optimization',
      description: 'Optimize CPU, memory, and storage usage for maximum efficiency and cost savings.'
    },
    {
      icon: BarChart,
      title: 'Performance Monitoring',
      description: 'Continuous monitoring and analysis of system performance metrics and bottlenecks.'
    },
    {
      icon: Settings,
      title: 'Configuration Tuning',
      description: 'Fine-tune system configurations and parameters for optimal performance.'
    }
  ];

  const services = [
    {
      title: 'Application Performance',
      description: 'Optimize web applications, mobile apps, and desktop software for maximum speed.',
      improvement: '300%',
      icon: '🚀'
    },
    {
      title: 'Database Optimization',
      description: 'Improve database performance with query optimization and indexing strategies.',
      improvement: '250%',
      icon: '🗄️'
    },
    {
      title: 'Server Performance',
      description: 'Optimize server configurations and resource allocation for better throughput.',
      improvement: '200%',
      icon: '🖥️'
    },
    {
      title: 'Network Optimization',
      description: 'Optimize network configurations and bandwidth utilization for faster data transfer.',
      improvement: '180%',
      icon: '🌐'
    },
    {
      title: 'Cloud Performance',
      description: 'Optimize cloud infrastructure and services for cost efficiency and performance.',
      improvement: '220%',
      icon: '☁️'
    },
    {
      title: 'Mobile Performance',
      description: 'Optimize mobile applications for better user experience and battery life.',
      improvement: '280%',
      icon: '📱'
    }
  ];

  const benefits = [
    'Improve application speed by up to 300%',
    'Reduce server costs by 40% through optimization',
    'Enhance user experience and satisfaction',
    'Increase system capacity and scalability',
    'Reduce energy consumption and environmental impact',
    'Extend hardware lifespan and reduce maintenance'
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                Performance Optimization
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Maximize your system performance with our advanced optimization services. 
                From applications to infrastructure, we deliver measurable performance improvements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  Optimize Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                  Performance Audit
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
                <div className="text-gray-300">Speed Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Advanced Performance Optimization</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our performance optimization experts use cutting-edge tools and techniques 
                to deliver measurable improvements across all system components.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-colors">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Optimization Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From applications to infrastructure, we provide comprehensive performance 
                optimization services across all technology domains.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-900/50 rounded-xl p-6 hover:bg-slate-900/70 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                      {service.improvement} faster
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Performance Optimization?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our performance optimization services deliver measurable improvements 
                  that enhance user experience and reduce operational costs.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Speed Improvement:</span>
                    <span className="text-green-400 font-semibold">300%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Cost Reduction:</span>
                    <span className="text-green-400 font-semibold">40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Uptime Improvement:</span>
                    <span className="text-green-400 font-semibold">99.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">User Satisfaction:</span>
                    <span className="text-green-400 font-semibold">+85%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Boost Your Performance Today</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get measurable performance improvements that enhance user experience and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400/10 transition-colors">
                Schedule Audit
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PerformanceOptimizationPage;