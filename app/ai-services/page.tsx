'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Brain, Code, Database, Smartphone, Cpu, Zap, Shield, Globe, Star, Users, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIServicesPage() {
  const aiServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI models.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content scheduling'],
      pricing: '$29/month',
      link: '/ai-content-generator',
      popular: true
    },
    {
      icon: <Code className="w-8 h-8 text-green-500" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and engagement without coding knowledge.',
      features: ['Visual builder', 'Multi-channel deployment', 'Analytics dashboard', 'Custom integrations'],
      pricing: '$49/month',
      link: '/ai-chatbot-builder',
      popular: false
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics and predictive modeling.',
      features: ['Real-time analytics', 'Predictive insights', 'Custom reports', 'Data visualization'],
      pricing: '$39/month',
      link: '/ai-analytics-dashboard',
      popular: false
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: 'AI Email Assistant',
      description: 'Automate email responses, schedule follow-ups, and optimize email campaigns with AI intelligence.',
      features: ['Smart responses', 'Email scheduling', 'Campaign optimization', 'A/B testing'],
      pricing: '$19/month',
      link: '/ai-email-assistant',
      popular: false
    },
    {
      icon: <Cpu className="w-8 h-8 text-red-500" />,
      title: 'AI Automation Suite',
      description: 'Automate repetitive tasks and workflows with AI-powered automation tools.',
      features: ['Workflow automation', 'Task scheduling', 'Integration APIs', 'Custom triggers'],
      pricing: '$59/month',
      link: '/ai-automation',
      popular: false
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'AI Voice Assistant',
      description: 'Build custom voice assistants for your business with natural language processing capabilities.',
      features: ['Voice recognition', 'Natural responses', 'Multi-language support', 'Custom commands'],
      pricing: '$79/month',
      link: '/ai-voice-assistant',
      popular: false
    }
  ]

  const stats = [
    { number: '50+', label: 'AI Services Available', icon: <Brain className="w-6 h-6" /> },
    { number: '500+', label: 'Businesses Transformed', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Clock className="w-6 h-6" /> },
    { number: '24/7', label: 'Expert Support', icon: <Shield className="w-6 h-6" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including content generation, chatbots, analytics, and automation solutions for modern businesses." />
        <meta name="keywords" content="AI services, artificial intelligence, content generation, chatbots, analytics, automation" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:60px_60px] animate-pulse"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                AI <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your business with cutting-edge artificial intelligence solutions. From content generation to automation, we provide comprehensive AI services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-purple-500/25"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-4 py-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-center mb-3 text-purple-400">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{stat.number}</div>
                  <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our AI Services
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered solutions designed to accelerate your business growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div 
                  key={index} 
                  className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 relative ${service.popular ? 'ring-2 ring-purple-400' : ''}`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-white">
                      {service.pricing}
                    </div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                  
                  <Link 
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]"></div>
                <div className="relative">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Ready to Harness the Power of AI?
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Let our AI experts help you choose the perfect solutions for your business needs. Get started with a free consultation today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/contact"
                      className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center shadow-lg"
                    >
                      Get Free Consultation
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                    <Link 
                      to="/it-services" 
                      className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                    >
                      Explore IT Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
