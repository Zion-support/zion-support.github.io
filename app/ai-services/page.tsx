'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Brain, Zap, Shield, Globe, Database, Code, Cloud, CheckCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIServicesPage() {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with our advanced AI content generation tools.',
      features: ['Blog Posts', 'Social Media Content', 'Product Descriptions', 'Email Campaigns'],
      href: '/ai-content-generator'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'AI Automation',
      description: 'Streamline your business processes with intelligent automation solutions.',
      features: ['Workflow Automation', 'Data Processing', 'Task Scheduling', 'Report Generation'],
      href: '/ai-automation'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'AI Security',
      description: 'Protect your business with AI-powered security and fraud detection systems.',
      features: ['Threat Detection', 'Fraud Prevention', 'Access Control', 'Risk Assessment'],
      href: '/ai-cybersecurity'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'AI Analytics',
      description: 'Gain valuable insights from your data with advanced AI analytics and reporting.',
      features: ['Predictive Analytics', 'Data Visualization', 'Trend Analysis', 'Custom Dashboards'],
      href: '/ai-analytics'
    },
    {
      icon: <Database className="w-8 h-8 text-orange-500" />,
      title: 'AI Data Processing',
      description: 'Transform raw data into actionable insights with intelligent data processing.',
      features: ['Data Cleaning', 'Pattern Recognition', 'Predictive Modeling', 'Real-time Processing'],
      href: '/ai-data-analytics'
    },
    {
      icon: <Code className="w-8 h-8 text-red-500" />,
      title: 'AI Development',
      description: 'Build custom AI solutions tailored to your specific business needs.',
      features: ['Custom Models', 'API Integration', 'Machine Learning', 'Deep Learning'],
      href: '/ai-development'
    }
  ]

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and focus on strategic initiatives',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation',
      icon: <Database className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Better Insights',
      description: 'Make data-driven decisions with advanced analytics',
      icon: <Brain className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Scalable Solutions',
      description: 'Grow your business with AI solutions that scale',
      icon: <Cloud className="w-6 h-6 text-orange-500" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including content generation, automation, analytics, and custom AI solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, analytics, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From content generation to predictive analytics, we deliver AI that drives results.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={service.href}
                  className="inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-12 border border-white/20 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions are designed to deliver measurable results and drive business growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Harness the Power of AI?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI services can transform your business and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </a>
                <a
                  href="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
