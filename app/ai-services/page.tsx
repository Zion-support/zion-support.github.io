'use client'
import React, { useState } from 'react'
import { Search, CheckCircle, ArrowRight, Brain, BarChart, Shield, Zap, Globe, Cpu, Target } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AIServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const services = [
    {
      id: 1,
      title: 'AI Strategy & Consulting',
      description: 'Develop a comprehensive AI strategy tailored to your business objectives and industry requirements.',
      category: 'Strategy',
      icon: Brain,
      features: ['AI readiness assessment', 'Strategic planning', 'Technology roadmap', 'ROI analysis'],
      price: 'Custom'
    },
    {
      id: 2,
      title: 'Machine Learning Solutions',
      description: 'Build and deploy custom machine learning models to solve your specific business challenges.',
      category: 'Development',
      icon: Cpu,
      features: ['Custom model development', 'Data preprocessing', 'Model training', 'Performance optimization'],
      price: 'From $5,000'
    },
    {
      id: 3,
      title: 'AI Analytics & Insights',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics platforms.',
      category: 'Analytics',
      icon: BarChart,
      features: ['Predictive analytics', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
      price: 'From $2,500/month'
    },
    {
      id: 4,
      title: 'Natural Language Processing',
      description: 'Implement NLP solutions for text analysis, chatbots, and language understanding applications.',
      category: 'NLP',
      icon: Globe,
      features: ['Text analysis', 'Chatbot development', 'Sentiment analysis', 'Language translation'],
      price: 'From $3,000'
    },
    {
      id: 5,
      title: 'Computer Vision',
      description: 'Develop computer vision solutions for image recognition, object detection, and visual analysis.',
      category: 'Vision',
      icon: Target,
      features: ['Image recognition', 'Object detection', 'Facial recognition', 'Quality inspection'],
      price: 'From $4,000'
    },
    {
      id: 6,
      title: 'AI Security & Compliance',
      description: 'Ensure your AI systems are secure, compliant, and protected against emerging threats.',
      category: 'Security',
      icon: Shield,
      features: ['Security auditing', 'Compliance assessment', 'Threat detection', 'Data protection'],
      price: 'From $2,000'
    }
  ]

  const categories = ['all', 'Strategy', 'Development', 'Analytics', 'NLP', 'Vision', 'Security']

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="neon-text">AI Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to transform your business operations and drive innovation.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search AI services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category === 'all' ? 'All Services' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="cyber-card p-6 group hover:scale-105 transition-transform">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-cyan-400 mr-3" />
                  <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-cyan-400">{service.price}</span>
                  <button className="cyber-button px-4 py-2 text-sm font-semibold">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card hologram-card p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how our AI services can help you achieve your business goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="cyber-button-secondary px-8 py-4 text-lg font-semibold">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AIServicesPage
