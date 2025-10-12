'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Star, Smartphone, Zap, Target, Users, TrendingUp, Shield, Globe, Database, Code } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function MicroSaasServicesPage() {
  const microSaasServices = [
    {
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization and automated scheduling',
      price: '$99/month',
      features: ['AI Task Prioritization', 'Smart Scheduling', 'Team Collaboration', 'Progress Tracking', 'Deadline Alerts'],
      benefits: ['40% Productivity Increase', 'Reduced Overdue Tasks', 'Better Time Management', 'Team Coordination'],
      icon: <Target className="w-8 h-8 text-cyan-400" />,
      popular: true
    },
    {
      title: 'AI Expense Tracker',
      description: 'Smart expense tracking with automatic categorization and receipt processing',
      price: '$79/month',
      features: ['Receipt Scanning', 'Auto Categorization', 'Budget Alerts', 'Tax Preparation', 'Multi-currency Support'],
      benefits: ['90% Time Savings', 'Accurate Records', 'Tax Compliance', 'Cost Control'],
      icon: <TrendingUp className="w-8 h-8 text-green-400" />
    },
    {
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations',
      price: '$59/month',
      features: ['Secure Storage', 'Password Generation', 'Security Audits', 'Breach Monitoring', 'Multi-device Sync'],
      benefits: ['Enhanced Security', 'Convenient Access', 'Breach Protection', 'Peace of Mind'],
      icon: <Shield className="w-8 h-8 text-red-400" />
    },
    {
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation with smart templates and payment tracking',
      price: '$89/month',
      features: ['Auto Invoice Creation', 'Payment Tracking', 'Client Management', 'Tax Calculations', 'Multi-currency'],
      benefits: ['Faster Billing', 'Reduced Errors', 'Better Cash Flow', 'Professional Appearance'],
      icon: <Database className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights and wellness recommendations',
      price: '$69/month',
      features: ['Health Metrics Tracking', 'AI Insights', 'Goal Setting', 'Progress Reports', 'Wellness Tips'],
      benefits: ['Better Health Awareness', 'Goal Achievement', 'Data-driven Insights', 'Lifestyle Improvement'],
      icon: <Users className="w-8 h-8 text-orange-400" />
    },
    {
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling and meeting optimization',
      price: '$79/month',
      features: ['Smart Scheduling', 'Meeting Optimization', 'Conflict Resolution', 'Time Blocking', 'Integration APIs'],
      benefits: ['Optimal Scheduling', 'Reduced Conflicts', 'Time Efficiency', 'Better Work-life Balance'],
      icon: <Globe className="w-8 h-8 text-blue-400" />
    }
  ]

  const useCases = [
    {
      industry: 'Small Business',
      title: 'Complete Business Automation',
      description: 'Streamline operations with integrated micro SaaS solutions for small businesses',
      results: ['50% Time Savings', 'Reduced Manual Work', 'Better Organization', 'Cost Efficiency']
    },
    {
      industry: 'Freelancers',
      title: 'Freelancer Productivity Suite',
      description: 'Essential tools for freelancers to manage projects, finances, and client relationships',
      results: ['3x Productivity Increase', 'Professional Image', 'Better Client Management', 'Financial Control']
    },
    {
      industry: 'Startups',
      title: 'Startup Growth Tools',
      description: 'Scalable micro SaaS solutions that grow with your startup from day one',
      results: ['Faster Growth', 'Reduced Overhead', 'Better Data Management', 'Competitive Advantage']
    },
    {
      industry: 'Remote Teams',
      title: 'Remote Work Solutions',
      description: 'Collaborative tools designed for distributed teams and remote work environments',
      results: ['Improved Collaboration', 'Better Communication', 'Enhanced Productivity', 'Team Cohesion']
    }
  ]

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'Creative Agency',
      role: 'Founder',
      content: 'The AI Task Manager transformed how we handle projects. We\'re 40% more productive and never miss deadlines anymore.',
      rating: 5
    },
    {
      name: 'Tom Wilson',
      company: 'Freelance Consultant',
      role: 'Independent Consultant',
      content: 'AI Expense Tracker saved me hours every week. The automatic categorization is incredibly accurate and saves so much time.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      company: 'Tech Startup',
      role: 'CEO',
      content: 'These micro SaaS tools gave us enterprise-level capabilities at a fraction of the cost. Perfect for our growing startup.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Specialized micro SaaS solutions including AI task management, expense tracking, and productivity tools. Perfect for small businesses and startups." />
        <meta name="keywords" content="micro SaaS, task management, expense tracking, productivity tools, small business software" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
              Micro SaaS
              <br />
              <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8">
              Powerful, focused micro SaaS solutions designed for small businesses, freelancers, and startups. 
              Get enterprise-level capabilities at affordable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services" 
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Micro SaaS Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized tools that solve specific business problems with precision and efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-green-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-400 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-green-400">{service.price}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center text-green-400 group-hover:text-green-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Perfect For</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our micro SaaS solutions are designed for specific use cases and business types
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {useCase.industry}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied users
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400 fill-current">★</div>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-cyan-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Boost Your Productivity?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Start with one tool or get the complete suite. All our micro SaaS solutions offer free trials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/ai-services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View AI Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
