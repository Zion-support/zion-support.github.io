import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Brain, Zap, DollarSign, Users, Clock, Shield, Star, TrendingUp, Code, BarChart3, Mic, FileText, MessageCircle, Box, FlaskConical } from 'lucide-react'

export default function AIServicesPage() {
  const aiServices = [
    {
      name: 'AI Content Generator',
      path: '/ai-content-generator',
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      description: 'Generate high-quality content in seconds with our advanced AI-powered content generator.',
      price: 'Starting at $12/month',
      features: ['Multi-format content', 'SEO optimization', 'Brand voice consistency', '24/7 availability'],
      popular: true
    },
    {
      name: 'AI Voice Assistant',
      path: '/ai-voice-assistant',
      icon: <Mic className="w-8 h-8 text-purple-500" />,
      description: 'Advanced AI voice assistant with natural language processing and phone integration.',
      price: 'Starting at $29/month',
      features: ['Natural voice recognition', 'Conversational AI', 'Phone integration', 'Customizable skills'],
      popular: true
    },
    {
      name: 'AI Chatbot Enterprise',
      path: '/ai-chatbot-enterprise',
      icon: <MessageCircle className="w-8 h-8 text-green-500" />,
      description: 'Enterprise-grade AI chatbot with advanced natural language understanding and automation.',
      price: 'Starting at $199/month',
      features: ['Advanced NLP', 'Multi-channel support', 'Custom training', 'Analytics dashboard'],
      popular: false
    },
    {
      name: 'AI Analytics Dashboard',
      path: '/ai-analytics-dashboard',
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      description: 'Transform your data into actionable insights with AI-powered analytics and visualization.',
      price: 'Starting at $35/month',
      features: ['Real-time analytics', 'AI insights', 'Custom dashboards', 'Predictive modeling'],
      popular: false
    },
    {
      name: 'AI 3D Generation',
      path: '/ai-3d-generation',
      icon: <Box className="w-8 h-8 text-red-500" />,
      description: 'Create stunning 3D models and animations using AI-powered generation technology.',
      price: 'Starting at $49/month',
      features: ['3D model generation', 'Animation creation', 'Texture mapping', 'Export options'],
      popular: false
    },
    {
      name: 'AI Cybersecurity Suite',
      path: '/ai-cybersecurity-suite',
      icon: <Shield className="w-8 h-8 text-yellow-500" />,
      description: 'Comprehensive AI-powered cybersecurity solution with threat detection and prevention.',
      price: 'Starting at $149/month',
      features: ['Threat detection', 'Real-time monitoring', 'Automated response', 'Compliance reporting'],
      popular: true
    },
    {
      name: 'AI Drug Discovery Pro',
      path: '/ai-drug-discovery-pro',
      icon: <FlaskConical className="w-8 h-8 text-indigo-500" />,
      description: 'Advanced AI platform for pharmaceutical research and drug discovery processes.',
      price: 'Starting at $999/month',
      features: ['Molecular analysis', 'Drug interaction prediction', 'Clinical trial optimization', 'Regulatory compliance'],
      popular: false
    },
    {
      name: 'AI CRM Assistant',
      path: '/ai-crm-assistant',
      icon: <Users className="w-8 h-8 text-pink-500" />,
      description: 'Enhance your CRM with AI-powered insights, automation, and customer relationship management.',
      price: 'Starting at $25/month',
      features: ['AI insights', 'Automated workflows', 'Customer segmentation', 'Predictive analytics'],
      popular: false
    }
  ]

  const benefits = [
    {
      icon: <Brain className="w-6 h-6 text-purple-500" />,
      title: 'Advanced AI Technology',
      description: 'Cutting-edge artificial intelligence powered by the latest machine learning algorithms.'
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: 'Lightning Fast',
      description: 'Process requests and generate results in milliseconds with our optimized AI infrastructure.'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Secure & Private',
      description: 'Enterprise-grade security with data encryption and privacy protection built-in.'
    },
    {
      icon: <Code className="w-6 h-6 text-blue-500" />,
      title: 'Easy Integration',
      description: 'Simple APIs and SDKs for seamless integration with your existing systems.'
    }
  ]

  const stats = [
    { number: '50+', label: 'AI Services' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
    { number: '30-day', label: 'Free Trial' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including content generation, voice assistants, chatbots, analytics, and more. Transform your business with artificial intelligence." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI solutions, AI consulting, AI development" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive artificial intelligence solutions designed to transform your business. 
              From content generation to advanced analytics, we have the AI tools you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View All Demos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive collection of AI-powered solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                service.popular ? 'border-purple-500 bg-white/15' : 'border-white/20'
              }`}>
                {service.popular && (
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full text-center mb-6">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-lg font-semibold text-purple-400 mb-4">{service.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.path}
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide cutting-edge AI solutions that deliver real business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Start your free trial today and discover how our AI services can revolutionize your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}