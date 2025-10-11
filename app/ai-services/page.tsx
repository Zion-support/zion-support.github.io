'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Brain, Cloud, Code, BarChart, Shield, Users, CheckCircle, ArrowRight } from 'lucide-react'

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const services = [
    {
      id: 1,
      title: 'AI-Powered Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      category: 'analytics',
      icon: BarChart,
      features: ['Real-time data processing', 'Predictive modeling', 'Custom dashboards', 'API integration'],
      price: 'Starting at $299/month'
    },
    {
      id: 2,
      title: 'Machine Learning Solutions',
      description: 'Build and deploy custom machine learning models tailored to your business needs.',
      category: 'ml',
      icon: Brain,
      features: ['Custom model development', 'Model training & optimization', 'Deployment & monitoring', 'Continuous learning'],
      price: 'Starting at $499/month'
    },
    {
      id: 3,
      title: 'Cloud AI Infrastructure',
      description: 'Scalable cloud infrastructure designed specifically for AI workloads and applications.',
      category: 'cloud',
      icon: Cloud,
      features: ['Auto-scaling infrastructure', 'GPU acceleration', 'Data pipeline automation', 'Cost optimization'],
      price: 'Starting at $399/month'
    },
    {
      id: 4,
      title: 'AI Security Solutions',
      description: 'Protect your AI systems and data with our comprehensive security solutions.',
      category: 'security',
      icon: Shield,
      features: ['Threat detection', 'Data encryption', 'Access control', 'Compliance monitoring'],
      price: 'Starting at $199/month'
    },
    {
      id: 5,
      title: 'Custom AI Development',
      description: 'Bespoke AI solutions built from the ground up for your specific requirements.',
      category: 'custom',
      icon: Code,
      features: ['Requirements analysis', 'Custom development', 'Testing & validation', 'Ongoing support'],
      price: 'Contact for pricing'
    },
    {
      id: 6,
      title: 'AI Consulting',
      description: 'Expert guidance on AI strategy, implementation, and optimization for your business.',
      category: 'consulting',
      icon: Users,
      features: ['AI strategy planning', 'Technology assessment', 'Implementation guidance', 'Training & support'],
      price: 'Starting at $150/hour'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'cloud', name: 'Cloud' },
    { id: 'security', name: 'Security' },
    { id: 'custom', name: 'Custom Development' },
    { id: 'consulting', name: 'Consulting' }
  ]

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  )

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
              Transform your business with cutting-edge AI solutions designed to drive growth, efficiency, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.name}
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
              <div
                key={service.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Let's discuss how our AI services can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AiServicesPage