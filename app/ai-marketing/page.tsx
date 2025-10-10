'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Target, BarChart, Users, TrendingUp, MessageSquare, Search, Camera, Video, Mail as MailIcon, Share2, Star, Award, Clock, DollarSign } from 'lucide-react';

const AIMarketingPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'AI-Powered Targeting',
      description: 'Advanced audience segmentation and targeting using machine learning algorithms to reach the right customers at the right time.',
      benefits: ['95% accuracy in targeting', 'Real-time audience analysis', 'Cross-platform optimization', 'Behavioral prediction']
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Forecast campaign performance, customer lifetime value, and market trends with AI-powered predictive models.',
      benefits: ['Campaign performance prediction', 'ROI forecasting', 'Customer lifetime value analysis', 'Market trend analysis']
    },
    {
      icon: MessageSquare,
      title: 'Content Generation',
      description: 'Automatically generate high-converting ad copy, email campaigns, and social media content using advanced AI.',
      benefits: ['Auto-generated ad copy', 'Email campaign creation', 'Social media content', 'A/B testing optimization']
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'AI-driven SEO strategies that automatically optimize content, keywords, and technical aspects for better search rankings.',
      benefits: ['Keyword research automation', 'Content optimization', 'Technical SEO analysis', 'Ranking improvement']
    },
    {
      icon: Camera,
      title: 'Visual Content Creation',
      description: 'Generate stunning visuals, graphics, and video content using AI-powered design tools and image generation.',
      benefits: ['AI image generation', 'Video content creation', 'Brand consistency', 'High-quality output']
    },
    {
      icon: Zap,
      title: 'Marketing Automation',
      description: 'Automate complex marketing workflows, lead nurturing, and customer journey optimization with intelligent AI systems.',
      benefits: ['Workflow automation', 'Lead scoring', 'Customer journey mapping', 'Campaign orchestration']
    }
  ];

  const benefits = [
    'Increase conversion rates by 300%',
    'Reduce marketing costs by 50%',
    'Improve ROI by 400%',
    'Save 40+ hours per week',
    'Scale campaigns automatically',
    'Personalize at scale',
    'Optimize in real-time',
    'Predict customer behavior'
  ];

  const useCases = [
    {
      title: 'E-commerce Marketing',
      description: 'AI-powered product recommendations, dynamic pricing, and personalized shopping experiences',
      icon: '🛒'
    },
    {
      title: 'Lead Generation',
      description: 'Automated lead scoring, nurturing campaigns, and conversion optimization',
      icon: '🎯'
    },
    {
      title: 'Social Media Marketing',
      description: 'AI-driven content creation, posting optimization, and engagement analysis',
      icon: '📱'
    },
    {
      title: 'Email Marketing',
      description: 'Personalized email campaigns, send time optimization, and content generation',
      icon: '📧'
    },
    {
      title: 'Content Marketing',
      description: 'AI-powered content creation, SEO optimization, and performance analysis',
      icon: '📝'
    },
    {
      title: 'Paid Advertising',
      description: 'Automated bid management, ad creation, and performance optimization',
      icon: '💰'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Marketing Automation - Zion Tech Group</title>
        <meta name="description" content="Transform your marketing with AI-powered automation, targeting, and content generation. Increase conversions by 300% and reduce costs by 50%." />
        <meta name="keywords" content="AI marketing, marketing automation, AI targeting, content generation, marketing AI, digital marketing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="relative py-20 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="relative max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Marketing Automation
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your marketing with AI-powered automation, targeting, and content generation. 
                Increase conversions by 300% and reduce costs by 50%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  AI Marketing Features
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Powerful AI-driven marketing tools that transform your campaigns and boost performance
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Marketing Applications
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  From e-commerce to lead generation, our AI marketing solutions serve diverse business needs
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {useCases.map((useCase, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                    <div className="text-4xl mb-4">{useCase.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
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
                  Why Choose Our AI Marketing?
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Experience the future of marketing with our revolutionary AI technology
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mb-4">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Marketing?
                </h2>
                <p className="text-xl text-purple-100 mb-8">
                  Join thousands of businesses already using our AI Marketing solutions
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                    Get Started Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                    Schedule Demo
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIMarketingPage;