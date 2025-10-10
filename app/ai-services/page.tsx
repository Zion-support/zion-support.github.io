'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Zap, Shield, BarChart, Users, MessageCircle, Heart, DollarSign, ArrowRight, CheckCircle, Star, Clock, Globe, Cpu, Database, Target, Sparkles } from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: BarChart,
      title: 'AI Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom ML Models', 'Data Visualization'],
      pricing: 'Starting at $2,500/month',
      href: '/ai-analytics',
      benefits: ['300% faster insights', '95% accuracy in predictions', 'Real-time monitoring', 'Custom reporting']
    },
    {
      icon: Zap,
      title: 'AI Process Automation',
      description: 'Streamline workflows and eliminate manual tasks with intelligent automation.',
      features: ['Workflow Automation', 'Document Processing', 'Email Automation', 'Task Scheduling'],
      pricing: 'Starting at $1,800/month',
      href: '/ai-automation',
      benefits: ['80% time savings', '99.9% accuracy', '24/7 operation', 'Scalable solutions']
    },
    {
      icon: MessageCircle,
      title: 'AI Chatbot & Customer Support',
      description: 'Provide 24/7 intelligent customer support with advanced conversational AI.',
      features: ['Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'Live Handoff'],
      pricing: 'Starting at $1,200/month',
      href: '/ai-chatbot-builder',
      benefits: ['90% query resolution', 'Instant responses', '24/7 availability', 'Cost reduction']
    },
    {
      icon: Users,
      title: 'AI CRM & Sales Optimization',
      description: 'Enhance customer relationships and boost sales with AI-powered CRM solutions.',
      features: ['Lead Scoring', 'Sales Forecasting', 'Customer Segmentation', 'Automated Follow-ups'],
      pricing: 'Starting at $2,000/month',
      href: '/ai-crm',
      benefits: ['40% increase in conversions', 'Better lead quality', 'Automated workflows', 'Revenue growth']
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity & Threat Detection',
      description: 'Protect your business with advanced AI-powered security solutions.',
      features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Compliance Monitoring'],
      pricing: 'Starting at $3,000/month',
      href: '/ai-cybersecurity',
      benefits: ['99.9% threat detection', 'Real-time monitoring', 'Automated response', 'Compliance assurance']
    },
    {
      icon: Database,
      title: 'AI Data Analytics & Insights',
      description: 'Unlock the power of your data with advanced AI analytics and machine learning.',
      features: ['Data Mining', 'Pattern Recognition', 'Predictive Modeling', 'Custom Dashboards'],
      pricing: 'Starting at $2,200/month',
      href: '/ai-data-analytics',
      benefits: ['Deep data insights', 'Predictive capabilities', 'Custom analytics', 'ROI optimization']
    },
    {
      icon: Heart,
      title: 'AI Healthcare Solutions',
      description: 'Revolutionize healthcare with AI-powered diagnostic and treatment solutions.',
      features: ['Medical Imaging', 'Diagnostic Assistance', 'Treatment Planning', 'Patient Monitoring'],
      pricing: 'Starting at $4,500/month',
      href: '/ai-healthcare',
      benefits: ['Improved accuracy', 'Faster diagnosis', 'Better outcomes', 'Cost efficiency']
    },
    {
      icon: DollarSign,
      title: 'AI Fintech & Financial Services',
      description: 'Transform financial operations with AI-powered fintech solutions.',
      features: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring'],
      pricing: 'Starting at $3,500/month',
      href: '/ai-fintech',
      benefits: ['Reduced fraud', 'Better risk management', 'Automated trading', 'Compliance']
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: Heart, description: 'Medical AI solutions for better patient care' },
    { name: 'Finance', icon: DollarSign, description: 'AI-powered financial services and fraud detection' },
    { name: 'E-commerce', icon: Globe, description: 'Personalized shopping experiences and recommendations' },
    { name: 'Manufacturing', icon: Cpu, description: 'Smart manufacturing and predictive maintenance' },
    { name: 'Education', icon: Users, description: 'Personalized learning and educational analytics' },
    { name: 'Retail', icon: Target, description: 'Customer insights and inventory optimization' }
  ];

  const stats = [
    { number: '500+', label: 'AI Projects Delivered' },
    { number: '95%', label: 'Client Satisfaction Rate' },
    { number: '300%', label: 'Average ROI Improvement' },
    { number: '24/7', label: 'AI Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Advanced AI Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI Services
              </span>
              <br />
              <span className="text-3xl md:text-5xl">That Transform Your Business</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Leverage cutting-edge artificial intelligence to automate processes, gain insights, 
              and drive innovation across your organization. Our AI solutions deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Call (302) 464-0950</span>
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to address your specific business challenges and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={service.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group border border-white/10"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.pricing}</div>
                  <div className="text-sm text-gray-400">Includes setup, training & support</div>
                </div>

                <Link
                  to={service.href}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are tailored to meet the unique needs of various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-300 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI solutions can drive innovation and growth in your organization. 
            Get a free consultation and custom AI strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>(302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiServicesPage;