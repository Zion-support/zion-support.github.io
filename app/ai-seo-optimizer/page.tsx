'use client';
import React from 'react';
import { Search, CheckCircle, ArrowRight, Phone, Target, BarChart, Settings, Brain, TrendingUp, Zap, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AISEOOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Keyword Research',
      description: 'Discover high-value keywords using advanced AI algorithms'
    },
    {
      icon: Target,
      title: 'Content Optimization',
      description: 'Automatically optimize your content for better search rankings'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Track and analyze your SEO performance with detailed insights'
    },
    {
      icon: Zap,
      title: 'Automated Optimization',
      description: 'AI continuously optimizes your site for better search visibility'
    }
  ];

  const optimizationAreas = [
    {
      title: 'On-Page SEO',
      description: 'Optimize individual pages for better search engine visibility',
      features: ['Meta tags optimization', 'Content structure', 'Image optimization', 'Internal linking']
    },
    {
      title: 'Technical SEO',
      description: 'Improve your website\'s technical foundation for search engines',
      features: ['Site speed optimization', 'Mobile responsiveness', 'Schema markup', 'Crawlability']
    },
    {
      title: 'Content SEO',
      description: 'Create and optimize content that ranks well in search results',
      features: ['Keyword research', 'Content planning', 'Topic clustering', 'Content gaps analysis']
    },
    {
      title: 'Local SEO',
      description: 'Optimize your business for local search visibility',
      features: ['Google My Business', 'Local citations', 'Location-based keywords', 'Review management']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Higher Rankings',
      description: 'Improve your search engine rankings by up to 300%'
    },
    {
      icon: Target,
      title: 'More Traffic',
      description: 'Increase organic traffic by 250% on average'
    },
    {
      icon: BarChart,
      title: 'Better ROI',
      description: 'Achieve 500% higher ROI compared to traditional SEO'
    },
    {
      icon: Shield,
      title: 'Future-Proof',
      description: 'Stay ahead of algorithm changes with AI-powered optimization'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI SEO
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Optimizer
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Dominate search results with our AI-powered SEO optimization platform. 
                Get higher rankings, more traffic, and better conversions automatically.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all">
                  <Search className="w-5 h-5 mr-2" />
                  Start Optimizing
                </button>
                <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all">
                  <Phone className="w-5 h-5 mr-2" />
                  (302) 464-0950
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">AI SEO Optimization Features</h2>
            <p className="text-gray-400">Powerful tools to boost your search rankings</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Optimization Areas Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">SEO Optimization Areas</h2>
            <p className="text-gray-400">Comprehensive SEO optimization for all aspects of your website</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {optimizationAreas.map((area, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                <p className="text-gray-400 mb-4">{area.description}</p>
                <ul className="space-y-2">
                  {area.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our AI SEO Optimizer?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-gray-400">Simple steps to optimize your website for search engines</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Website Analysis</h3>
              <p className="text-gray-400">AI analyzes your website and identifies optimization opportunities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Strategy Development</h3>
              <p className="text-gray-400">Create a customized SEO strategy based on your goals</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Implementation</h3>
              <p className="text-gray-400">AI automatically implements optimizations across your site</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Monitor & Optimize</h3>
              <p className="text-gray-400">Continuously monitor performance and optimize for better results</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Dominate Search Results?</h2>
            <p className="text-gray-300 mb-8">Start optimizing your website for better search rankings today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/consultation"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AISEOOptimizerPage;