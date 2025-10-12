'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Cloud, Database, Smartphone, Code, Users, Clock, Star, Target, BarChart3, MessageSquare, Image, FileText, Search, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

export default function AIServicesPage() {
  const aiServices = [
    {
      icon: <MessageSquare className="w-12 h-12 text-blue-500" />,
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation for blogs, social media, marketing materials, and technical documentation.',
      features: [
        'Multi-format content generation',
        'SEO optimization',
        'Brand voice consistency',
        'Plagiarism detection',
        'Multi-language support',
        'Content analytics'
      ],
      pricing: {
        basic: '$29.99/month',
        pro: '$59.99/month',
        enterprise: '$149.99/month'
      },
      link: '/ai-content-generator',
      popular: true
    },
    {
      icon: <Users className="w-12 h-12 text-green-500" />,
      title: 'AI Chatbot Builder Enterprise',
      description: 'Create intelligent, conversational AI chatbots for customer service, sales, and support with advanced NLP capabilities.',
      features: [
        'Natural language processing',
        'Multi-channel deployment',
        'Sentiment analysis',
        'Custom training data',
        'Analytics dashboard',
        '24/7 availability'
      ],
      pricing: {
        basic: '$49.99/month',
        pro: '$99.99/month',
        enterprise: '$299.99/month'
      },
      link: '/ai-chatbot-builder'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence with AI-powered insights, predictive analytics, and automated reporting.',
      features: [
        'Predictive analytics',
        'Real-time dashboards',
        'Automated reporting',
        'Data visualization',
        'Custom metrics',
        'API integrations'
      ],
      pricing: {
        basic: '$39.99/month',
        pro: '$79.99/month',
        enterprise: '$199.99/month'
      },
      link: '/ai-analytics-dashboard'
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-orange-500" />,
      title: 'AI Email Assistant',
      description: 'Intelligent email management with AI-powered writing, scheduling, and response optimization.',
      features: [
        'Smart email composition',
        'Auto-scheduling',
        'Response suggestions',
        'Email analytics',
        'Spam filtering',
        'Priority management'
      ],
      pricing: {
        basic: '$19.99/month',
        pro: '$39.99/month',
        enterprise: '$99.99/month'
      },
      link: '/ai-email-assistant'
    },
    {
      icon: <Users className="w-12 h-12 text-cyan-500" />,
      title: 'AI Voice Assistant',
      description: 'Advanced voice AI for customer service, virtual meetings, and hands-free business operations.',
      features: [
        'Natural voice synthesis',
        'Multi-language support',
        'Voice command processing',
        'Meeting transcription',
        'Voice analytics',
        'Custom voice training'
      ],
      pricing: {
        basic: '$34.99/month',
        pro: '$69.99/month',
        enterprise: '$179.99/month'
      },
      link: '/ai-voice-assistant'
    },
    {
      icon: <Settings className="w-12 h-12 text-red-500" />,
      title: 'AI Automation Suite',
      description: 'Comprehensive workflow automation with AI-powered decision making and process optimization.',
      features: [
        'Workflow automation',
        'AI decision making',
        'Process optimization',
        'Integration management',
        'Performance monitoring',
        'Custom automation rules'
      ],
      pricing: {
        basic: '$44.99/month',
        pro: '$89.99/month',
        enterprise: '$229.99/month'
      },
      link: '/ai-automation'
    },
    {
      icon: <Image className="w-12 h-12 text-pink-500" />,
      title: 'AI 3D Generation Studio',
      description: 'Create stunning 3D models, animations, and visualizations using advanced AI generation technology.',
      features: [
        '3D model generation',
        'Animation creation',
        'Texture generation',
        'Lighting optimization',
        'Export to multiple formats',
        'Collaborative editing'
      ],
      pricing: {
        basic: '$59.99/month',
        pro: '$119.99/month',
        enterprise: '$299.99/month'
      },
      link: '/ai-3d-generation'
    },
    {
      icon: <Target className="w-12 h-12 text-teal-500" />,
      title: 'AI Drug Discovery Pro',
      description: 'Revolutionary AI-powered drug discovery platform for pharmaceutical research and development.',
      features: [
        'Molecular analysis',
        'Drug interaction prediction',
        'Clinical trial optimization',
        'Regulatory compliance',
        'Research collaboration tools',
        'Patent analysis'
      ],
      pricing: {
        basic: '$199.99/month',
        pro: '$399.99/month',
        enterprise: '$999.99/month'
      },
      link: '/ai-drug-discovery-pro'
    }
  ];

  const industrySolutions = [
    {
      title: 'Healthcare AI',
      description: 'AI solutions for medical diagnosis, patient care, and healthcare operations.',
      icon: <Target className="w-8 h-8 text-blue-500" />,
      features: ['Medical imaging analysis', 'Patient data insights', 'Treatment recommendations', 'Drug interaction checking']
    },
    {
      title: 'Financial AI',
      description: 'AI-powered financial analysis, fraud detection, and investment optimization.',
      icon: <BarChart3 className="w-8 h-8 text-green-500" />,
      features: ['Risk assessment', 'Fraud detection', 'Investment analysis', 'Market prediction']
    },
    {
      title: 'E-commerce AI',
      description: 'AI solutions for online retail, customer experience, and sales optimization.',
      icon: <Smartphone className="w-8 h-8 text-purple-500" />,
      features: ['Product recommendations', 'Price optimization', 'Customer behavior analysis', 'Inventory management']
    },
    {
      title: 'Manufacturing AI',
      description: 'AI-driven manufacturing optimization, quality control, and predictive maintenance.',
      icon: <Settings className="w-8 h-8 text-orange-500" />,
      features: ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Production planning']
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Williams',
      company: 'MedTech Innovations',
      content: 'The AI Drug Discovery Pro has accelerated our research by 300%. We discovered new compounds in weeks instead of months.',
      rating: 5,
      service: 'AI Drug Discovery Pro'
    },
    {
      name: 'James Rodriguez',
      company: 'TechCorp Solutions',
      content: 'Our AI Chatbot handles 80% of customer inquiries automatically. Customer satisfaction increased by 40%.',
      rating: 5,
      service: 'AI Chatbot Builder'
    },
    {
      name: 'Lisa Chen',
      company: 'DataFlow Analytics',
      content: 'The AI Analytics Dashboard provides insights we never knew existed. Our decision-making process is now data-driven.',
      rating: 5,
      service: 'AI Analytics Dashboard'
    }
  ];

  const stats = [
    { number: '100,000+', label: 'AI Models Deployed' },
    { number: '99.8%', label: 'Accuracy Rate' },
    { number: '500+', label: 'Enterprise Clients' },
    { number: '24/7', label: 'AI Support' }
  ];

  return (
    <>
      <SEOHead 
        title="AI Services - Zion Tech Group"
        description="Cutting-edge AI solutions for businesses. From content generation to drug discovery, we provide comprehensive AI services to transform your operations."
        keywords="ai services, artificial intelligence, machine learning, ai solutions, ai automation, ai analytics"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Advanced AI Services
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Transform your business with cutting-edge artificial intelligence solutions designed for modern enterprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get AI Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our AI Solutions</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Comprehensive AI services tailored to your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {aiServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Pricing Plans</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Basic:</span>
                        <span className="text-white font-semibold">{service.pricing.basic}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Pro:</span>
                        <span className="text-white font-semibold">{service.pricing.pro}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Enterprise:</span>
                        <span className="text-white font-semibold">{service.pricing.enterprise}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Industry-Specific AI Solutions</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Tailored AI solutions for different industries and use cases
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {industrySolutions.map((solution, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{solution.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">{solution.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">What Our Clients Say</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Real results from businesses using our AI solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="mb-2">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                  <div className="text-blue-400 text-sm font-medium">{testimonial.service}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Harness the Power of AI?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our AI solutions can transform your business operations and drive growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                  >
                    Get Free AI Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link 
                    to="/micro-saas-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View Micro SAAS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}