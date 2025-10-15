import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, BarChart3, Brain, CheckCircle, Clock, Globe, Settings, Shield, Star, Users, Zap } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      id: 'ai-analytics',
      title: 'AI Business Intelligence Suite',
      description: 'Advanced AI-powered analytics platform with predictive modeling, real-time insights, and automated reporting for data-driven decision making.',
      icon: BarChart3,
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom ML Models', 'Data Visualization', 'Automated Reporting', 'Anomaly Detection'],
      price: 'Starting at $299/month',
      marketPrice: '$799/month',
      savings: '63%',
      users: '8,500+',
      rating: 4.9,
      popular: true,
      category: 'Analytics',
      link: 'https://ziontechgroup.com/ai-analytics'
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Studio Pro',
      description: 'Enterprise-grade AI content creation platform with multi-language support, brand voice training, and SEO optimization for scalable content production.',
      icon: Brain,
      features: ['Multi-language Content', 'Brand Voice Training', 'SEO Optimization', 'Content Templates', 'Plagiarism Detection', 'Performance Analytics'],
      price: 'Starting at $199/month',
      marketPrice: '$499/month',
      savings: '60%',
      users: '12,000+',
      rating: 4.8,
      popular: false,
      category: 'Content Creation',
      link: 'https://ziontechgroup.com/ai-content-generation'
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Experience Platform',
      description: 'Comprehensive AI-powered customer support solution with intelligent routing, sentiment analysis, and automated resolution for enhanced customer satisfaction.',
      icon: Users,
      features: ['Intelligent Routing', 'Sentiment Analysis', 'Multi-channel Support', 'Knowledge Base AI', 'Escalation Management', 'Performance Metrics'],
      price: 'Starting at $399/month',
      marketPrice: '$999/month',
      savings: '60%',
      users: '6,800+',
      rating: 4.9,
      popular: false,
      category: 'Customer Service',
      link: 'https://ziontechgroup.com/ai-customer-support'
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Security Operations Center',
      description: 'Next-generation AI cybersecurity platform with threat hunting, behavioral analysis, and automated incident response for comprehensive protection.',
      icon: Shield,
      features: ['Threat Hunting', 'Behavioral Analysis', 'Automated Response', 'Compliance Monitoring', 'Risk Assessment', 'Security Orchestration'],
      price: 'Starting at $599/month',
      marketPrice: '$1,499/month',
      savings: '60%',
      users: '4,200+',
      rating: 4.9,
      popular: false,
      category: 'Cybersecurity',
      link: 'https://ziontechgroup.com/ai-cybersecurity'
    },
    {
      id: 'ai-data-analytics',
      title: 'AI Data Science Platform',
      description: 'Complete AI data science platform with automated machine learning, data preprocessing, and model deployment for advanced analytics.',
      icon: BarChart3,
      features: ['AutoML Pipeline', 'Data Preprocessing', 'Model Deployment', 'Feature Engineering', 'Model Monitoring', 'A/B Testing'],
      price: 'Starting at $349/month',
      marketPrice: '$899/month',
      savings: '61%',
      users: '7,100+',
      rating: 4.8,
      popular: false,
      category: 'Data Science',
      link: 'https://ziontechgroup.com/ai-data-analytics'
    },
    {
      id: 'ai-marketing-automation',
      title: 'AI Marketing Intelligence',
      description: 'Advanced AI marketing platform with customer journey optimization, predictive targeting, and automated campaign management for maximum ROI.',
      icon: Zap,
      features: ['Customer Journey Mapping', 'Predictive Targeting', 'Campaign Optimization', 'Personalization Engine', 'ROI Analytics', 'Cross-channel Orchestration'],
      price: 'Starting at $249/month',
      marketPrice: '$699/month',
      savings: '64%',
      users: '9,300+',
      rating: 4.7,
      popular: false,
      category: 'Marketing',
      link: 'https://ziontechgroup.com/ai-marketing-automation'
    },
    {
      id: 'ai-workflow-automation',
      title: 'AI Process Automation Suite',
      description: 'Intelligent workflow automation platform with RPA, document processing, and decision automation for streamlined business operations.',
      icon: Settings,
      features: ['RPA Integration', 'Document Processing', 'Decision Automation', 'Process Mining', 'Exception Handling', 'Performance Analytics'],
      price: 'Starting at $199/month',
      marketPrice: '$599/month',
      savings: '67%',
      users: '5,600+',
      rating: 4.8,
      popular: false,
      category: 'Automation',
      link: 'https://ziontechgroup.com/ai-workflow-automation'
    },
    {
      id: 'ai-voice-assistant',
      title: 'AI Voice Intelligence',
      description: 'Enterprise AI voice platform with natural language processing, voice analytics, and conversational AI for enhanced communication.',
      icon: Users,
      features: ['Natural Language Processing', 'Voice Analytics', 'Conversational AI', 'Multi-language Support', 'Voice Biometrics', 'Integration APIs'],
      price: 'Starting at $179/month',
      marketPrice: '$499/month',
      savings: '64%',
      users: '3,900+',
      rating: 4.9,
      popular: false,
      category: 'Voice AI',
      link: 'https://ziontechgroup.com/ai-voice-assistant'
    },
    {
      id: 'ai-predictive-analytics',
      title: 'AI Predictive Intelligence',
      description: 'Advanced predictive analytics platform with forecasting models, risk assessment, and scenario planning for strategic decision making.',
      icon: BarChart3,
      features: ['Forecasting Models', 'Risk Assessment', 'Scenario Planning', 'Trend Analysis', 'Predictive Maintenance', 'Financial Modeling'],
      price: 'Starting at $399/month',
      marketPrice: '$1,199/month',
      savings: '67%',
      users: '2,800+',
      rating: 4.9,
      popular: false,
      category: 'Predictive Analytics',
      link: 'https://ziontechgroup.com/ai-predictive-analytics'
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and focus on strategic initiatives.',
      icon: Zap,
    },
    {
      title: 'Better Insights',
      description: 'Gain deeper understanding of your data and customer behavior.',
      icon: BarChart3,
    },
    {
      title: 'Cost Savings',
      description: 'Reduce operational costs through intelligent automation.',
      icon: Award,
    },
    {
      title: 'Scalability',
      description: 'Scale your operations without proportional cost increases.',
      icon: Globe,
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including analytics, content generation, customer support, and cybersecurity solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI analytics, AI automation, business AI solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-cyan-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions designed to drive growth, efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose Our AI Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our AI Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                      service.popular 
                        ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                        : 'border-cyan-500/20'
                    }`}
                  >
                    {service.popular && (
                      <div className="flex items-center justify-center mb-4">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>Most Popular</span>
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-cyan-400" />
                      </div>
                      <span className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full">
                        {service.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                    
                    {/* Rating and Users */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                          ))}
                        </div>
                        <span className="text-sm text-gray-300">{service.rating}</span>
                      </div>
                      <span className="text-sm text-gray-400">{service.users} users</span>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-cyan-400">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                          <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                        </div>
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-semibold">
                          Save {service.savings}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-400 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>Setup in 24h</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Link
                        to={`/${service.id}`}
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105"
                      >
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-2 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our AI experts help you identify the best solutions for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;
