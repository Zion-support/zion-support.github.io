'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, Zap, Shield, Target, ArrowRight, CheckCircle, Star, Users, Award, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react'

const AiServicesPage = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const aiServices = [
    {
      icon: Brain,
      title: 'AI Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Data Visualization', 'Custom Reports'],
      price: 'Starting at $2,999/month'
    },
    {
      icon: Zap,
      title: 'AI Automation Solutions',
      description: 'Automate repetitive tasks and streamline your business processes with intelligent automation.',
      features: ['Workflow Automation', 'Process Optimization', 'Task Scheduling', 'Error Reduction'],
      price: 'Starting at $1,999/month'
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity Suite',
      description: 'Protect your business with AI-powered security solutions and threat detection.',
      features: ['Threat Detection', 'Anomaly Detection', 'Security Monitoring', 'Incident Response'],
      price: 'Starting at $3,999/month'
    },
    {
      icon: Target,
      title: 'AI Customer Experience',
      description: 'Enhance customer satisfaction with AI-driven personalization and support.',
      features: ['Personalized Recommendations', 'Chatbot Solutions', 'Sentiment Analysis', 'Customer Insights'],
      price: 'Starting at $2,499/month'
    }
  ]

  const stats = [
    { number: '95%', label: 'Accuracy Rate' },
    { number: '60%', label: 'Cost Reduction' },
    { number: '3x', label: 'Faster Processing' },
    { number: '24/7', label: 'AI Monitoring' }
  ]

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including analytics, automation, cybersecurity, and customer experience solutions. Transform your business with cutting-edge AI technology." />
      </Helmet>

      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From analytics to automation, we provide comprehensive AI services tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
              <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-white transition-colors">
                View Case Studies
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our AI Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-lg hover:bg-slate-800/70 transition-colors">
                  <service.icon className="h-12 w-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-purple-400 font-semibold mb-4">
                    {service.price}
                  </div>
                  <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's discuss how our AI services can help you achieve your business goals.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AiServicesPage