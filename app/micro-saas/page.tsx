'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const MicroSaaSPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'AI Email Assistant',
      description: 'Automated email management and response system',
      icon: MessageCircle,
      features: ['Smart Categorization', 'Auto-Responses', 'Sentiment Analysis', 'Priority Scoring'],
      price: '$29/month',
      popular: true
    },
    {
      id: 2,
      title: 'Content Generator',
      description: 'AI-powered content creation for blogs and social media',
      icon: FileText,
      features: ['Blog Posts', 'Social Media', 'SEO Optimization', 'Multi-language'],
      price: '$19/month',
      popular: false
    },
    {
      id: 3,
      title: 'Lead Generation',
      description: 'Automated lead capture and qualification system',
      icon: Target,
      features: ['Lead Scoring', 'CRM Integration', 'Email Sequences', 'Analytics'],
      price: '$39/month',
      popular: false
    },
    {
      id: 4,
      title: 'Analytics Dashboard',
      description: 'Real-time business analytics and reporting',
      icon: BarChart,
      features: ['Real-time Data', 'Custom Reports', 'Data Visualization', 'Export Options'],
      price: '$24/month',
      popular: false
    },
    {
      id: 5,
      title: 'Task Automation',
      description: 'Streamline repetitive tasks with intelligent automation',
      icon: Workflow,
      features: ['Workflow Builder', 'API Integrations', 'Scheduled Tasks', 'Custom Triggers'],
      price: '$34/month',
      popular: false
    },
    {
      id: 6,
      title: 'Customer Support Bot',
      description: 'AI-powered customer support and ticket management',
      icon: MessageSquare,
      features: ['24/7 Support', 'Ticket Routing', 'Knowledge Base', 'Multi-channel'],
      price: '$44/month',
      popular: false
    }
  ];

  const stats = [
    { number: '10K+', label: 'Active Users' },
    { number: '500+', label: 'Micro-SaaS Apps' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built for speed and performance with modern technologies'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'Intelligent automation and smart features in every app'
    },
    {
      icon: BarChart,
      title: 'Analytics Ready',
      description: 'Built-in analytics and reporting for all your apps'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro-SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our collection of powerful micro-SaaS applications designed to solve specific business problems with AI and automation." />
        <meta name="keywords" content="micro-saas, SaaS applications, business automation, AI tools, productivity apps" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro-SaaS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful, focused applications that solve specific business problems with AI and automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300">
                  Explore Apps
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center text-white">
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-cyan-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro-SaaS Apps?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Built with modern technologies and designed for maximum efficiency and user experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro-SaaS Collection
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Discover powerful applications designed to solve specific business challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <service.icon className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-600">{service.price}</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-300 flex items-center justify-center">
                    Try Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Start using our micro-SaaS applications today and experience the power of focused, AI-driven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
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

export default MicroSaaSPage;