import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
<<<<<<< HEAD
import { CheckCircle, Brain, Shield, BarChart, Users, Globe, Code, Smartphone, Mail, Phone, Cpu, Target, MessageSquare, TrendingUp, Zap } from 'lucide-react';
=======
import { CheckCircle, Brain, Zap, Shield, BarChart, Users, Globe, Code, Smartphone, Mail, Phone, Target, MessageSquare, TrendingUp, Cpu } from 'lucide-react';
>>>>>>> cursor/enhance-application-with-new-services-and-improvements-145c
=======
import { CheckCircle, Brain, Zap, Shield, BarChart, Users, Globe, Code, Smartphone, Mail, Phone, Target, MessageSquare, TrendingUp, Cpu } from 'lucide-react';
>>>>>>> cursor/comprehensive-app-audit-and-update-f3ea

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      id: 'ai-automation-platform',
      name: 'AI Automation Platform',
      description: 'Comprehensive AI-powered automation platform that streamlines business processes and reduces manual work.',
      features: ['Process Automation', 'Workflow Optimization', 'RPA Integration', 'Custom AI Models', 'Real-time Monitoring', 'Scalable Architecture'],
      pricing: { monthly: 299, yearly: 2990, currency: 'USD' },
      category: 'Automation',
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      popular: true
    },
    {
      id: 'ai-analytics-suite',
      name: 'AI Analytics Suite',
      description: 'Advanced AI-powered analytics platform for predictive insights and data-driven decision making.',
      features: ['Predictive Analytics', 'Machine Learning Models', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'API Integrations'],
      pricing: { monthly: 199, yearly: 1990, currency: 'USD' },
      category: 'Analytics',
      icon: <BarChart className="w-8 h-8 text-purple-400" />
    },
    {
      id: 'ai-chatbot-enterprise',
      name: 'AI Chatbot Enterprise',
      description: 'Intelligent conversational AI platform with natural language processing and multi-channel support.',
      features: ['NLP Processing', 'Multi-language Support', 'Voice Integration', 'Sentiment Analysis', 'Human Handoff', 'Analytics Dashboard'],
      pricing: { monthly: 149, yearly: 1490, currency: 'USD' },
      category: 'Conversational AI',
      icon: <MessageSquare className="w-8 h-8 text-green-400" />
    },
    {
      id: 'ai-computer-vision',
      name: 'AI Computer Vision',
      description: 'Advanced computer vision solutions for image recognition, object detection, and visual analytics.',
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'OCR Processing', 'Video Analytics', 'Custom Model Training'],
      pricing: { monthly: 249, yearly: 2490, currency: 'USD' },
      category: 'Computer Vision',
      icon: <Cpu className="w-8 h-8 text-orange-400" />
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation Pro',
      description: 'Advanced AI content creation platform for marketing, documentation, and creative writing.',
      features: ['GPT-4 Integration', 'Multi-format Support', 'Brand Voice Training', 'SEO Optimization', 'Content Planning', 'Quality Assurance'],
      pricing: { monthly: 99, yearly: 990, currency: 'USD' },
      category: 'Content Creation',
      icon: <Code className="w-8 h-8 text-blue-400" />
    },
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      description: 'Intelligent business intelligence platform with AI-powered insights and automated reporting.',
      features: ['Automated Insights', 'Predictive Modeling', 'Custom Dashboards', 'Data Integration', 'Alert System', 'ROI Tracking'],
      pricing: { monthly: 179, yearly: 1790, currency: 'USD' },
      category: 'Business Intelligence',
      icon: <Target className="w-8 h-8 text-red-400" />
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered cybersecurity platform for threat detection and prevention.',
      features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Risk Assessment', 'Compliance Monitoring', '24/7 Monitoring'],
      pricing: { monthly: 399, yearly: 3990, currency: 'USD' },
      category: 'Cybersecurity',
      icon: <Shield className="w-8 h-8 text-yellow-400" />
    },
    {
      id: 'ai-mobile-apps',
      name: 'AI Mobile Applications',
      description: 'Custom AI-powered mobile applications with intelligent features and personalization.',
      features: ['Custom AI Features', 'Cross-platform Support', 'Real-time Processing', 'Offline Capabilities', 'Push Notifications', 'Analytics Integration'],
      pricing: { monthly: 349, yearly: 3490, currency: 'USD' },
      category: 'Mobile AI',
      icon: <Smartphone className="w-8 h-8 text-indigo-400" />
    }
  ];

  const useCases = [
    {
      title: 'Healthcare AI',
      description: 'AI-powered diagnostic tools and patient care optimization',
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      benefits: ['Improved Diagnosis Accuracy', 'Reduced Treatment Time', 'Cost Savings', 'Better Patient Outcomes']
    },
    {
      title: 'Financial Services',
      description: 'AI-driven fraud detection and risk assessment',
      icon: <Shield className="w-6 h-6 text-green-400" />,
      benefits: ['Fraud Prevention', 'Risk Mitigation', 'Compliance Automation', 'Enhanced Security']
    },
    {
      title: 'E-commerce',
      description: 'Personalized shopping experiences and inventory optimization',
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      benefits: ['Increased Sales', 'Better Customer Experience', 'Inventory Optimization', 'Price Optimization']
    },
    {
      title: 'Manufacturing',
      description: 'Predictive maintenance and quality control automation',
      icon: <Cpu className="w-6 h-6 text-orange-400" />,
      benefits: ['Reduced Downtime', 'Quality Improvement', 'Cost Reduction', 'Efficiency Gains']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions | Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions for modern businesses. Machine learning, automation, computer vision, and intelligent systems." />
        <meta name="keywords" content="ai solutions, artificial intelligence, machine learning, automation, computer vision, ai consulting" />
        <meta property="og:title" content="AI Solutions | Zion Tech Group" />
        <meta property="og:description" content="Advanced AI solutions for modern businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From automation to machine learning, 
              we provide comprehensive AI services that drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our AI Solutions
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI services designed to solve complex business challenges and drive digital transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service) => (
                <div key={service.id} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border transition-all duration-300 hover:scale-105 ${
                  service.popular ? 'border-cyan-400 ring-2 ring-cyan-400/20' : 'border-slate-700 hover:border-purple-500'
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-white">
                      ${service.pricing.monthly}
                      <span className="text-sm text-gray-400 font-normal">/month</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      ${service.pricing.yearly}/year (Save ${(service.pricing.monthly * 12) - service.pricing.yearly})
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col gap-2">
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                      className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-center"
                    >
                      Get Started
                    </a>
                    <a
                      href="tel:+13024640950"
                      className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-center"
                    >
                      Call (302) 464-0950
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                AI Use Cases Across Industries
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Discover how our AI solutions are transforming businesses across various industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-cyan-400 transition-all duration-300">
                  <div className="mb-4">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                  <ul className="space-y-1">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our AI Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Solutions?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our AI solutions are built with cutting-edge technology and industry expertise
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Advanced AI Models</h3>
                <p className="text-gray-300">State-of-the-art machine learning models and algorithms</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security with data privacy compliance</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Proven ROI</h3>
                <p className="text-gray-300">Average 300% ROI within 6 months of implementation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Expert Support</h3>
                <p className="text-gray-300">24/7 support from AI specialists and data scientists</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 p-12 rounded-lg border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of enterprises that have already transformed their operations with our AI solutions. 
                Get started today with a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISolutionsPage;