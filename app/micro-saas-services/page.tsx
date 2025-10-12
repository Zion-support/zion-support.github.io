'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Cloud, Database, Smartphone, Brain, Cpu, Wifi, Code, DollarSign, Users, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

export default function MicroSAASServicesPage() {
  const microSaasServices = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Task Manager Pro',
      description: 'Intelligent task management with AI-powered prioritization, deadline prediction, and automated scheduling.',
      features: [
        'AI-powered task prioritization',
        'Smart deadline prediction',
        'Automated scheduling',
        'Team collaboration tools',
        'Progress analytics',
        'Mobile & desktop sync'
      ],
      pricing: {
        basic: '$9.99/month',
        pro: '$19.99/month',
        enterprise: '$49.99/month'
      },
      link: '/ai-task-manager',
      popular: true
    },
    {
      icon: <DollarSign className="w-12 h-12 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Smart expense tracking with receipt scanning, categorization, and financial insights powered by AI.',
      features: [
        'Receipt scanning with OCR',
        'AI expense categorization',
        'Budget tracking & alerts',
        'Tax preparation tools',
        'Multi-currency support',
        'Financial reporting'
      ],
      pricing: {
        basic: '$7.99/month',
        pro: '$14.99/month',
        enterprise: '$29.99/month'
      },
      link: '/ai-expense-tracker'
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'AI Password Manager',
      description: 'Advanced password management with AI-powered security analysis and breach monitoring.',
      features: [
        'AI security analysis',
        'Breach monitoring',
        'Password generation',
        'Secure sharing',
        '2FA integration',
        'Dark web monitoring'
      ],
      pricing: {
        basic: '$4.99/month',
        pro: '$9.99/month',
        enterprise: '$19.99/month'
      },
      link: '/ai-password-manager'
    },
    {
      icon: <Database className="w-12 h-12 text-purple-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice generation with AI-powered templates, payment tracking, and client management.',
      features: [
        'AI template generation',
        'Payment tracking',
        'Client management',
        'Tax calculations',
        'Multi-currency support',
        'Automated reminders'
      ],
      pricing: {
        basic: '$12.99/month',
        pro: '$24.99/month',
        enterprise: '$49.99/month'
      },
      link: '/ai-invoice-generator'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-orange-500" />,
      title: 'AI Health Tracker',
      description: 'Comprehensive health tracking with AI insights, symptom analysis, and personalized recommendations.',
      features: [
        'AI symptom analysis',
        'Health trend tracking',
        'Medication reminders',
        'Doctor appointment scheduling',
        'Health report generation',
        'Emergency contacts'
      ],
      pricing: {
        basic: '$15.99/month',
        pro: '$29.99/month',
        enterprise: '$59.99/month'
      },
      link: '/ai-health-tracker'
    },
    {
      icon: <Clock className="w-12 h-12 text-cyan-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI scheduling, meeting optimization, and productivity insights.',
      features: [
        'AI meeting scheduling',
        'Time optimization',
        'Productivity analytics',
        'Meeting insights',
        'Smart reminders',
        'Integration with all platforms'
      ],
      pricing: {
        basic: '$8.99/month',
        pro: '$16.99/month',
        enterprise: '$34.99/month'
      },
      link: '/ai-smart-calendar'
    },
    {
      icon: <Cloud className="w-12 h-12 text-teal-500" />,
      title: 'AI Climate Solutions Pro',
      description: 'Environmental monitoring and carbon footprint tracking with AI-powered sustainability recommendations.',
      features: [
        'Carbon footprint tracking',
        'AI sustainability insights',
        'Environmental goal setting',
        'Green energy monitoring',
        'Sustainability reporting',
        'Community challenges'
      ],
      pricing: {
        basic: '$11.99/month',
        pro: '$22.99/month',
        enterprise: '$44.99/month'
      },
      link: '/ai-climate-solutions-pro'
    },
    {
      icon: <Users className="w-12 h-12 text-pink-500" />,
      title: 'AI Team Collaboration Hub',
      description: 'AI-powered team collaboration with smart project management, communication optimization, and performance analytics.',
      features: [
        'AI project management',
        'Smart communication',
        'Performance analytics',
        'Team productivity insights',
        'Automated workflows',
        'Integration ecosystem'
      ],
      pricing: {
        basic: '$18.99/month',
        pro: '$35.99/month',
        enterprise: '$69.99/month'
      },
      link: '/ai-team-collaboration'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      content: 'AI Task Manager Pro has revolutionized how we manage projects. The AI prioritization saves us 10+ hours per week.',
      rating: 5,
      service: 'AI Task Manager Pro'
    },
    {
      name: 'Michael Chen',
      company: 'FinanceFlow',
      content: 'The AI Expense Tracker is incredibly accurate. It categorizes expenses automatically and saves us hours of manual work.',
      rating: 5,
      service: 'AI Expense Tracker'
    },
    {
      name: 'Emily Rodriguez',
      company: 'HealthTech Solutions',
      content: 'AI Health Tracker provides insights I never knew I needed. The symptom analysis is surprisingly accurate.',
      rating: 5,
      service: 'AI Health Tracker'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '4.9/5', label: 'User Rating' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <>
      <SEOHead 
        title="Micro SAAS Services - Zion Tech Group"
        description="Discover our innovative micro SAAS solutions designed to streamline your business operations with AI-powered tools and automation."
        keywords="micro saas, ai tools, business automation, task management, expense tracking, productivity tools"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Micro SAAS Solutions
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Powerful, AI-driven micro applications designed to solve specific business challenges with precision and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
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

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Micro SAAS Solutions</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Choose from our comprehensive suite of AI-powered micro applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {microSaasServices.map((service, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Pricing Plans</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Basic:</span>
                        <span className="text-white font-semibold">{service.pricing.basic}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Pro:</span>
                        <span className="text-white font-semibold">{service.pricing.pro}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Enterprise:</span>
                        <span className="text-white font-semibold">{service.pricing.enterprise}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                  >
                    Learn More
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
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Real feedback from businesses using our micro SAAS solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="mb-2">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                  <div className="text-blue-400 text-sm font-medium">{testimonial.service}</div>
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Workflow?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Start using our AI-powered micro SAAS solutions today and experience the difference.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
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
          </div>
        </section>
      </div>
    </>
  );
}