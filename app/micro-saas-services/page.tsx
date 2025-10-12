import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Brain, Database, Shield, Code, Smartphone, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function MicroSaasServicesPage() {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization, scheduling, and productivity insights.',
      features: ['AI task prioritization', 'Smart scheduling', 'Productivity analytics', 'Team collaboration'],
      pricing: '$19/month',
      link: '/ai-task-manager',
      popular: true,
      users: '1,200+',
      rating: '4.9'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Smart expense tracking with automatic categorization, receipt scanning, and financial insights.',
      features: ['Receipt scanning', 'Auto categorization', 'Budget alerts', 'Financial reports'],
      pricing: '$15/month',
      link: '/ai-expense-tracker',
      popular: true,
      users: '850+',
      rating: '4.8'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations and breach monitoring.',
      features: ['Secure storage', 'AI security tips', 'Breach monitoring', 'Multi-device sync'],
      pricing: '$12/month',
      link: '/ai-password-manager',
      users: '2,100+',
      rating: '4.9'
    },
    {
      icon: <Code className="w-8 h-8 text-purple-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice generation with AI-powered templates, client management, and payment tracking.',
      features: ['Auto templates', 'Client management', 'Payment tracking', 'Tax calculations'],
      pricing: '$25/month',
      link: '/ai-invoice-generator',
      users: '650+',
      rating: '4.7'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: 'AI Social Media Manager',
      description: 'Automated social media management with AI content creation, scheduling, and analytics.',
      features: ['Content creation', 'Auto scheduling', 'Analytics dashboard', 'Multi-platform support'],
      pricing: '$35/month',
      link: '/ai-social-manager',
      users: '980+',
      rating: '4.8'
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-500" />,
      title: 'AI SEO Optimizer',
      description: 'AI-powered SEO optimization with keyword research, content analysis, and ranking insights.',
      features: ['Keyword research', 'Content analysis', 'Ranking tracking', 'Competitor analysis'],
      pricing: '$29/month',
      link: '/ai-seo-optimizer',
      users: '1,450+',
      rating: '4.9'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Freelance Designer',
      content: 'The AI Task Manager has completely transformed how I organize my work. I\'m 40% more productive now.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Small Business Owner',
      content: 'The AI Expense Tracker saves me hours every week. The automatic categorization is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Marketing Consultant',
      content: 'The AI Social Media Manager has helped me grow my following by 300% in just 3 months.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro SAAS applications including AI task management, expense tracking, password management, invoice generation, and more. Affordable solutions for modern businesses." />
        <meta name="keywords" content="micro SAAS, AI applications, task management, expense tracking, password manager, invoice generator, social media manager, SEO optimizer" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Powerful <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Micro SAAS</span> Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Affordable, AI-powered micro applications designed to solve specific business problems. No complex setups, just powerful tools that work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Micro SAAS Applications</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Simple, powerful tools that solve real business problems
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <span className="text-gray-400 text-sm ml-2">per month</span>
                  </div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between mb-4 text-sm text-gray-400">
                  <span>{service.users} users</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span>{service.rating}</span>
                  </div>
                </div>
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Try Free
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">What Our Users Say</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Join thousands of satisfied users who have transformed their workflows with our micro SAAS applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Boost Your Productivity?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start your free trial today and experience the power of AI-driven micro SAAS applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}