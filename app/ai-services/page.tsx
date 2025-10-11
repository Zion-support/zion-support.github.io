'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, ArrowRight, CheckCircle } from 'lucide-react'

const AiServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const services = [
    {
      id: 1,
      title: 'AI Consulting',
      description: 'Strategic AI consulting to identify opportunities and develop roadmaps for AI implementation.',
      category: 'consulting',
      features: ['AI Strategy Development', 'Technology Assessment', 'Implementation Planning'],
      price: 'Starting at $299/hour',
      icon: Brain
    },
    {
      id: 2,
      title: 'AI Automation',
      description: 'Intelligent automation of business processes with decision-making capabilities.',
      category: 'automation',
      features: ['Process Automation', 'Workflow Optimization', 'Exception Handling'],
      price: 'Starting at $399/month',
      icon: Settings
    },
    {
      id: 3,
      title: 'AI Analytics',
      description: 'Advanced analytics and business intelligence powered by artificial intelligence.',
      category: 'analytics',
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards'],
      price: 'Starting at $199/month',
      icon: BarChart
    },
    {
      id: 4,
      title: 'AI Customer Support',
      description: 'Revolutionary AI-powered customer support with chatbots and intelligent automation.',
      category: 'support',
      features: ['Intelligent Chatbots', 'Omnichannel Support', 'Sentiment Analysis'],
      price: 'Starting at $199/month',
      icon: Users
    },
    {
      id: 5,
      title: 'AI Sales Automation',
      description: 'Boost sales with intelligent lead scoring, automated outreach, and CRM integration.',
      category: 'sales',
      features: ['Lead Scoring', 'Automated Outreach', 'CRM Integration'],
      price: 'Starting at $299/month',
      icon: Target
    },
    {
      id: 6,
      title: 'AI Data Visualization',
      description: 'Transform data into actionable insights with AI-powered visualization tools.',
      category: 'analytics',
      features: ['Interactive Dashboards', 'Data Storytelling', 'Real-time Updates'],
      price: 'Starting at $149/month',
      icon: TrendingUp
    }
  ]

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'consulting', name: 'Consulting' },
    { id: 'automation', name: 'Automation' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'support', name: 'Support' },
    { id: 'sales', name: 'Sales' }
  ]

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  )

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Comprehensive AI services including consulting, automation, analytics, and customer support. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence consulting, AI automation, AI analytics, AI customer support, machine learning" />
      </Helmet>

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
                Comprehensive AI solutions designed to transform your business operations and drive unprecedented growth.
              </p>
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
                  className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                      : 'border-white/20 text-white hover:border-cyan-500 hover:bg-cyan-500/10'
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
                <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-cyan-500 transition-all duration-300 hover:scale-105">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-cyan-400 font-semibold text-lg">{service.price}</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our AI services and see the difference intelligent automation can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                Start Your AI Journey
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default AiServicesPage