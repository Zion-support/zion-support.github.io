'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, Brain, Zap, Shield, Globe, BarChart3, MessageSquare, Users, Code, Eye, FileText, Target, Clock, DollarSign, TrendingUp, Database, Cloud, Smartphone } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
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
      id: 'ai-customer-service',
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'AI Customer Service Solutions',
      description: 'Intelligent customer support with chatbots, sentiment analysis, and automated ticket routing',
      features: [
        '24/7 AI-powered chatbots',
        'Natural language processing (NLP)',
        'Sentiment analysis and emotion detection',
        'Automated ticket classification and routing',
        'Knowledge base integration',
        'Multi-channel support (web, email, social)',
        'Human handoff and escalation',
        'Performance analytics and optimization'
      ],
      pricing: 'Starting at $89/month',
      marketPrice: '$150-500/month',
      category: 'Customer Experience',
      popular: true,
      useCases: ['Customer Support', 'Lead Qualification', 'FAQ Automation', 'Ticket Management']
    },
    {
      id: 'ai-computer-vision',
      icon: <Eye className="w-8 h-8 text-orange-500" />,
      title: 'AI Computer Vision',
      description: 'Advanced image and video analysis for object detection, facial recognition, and visual content understanding',
      features: [
        'Object detection and classification',
        'Facial recognition and verification',
        'Image and video content analysis',
        'OCR and text extraction from images',
        'Quality control and defect detection',
        'Real-time video processing',
        'Custom model training and deployment',
        'API integration and SDK support'
      ],
      pricing: 'Starting at $199/month',
      marketPrice: '$300-2000/month',
      category: 'Computer Vision',
      popular: false,
      useCases: ['Quality Control', 'Security & Surveillance', 'Document Processing', 'Medical Imaging']
    },
    {
      id: 'ai-automation',
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'AI Process Automation',
      description: 'Intelligent automation for repetitive tasks, workflow optimization, and business process enhancement',
      features: [
        'Robotic Process Automation (RPA)',
        'Workflow design and optimization',
        'Document processing and data extraction',
        'Email and communication automation',
        'Integration with existing systems',
        'Exception handling and error recovery',
        'Performance monitoring and analytics',
        'Scalable cloud deployment'
      ],
      pricing: 'Starting at $149/month',
      marketPrice: '$250-1500/month',
      category: 'Automation',
      popular: true,
      useCases: ['Document Processing', 'Data Entry', 'Email Automation', 'Workflow Optimization']
    },
    {
      id: 'ai-cybersecurity',
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Cybersecurity Solutions',
      description: 'Advanced threat detection, security monitoring, and automated incident response using AI',
      features: [
        'Real-time threat detection and analysis',
        'Behavioral anomaly detection',
        'Automated incident response',
        'Vulnerability assessment and scanning',
        'Security log analysis and correlation',
        'Phishing and malware detection',
        'Compliance monitoring and reporting',
        '24/7 security operations center (SOC)'
      ],
      pricing: 'Starting at $299/month',
      marketPrice: '$500-5000/month',
      category: 'Security',
      popular: false,
      useCases: ['Threat Detection', 'Incident Response', 'Compliance Monitoring', 'Security Analytics']
    },
    {
      id: 'ai-natural-language-processing',
      icon: <Brain className="w-8 h-8 text-cyan-500" />,
      title: 'AI Natural Language Processing',
      description: 'Advanced text analysis, language understanding, and conversational AI for business applications',
      features: [
        'Text classification and sentiment analysis',
        'Named entity recognition (NER)',
        'Language translation and localization',
        'Text summarization and extraction',
        'Conversational AI and chatbots',
        'Document analysis and understanding',
        'Custom model training and fine-tuning',
        'Multi-language support and processing'
      ],
      pricing: 'Starting at $79/month',
      marketPrice: '$150-800/month',
      category: 'Language Processing',
      popular: true,
      useCases: ['Text Analysis', 'Language Translation', 'Document Processing', 'Conversational AI']
    },
    {
      id: 'ai-predictive-modeling',
      icon: <TrendingUp className="w-8 h-8 text-pink-500" />,
      title: 'AI Predictive Modeling',
      description: 'Machine learning models for forecasting, risk assessment, and data-driven decision making',
      features: [
        'Time series forecasting and prediction',
        'Risk assessment and scoring models',
        'Customer lifetime value prediction',
        'Churn prediction and prevention',
        'Demand forecasting and planning',
        'Fraud detection and prevention',
        'Model training and validation',
        'Real-time prediction APIs'
      ],
      pricing: 'Starting at $199/month',
      marketPrice: '$300-2000/month',
      category: 'Predictive Analytics',
      popular: false,
      useCases: ['Sales Forecasting', 'Risk Assessment', 'Customer Analytics', 'Fraud Detection']
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      services: ['Medical Image Analysis', 'Patient Data Analytics', 'Drug Discovery', 'Diagnostic Assistance']
    },
    {
      name: 'Finance',
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      services: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring']
    },
    {
      name: 'E-commerce',
      icon: <Globe className="w-6 h-6 text-purple-500" />,
      services: ['Recommendation Engines', 'Price Optimization', 'Inventory Management', 'Customer Analytics']
    },
    {
      name: 'Manufacturing',
      icon: <Code className="w-6 h-6 text-orange-500" />,
      services: ['Quality Control', 'Predictive Maintenance', 'Supply Chain Optimization', 'Process Automation']
    },
    {
      name: 'Education',
      icon: <Brain className="w-6 h-6 text-cyan-500" />,
      services: ['Personalized Learning', 'Content Generation', 'Student Analytics', 'Automated Assessment']
    },
    {
      name: 'Real Estate',
      icon: <Target className="w-6 h-6 text-red-500" />,
      services: ['Property Valuation', 'Market Analysis', 'Lead Generation', 'Virtual Tours']
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Rapid Implementation',
      description: 'Get your AI solutions up and running in weeks, not months, with our proven implementation methodology'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption, compliance certifications, and data protection'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Scalable Solutions',
      description: 'Built for scale with cloud-native architecture that grows with your business needs'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Expert Support',
      description: 'Dedicated AI specialists and 24/7 support to ensure your success and maximize ROI'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Mitchell',
      company: 'Chief Technology Officer, MedTech Solutions',
      content: 'Zion Tech Group\'s AI analytics solution helped us reduce patient diagnosis time by 40% while improving accuracy. The implementation was seamless.',
      rating: 5,
      service: 'AI Analytics & Business Intelligence'
    },
    {
      name: 'James Rodriguez',
      company: 'VP of Operations, RetailMax',
      content: 'Their AI automation platform transformed our inventory management. We\'ve seen a 60% reduction in stockouts and 25% improvement in efficiency.',
      rating: 5,
      service: 'AI Process Automation'
    },
    {
      name: 'Lisa Chen',
      company: 'Marketing Director, ContentCorp',
      content: 'The AI content generation service has revolutionized our content strategy. We\'re producing 5x more content with higher quality and better engagement.',
      rating: 5,
      service: 'AI Content Generation'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Advanced Artificial Intelligence Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including content generation, analytics, automation, computer vision, and more. Expert implementation and support." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, computer vision, natural language processing, business intelligence" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Leading AI Solutions Provider
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge artificial intelligence solutions. From content generation to predictive analytics, 
              we deliver AI-powered tools that drive growth, efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="#services"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-gray-400">AI Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-gray-400">AI Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-gray-400">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-gray-400">Expert Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to address every aspect of your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      {service.icon}
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                        <span className="text-sm text-purple-300">{service.category}</span>
                      </div>
                    </div>
                    {service.popular && (
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-yellow-400 text-sm font-medium">Popular</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-lg font-bold text-white">{service.pricing}</div>
                      <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Use Cases</div>
                      <div className="text-sm text-white">{service.useCases.slice(0, 2).join(', ')}</div>
                    </div>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Solutions for Every Industry
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized AI implementations tailored to your industry's unique challenges and opportunities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {industry.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{industry.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {industry.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {service}
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
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver AI solutions that drive real business value and measurable results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <benefit.icon className="w-12 h-12 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our AI solutions have transformed businesses across industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="mb-2">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                  <div className="text-sm text-purple-300">{testimonial.service}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Let's discuss how our AI services can transform your business. 
                Get a free consultation and custom AI strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Consultation
                </Link>
                <Link
                  to="/micro-saas"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
                >
                  Explore Micro SaaS Tools
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