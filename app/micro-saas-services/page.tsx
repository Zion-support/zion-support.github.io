import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Smartphone, Brain, Zap, Star, Clock, Users, Shield, Globe, Database } from 'lucide-react'

export default function MicroSAASServicesPage() {
  const services = [
    {
      icon: <Brain className="w-12 h-12 text-blue-400" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and automation.',
      features: ['Smart Prioritization', 'Auto-scheduling', 'Progress Tracking', 'Team Collaboration'],
      pricing: '$19/month',
      duration: '1 week',
      link: '/ai-task-manager'
    },
    {
      icon: <Database className="w-12 h-12 text-green-400" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking with receipt scanning and categorization.',
      features: ['Receipt Scanning', 'Auto-categorization', 'Budget Alerts', 'Tax Reports'],
      pricing: '$15/month',
      duration: '1 week',
      link: '/ai-expense-tracker'
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-400" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations.',
      features: ['Secure Storage', 'Password Generation', 'Security Alerts', 'Multi-device Sync'],
      pricing: '$12/month',
      duration: '1 week',
      link: '/ai-password-manager'
    },
    {
      icon: <Zap className="w-12 h-12 text-orange-400" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice generation with smart templates and payment tracking.',
      features: ['Auto-generation', 'Smart Templates', 'Payment Tracking', 'Client Management'],
      pricing: '$25/month',
      duration: '1 week',
      link: '/ai-invoice-generator'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-cyan-400" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights and recommendations.',
      features: ['Health Metrics', 'AI Insights', 'Goal Tracking', 'Wellness Tips'],
      pricing: '$8/month',
      duration: '1 week',
      link: '/ai-health-tracker'
    },
    {
      icon: <Globe className="w-12 h-12 text-red-400" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling and optimization.',
      features: ['Smart Scheduling', 'Conflict Detection', 'Time Optimization', 'Meeting Insights'],
      pricing: '$10/month',
      duration: '1 week',
      link: '/ai-smart-calendar'
    }
  ]

  const benefits = [
    'Affordable Pricing',
    'Quick Setup',
    'AI-Powered Features',
    'No Long-term Contracts',
    'Regular Updates',
    '24/7 Support'
  ]

  const process = [
    {
      step: '01',
      title: 'Choose Your App',
      description: 'Select from our range of AI-powered micro SaaS applications.',
      icon: <Smartphone className="w-8 h-8" />
    },
    {
      step: '02',
      title: 'Quick Setup',
      description: 'Get your app up and running in minutes with our guided setup.',
      icon: <Zap className="w-8 h-8" />
    },
    {
      step: '03',
      title: 'Start Using',
      description: 'Begin using your AI-powered app immediately with full functionality.',
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      step: '04',
      title: 'Scale & Optimize',
      description: 'Scale your usage and optimize with AI insights and recommendations.',
      icon: <Brain className="w-8 h-8" />
    }
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
              Micro <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">SAAS Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful AI-powered micro applications designed to solve specific business problems efficiently and affordably.
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
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro SAAS Apps</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized AI-powered applications for specific business needs
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
              Simple <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Get your micro SaaS app up and running in just 4 easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Micro SAAS</span>?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our micro SaaS applications are designed to solve specific business problems with AI intelligence at an affordable price.
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
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Choose from our range of AI-powered micro SaaS applications and start solving your business problems today.
                </p>
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25 inline-flex items-center"
                >
                  Browse All Apps
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)]"></div>
              
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
                  Ready to Try Our Micro SAAS Apps?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto px-4">
                  Start with a free trial and experience the power of AI-powered micro applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  >
                    View All Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
