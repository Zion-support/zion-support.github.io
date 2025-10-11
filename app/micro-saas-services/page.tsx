'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, Smartphone, Zap, Shield, Globe, Database, CheckCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function MicroSaasServicesPage() {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8 text-blue-500" />,
      title: 'AI Task Manager',
      description: 'Intelligent task management with AI-powered prioritization and automation.',
      features: ['Smart Prioritization', 'Automated Scheduling', 'Progress Tracking', 'Team Collaboration'],
      href: '/ai-task-manager'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'AI Expense Tracker',
      description: 'Automated expense tracking and financial insights for better budget management.',
      features: ['Receipt Scanning', 'Category Classification', 'Budget Alerts', 'Financial Reports'],
      href: '/ai-expense-tracker'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: 'AI Password Manager',
      description: 'Secure password management with AI-powered security recommendations.',
      features: ['Password Generation', 'Security Analysis', 'Breach Monitoring', 'Auto-Fill'],
      href: '/ai-password-manager'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'AI Invoice Generator',
      description: 'Automated invoice creation and management for streamlined billing.',
      features: ['Template Generation', 'Auto-Population', 'Payment Tracking', 'Client Management'],
      href: '/ai-invoice-generator'
    },
    {
      icon: <Globe className="w-8 h-8 text-red-500" />,
      title: 'AI Health Tracker',
      description: 'Personal health monitoring with AI insights and recommendations.',
      features: ['Health Metrics', 'Trend Analysis', 'Goal Setting', 'Wellness Tips'],
      href: '/ai-health-tracker'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-500" />,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI-powered scheduling optimization.',
      features: ['Smart Scheduling', 'Conflict Resolution', 'Meeting Optimization', 'Time Blocking'],
      href: '/ai-smart-calendar'
    }
  ]

  const benefits = [
    {
      title: 'Easy to Use',
      description: 'Simple interfaces designed for maximum productivity',
      icon: <Smartphone className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'AI-Powered',
      description: 'Intelligent automation and insights',
      icon: <Zap className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Affordable',
      description: 'Cost-effective solutions for small businesses',
      icon: <Database className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Scalable',
      description: 'Grow with your business needs',
      icon: <Globe className="w-6 h-6 text-orange-500" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Specialized micro SaaS solutions including AI task management, expense tracking, password management, and more." />
        <meta name="keywords" content="micro SaaS, AI tools, task management, expense tracking, productivity, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized micro software solutions designed to solve specific business problems 
              with AI-powered automation and intelligent insights.
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
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro SaaS tools are designed to be simple, powerful, and cost-effective.
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
                Ready to Boost Your Productivity?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Discover how our micro SaaS solutions can streamline your workflow and increase efficiency.
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
