'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Target, Cloud, DollarSign, Calendar, MessageSquare, Globe, Leaf, Activity, Play, Save, Building } from 'lucide-react';

const AIClimateSolutionsProPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      icon: Target,
      title: 'Carbon Footprint Tracking',
      description: 'AI-powered real-time carbon footprint monitoring and reduction recommendations.',
      benefits: [
        'Real-time carbon tracking',
        'Automated reduction recommendations',
        'Industry-specific benchmarks',
        'Regulatory compliance monitoring'
      ]
    },
    {
      icon: Cloud,
      title: 'Climate Prediction',
      description: 'Advanced AI models for accurate weather forecasting and climate trend analysis.',
      benefits: [
        '95% accuracy in weather predictions',
        'Extreme weather early warning',
        'Climate trend analysis',
        'Long-term forecasting'
      ]
    },
    {
      icon: Leaf,
      title: 'Sustainability Planning',
      description: 'Intelligent sustainability roadmaps and green initiative optimization.',
      benefits: [
        'Custom sustainability roadmaps',
        'ROI analysis for green initiatives',
        'Resource optimization',
        'Impact measurement'
      ]
    },
    {
      icon: Activity,
      title: 'Energy Management',
      description: 'Smart energy consumption monitoring and renewable energy integration.',
      benefits: [
        'Energy consumption analysis',
        'Renewable energy optimization',
        'Smart grid integration',
        'Cost reduction strategies'
      ]
    },
    {
      icon: Globe,
      title: 'Environmental Monitoring',
      description: 'Comprehensive environmental data collection and analysis systems.',
      benefits: [
        'Air quality monitoring',
        'Water quality assessment',
        'Biodiversity tracking',
        'Ecosystem health analysis'
      ]
    },
    {
      icon: Building,
      title: 'Green Infrastructure',
      description: 'AI-optimized green building design and sustainable infrastructure planning.',
      benefits: [
        'Green building certification',
        'Sustainable design optimization',
        'Lifecycle assessment',
        'Environmental impact reduction'
      ]
    }
  ];

  const benefits = [
    'Reduce carbon footprint by 80%',
    'Save 60% on energy costs',
    'Improve sustainability scores by 95%',
    'Achieve net-zero emissions faster',
    'Reduce environmental risks by 90%',
    'Increase green energy adoption by 70%',
    'Optimize resource utilization',
    'Ensure regulatory compliance'
  ];

  const useCases = [
    {
      title: 'Corporate Sustainability',
      description: 'Comprehensive sustainability programs for large corporations',
      icon: Building
    },
    {
      title: 'Smart Cities',
      description: 'AI-powered sustainable city planning and management',
      icon: Globe
    },
    {
      title: 'Renewable Energy',
      description: 'Optimization of renewable energy systems and grid management',
      icon: Leaf
    },
    {
      title: 'Environmental Monitoring',
      description: 'Real-time environmental data collection and analysis',
      icon: Activity
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Climate Solutions Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered climate solutions for sustainability and environmental management. Carbon tracking, climate prediction, and green infrastructure optimization." />
        <meta name="keywords" content="AI climate solutions, sustainability, carbon tracking, climate prediction, green technology, environmental AI" />
      </Helmet>

      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Climate Solutions
              <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered climate solutions for sustainability and environmental management. 
              Carbon tracking, climate prediction, and green infrastructure optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center">
                Start Your Journey
                <Play className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Climate Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI technology for comprehensive climate and sustainability management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Climate Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of climate management with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect for Every Application
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From corporate sustainability to smart cities, our solutions adapt to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Save the Planet?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your sustainability journey with our AI-powered climate solutions today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started Free
                </button>
                <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AIClimateSolutionsProPage;