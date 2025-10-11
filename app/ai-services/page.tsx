'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Brain, MessageSquare, FileText, BarChart, Shield, Eye, Mic, Zap, CheckCircle, ArrowRight, Star } from 'lucide-react'

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
      popular: false,
      icon: FileText
    },
    {
      id: 'ai-analytics',
      name: 'AI Data Analytics',
      description: 'Intelligent data analysis and business intelligence with predictive insights',
      price: '$399/month',
      marketPrice: '$800-3000/month',
      features: [
        'Predictive analytics',
        'Real-time dashboards',
        'Automated reporting',
        'Data visualization',
        'Custom metrics'
      ],
      benefits: [
        'Data-driven decisions',
        'Predict future trends',
        'Automated insights',
        'Competitive advantage'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart
    },
    {
      id: 'ai-security',
      name: 'AI Cybersecurity',
      description: 'Advanced threat detection and security monitoring using machine learning',
      price: '$599/month',
      marketPrice: '$1000-5000/month',
      features: [
        'Threat detection',
        'Anomaly detection',
        'Automated response',
        'Security monitoring',
        'Compliance reporting'
      ],
      benefits: [
        'Proactive security',
        'Reduce false positives',
        '24/7 monitoring',
        'Compliance assurance'
      ],
      category: 'Security',
      popular: false,
      icon: Shield
    },
    {
      id: 'ai-vision',
      name: 'AI Computer Vision',
      description: 'Image and video analysis for quality control, object detection, and automation',
      price: '$499/month',
      marketPrice: '$800-4000/month',
      features: [
        'Object detection',
        'Image classification',
        'Quality control',
        'Facial recognition',
        'Video analysis'
      ],
      benefits: [
        'Automated quality control',
        'Real-time processing',
        'Cost reduction',
        'Improved accuracy'
      ],
      category: 'Vision',
      popular: false,
      icon: Eye
    },
    {
      id: 'ai-voice',
      name: 'AI Voice Solutions',
      description: 'Speech recognition, text-to-speech, and voice automation services',
      price: '$349/month',
      marketPrice: '$600-2500/month',
      features: [
        'Speech recognition',
        'Text-to-speech',
        'Voice commands',
        'Multi-language support',
        'Voice analytics'
      ],
      benefits: [
        'Hands-free operation',
        'Accessibility improvement',
        'Voice automation',
        'Multi-language support'
      ],
      category: 'Voice',
      popular: false,
      icon: Mic
    }
  ]

  const categories = ['all', 'Customer Service', 'Content', 'Analytics', 'Security', 'Vision', 'Voice']

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive AI solutions. From chatbots to analytics, 
              we provide cutting-edge artificial intelligence services tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group ${
                service.popular ? 'ring-2 ring-cyan-400' : ''
              }`}>
                {service.popular && (
                  <div className="flex items-center mb-4">
                    <Star className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="text-yellow-400 font-medium">Popular</span>
                  </div>
                )}
                
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-gray-400 line-through">{service.marketPrice}</span>
                  </div>
                  <p className="text-sm text-gray-400">per month</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <Zap className="w-4 h-4 text-green-400 mr-3" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI services can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              Start Your AI Journey
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AiServicesPage