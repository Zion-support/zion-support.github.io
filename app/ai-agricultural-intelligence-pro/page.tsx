'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, Leaf, Zap, Target, ArrowRight, CheckCircle, Brain, TrendingUp, Eye, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAgriculturalIntelligenceProPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive data analysis for optimal agricultural decision-making.',
      benefits: ['Real-time monitoring', 'Predictive insights', 'Yield optimization', 'Resource management']
    },
    {
      icon: Leaf,
      title: 'Crop Intelligence',
      description: 'AI-powered crop monitoring and health assessment.',
      benefits: ['Disease detection', 'Growth tracking', 'Quality assessment', 'Harvest timing']
    },
    {
      icon: Zap,
      title: 'Automated Systems',
      description: 'Smart automation for irrigation, fertilization, and pest control.',
      benefits: ['Smart irrigation', 'Precision fertilization', 'Automated pest control', 'Weather adaptation']
    },
    {
      icon: Target,
      title: 'Precision Agriculture',
      description: 'GPS-guided precision farming for maximum efficiency.',
      benefits: ['GPS guidance', 'Variable rate application', 'Field mapping', 'Yield mapping']
    }
  ];

  const benefits = [
    'Increase crop yields by up to 30%',
    'Reduce water usage by 25%',
    'Minimize pesticide use by 40%',
    'Optimize fertilizer application',
    'Predict and prevent crop diseases',
    'Maximize resource efficiency'
  ];

  const stats = [
    { label: 'Crop Yield Increase', value: '30%' },
    { label: 'Water Savings', value: '25%' },
    { label: 'Pesticide Reduction', value: '40%' },
    { label: 'Cost Savings', value: '35%' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Agricultural Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered agricultural intelligence solutions for modern farming" />
        <meta name="keywords" content="AI agriculture, smart farming, precision agriculture, crop intelligence, agricultural analytics" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Agricultural <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Intelligence Pro</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Revolutionize your farming operations with advanced AI-powered agricultural intelligence solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Agricultural Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive AI solutions for modern agriculture
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300">
                    <div className="text-green-400 mb-4">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proven Results
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI agricultural solutions deliver measurable improvements
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your agricultural operations with AI intelligence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Agriculture?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Start using AI-powered agricultural intelligence to maximize your farm's potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default AIAgriculturalIntelligenceProPage;