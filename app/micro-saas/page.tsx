'use client'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react'

const MicroSaasPage = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const microSaasProducts = [
    {
      icon: Brain,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials.',
      features: ['AI-powered writing', 'Multiple content types', 'SEO optimization', 'Brand voice customization'],
      price: '$29/month',
      status: 'Available'
    },
    {
      icon: Zap,
      title: 'Task Automation Hub',
      description: 'Automate repetitive tasks and workflows across your business.',
      features: ['Workflow automation', 'Integration hub', 'Custom triggers', 'Performance analytics'],
      price: '$49/month',
      status: 'Available'
    },
    {
      icon: Shield,
      title: 'Security Monitor Pro',
      description: 'Monitor and protect your digital assets with AI-powered security.',
      features: ['Threat detection', 'Real-time alerts', 'Security reports', 'Compliance tracking'],
      price: '$79/month',
      status: 'Available'
    },
    {
      icon: Target,
      title: 'Analytics Dashboard',
      description: 'Get insights into your business performance with advanced analytics.',
      features: ['Real-time metrics', 'Custom dashboards', 'Data visualization', 'Export capabilities'],
      price: '$39/month',
      status: 'Available'
    }
  ]

  const stats = [
    { number: '50+', label: 'Micro SaaS Products' },
    { number: '1000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SaaS Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover our collection of powerful micro SaaS products designed to solve specific business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Browse Products
              <ArrowRight className="ml-2 h-5 w-5 inline" />
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-white transition-colors">
              Learn More
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

        {/* Products Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Micro SaaS Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {microSaasProducts.map((product, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-lg hover:bg-slate-800/70 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <product.icon className="h-12 w-12 text-purple-400" />
                  <span className="bg-green-600 text-white text-sm px-3 py-1 rounded-full">
                    {product.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {product.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-purple-400">
                    {product.price}
                  </div>
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Try Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Micro SaaS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Zap className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Quick Setup</h3>
              <p className="text-gray-300">Get started in minutes with our easy-to-use products</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Secure & Reliable</h3>
              <p className="text-gray-300">Enterprise-grade security and 99.9% uptime guarantee</p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Focused Solutions</h3>
              <p className="text-gray-300">Each product solves a specific business problem</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Choose from our collection of micro SaaS products and start solving your business challenges today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MicroSaasPage