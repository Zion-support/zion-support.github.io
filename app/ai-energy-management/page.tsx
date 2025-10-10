'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, BarChart, Shield, TrendingUp, ArrowRight, Star, Users, Award } from 'lucide-react';

const AiEnergyManagementPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Smart Energy Monitoring',
      description: 'Real-time energy consumption tracking and optimization across all systems'
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting to predict energy needs and optimize consumption'
    },
    {
      icon: Shield,
      title: 'Automated Controls',
      description: 'Intelligent automation that adjusts energy usage based on demand patterns'
    },
    {
      icon: TrendingUp,
      title: 'Cost Optimization',
      description: 'Dynamic pricing and load balancing to minimize energy costs'
    }
  ];

  const benefits = [
    'Reduce energy costs by up to 35%',
    'Improve energy efficiency by 50%',
    'Lower carbon footprint significantly',
    'Optimize renewable energy integration',
    'Predict and prevent energy waste',
    'Achieve sustainability goals faster'
  ];

  const stats = [
    { icon: Zap, value: '35%', label: 'Cost Reduction' },
    { icon: BarChart, value: '50%', label: 'Efficiency Gain' },
    { icon: Shield, value: '24/7', label: 'Monitoring' },
    { icon: Users, value: '200+', label: 'Facilities' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Energy Management - Zion Tech Group</title>
        <meta name="description" content="Intelligent AI-powered energy management solutions that reduce costs by 35% and improve efficiency by 50% through smart monitoring and optimization." />
        <meta name="keywords" content="AI energy management, smart energy, energy optimization, renewable energy, sustainability" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Energy Management</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Optimize your energy consumption with AI-powered management systems that reduce costs by 35% and improve efficiency by 50%.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Smart Energy Management Features</h2>
            <p className="text-gray-300 text-lg">Advanced AI technology for optimal energy efficiency</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Transform Your Energy Management</h2>
              <p className="text-gray-300 text-lg mb-8">
                Our AI-powered energy management systems help organizations achieve significant cost savings while reducing their environmental impact through intelligent optimization.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <Zap className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Get Your Energy Audit</h3>
              <p className="text-gray-300 mb-6">
                Discover how much you can save with our comprehensive energy analysis and AI optimization recommendations.
              </p>
              
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                  Request Energy Audit
                </button>
                <button className="w-full bg-white/10 text-white py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Start Your Energy Transformation Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join forward-thinking organizations that are reducing costs and environmental impact with our AI energy management solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                <ArrowRight className="w-5 h-5" />
                Begin Energy Optimization
              </button>
              <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Star className="w-5 h-5" />
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiEnergyManagementPage;