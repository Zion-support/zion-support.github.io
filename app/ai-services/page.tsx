'use client';
import React from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, BarChart3, MessageSquare } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const services = [
    {
      id: 'ai-content-generation',
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generation',
      description: 'Advanced AI-powered content creation for blogs, social media, marketing materials, and technical documentation',
      features: [
        'SEO-optimized content generation',
        'Multi-language support (50+ languages)',
        'Brand voice training and customization',
        'Content templates and frameworks',
        'Plagiarism detection and originality scoring',
        'Content scheduling and automation',
        'Team collaboration tools',
        'Analytics and performance tracking'
      ],
      pricing: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      category: 'Content & Marketing',
      popular: true,
      useCases: ['Content Marketing', 'Social Media Management', 'Blog Writing', 'Technical Documentation']
    },
    {
      id: 'ai-analytics-intelligence',
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      title: 'AI Analytics & Business Intelligence',
      description: 'Transform raw data into actionable insights with AI-powered analytics and predictive modeling',
      features: [
        'Real-time data processing and visualization',
        'Predictive analytics and forecasting',
        'Custom KPI dashboards and reports',
        'Automated anomaly detection',
        'Natural language query interface',
        'Machine learning model deployment',
        'Data integration and ETL processes',
        'ROI and performance optimization'
      ],
      pricing: 'Starting at $99/month',
      marketPrice: '$200-1000/month',
      category: 'Data & Analytics',
      popular: true,
      useCases: ['Business Intelligence', 'Sales Forecasting', 'Customer Analytics', 'Performance Monitoring']
    },
    {
      id: 'ai-chatbot-builder',
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, lead generation, and automated assistance',
      features: [
        '24/7 customer support automation',
        'Lead qualification and scoring',
        'FAQ automation and knowledge base',
        'Multi-language support',
        'Integration with CRM systems',
        'Conversation analytics and insights',
        'Custom training and personality',
        'Voice and text support'
      ],
      pricing: 'Starting at $49/month',
      marketPrice: '$100-500/month',
      category: 'Customer Service',
      popular: true,
      useCases: ['Customer Support', 'Lead Generation', 'Sales Automation', 'Internal Help Desk']
    },
    {
      id: 'ai-automation',
      icon: <Brain className="w-8 h-8 text-orange-500" />,
      title: 'AI Process Automation',
      description: 'Automate complex business processes with intelligent AI-powered workflows and decision making',
      features: [
        'Workflow automation and orchestration',
        'Document processing and extraction',
        'Email and communication automation',
        'Data entry and validation',
        'Approval workflows and routing',
        'Exception handling and escalation',
        'Performance monitoring and optimization',
        'Custom rule creation and management'
      ],
      pricing: 'Starting at $79/month',
      marketPrice: '$150-800/month',
      category: 'Automation',
      popular: false,
      useCases: ['Document Processing', 'Email Automation', 'Data Entry', 'Approval Workflows']
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including content generation, analytics, chatbots, and automation solutions. Transform your business with our advanced AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, content generation, analytics, chatbots, automation, business intelligence" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with our comprehensive suite of AI-powered solutions. 
              From content generation to advanced analytics, we provide the tools you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                  {service.popular && (
                    <span className="ml-auto bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-400 font-semibold">{service.pricing}</span>
                    <span className="text-gray-400 text-sm line-through">{service.marketPrice}</span>
                  </div>
                  <span className="text-sm text-gray-400">{service.category}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 text-center block"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss your AI needs and discover how we can help you achieve your goals.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIServicesPage;