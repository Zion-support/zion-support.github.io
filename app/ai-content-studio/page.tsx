'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const AiContentStudioPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Content Studio',
      description: 'Advanced AI algorithms that provide intelligent content creation and management.',
      benefits: ['Content generation', 'Design automation', 'Video editing', 'Audio production']
    },
    {
      icon: Settings,
      title: 'Creative Tools',
      description: 'Comprehensive suite of creative tools for content production.',
      benefits: ['Image editor', 'Video editor', 'Audio mixer', 'Text editor']
    },
    {
      icon: Shield,
      title: 'Quality Control',
      description: 'Advanced quality control to ensure content meets professional standards.',
      benefits: ['Quality checks', 'Style consistency', 'Brand compliance', 'Performance optimization']
    },
    {
      icon: Globe,
      title: 'Collaboration',
      description: 'Work together with your team using collaborative content creation tools.',
      benefits: ['Real-time collaboration', 'Version control', 'Team reviews', 'Project management']
    },
    {
      icon: Target,
      title: 'Multi-Format Export',
      description: 'Export content in multiple formats for different platforms.',
      benefits: ['Social media formats', 'Web formats', 'Print formats', 'Video formats']
    },
    {
      icon: Database,
      title: 'Asset Management',
      description: 'Organize and manage your content assets efficiently.',
      benefits: ['Asset library', 'Search and filter', 'Metadata management', 'Cloud storage']
    }
  ];

  const benefits = [
    'Create professional content with AI assistance',
    'Streamline content production workflows',
    'Maintain brand consistency across all content',
    'Collaborate effectively with your team',
    'Export content in multiple formats',
    'Scale content production efficiently'
  ];

  const useCases = [
    {
      title: 'Marketing Content',
      description: 'Create marketing materials and campaigns',
      icon: Target
    },
    {
      title: 'Social Media',
      description: 'Design social media posts and stories',
      icon: Globe
    },
    {
      title: 'Video Production',
      description: 'Edit and produce videos with AI assistance',
      icon: Settings
    },
    {
      title: 'Brand Assets',
      description: 'Create and manage brand assets and templates',
      icon: Database
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Content Studio - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered content studio for modern applications. Create, edit, and manage content with intelligent automation." />
        <meta name="keywords" content="content studio, AI content, content creation, video editing, design automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Content Studio
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Create professional content with our AI-powered studio. 
                Design, edit, and manage content with intelligent automation and collaboration tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#features"
                  className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Content Studio</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our content studio provides everything you need to create, edit, and manage professional content.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="bg-cyan-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our content studio can transform your content creation workflow.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-white/10 text-center">
                  <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Content Studio?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our AI-powered content studio is designed to help you create professional content 
                  efficiently with intelligent automation and collaboration tools.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <div className="text-center">
                    <div className="bg-cyan-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <Settings className="w-10 h-10 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Creative Power</h3>
                    <p className="text-gray-300 mb-6">
                      Create professional content with AI-powered tools and intelligent automation.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-cyan-400">70%</div>
                        <div className="text-gray-300 text-sm">Faster Creation</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-purple-400">90%</div>
                        <div className="text-gray-300 text-sm">Quality Score</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Amazing Content?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start creating professional content with our AI-powered studio. 
                Get started today and see the difference intelligent content creation can make.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/pricing"
                  className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View Pricing</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default AiContentStudioPage;