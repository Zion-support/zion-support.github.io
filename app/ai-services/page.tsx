'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Zap, Brain, Bot, BarChart3, FileText, Shield, Globe, Smartphone, Database, Cloud, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AIServicesPage() {
  const aiServices = [
    {
      icon: <FileText className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generation',
      description: 'Generate high-quality, SEO-optimized content for blogs, websites, marketing materials, and social media.',
      features: [
        'Blog posts and articles',
        'Product descriptions',
        'Social media content',
        'Email marketing campaigns',
        'Technical documentation',
        'Creative writing'
      ],
      pricing: 'Starting at $500/month',
      link: '/ai-content-generation',
      popular: true
    },
    {
      icon: <Bot className="w-8 h-8 text-green-500" />,
      title: 'AI Chatbot Development',
      description: 'Intelligent conversational AI chatbots for customer support, lead generation, and sales automation.',
      features: [
        '24/7 customer support',
        'Multi-language support',
        'Integration with CRM systems',
        'Voice and text capabilities',
        'Custom training on your data',
        'Analytics and insights'
      ],
      pricing: 'Starting at $300/month',
      link: '/ai-chatbot-builder',
      popular: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'AI Analytics & Insights',
      description: 'Advanced AI-powered analytics to extract actionable insights from your business data.',
      features: [
        'Predictive analytics',
        'Customer behavior analysis',
        'Sales forecasting',
        'Real-time dashboards',
        'Automated reporting',
        'Anomaly detection'
      ],
      pricing: 'Starting at $400/month',
      link: '/ai-analytics-dashboard',
      popular: false
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'AI Process Automation',
      description: 'Automate repetitive business processes using AI to increase efficiency and reduce costs.',
      features: [
        'Document processing',
        'Email automation',
        'Data entry automation',
        'Workflow optimization',
        'Task scheduling',
        'Quality assurance'
      ],
      pricing: 'Starting at $800/month',
      link: '/ai-automation',
      popular: false
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Cybersecurity',
      description: 'Advanced AI-powered security solutions to protect your business from cyber threats.',
      features: [
        'Threat detection',
        'Fraud prevention',
        'Network monitoring',
        'Incident response',
        'Security analytics',
        'Compliance monitoring'
      ],
      pricing: 'Starting at $1,200/month',
      link: '/ai-cybersecurity',
      popular: false
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'AI Customer Support',
      description: 'Comprehensive AI-powered customer support solutions for enhanced customer experience.',
      features: [
        'Multi-channel support',
        'Sentiment analysis',
        'Ticket routing',
        'Knowledge base integration',
        'Performance metrics',
        'Human handoff'
      ],
      pricing: 'Starting at $600/month',
      link: '/ai-customer-support',
      popular: false
    }
  ]

  const industries = [
    { name: 'Healthcare', icon: <Shield className="w-6 h-6" /> },
    { name: 'Finance', icon: <Database className="w-6 h-6" /> },
    { name: 'E-commerce', icon: <Smartphone className="w-6 h-6" /> },
    { name: 'Education', icon: <Brain className="w-6 h-6" /> },
    { name: 'Manufacturing', icon: <Cpu className="w-6 h-6" /> },
    { name: 'Real Estate', icon: <Globe className="w-6 h-6" /> }
  ]

  const stats = [
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '60%', label: 'Cost Reduction' },
    { number: '300%', label: 'Efficiency Increase' },
    { number: '24/7', label: 'AI Availability' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including content generation, chatbots, analytics, automation, and cybersecurity. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, content generation, chatbots, AI analytics, process automation, AI cybersecurity" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Advanced <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AI Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Transform your business with our comprehensive AI solutions. From content generation to cybersecurity, 
              we provide cutting-edge artificial intelligence services tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#services" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Get Free Consultation
              </a>
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

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our AI Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive AI solutions designed to accelerate your digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <ArrowRight className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                </div>
                <div className="mt-6 flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  <Link to={service.link} className="flex items-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Industries We Serve</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Our AI solutions are tailored for various industries and use cases
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 group">
                <div className="text-blue-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-white font-semibold">{industry.name}</h3>
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Business with AI?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our AI solutions can drive your success and give you a competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Get Free AI Consultation
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}