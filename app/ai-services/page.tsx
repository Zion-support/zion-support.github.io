import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Zap, CheckCircle, ArrowRight, Star, Clock, Users, Shield, Brain, Code, Database } from 'lucide-react'

export default function AIServicesPage() {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Content Generation',
      description: 'Automated content creation for blogs, articles, social media, and marketing materials.',
      price: '$500/month',
      features: ['Blog Post Generation', 'Social Media Content', 'Email Campaigns', 'Product Descriptions']
    },
    {
      icon: <Code className="w-8 h-8 text-purple-400" />,
      title: 'AI Chatbot Development',
      description: 'Intelligent chatbots that understand context and provide personalized customer support.',
      price: '$1,200 setup',
      features: ['Natural Language Processing', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard']
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Process Automation',
      description: 'Streamline business processes with AI-powered automation solutions.',
      price: '$2,000/month',
      features: ['Workflow Automation', 'Data Processing', 'Report Generation', 'Task Scheduling']
    },
    {
      icon: <Database className="w-8 h-8 text-green-400" />,
      title: 'AI Analytics',
      description: 'Advanced data analytics and insights powered by machine learning algorithms.',
      price: '$800/month',
      features: ['Predictive Analytics', 'Data Visualization', 'Trend Analysis', 'Custom Reports']
    }
  ]

  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-cyan-400" />,
      title: '24/7 Availability',
      description: 'AI solutions work around the clock without breaks or downtime.'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: 'Scalable Solutions',
      description: 'Easily scale your AI capabilities as your business grows.'
    },
    {
      icon: <Shield className="w-6 h-6 text-yellow-400" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and reliability for all our AI solutions.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including content generation, chatbots, automation, and analytics." />
        <meta name="keywords" content="AI services, artificial intelligence, content generation, chatbots, automation, analytics, Zion Tech Group" />
      </Helmet>
      
      <div className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From content generation to process automation, we help you harness the power of AI.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 group-hover:text-white transition-colors">
                  {service.description}
                </p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Services</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Our AI solutions are designed to deliver maximum value with minimal complexity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)]"></div>
              
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                  Ready to Transform Your Business with AI?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                  Let's discuss how our AI services can help you achieve your business goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    Get Free Consultation
                  </a>
                  <a
                    href="/contact"
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
