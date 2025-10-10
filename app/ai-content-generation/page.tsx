'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const AiContentGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Content Generation',
      description: 'Advanced AI algorithms that generate high-quality content automatically.',
      benefits: ['Text generation', 'Image creation', 'Video production', 'Audio synthesis']
    },
    {
      icon: Target,
      title: 'Multi-Format Support',
      description: 'Generate content in multiple formats and styles.',
      benefits: ['Blog posts', 'Social media', 'Marketing copy', 'Technical documentation']
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Advanced quality control to ensure generated content meets standards.',
      benefits: ['Grammar checking', 'Style consistency', 'Fact verification', 'Plagiarism detection']
    },
    {
      icon: Settings,
      title: 'Easy Customization',
      description: 'Customize content generation to match your brand and requirements.',
      benefits: ['Brand voice', 'Tone adjustment', 'Style preferences', 'Content templates']
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Generate content in multiple languages with native fluency.',
      benefits: ['50+ languages', 'Cultural adaptation', 'Localization', 'Translation']
    },
    {
      icon: Database,
      title: 'Content Management',
      description: 'Organize and manage generated content efficiently.',
      benefits: ['Content library', 'Version control', 'Collaboration tools', 'Analytics']
    }
  ];

  const benefits = [
    'Generate high-quality content at scale',
    'Reduce content creation time by 80%',
    'Maintain consistent brand voice and style',
    'Create content in multiple languages',
    'Ensure content quality and accuracy',
    'Scale content production efficiently'
  ];

  const useCases = [
    {
      title: 'Blog Content',
      description: 'Generate engaging blog posts and articles',
      icon: Database
    },
    {
      title: 'Social Media',
      description: 'Create social media posts and campaigns',
      icon: Globe
    },
    {
      title: 'Marketing Copy',
      description: 'Generate marketing materials and advertisements',
      icon: Target
    },
    {
      title: 'Technical Docs',
      description: 'Create technical documentation and guides',
      icon: Settings
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Content Generation - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered content generation for modern applications. Create high-quality content at scale with intelligent automation." />
        <meta name="keywords" content="content generation, AI content, automated content, content creation, text generation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Content Generation
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Create high-quality content at scale with our AI-powered generation platform. 
                Generate text, images, videos, and more with intelligent automation.
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
              <h2 className="text-4xl font-bold text-white mb-6">Advanced Content Generation</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our content generation platform provides everything you need to create high-quality content at scale.
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
                Discover how our content generation platform can transform your content creation workflow.
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
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Content Generation?</h2>
                <p className="text-lg text-gray-300 mb-8">
                  Our AI-powered content generation platform is designed to help you create 
                  high-quality content at scale with intelligent automation.
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
                      <Brain className="w-10 h-10 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Intelligent Creation</h3>
                    <p className="text-gray-300 mb-6">
                      Generate content that matches your brand voice and requirements with advanced AI.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-cyan-400">80%</div>
                        <div className="text-gray-300 text-sm">Time Savings</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-purple-400">95%</div>
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
                Start generating high-quality content with our AI-powered platform. 
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

export default AiContentGenerationPage;