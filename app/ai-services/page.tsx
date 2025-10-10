'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, MessageSquare, Eye, Zap, BarChart, Box, Mic, Shield, TrendingUp, Target, FileText, Search, Phone, Mail, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis'],
      price: 'Starting at $5,000/month',
      marketPrice: '$15,000/month'
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics'],
      price: 'Starting at $3,000/month',
      marketPrice: '$8,000/month'
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Process and understand human language with advanced NLP capabilities.',
      benefits: ['Text analysis', 'Sentiment analysis', 'Language translation', 'Chatbots'],
      price: 'Starting at $2,500/month',
      marketPrice: '$6,000/month'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Extract insights from images and videos using computer vision technology.',
      benefits: ['Image recognition', 'Object detection', 'Video analysis', 'Visual search'],
      price: 'Starting at $4,000/month',
      marketPrice: '$10,000/month'
    }
  ];

  const services = [
    {
      icon: Zap,
      title: 'AI Strategy Consulting',
      description: 'Strategic AI consulting to help you identify opportunities and plan your AI transformation journey.',
      price: '$500/hour',
      duration: '2-4 weeks',
      features: ['AI readiness assessment', 'Technology roadmap', 'ROI analysis', 'Implementation planning']
    },
    {
      icon: Shield,
      title: 'AI Solution Implementation',
      description: 'End-to-end AI solution implementation with our expert team of AI engineers.',
      price: 'Starting at $25,000',
      duration: '3-6 months',
      features: ['Custom AI model development', 'System integration', 'Testing & validation', 'Deployment support']
    },
    {
      icon: TrendingUp,
      title: 'AI System Optimization',
      description: 'Optimize your existing AI systems for better performance and efficiency.',
      price: '$2,000/month',
      duration: 'Ongoing',
      features: ['Performance monitoring', 'Model retraining', 'Cost optimization', 'Scalability improvements']
    },
    {
      icon: Target,
      title: 'AI Training & Education',
      description: 'Comprehensive training programs to upskill your team in AI technologies.',
      price: '$1,500/person',
      duration: '1-2 weeks',
      features: ['Hands-on workshops', 'Certification programs', 'Custom curriculum', 'Ongoing support']
    }
  ];

  const benefits = [
    'Increased operational efficiency by up to 300%',
    'Better decision making with real-time AI insights',
    'Automated repetitive tasks saving 40+ hours/week',
    'Enhanced customer experience with AI personalization',
    'Cost reduction through intelligent automation',
    'Scalable AI solutions that grow with your business',
    '24/7 AI-powered support and monitoring',
    'Continuous learning and model improvement',
    'ROI within 90 days guaranteed',
    'Enterprise-grade security and compliance'
  ];

  const stats = [
    { icon: Brain, value: '99.7%', label: 'AI Accuracy Rate' },
    { icon: Zap, value: '15x', label: 'Faster Processing' },
    { icon: Shield, value: '99.9%', label: 'Uptime SLA' },
    { icon: TrendingUp, value: '400%', label: 'Efficiency Gain' }
  ];

  const aiSolutions = [
    {
      title: 'AI Chatbot Development',
      description: 'Custom AI chatbots with natural language understanding and multi-channel deployment.',
      price: 'Starting at $5,000',
      features: ['Natural language processing', 'Multi-language support', 'Integration with CRM/ERP', 'Analytics dashboard'],
      link: 'https://ziontechgroup.com/ai-chatbot-development'
    },
    {
      title: 'Machine Learning Models',
      description: 'Custom ML models for predictive analytics, classification, and recommendation systems.',
      price: 'Starting at $8,000',
      features: ['Custom model training', 'Real-time predictions', 'A/B testing framework', 'Model monitoring'],
      link: 'https://ziontechgroup.com/machine-learning-models'
    },
    {
      title: 'Computer Vision Solutions',
      description: 'Image and video analysis solutions for quality control, security, and automation.',
      price: 'Starting at $6,000',
      features: ['Object detection', 'Image classification', 'Video analytics', 'Real-time processing'],
      link: 'https://ziontechgroup.com/computer-vision-solutions'
    },
    {
      title: 'AI Data Analytics',
      description: 'Advanced AI-powered analytics platform for business intelligence and insights.',
      price: 'Starting at $4,000/month',
      features: ['Predictive analytics', 'Anomaly detection', 'Automated reporting', 'Data visualization'],
      link: 'https://ziontechgroup.com/ai-data-analytics'
    },
    {
      title: 'AI Process Automation',
      description: 'Intelligent automation solutions for business processes and workflows.',
      price: 'Starting at $3,000/month',
      features: ['Workflow automation', 'Document processing', 'Email automation', 'Task scheduling'],
      link: 'https://ziontechgroup.com/ai-process-automation'
    },
    {
      title: 'AI Voice Solutions',
      description: 'Voice recognition and synthesis solutions for customer service and accessibility.',
      price: 'Starting at $7,000',
      features: ['Speech-to-text', 'Text-to-speech', 'Voice commands', 'Multi-language support'],
      link: 'https://ziontechgroup.com/ai-voice-solutions'
    }
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-cyan-400">{feature.price}</span>
                    <span className="text-lg text-gray-400 line-through">{feature.marketPrice}</span>
                  </div>
                </div>
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

      {/* AI Solutions Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Solutions Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-deploy AI solutions for immediate business impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiSolutions.map((solution, index) => (
              <div key={index} className="glass-card p-8 hover:bg-white/10 transition-all duration-300 group">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{solution.title}</h3>
                <p className="text-gray-300 mb-4">{solution.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{solution.price}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={solution.link}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass-card p-8 text-center hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400">Duration: {service.duration}</div>
                </div>
                <ul className="space-y-2 mb-6 text-left">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://ziontechgroup.com/contact"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
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

      {/* Contact Information Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-sm rounded-3xl p-12 border border-cyan-400/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI services can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ziontechgroup.com/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="https://ziontechgroup.com/consultation"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIServicesPage;