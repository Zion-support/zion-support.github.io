'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Brain, Zap, Shield, BarChart, ArrowRight, Filter } from 'lucide-react'

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const services = [
    {
      id: 1,
      title: 'AI Automation',
      category: 'automation',
      description: 'Intelligent automation of business processes with decision-making capabilities and exception handling.',
      features: [
        'Process automation',
        'Decision making',
        'Exception handling',
        'Workflow optimization'
      ],
      price: 'Starting at $399/month',
      icon: Zap
    },
    {
      id: 2,
      title: 'AI Healthcare',
      category: 'healthcare',
      description: 'Cutting-edge AI solutions for medical imaging, drug discovery, and personalized medicine.',
      features: [
        'Medical imaging analysis',
        'Drug discovery',
        'Personalized medicine',
        'Clinical decision support'
      ],
      price: 'Starting at $599/month',
      icon: Brain
    },
    {
      id: 3,
      title: 'AI Fintech',
      category: 'fintech',
      description: 'Revolutionary AI-powered financial services including trading, fraud detection, and risk management.',
      features: [
        'Algorithmic trading',
        'Fraud detection',
        'Risk assessment',
        'Credit scoring'
      ],
      price: 'Starting at $1,499/month',
      icon: BarChart
    },
    {
      id: 4,
      title: 'AI Security',
      category: 'security',
      description: 'Advanced AI-powered cybersecurity solutions for threat detection and prevention.',
      features: [
        'Threat detection',
        'Anomaly detection',
        'Security monitoring',
        'Incident response'
      ],
      price: 'Starting at $799/month',
      icon: Shield
    }
  ]

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'automation', name: 'Automation' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'fintech', name: 'Fintech' },
    { id: 'security', name: 'Security' }
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
              Transform your business with our comprehensive suite of AI-powered solutions designed to drive innovation and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
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
              <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI services can help you achieve your business goals.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-lg">
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AiServicesPage