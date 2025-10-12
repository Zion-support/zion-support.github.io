'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Brain, Zap, MessageCircle, BarChart3, FileText, Users, Shield, Globe } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function AIServicesPage() {
  const services = [
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
      title: 'AI Chatbots & Virtual Assistants',
      description: 'Intelligent conversational AI that understands context and provides human-like interactions.',
      features: ['Natural Language Processing', 'Multi-language Support', '24/7 Availability', 'Custom Training'],
      pricing: 'Starting at $1,200/month'
    },
    {
      icon: <FileText className="w-8 h-8 text-green-500" />,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with our advanced AI writing and content creation tools.',
      features: ['Blog Posts & Articles', 'Marketing Copy', 'Technical Documentation', 'Multi-language Content'],
      pricing: 'Starting at $800/month'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'AI Analytics & Insights',
      description: 'Transform your data into actionable insights with machine learning and predictive analytics.',
      features: ['Predictive Modeling', 'Real-time Analytics', 'Custom Dashboards', 'Automated Reporting'],
      pricing: 'Starting at $2,000/month'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'AI Customer Service',
      description: 'Enhance customer experience with intelligent automation and personalized support.',
      features: ['Ticket Classification', 'Automated Responses', 'Sentiment Analysis', 'Escalation Management'],
      pricing: 'Starting at $1,500/month'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Security Solutions',
      description: 'Protect your business with AI-powered threat detection and security automation.',
      features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Compliance Monitoring'],
      pricing: 'Starting at $2,500/month'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'AI Process Automation',
      description: 'Streamline business processes with intelligent automation and workflow optimization.',
      features: ['Workflow Automation', 'Document Processing', 'Data Extraction', 'Task Scheduling'],
      pricing: 'Starting at $1,800/month'
    }
  ]

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and focus on strategic initiatives.',
      icon: <Zap className="w-6 h-6 text-yellow-500" />
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation.',
      icon: <BarChart3 className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Better Insights',
      description: 'Gain deeper understanding of your business with AI analytics.',
      icon: <Brain className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Enhanced Customer Experience',
      description: 'Provide personalized and responsive customer service.',
      icon: <Users className="w-6 h-6 text-blue-500" />
    }
  ]

  const process = [
    {
      step: '01',
      title: 'AI Assessment',
      description: 'Analyze your business processes and identify AI opportunities.'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Design custom AI solutions tailored to your specific needs.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Deploy AI solutions with minimal disruption to your operations.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously improve AI performance and add new capabilities.'
    }
  ]

  const stats = [
    { number: '95%', label: 'Accuracy Rate' },
    { number: '60%', label: 'Cost Reduction' },
    { number: '24/7', label: 'AI Availability' },
    { number: '100+', label: 'AI Models Deployed' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including chatbots, content generation, analytics, and automation solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, chatbots, content generation, analytics, automation" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Harness the power of artificial intelligence to transform your business operations and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Services Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our AI Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-purple-400 font-semibold mb-4">{service.pricing}</div>
                  <a
                    href="/contact"
                    className="text-blue-400 hover:text-blue-300 font-medium flex items-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose AI?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our AI Implementation Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Embrace AI?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how AI can transform your business and give you a competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free AI Consultation
              </a>
              <a
                href="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
