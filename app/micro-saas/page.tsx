'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, MessageSquare, Cpu, Code } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const products = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights.',
      features: ['Real-time Data Visualization', 'AI-powered Predictive Analytics', 'Custom Dashboard Builder', 'Advanced Data Connectors'],
      price: '$89/month',
      icon: BarChart,
      category: 'Analytics',
      popular: true
    },
    {
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis.',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Advanced Sentiment Analysis', 'Automated Ticket Routing'],
      price: '$149/month',
      icon: MessageSquare,
      category: 'AI Chat',
      popular: false
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform.',
      features: ['Real-time Threat Detection', 'Automated Response', 'Compliance Monitoring', 'Security Analytics'],
      price: '$199/month',
      icon: Shield,
      category: 'Security',
      popular: false
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution for businesses.',
      features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Multi-cloud Support'],
      price: '$79/month',
      icon: Database,
      category: 'Cloud',
      popular: false
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy-to-use platform and intuitive interface.',
      benefits: ['5-minute setup', 'No coding required', 'Pre-built templates', 'Instant deployment']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance, and advanced threat protection.',
      benefits: ['End-to-end encryption', 'SOC 2 compliance', 'Regular security audits', 'Data protection']
    },
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'Advanced AI capabilities that learn and adapt to your business needs.',
      benefits: ['Machine learning', 'Predictive analytics', 'Automated insights', 'Smart recommendations']
    },
    {
      icon: Target,
      title: 'Customizable',
      description: 'Tailor the platform to your specific business requirements and workflows.',
      benefits: ['Custom configurations', 'Flexible workflows', 'API integrations', 'White-label options']
    }
  ];

  const benefits = [
    'Reduce operational costs by 60%',
    'Increase productivity by 80%',
    'Scale without proportional staff increases',
    'Gain competitive advantage with AI',
    'Improve customer satisfaction'
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Ready-to-use business tools with AI and automation. Micro SAAS solutions for modern businesses." />
        <meta name="keywords" content="micro saas, business tools, AI automation, ready-to-use solutions, business software" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SAAS Solutions
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                  Ready-to-Use Business Tools
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with our collection of ready-to-use micro SAAS solutions. 
                Each tool is designed to solve specific business challenges with AI and automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View All Products
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SAAS Products
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our collection of powerful, ready-to-use business tools designed to solve specific challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 relative">
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{product.title}</h3>
                  <p className="text-gray-300 mb-6">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{product.price}</div>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro SAAS products are designed with modern businesses in mind, 
                offering powerful features and seamless integration.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
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
                Business Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience measurable improvements in your business operations with our micro SAAS solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
                  <CheckCircle className="w-6 h-6 text-cyan-400 mr-4 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our micro SAAS solutions and unlock the power of AI and automation for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default MicroSaasPage;
