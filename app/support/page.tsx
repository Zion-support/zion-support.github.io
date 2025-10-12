'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Search, MessageCircle, Phone, Mail, FileText, HelpCircle, ChevronRight } from 'lucide-react'

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const faqItems = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Simply contact our team through the contact form or call us directly. We\'ll schedule a free consultation to understand your needs and recommend the best AI solutions for your business.'
    },
    {
      question: 'What is your response time for support requests?',
      answer: 'We typically respond to support requests within 24 hours during business days. For urgent issues, please call our support hotline for immediate assistance.'
    },
    {
      question: 'Do you offer custom AI solutions?',
      answer: 'Yes! We specialize in creating custom AI solutions tailored to your specific business needs. Our team will work closely with you to develop and implement the perfect solution.'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security measures including data encryption, secure cloud infrastructure, and compliance with industry standards like SOC2 and GDPR.'
    }
  ]

  const supportChannels = [
    {
      icon: <Phone className="w-6 h-6 text-green-500" />,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1 302 464 0950',
      hours: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond within 24 hours',
      contact: 'support@ziontechgroup.com',
      hours: '24/7'
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-purple-500" />,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on website',
      hours: 'Mon-Fri 9AM-6PM EST'
    }
  ]

  const resources = [
    {
      title: 'Getting Started Guide',
      description: 'Learn how to set up and use our AI services',
      type: 'Documentation'
    },
    {
      title: 'API Documentation',
      description: 'Complete API reference for developers',
      type: 'Technical'
    },
    {
      title: 'Best Practices',
      description: 'Tips and best practices for optimal results',
      type: 'Guide'
    },
    {
      title: 'Troubleshooting',
      description: 'Common issues and their solutions',
      type: 'Help'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support - Zion Tech Group | Help & Support Center</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Find answers to common questions, contact support, and access resources." />
        <meta name="keywords" content="support, help, FAQ, contact support, customer service" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Support Center
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              We're here to help! Find answers to your questions, get support, 
              and access helpful resources.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Choose your preferred way to contact us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                <div className="mb-4">{channel.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="space-y-2">
                  <p className="text-cyan-400 font-medium">{channel.contact}</p>
                  <p className="text-gray-400 text-sm">{channel.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions
            </p>
          </div>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">{item.question}</h3>
                <p className="text-gray-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Helpful Resources</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Access documentation, guides, and other helpful resources
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <FileText className="w-6 h-6 text-purple-400" />
                  <span className="text-purple-400 text-xs font-medium bg-purple-400/10 px-2 py-1 rounded-full">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                <button className="text-purple-400 hover:text-purple-300 transition-colors flex items-center text-sm">
                  View Resource
                  <ChevronRight className="ml-1 h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SupportPage