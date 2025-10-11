'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, Zap, Shield, BarChart, Users, ArrowRight, CheckCircle, Star, Cloud, Code, Smartphone } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Services', icon: Star },
    { id: 'ai', name: 'AI Solutions', icon: Brain },
    { id: 'cloud', name: 'Cloud Services', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'analytics', name: 'Data Analytics', icon: BarChart },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'mobile', name: 'Mobile', icon: Smartphone }
  ]

  const services = [
    {
      id: 1,
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      category: 'ai',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom AI Models', 'Data Visualization'],
      price: 'From $2,999/month',
      rating: 4.9,
      reviews: 127,
      icon: Brain
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Management',
      description: 'Scalable, secure cloud solutions with 99.9% uptime guarantee.',
      category: 'cloud',
      features: ['AWS/Azure/GCP', 'Auto-scaling', 'Security Monitoring', '24/7 Support'],
      price: 'From $1,999/month',
      rating: 4.8,
      reviews: 89,
      icon: Cloud
    },
    {
      id: 3,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your digital assets and data.',
      category: 'security',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
      price: 'From $1,500/month',
      rating: 4.9,
      reviews: 156,
      icon: Shield
    },
    {
      id: 4,
      title: 'Data Analytics Platform',
      description: 'Advanced analytics and reporting tools for data-driven decision making.',
      category: 'analytics',
      features: ['Business Intelligence', 'Custom Reports', 'Data Integration', 'Real-time Analytics'],
      price: 'From $2,500/month',
      rating: 4.7,
      reviews: 98,
      icon: BarChart
    },
    {
      id: 5,
      title: 'Web Development Services',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      category: 'development',
      features: ['React/Next.js', 'Node.js', 'TypeScript', 'Progressive Web Apps'],
      price: 'From $5,000/project',
      rating: 4.8,
      reviews: 203,
      icon: Code
    },
    {
      id: 6,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      category: 'mobile',
      features: ['React Native', 'Flutter', 'iOS Development', 'Android Development'],
      price: 'From $8,000/project',
      rating: 4.9,
      reviews: 145,
      icon: Smartphone
    }
  ]

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  )

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to automate and optimize your business processes.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'High-performance solutions built for speed and scalability.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with comprehensive protection and compliance.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated team of experts providing 24/7 support and guidance.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Services | Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including machine learning, natural language processing, computer vision, and predictive analytics. Transform your business with AI." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, NLP, computer vision, predictive analytics, AI consulting" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business and gain a competitive edge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We combine cutting-edge AI technology with deep business expertise to deliver solutions that drive real results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="w-12 h-12 text-cyan-600" />
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{service.rating}</span>
                      <span className="text-sm text-gray-500">({service.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-cyan-600">{service.price}</span>
                    <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition-colors duration-300 flex items-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI services can help you automate processes, gain insights, and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Get Free Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  )
}

export default AiServicesPage