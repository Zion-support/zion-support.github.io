'use client'
import React from 'react'
import { ArrowRight, Mail, Brain } from 'lucide-react';

const EnhancedHero: React.FC = () => {
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Custom implementation and training'
  ];
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM PST'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'contact@ziontechgroup.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      description: 'Schedule a meeting'
    }
  ];
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center min-h-screen">
        {/* Left Content */}
        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI & IT Solutions
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Harness the power of cutting-edge artificial intelligence and information technology 
              to drive innovation, efficiency, and growth in your organization.
            </p>

            {/* Benefits List */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Why Choose Us?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="cyber-button-secondary px-8 py-4 text-lg font-semibold">
                Learn More
              </button>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <contact.icon className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-white">{contact.title}</div>
                    <div className="text-xs text-gray-400">{contact.details}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content - Visual Elements */}
        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-20">
          <div className="relative">
            {/* Floating Cards */}
            <div className="absolute top-0 left-0 w-64 h-40 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-cyan-500/30 animate-float">
              <div className="p-6">
                <Brain className="h-8 w-8 text-cyan-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">AI Solutions</h3>
                <p className="text-sm text-gray-300">Machine Learning & Analytics</p>
              </div>
            </div>

            <div className="absolute top-20 right-0 w-64 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-sm border border-purple-500/30 animate-float" style={{ animationDelay: '1s' }}>
              <div className="p-6">
                <Shield className="h-8 w-8 text-purple-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Security</h3>
                <p className="text-sm text-gray-300">Cybersecurity & Compliance</p>
              </div>
            </div>

            <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-64 h-40 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-green-500/30 animate-float" style={{ animationDelay: '2s' }}>
              <div className="p-6">
                <Globe className="h-8 w-8 text-green-400 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Cloud Services</h3>
                <p className="text-sm text-gray-300">Infrastructure & Migration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}