import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Brain, Zap, MessageSquare, BarChart3, Mail, Mic, Cpu, Star, Clock, Users } from 'lucide-react'

export default function AIServicesPage() {
  const services = [
    {
      icon: <MessageSquare className="w-12 h-12 text-blue-400" />,
      title: 'AI Content Generation',
      description: 'Generate high-quality content at scale with our advanced AI writing tools.',
      features: ['Blog Posts & Articles', 'Social Media Content', 'Product Descriptions', 'SEO-Optimized Content'],
      pricing: '$500/month',
      duration: '1-2 weeks',
      link: '/ai-content-generation'
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-green-400" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots that provide 24/7 customer support and engagement.',
      features: ['Natural Language Processing', 'Multi-platform Integration', 'Custom Training', 'Analytics Dashboard'],
      pricing: '$1,200 setup',
      duration: '2-3 weeks',
      link: '/ai-chatbot-builder'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-400" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with AI-powered analytics.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Custom Reports', 'Data Visualization'],
      pricing: '$800/month',
      duration: '3-4 weeks',
      link: '/ai-analytics-dashboard'
    },
    {
      icon: <Mail className="w-12 h-12 text-orange-400" />,
      title: 'AI Email Assistant',
      description: 'Automate email management and improve response times with AI assistance.',
      features: ['Smart Email Sorting', 'Auto-responses', 'Sentiment Analysis', 'Priority Detection'],
      pricing: '$39/month',
      duration: '1 week',
      link: '/ai-email-assistant'
    },
    {
      icon: <Mic className="w-12 h-12 text-cyan-400" />,
      title: 'AI Voice Assistant',
      description: 'Build custom voice assistants for your business needs.',
      features: ['Voice Recognition', 'Natural Language Understanding', 'Multi-language Support', 'Custom Commands'],
      pricing: '$59/month',
      duration: '2-3 weeks',
      link: '/ai-voice-assistant'
    },
    {
      icon: <Cpu className="w-12 h-12 text-red-400" />,
      title: 'AI Automation Suite',
      description: 'Automate repetitive tasks and workflows with intelligent AI solutions.',
      features: ['Process Automation', 'Workflow Optimization', 'Task Scheduling', 'Performance Monitoring'],
      pricing: '$99/month',
      duration: '4-6 weeks',
      link: '/ai-automation'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs and identify AI opportunities.',
      icon: <Users className="w-8 h-8" />
    },
    {
      step: '02',
      title: 'AI Strategy Design',
      description: 'We design a comprehensive AI strategy tailored to your goals.',
      icon: <Brain className="w-8 h-8" />
    },
    {
      step: '03',
      title: 'Model Development',
      description: 'Our experts develop and train custom AI models for your use case.',
      icon: <Cpu className="w-8 h-8" />
    },
    {
      step: '04',
      title: 'Integration & Testing',
      description: 'We integrate AI solutions into your existing systems and test thoroughly.',
      icon: <Zap className="w-8 h-8" />
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'We deploy your AI solution and provide ongoing support and optimization.',
      icon: <CheckCircle className="w-8 h-8" />
    }
  ]

  const benefits = [
    '24/7 AI Support',
    'Custom AI Models',
    'Scalable Solutions',
    'Real-time Analytics',
    'Continuous Learning',
    'ROI Optimization'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business with cutting-edge artificial intelligence solutions that drive innovation and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Solutions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI services designed to automate and optimize your business processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group-hover:bg-white/15 group-hover:shadow-2xl group-hover:shadow-cyan-500/20 transform group-hover:scale-105 h-full">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 inline-block">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6 group-hover:text-white transition-colors">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-cyan-400">{service.pricing}</span>
                    <span className="text-sm text-gray-400 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </span>
                  </div>

                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI Process</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to implementing AI solutions that deliver real business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="group text-center">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/20 transform group-hover:scale-105">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">{step.title}</h3>
                  <p className="text-gray-300 text-sm group-hover:text-white transition-colors">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Services</span>?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                We provide cutting-edge AI solutions that help businesses stay ahead of the competition and drive innovation.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-4 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Embrace AI?</h3>
                <p className="text-gray-300 mb-6">
                  Contact us today for a free AI consultation and discover how artificial intelligence can transform your business.
                </p>
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center"
                >
                  Get Free AI Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
