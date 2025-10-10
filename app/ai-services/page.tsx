'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
    {
      id: 1,
      title: 'AI-Powered Chatbots',
      description: 'Intelligent conversational AI that provides 24/7 customer support and engagement.',
      icon: Bot,
      category: 'Customer Service',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Sentiment analysis',
        'Integration with CRM systems',
        'Real-time learning capabilities'
      ],
      price: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions']
    },
    {
      id: 2,
      title: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, and marketing.',
      icon: FileText,
      category: 'Content',
      features: [
        'Blog post generation',
        'Social media content',
        'Email marketing campaigns',
        'SEO-optimized content',
        'Brand voice customization'
      ],
      price: 'Starting at $199/month',
      marketPrice: '$300-1500/month',
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing']
    },
    {
      id: 3,
      title: 'AI Data Analytics',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms.',
      icon: BarChart3,
      category: 'Analytics',
      features: [
        'Predictive analytics',
        'Real-time dashboards',
        'Automated reporting',
        'Anomaly detection',
        'Custom data models'
      ],
      price: 'Starting at $399/month',
      marketPrice: '$800-3000/month',
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization']
    },
    {
      id: 4,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation.',
      icon: Eye,
      category: 'Computer Vision',
      features: [
        'Object detection and recognition',
        'Quality control automation',
        'Facial recognition systems',
        'Video analytics',
        'Real-time processing'
      ],
      price: 'Starting at $599/month',
      marketPrice: '$1000-5000/month',
      benefits: ['Automated quality control', 'Enhanced security', 'Real-time monitoring', 'Cost reduction']
    },
    {
      id: 5,
      title: 'AI Voice Processing',
      description: 'Speech recognition, synthesis, and voice analytics for customer interactions.',
      icon: Mic,
      category: 'Voice AI',
      features: [
        'Speech-to-text conversion',
        'Voice synthesis',
        'Voice biometrics',
        'Call analytics',
        'Multi-language support'
      ],
      price: 'Starting at $249/month',
      marketPrice: '$400-1800/month',
      benefits: ['Improved accessibility', 'Voice automation', 'Call quality insights', 'Multi-language support']
    },
    {
      id: 6,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows.',
      icon: Workflow,
      category: 'Automation',
      features: [
        'Process mining',
        'Workflow optimization',
        'Task automation',
        'Exception handling',
        'Performance monitoring'
      ],
      price: 'Starting at $349/month',
      marketPrice: '$600-2500/month',
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation']
    },
    {
      id: 7,
      title: 'AI Cybersecurity',
      description: 'Advanced threat detection and security monitoring using AI algorithms.',
      icon: Shield,
      category: 'Security',
      features: [
        'Threat detection',
        'Behavioral analysis',
        'Incident response',
        'Vulnerability assessment',
        'Compliance monitoring'
      ],
      price: 'Starting at $499/month',
      marketPrice: '$800-4000/month',
      benefits: ['Proactive security', 'Reduced false positives', 'Faster incident response', 'Compliance assurance']
    },
    {
      id: 8,
      title: 'AI Mobile Applications',
      description: 'Custom mobile apps with integrated AI features for iOS and Android.',
      icon: Smartphone,
      category: 'Mobile',
      features: [
        'AI-powered features',
        'Cross-platform development',
        'Offline AI capabilities',
        'Real-time processing',
        'Custom integrations'
      ],
      price: 'Starting at $8,000/project',
      marketPrice: '$15000-50000/project',
      benefits: ['Enhanced user experience', 'Intelligent features', 'Competitive advantage', 'Future-proof solutions']
    },
    {
      id: 9,
      title: 'AI Cloud Infrastructure',
      description: 'Scalable AI infrastructure and model deployment on cloud platforms.',
      icon: Cloud,
      category: 'Infrastructure',
      features: [
        'Model deployment',
        'Auto-scaling',
        'GPU optimization',
        'Data pipeline management',
        'Monitoring and logging'
      ],
      price: 'Starting at $699/month',
      marketPrice: '$1200-5000/month',
      benefits: ['Scalable infrastructure', 'Cost optimization', 'High availability', 'Easy deployment']
    },
    {
      id: 10,
      title: 'AI Design Assistant',
      description: 'AI-powered design tools for graphics, UI/UX, and creative content generation.',
      icon: Palette,
      category: 'Design',
      features: [
        'Automated design generation',
        'Brand consistency',
        'A/B testing optimization',
        'Color and layout suggestions',
        'Template customization'
      ],
      price: 'Starting at $199/month',
      marketPrice: '$300-1200/month',
      benefits: ['Faster design process', 'Consistent branding', 'Creative inspiration', 'Cost-effective solutions']
    }
  ];
  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];
  return (
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including chatbots, content generation, data analytics, computer vision, and more. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, content generation, data analytics, computer vision, AI automation" />
      </Helmet>
      <Navigation />
      
      <main className="pt-20">
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered services for modern businesses." />
        <meta name="keywords" content="AI services, artificial intelligence, automation, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From chatbots to computer vision, we deliver AI that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                </div>
              ))}
            </div>
          </div>
        </section>

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

const AIServicesPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Machine Learning & Deep Learning',
      description: 'Advanced ML algorithms and neural networks for complex pattern recognition and predictive modeling.',
      benefits: ['Custom model development', 'Deep learning frameworks', 'Predictive analytics', 'Automated model training', 'Real-time inference', 'Model optimization', 'A/B testing for models', 'Continuous learning systems']
    },
    {
      icon: BarChart,
      title: 'AI-Powered Business Intelligence',
      description: 'Intelligent analytics platform that transforms raw data into actionable business insights.',
      benefits: ['Automated data analysis', 'Predictive forecasting', 'Anomaly detection', 'Custom dashboards', 'Natural language queries', 'Automated reporting', 'Data visualization', 'ROI optimization']
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text understanding, generation, and human-AI interaction.',
      benefits: ['Sentiment analysis', 'Text classification', 'Language translation', 'Chatbot development', 'Document processing', 'Content generation', 'Voice recognition', 'Conversational AI']
    },
    {
      icon: Eye,
      title: 'Computer Vision & Image Processing',
      description: 'AI-powered visual recognition and image analysis for various business applications.',
      benefits: ['Object detection', 'Facial recognition', 'OCR and document scanning', 'Quality inspection', 'Medical imaging', 'Autonomous vehicles', 'Augmented reality', 'Video analytics']
    },
    {
      icon: Zap,
      title: 'AI Automation & RPA',
      description: 'Intelligent process automation that mimics human actions to streamline business operations.',
      benefits: ['Workflow automation', 'Document processing', 'Data extraction', 'Email automation', 'Calendar management', 'Invoice processing', 'Customer onboarding', 'Compliance monitoring']
    },
    {
      icon: Shield,
      title: 'AI Security & Fraud Detection',
      description: 'Advanced AI security solutions for threat detection, fraud prevention, and risk management.',
      benefits: ['Real-time threat detection', 'Fraud pattern recognition', 'Behavioral analysis', 'Risk assessment', 'Security monitoring', 'Compliance automation', 'Incident response', 'Threat intelligence']
    }
  ];

  const services = [
    {
      icon: Zap,
    },
    {
      icon: TrendingUp,
      title: 'AI Model Optimization',
    },
    {
      icon: Target,
      title: 'AI Training & Education',
    }
  ];

  const benefits = [
    'Increased operational efficiency',
    'Better decision making with data insights',
    'Automated repetitive tasks',
    'Enhanced customer experience',
    'Cost reduction through automation',
    'Scalable AI solutions',
    '24/7 AI-powered support',
    'Continuous learning and improvement'
  ];

  const stats = [
    { icon: Brain, value: '95%', label: 'Accuracy Rate' },
    { icon: Zap, value: '10x', label: 'Faster Processing' },
    { icon: Shield, value: '99.9%', label: 'Uptime' },
    { icon: TrendingUp, value: '300%', label: 'Efficiency Gain' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and AI consulting. Transform your business with our AI expertise." />
        <meta name="keywords" content="AI services, machine learning, NLP, computer vision, AI consulting, artificial intelligence, Zion Tech Group" />
      </Helmet>
      
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. From machine learning to computer vision, we deliver AI that works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to solve complex business challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our AI Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end AI solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our AI Services?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of our proven AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIServicesPage;
      </div>
      <Footer />
    </>
  );
};

export default AIServicesPage;
