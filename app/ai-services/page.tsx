'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, MessageSquare, Eye, Zap, BarChart, Box, Mic, Shield, TrendingUp, Target, FileText, Search, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const AIServicesPagePage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI algorithms and machine learning models.',
      features: ['Predictive analytics', 'Real-time insights', 'Custom dashboards', 'Automated reporting', 'Natural language queries', 'Anomaly detection'],
      price: 'Starting at $1,500/month',
      category: 'Analytics',
      popular: true
    },
    {
      icon: MessageSquare,
      title: 'AI Customer Support Platform',
      description: 'Revolutionary customer support with intelligent chatbots, sentiment analysis, and automated ticket routing.',
      features: ['Natural language processing', 'Multi-channel support', 'Sentiment analysis', 'Automated routing', 'Knowledge base', 'Human handoff'],
      price: 'Starting at $299/month',
      category: 'Support',
      popular: true
    },
    {
      icon: Eye,
      title: 'AI Computer Vision Solutions',
      description: 'Advanced image recognition and analysis for quality control, security, and automated inspection systems.',
      features: ['Object detection', 'Image classification', 'Quality control', 'Security monitoring', 'OCR capabilities', 'Real-time processing'],
      price: 'Starting at $799/month',
      category: 'Computer Vision',
      popular: false
    },
    {
      icon: Zap,
      title: 'AI Process Automation',
      description: 'Intelligent automation of business processes with decision-making capabilities and exception handling.',
      features: ['Workflow automation', 'Decision trees', 'Exception handling', 'Integration APIs', 'Monitoring', 'Optimization'],
      price: 'Starting at $599/month',
      category: 'Automation',
      popular: true
    },
    {
      icon: BarChart,
      title: 'AI Data Analytics Suite',
      description: 'Comprehensive data analysis with machine learning models, predictive analytics, and business intelligence.',
      features: ['Machine learning models', 'Predictive analytics', 'Data visualization', 'Statistical analysis', 'Custom algorithms', 'Real-time processing'],
      price: 'Starting at $899/month',
      category: 'Analytics',
      popular: false
    },
    {
      icon: Target,
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing campaigns with personalized content, audience segmentation, and performance optimization.',
      features: ['Personalization', 'Audience segmentation', 'Campaign optimization', 'A/B testing', 'Performance tracking', 'Multi-channel'],
      price: 'Starting at $399/month',
      category: 'Marketing',
      popular: true
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity Solutions',
      description: 'Advanced threat detection and prevention using machine learning algorithms and behavioral analysis.',
      features: ['Threat detection', 'Behavioral analysis', 'Anomaly detection', 'Incident response', 'Risk assessment', 'Compliance monitoring'],
      price: 'Starting at $1,299/month',
      category: 'Security',
      popular: false
    },
    {
      icon: TrendingUp,
      title: 'AI Sales Intelligence',
      description: 'Intelligent sales processes with lead scoring, opportunity analysis, and revenue optimization.',
      features: ['Lead scoring', 'Opportunity analysis', 'Revenue forecasting', 'Customer insights', 'Sales automation', 'Performance analytics'],
      price: 'Starting at $699/month',
      category: 'Sales',
      popular: true
    }
  ];

  const benefits = [
    'Increase operational efficiency by up to 60%',
    'Reduce operational costs by 40% with intelligent automation',
    'Improve decision-making accuracy by 85% with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with cutting-edge AI technology',
    'Achieve 300% ROI within the first year',
    'Reduce human error by 90% through automation',
    'Accelerate time-to-market by 50%'
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including machine learning, computer vision, natural language processing, and intelligent automation solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, computer vision, NLP, automation, business intelligence, Zion Tech Group" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. From machine learning and computer vision 
              to natural language processing and intelligent automation - we deliver AI that drives real results.
            </p>
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg p-6 mb-12 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">8+</div>
                  <div className="text-gray-300 text-sm">AI Service Categories</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
                  <div className="text-gray-300 text-sm">Decision Accuracy Improvement</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">300%</div>
                  <div className="text-gray-300 text-sm">Average ROI</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to transform your business operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group relative ${
                  service.popular ? 'border-2 border-cyan-500/50' : ''
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-300">Contact for custom pricing</div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIServicesPagePage;