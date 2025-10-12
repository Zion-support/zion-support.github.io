import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Brain, Zap, Shield, Database, Code, Smartphone, BarChart3, Settings, Users } from 'lucide-react'

export default function AIServicesPage() {
  const services = [
    {
      title: 'AI Content Generation',
      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI.',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates'],
      pricing: 'Starting at $29/month',
      link: '/ai-content-generation'
    },
    {
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots that understand and respond to your customers naturally.',
      icon: <Code className="w-8 h-8 text-purple-400" />,
      features: ['Natural language processing', '24/7 customer support', 'Easy integration', 'Analytics dashboard'],
      pricing: 'Starting at $49/month',
      link: '/ai-chatbot-builder'
    },
    {
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with our AI-powered analytics platform.',
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'Automated reporting'],
      pricing: 'Starting at $79/month',
      link: '/ai-analytics-dashboard'
    },
    {
      title: 'AI Automation',
      description: 'Automate repetitive tasks and workflows with intelligent AI solutions.',
      icon: <Settings className="w-8 h-8 text-yellow-400" />,
      features: ['Workflow automation', 'Process optimization', 'Error reduction', 'Time savings'],
      pricing: 'Starting at $99/month',
      link: '/ai-automation'
    },
    {
      title: 'AI Computer Vision',
      description: 'Implement computer vision solutions for image recognition, object detection, and more.',
      icon: <Smartphone className="w-8 h-8 text-red-400" />,
      features: ['Image recognition', 'Object detection', 'Facial recognition', 'Quality control'],
      pricing: 'Starting at $149/month',
      link: '/ai-computer-vision'
    },
    {
      title: 'AI Data Analytics',
      description: 'Leverage AI to analyze complex datasets and uncover hidden patterns and insights.',
      icon: <Database className="w-8 h-8 text-blue-400" />,
      features: ['Pattern recognition', 'Predictive analytics', 'Data visualization', 'Machine learning'],
      pricing: 'Starting at $199/month',
      link: '/ai-data-analytics'
    }
  ]

  const categories = [
    {
      name: 'Content & Marketing',
      services: ['AI Content Generation', 'AI Chatbot Builder', 'AI Social Media Manager'],
      icon: <Brain className="w-6 h-6 text-cyan-400" />
    },
    {
      name: 'Analytics & Insights',
      services: ['AI Analytics Dashboard', 'AI Data Analytics', 'AI Predictive Analytics'],
      icon: <BarChart3 className="w-6 h-6 text-green-400" />
    },
    {
      name: 'Automation & Efficiency',
      services: ['AI Automation', 'AI Workflow Automation', 'AI Process Optimization'],
      icon: <Settings className="w-6 h-6 text-yellow-400" />
    },
    {
      name: 'Vision & Recognition',
      services: ['AI Computer Vision', 'AI Image Recognition', 'AI Document Processing'],
      icon: <Smartphone className="w-6 h-6 text-red-400" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including content generation, chatbots, analytics, automation, and more. Transform your business with artificial intelligence." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, content generation, chatbots, analytics, automation" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with our comprehensive suite of AI services. From content generation 
            to advanced analytics, we provide cutting-edge artificial intelligence solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{category.name}</h3>
                </div>
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="text-gray-300 text-sm flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured AI Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-400 text-sm flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-cyan-400 font-semibold">{service.pricing}</span>
                </div>
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Our AI Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our AI Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Cutting-Edge Technology</h3>
              <p className="text-gray-300">We use the latest AI models and technologies to deliver superior results.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Your data is protected with enterprise-grade security and compliance.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Expert Support</h3>
              <p className="text-gray-300">Our AI experts provide dedicated support and guidance throughout your journey.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI services can transform your business and give you a competitive edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your AI Journey
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}