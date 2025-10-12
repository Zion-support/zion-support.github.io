'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Brain, Zap, Shield, Cloud, Database, Smartphone, Cpu, BarChart3, Users, Star, Sparkles, Rocket } from 'lucide-react'
import Layout from '../layout'

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const services = [
    {
      id: 1,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI models.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates'],
      pricing: 'Starting at $29/month',
      link: '/ai-content-generation',
      popular: true,
      category: 'Content & Marketing',
      icon: <Brain className="w-8 h-8 text-blue-500" />
    },
    {
      id: 2,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots that can handle customer inquiries, provide support, and automate conversations.',
      features: ['Natural language processing', 'Multi-platform integration', 'Custom training', 'Analytics dashboard'],
      pricing: 'Starting at $49/month',
      link: '/ai-chatbot-builder',
      popular: false,
      category: 'Customer Service',
      icon: <Users className="w-8 h-8 text-green-500" />
    },
    {
      id: 3,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with our AI-powered analytics and visualization platform.',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom reports', 'Data visualization'],
      pricing: 'Starting at $79/month',
      link: '/ai-analytics-dashboard',
      popular: true,
      category: 'Data & Analytics',
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />
    },
    {
      id: 4,
      title: 'AI Email Assistant',
      description: 'Automate email management, scheduling, and responses with our intelligent email assistant.',
      features: ['Smart scheduling', 'Email templates', 'Priority sorting', 'Response suggestions'],
      pricing: 'Starting at $39/month',
      link: '/ai-email-assistant',
      popular: false,
      category: 'Automation',
      icon: <Zap className="w-8 h-8 text-yellow-500" />
    },
    {
      id: 5,
      title: 'AI Voice Assistant',
      description: 'Build custom voice assistants for your business with natural language understanding and speech synthesis.',
      features: ['Voice recognition', 'Multi-language support', 'Custom commands', 'Integration APIs'],
      pricing: 'Starting at $99/month',
      link: '/ai-voice-assistant',
      popular: false,
      category: 'Customer Service',
      icon: <Smartphone className="w-8 h-8 text-red-500" />
    },
    {
      id: 6,
      title: 'AI Automation Suite',
      description: 'Automate repetitive tasks and workflows with our comprehensive AI automation platform.',
      features: ['Workflow automation', 'Task scheduling', 'Process optimization', 'Custom triggers'],
      pricing: 'Starting at $149/month',
      link: '/ai-automation',
      popular: true,
      category: 'Automation',
      icon: <Rocket className="w-8 h-8 text-orange-500" />
    }
  ]

  const categories = ['All', 'Content & Marketing', 'Data & Analytics', 'Customer Service', 'Automation']

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.category === selectedCategory)

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-500" />,
      title: 'Advanced AI Models',
      description: 'Powered by state-of-the-art machine learning algorithms'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security and data protection'
    },
    {
      icon: <Cloud className="w-6 h-6 text-purple-500" />,
      title: 'Scalable Infrastructure',
      description: 'Cloud-based solutions that grow with your business'
    },
    {
      icon: <Database className="w-6 h-6 text-orange-500" />,
      title: 'Real-time Analytics',
      description: 'Comprehensive insights and performance metrics'
    }
  ]

  return (
    <Layout 
      title="AI Services - Zion Tech Group"
      description="Transform your business with our comprehensive AI services including content generation, chatbots, analytics, and automation solutions."
      keywords="AI services, artificial intelligence, content generation, chatbots, analytics, automation, machine learning"
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From content generation to automation, we provide the tools you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with industry expertise to deliver AI solutions that drive real results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI-powered solutions designed for modern businesses.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                  <span className="text-sm text-gray-400">{service.category}</span>
                </div>
                
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our AI services can transform your business and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AIServicesPage