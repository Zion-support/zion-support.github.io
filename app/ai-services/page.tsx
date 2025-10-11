'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Brain, MessageSquare, FileText, BarChart3, Eye, Mic, Workflow, Heart, DollarSign, Globe, Shield, Zap, CheckCircle, ArrowRight, Star, Filter, Search } from 'lucide-react'

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const services = [
    {
      id: 'ai-chatbots',
      name: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis',
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Sentiment analysis',
        'CRM integration',
        'Real-time learning'
      ],
      benefits: [
        'Reduce support costs by 60%',
        '24/7 availability',
        'Instant responses',
        'Scalable solutions'
      ],
      category: 'Customer Service',
      popular: true,
      icon: MessageSquare
    },
    {
      id: 'ai-content',
      name: 'AI Content Generation',
      description: 'Automated content creation using advanced language models for blogs, social media, and marketing',
      price: '$199/month',
      marketPrice: '$300-1500/month',
      features: [
        'Blog post generation',
        'Social media content',
        'Email marketing campaigns',
        'SEO optimization',
        'Brand voice customization'
      ],
      benefits: [
        'Save 80% content creation time',
        'Consistent brand voice',
        'SEO optimization',
        'Multi-platform publishing'
      ],
      category: 'Content',
      popular: true,
      icon: FileText
    },
    {
      id: 'ai-analytics',
      name: 'AI Data Analytics',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms',
      price: '$399/month',
      marketPrice: '$800-3000/month',
      features: [
        'Predictive analytics',
        'Real-time dashboards',
        'Automated reporting',
        'Anomaly detection',
        'Custom data models'
      ],
      benefits: [
        'Data-driven insights',
        'Predictive forecasting',
        'Automated reporting',
        'ROI optimization'
      ],
      category: 'Analytics',
      popular: false,
      icon: BarChart3
    },
    {
      id: 'ai-vision',
      name: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation',
      price: '$599/month',
      marketPrice: '$1000-5000/month',
      features: [
        'Object detection and recognition',
        'Quality control automation',
        'Facial recognition systems',
        'Video analytics',
        'Real-time processing'
      ],
      benefits: [
        'Automated quality control',
        'Enhanced security',
        'Real-time monitoring',
        'Cost reduction'
      ],
      category: 'Computer Vision',
      popular: false,
      icon: Eye
    },
    {
      id: 'ai-voice',
      name: 'AI Voice Processing',
      description: 'Speech recognition, synthesis, and voice analytics for customer interactions',
      price: '$249/month',
      marketPrice: '$400-1800/month',
      features: [
        'Speech-to-text conversion',
        'Voice synthesis',
        'Voice biometrics',
        'Call analytics',
        'Multi-language support'
      ],
      benefits: [
        'Improved accessibility',
        'Voice automation',
        'Call quality insights',
        'Multi-language support'
      ],
      category: 'Voice AI',
      popular: false,
      icon: Mic
    },
    {
      id: 'ai-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows',
      price: '$349/month',
      marketPrice: '$600-2500/month',
      features: [
        'Process mining',
        'Workflow optimization',
        'Task automation',
        'Exception handling',
        'Performance monitoring'
      ],
      benefits: [
        'Process efficiency',
        'Error reduction',
        'Cost savings',
        'Scalable automation'
      ],
      category: 'Automation',
      popular: true,
      icon: Workflow
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      description: 'Medical AI for diagnosis assistance, drug discovery, and patient care optimization',
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      features: [
        'Medical image analysis',
        'Drug discovery algorithms',
        'Patient risk assessment',
        'Treatment recommendations',
        'Clinical trial optimization'
      ],
      benefits: [
        'Improved diagnosis accuracy',
        'Faster drug development',
        'Better patient outcomes',
        'Cost reduction'
      ],
      category: 'Healthcare',
      popular: false,
      icon: Heart
    },
    {
      id: 'ai-finance',
      name: 'AI Financial Services',
      description: 'Advanced AI for fraud detection, algorithmic trading, and financial risk management',
      price: '$699/month',
      marketPrice: '$1200-4000/month',
      features: [
        'Fraud detection algorithms',
        'Algorithmic trading systems',
        'Credit risk assessment',
        'Market prediction models',
        'Regulatory compliance'
      ],
      benefits: [
        'Reduced fraud losses',
        'Better trading performance',
        'Risk mitigation',
        'Compliance automation'
      ],
      category: 'Financial',
      popular: true,
      icon: DollarSign
    }
  ]

  const categories = ['all', 'Customer Service', 'Content', 'Analytics', 'Computer Vision', 'Voice AI', 'Automation', 'Healthcare', 'Financial']

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory)

  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: Brain },
    { number: '99.9%', label: 'Accuracy Rate', icon: Star },
    { number: '24/7', label: 'AI Monitoring', icon: Shield },
    { number: '50+', label: 'Industries Served', icon: Globe }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-rain particle-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 glow-cyan">
              <Brain className="w-4 h-4 mr-2" />
              AI Services
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 neon-text-enhanced">
              Advanced <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">AI Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From chatbots to computer vision, we deliver AI that works.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center floating" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 glow-cyan">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-cyan-400 mb-2 neon-text-enhanced">{stat.number}</div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white glow-cyan'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category === 'all' ? 'All Services' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
              AI <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI solutions designed to solve real business problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-cyan-500/50 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                </div>
                <div className="space-y-2 mb-6">
                  {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
            Ready to Harness the Power of <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">AI?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can transform your business and drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Your AI Journey
            </button>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center glow-cyan"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AiServicesPage