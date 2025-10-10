'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Zap, BarChart3, Shield, Brain, ArrowRight, Leaf } from 'lucide-react';

const AiEnergyManagementPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Smart Energy Analytics',
      description: 'AI-powered analysis of energy consumption patterns and optimization opportunities'
    },
    {
      icon: Zap,
      title: 'Predictive Maintenance',
      description: 'Predict equipment failures and optimize energy usage with machine learning'
    },
    {
      icon: BarChart3,
      title: 'Real-time Monitoring',
      description: 'Continuous monitoring of energy consumption across all systems and devices'
    },
    {
      icon: Leaf,
      title: 'Sustainability Tracking',
      description: 'Track and optimize your carbon footprint and environmental impact'
    }
  ];

  const benefits = [
    '30% reduction in energy costs',
    'Real-time energy monitoring',
    'Predictive maintenance alerts',
    'Automated optimization',
    'Sustainability reporting',
    'Integration with smart grids'
  ];

  return (
    <>
      <Helmet>
        <title>AI Energy Management | Zion Tech Group - Smart Energy Solutions</title>
        <meta name="description" content="Optimize energy consumption with AI-powered management, predictive analytics, and automated optimization solutions." />
        <meta name="keywords" content="AI energy management, smart energy, energy optimization, predictive maintenance, sustainability" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Energy Management</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Optimize energy consumption and reduce costs with AI-powered management, predictive analytics, and automated optimization.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Smart Energy Management Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered energy management solutions provide comprehensive monitoring and optimization capabilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-green-400 transition-all duration-300 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Energy Management Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Achieve significant energy savings and environmental benefits with our AI solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Start Your Energy Optimization Journey
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us today to learn how AI can transform your energy management and reduce costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  <Zap className="w-5 h-5" />
                  Get Started
                </button>
                <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiEnergyManagementPage;