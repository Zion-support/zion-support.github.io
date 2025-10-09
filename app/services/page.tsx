'use client';
import React, { useState } from 'react';
import { Brain, Cpu, BarChart, MessageSquare, Eye, Zap, Cloud, Shield, Settings, Database, Smartphone, Code, Target, ShoppingCart, Mic, Video, FileText, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('micro-saas');

  const microSAASServices = [
    {
      title: 'AI Project Manager Pro',
      description: 'Intelligent project planning with AI-powered resource optimization, timeline prediction, and risk assessment',
      icon: BarChart,
      price: '$99/month',
      features: ['AI-powered planning', 'Smart task management', 'Predictive analytics', 'Team collaboration'],
      benefits: ['40% productivity increase', '70% fewer delays', '85% planning accuracy'],
      popular: true,
      category: 'Productivity'
    },
    {
      title: 'AI Social Media Manager',
      description: 'Automate your social media with AI-powered content creation, smart scheduling, and audience engagement',
      icon: MessageSquare,
      price: '$79/month',
      features: ['AI content creation', 'Smart scheduling', 'Analytics & insights', 'Audience intelligence'],
      benefits: ['200% engagement increase', '20+ hours saved/week', '40% more reach'],
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics and real-time reporting',
      icon: BarChart,
      price: '$149/month',
      features: ['AI-powered insights', 'Real-time dashboards', 'Advanced analytics', 'User behavior tracking'],
      benefits: ['45% revenue increase', '60% productivity boost', '30% conversion lift'],
      popular: true,
      category: 'Analytics'
    },
    {
      title: 'AI Email Marketing Suite',
      description: 'Transform your email marketing with AI-powered content generation, automation, and personalization',
      icon: MessageSquare,
      price: '$99/month',
      features: ['AI content generation', 'Smart segmentation', 'Advanced analytics', 'Automated campaigns'],
      benefits: ['65% open rate increase', '40% revenue growth', '80% time saved'],
      popular: true,
      category: 'Marketing'
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Provide 24/7 intelligent customer support with AI-powered chatbot and human handoff',
      icon: MessageSquare,
      price: '$149/month',
      features: ['Natural language processing', '24/7 availability', 'Human handoff', 'Analytics & insights'],
      benefits: ['90% response time reduction', '45% satisfaction increase', '80% queries handled automatically'],
      popular: true,
      category: 'Support'
    },
    {
      title: 'AI E-commerce Optimizer',
      description: 'Optimize your e-commerce store with AI-powered product recommendations, pricing optimization, and conversion tracking',
      icon: ShoppingCart,
      price: '$179/month',
      features: ['Product recommendations', 'Pricing optimization', 'Conversion tracking', 'Customer segmentation'],
      benefits: ['25% revenue increase', '40% conversion boost', 'Better customer experience'],
      popular: true,
      category: 'E-commerce'
    }
  ];

  const aiServices = [
    {
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics, decision-making, and intelligent automation',
      icon: Brain,
      price: '$1,500/month',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring'],
      benefits: ['40% better predictions', '60% faster insights', 'Custom solutions', 'Scalable architecture'],
      category: 'Core AI'
    },
    {
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, language understanding, and conversational AI',
      icon: MessageSquare,
      price: '$1,200/month',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      benefits: ['90% accuracy', 'Multi-language support', 'Real-time processing', 'Custom models'],
      category: 'Language AI'
    },
    {
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection, recognition, and visual intelligence',
      icon: Eye,
      price: '$1,800/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'],
      benefits: ['95% accuracy', 'Real-time processing', 'Industry-specific models', 'Edge deployment'],
      category: 'Visual AI'
    },
    {
      title: 'AI Automation Platform',
      description: 'Intelligent process automation with decision-making capabilities and workflow optimization',
      icon: Zap,
      price: '$1,400/month',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'],
      benefits: ['80% automation', '60% cost reduction', 'Error elimination', 'Scalable processes'],
      category: 'Automation'
    }
  ];

  const itServices = [
    {
      title: 'Cloud Services & Migration',
      description: 'Comprehensive cloud migration, setup, optimization, and management services across all major platforms',
      icon: Cloud,
      price: '$1,299/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration'],
      benefits: ['40% cost reduction', '99.9% uptime', 'Scalable infrastructure', 'Enhanced security'],
      category: 'Cloud Computing'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced security solutions with threat detection, prevention, and incident response capabilities',
      icon: Shield,
      price: '$1,599/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response'],
      benefits: ['99% threat detection', 'Faster response times', 'Compliance assurance', 'Risk reduction'],
      category: 'Security'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring solutions',
      icon: Settings,
      price: '$1,199/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup'],
      benefits: ['50% faster deployments', '90% fewer errors', 'Automated processes', 'Better collaboration'],
      category: 'DevOps'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning and performance monitoring',
      icon: Database,
      price: '$899/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening'],
      benefits: ['60% performance boost', 'Zero data loss', 'Automated optimization', 'Cost savings'],
      category: 'Database'
    }
  ];

  const tabs = [
    { id: 'micro-saas', name: 'Micro SAAS Solutions', icon: Target },
    { id: 'ai-services', name: 'AI Services', icon: Brain },
    { id: 'it-services', name: 'IT Services', icon: Cpu }
  ];

  const getCurrentServices = () => {
    switch (activeTab) {
      case 'micro-saas':
        return microSAASServices;
      case 'ai-services':
        return aiServices;
      case 'it-services':
        return itServices;
      default:
        return microSAASServices;
    }
  };

  return (
    <>
      <SEOOptimizer
        title="Services - Zion Tech Group"
        description="Comprehensive AI and IT services including micro SAAS solutions, AI services, and IT consulting. Transform your business with our cutting-edge technology solutions."
        keywords="AI services, IT services, micro SAAS, cloud migration, cybersecurity, machine learning, digital transformation"
      />
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI and IT solutions designed to transform your business. From micro SAAS applications 
              to enterprise-level AI and IT services, we have everything you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>

        {/* Service Tabs */}
        <div className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getCurrentServices().map((service, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  {service.popular && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      <span className="text-sm text-cyan-400">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    href="/contact"
                    className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-slate-800/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our experts are ready to help you choose and implement the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                Start Your Transformation
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ServicesPage;