'use client';
import React from 'react';
import { Brain, Zap, Eye, MessageSquare, BarChart, Shield, Code, Smartphone, ShoppingCart, Users, TrendingUp, FileText, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'Machine Learning Solutions',
      description: 'Custom ML models for predictive analytics and decision-making',
      features: ['Predictive Analytics', 'Custom Model Development', 'Data Pipeline Setup', 'Model Monitoring'],
      benefits: ['40% improvement in accuracy', 'Real-time predictions', 'Scalable solutions'],
      price: 'Starting at $1,500/month'
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis and language understanding',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      benefits: ['90% accuracy in text understanding', 'Multi-language support', 'Real-time processing'],
      price: 'Starting at $1,200/month'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Image and video analysis solutions for object detection and recognition',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition'],
      benefits: ['95% detection accuracy', 'Real-time processing', 'Custom model training'],
      price: 'Starting at $1,800/month'
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Intelligent process automation with decision-making capabilities',
      features: ['Process Automation', 'Workflow Optimization', 'Decision Trees', 'Exception Handling'],
      benefits: ['70% time savings', 'Reduced errors', '24/7 operation'],
      price: 'Starting at $1,400/month'
    },
    {
      icon: BarChart,
      title: 'AI Analytics',
      description: 'Advanced analytics powered by AI for business intelligence',
      features: ['Predictive Analytics', 'Anomaly Detection', 'Trend Analysis', 'Custom Dashboards'],
      benefits: ['50% faster insights', 'Proactive alerts', 'Data-driven decisions'],
      price: 'Starting at $1,600/month'
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'AI-powered security solutions for threat detection and prevention',
      features: ['Threat Detection', 'Behavioral Analysis', 'Risk Assessment', 'Incident Response'],
      benefits: ['99.9% threat detection', 'Real-time monitoring', 'Automated response'],
      price: 'Starting at $2,000/month'
    },
    {
      icon: Code,
      title: 'AI Code Generation',
      description: 'Automated code generation and optimization using AI',
      features: ['Code Generation', 'Bug Detection', 'Performance Optimization', 'Code Review'],
      benefits: ['60% faster development', 'Reduced bugs', 'Improved code quality'],
      price: 'Starting at $1,300/month'
    },
    {
      icon: Smartphone,
      title: 'AI Mobile Development',
      description: 'AI-powered mobile applications and solutions',
      features: ['Mobile AI Integration', 'On-device Processing', 'Cross-platform Development', 'Performance Optimization'],
      benefits: ['Faster app development', 'Better user experience', 'Offline capabilities'],
      price: 'Starting at $1,700/month'
    },
    {
      icon: ShoppingCart,
      title: 'AI E-commerce',
      description: 'AI solutions for e-commerce optimization and personalization',
      features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Segmentation'],
      benefits: ['30% increase in sales', 'Improved customer experience', 'Reduced inventory costs'],
      price: 'Starting at $1,500/month'
    },
    {
      icon: Users,
      title: 'AI Customer Support',
      description: 'Intelligent customer support solutions with AI chatbots',
      features: ['Chatbot Development', 'Sentiment Analysis', 'Ticket Routing', 'Knowledge Base'],
      benefits: ['80% query resolution', '24/7 availability', 'Improved satisfaction'],
      price: 'Starting at $1,200/month'
    },
    {
      icon: TrendingUp,
      title: 'AI Sales Automation',
      description: 'AI-powered sales processes and lead generation',
      features: ['Lead Scoring', 'Sales Forecasting', 'Pipeline Management', 'Customer Insights'],
      benefits: ['40% increase in conversions', 'Better lead quality', 'Improved forecasting'],
      price: 'Starting at $1,400/month'
    },
    {
      icon: FileText,
      title: 'AI Document Processing',
      description: 'Intelligent document analysis and processing solutions',
      features: ['Document Classification', 'Data Extraction', 'OCR Processing', 'Compliance Checking'],
      benefits: ['90% accuracy in extraction', 'Faster processing', 'Reduced manual work'],
      price: 'Starting at $1,100/month'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs and identify AI opportunities for maximum impact.',
      icon: Brain
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design a custom AI solution tailored to your specific requirements.',
      icon: Code
    },
    {
      step: '03',
      title: 'Development & Training',
      description: 'We develop and train AI models using your data and industry best practices.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Deployment & Integration',
      description: 'We deploy the solution and integrate it seamlessly with your existing systems.',
      icon: CheckCircle
    },
    {
      step: '05',
      title: 'Monitoring & Optimization',
      description: 'We continuously monitor performance and optimize the solution for better results.',
      icon: TrendingUp
    }
  ];

  const caseStudies = [
    {
      company: 'TechCorp Inc.',
      industry: 'Manufacturing',
      challenge: 'Optimize production line efficiency',
      solution: 'AI-powered predictive maintenance',
      results: ['25% reduction in downtime', '40% cost savings', '99.5% uptime achieved'],
      image: '/case-studies/techcorp.jpg'
    },
    {
      company: 'FinanceFlow Ltd.',
      industry: 'Financial Services',
      challenge: 'Improve fraud detection accuracy',
      solution: 'Machine learning fraud detection system',
      results: ['95% fraud detection accuracy', '60% reduction in false positives', '$2M saved annually'],
      image: '/case-studies/financeflow.jpg'
    },
    {
      company: 'HealthTech Solutions',
      industry: 'Healthcare',
      challenge: 'Automate medical image analysis',
      solution: 'Computer vision diagnostic system',
      results: ['90% diagnostic accuracy', '50% faster analysis', 'Improved patient outcomes'],
      image: '/case-studies/healthtech.jpg'
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our comprehensive AI solutions. From machine learning to computer vision, 
              we provide cutting-edge artificial intelligence services tailored to your needs.
            </p>
          </div>

          {/* AI Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {aiServices.map((service, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-pink-400 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                        <Star className="w-3 h-3 text-pink-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400 mb-2 neon-text">{service.price}</div>
                  <a 
                    href="/contact" 
                    className="cyber-button px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Our AI Development Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{step.step}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="w-full h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {study.company.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                  <p className="text-cyan-400 text-sm mb-4">{study.industry}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/consultation"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
              >
                Free Consultation
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AIServicesPage;