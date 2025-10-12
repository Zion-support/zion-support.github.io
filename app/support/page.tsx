'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, HelpCircle, Users, Clock, Star, Zap, Globe, Database, Cpu } from 'lucide-react'
import { Link } from 'react-router-dom'

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      icon: <HelpCircle className="w-8 h-8 text-blue-500" />,
      title: 'Help Center',
      description: 'Find answers to common questions and troubleshooting guides.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Live Chat',
      description: 'Get instant support from our technical team via live chat.'
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support for all your needs.'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      title: 'Emergency Support',
      description: 'Priority support for critical issues and urgent requests.'
    }
  ]

  const faqs = [
    {
      question: 'How do I get started with your services?',
      answer: 'Contact our team for a free consultation and we\'ll help you get started with the right solution for your business.'
    },
    {
      question: 'What support options are available?',
      answer: 'We offer 24/7 support via live chat, email, and phone, plus comprehensive documentation and training resources.'
    },
    {
      question: 'How quickly can you resolve issues?',
      answer: 'Response times vary by priority level, but we typically respond to critical issues within 1 hour and standard requests within 24 hours.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Technical Support & Help</title>
        <meta name="description" content="Get technical support and help from Zion Tech Group. 24/7 support, documentation, and expert assistance." />
        <meta name="keywords" content="technical support, help center, customer service, Zion Tech Group support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Support Center
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Get the help you need with our comprehensive support services. 
                We're here to assist you 24/7 with expert technical support.
              </p>
            </div>
          </div>
        </section>

        {/* Support Options Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Support Options</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Multiple ways to get the help you need
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportOptions.map((option, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                  <div className="mb-4">{option.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{option.title}</h3>
                  <p className="text-gray-300">{option.description}</p>
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
                Quick answers to common questions
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Need More Help?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Contact our support team for personalized assistance with your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Contact Support
                  </Link>
                  <Link 
                    to="/contact" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Schedule Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default SupportPage