'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MessageCircle, Clock, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const SupportPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business.',
      category: 'Getting Started'
    },
    {
      question: 'What support do you provide after implementation?',
      answer: 'We provide 24/7 technical support, regular maintenance, updates, and ongoing optimization to ensure your systems run smoothly.',
      category: 'Support'
    },
    {
      question: 'How secure are your solutions?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures including encryption, access controls, and compliance with industry standards.',
      category: 'Security'
    },
    {
      question: 'Can I customize the AI solutions to my specific needs?',
      answer: 'Absolutely! All our AI solutions are fully customizable to meet your specific business requirements and industry needs.',
      category: 'Customization'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity, but most implementations are completed within 2-6 months. We provide detailed timelines during the planning phase.',
      category: 'Timeline'
    },
    {
      question: 'Do you offer training for my team?',
      answer: 'Yes, we provide comprehensive training programs for your team to ensure they can effectively use and maintain the implemented solutions.',
      category: 'Training'
    }
  ]

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: '24/7 phone support for urgent issues',
      contact: '+1 (555) 123-4567',
      availability: '24/7'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed technical support via email',
      contact: 'support@ziontechgroup.com',
      availability: '24/7'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Instant chat support during business hours',
      contact: 'Available on website',
      availability: '9 AM - 6 PM EST'
    },
    {
      icon: Clock,
      title: 'Emergency Support',
      description: 'Critical issue support with guaranteed response',
      contact: 'emergency@ziontechgroup.com',
      availability: '24/7'
    }
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | 24/7 Technical Support</title>
        <meta name="description" content="Get the help you need with our comprehensive support services. 24/7 technical support, documentation, and resources." />
        <meta name="keywords" content="technical support, customer service, help desk, documentation, troubleshooting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              We're Here to <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Help</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get the support you need with our comprehensive help resources, 
              24/7 technical support, and expert guidance.
            </p>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Contact Support
              </h2>
              <p className="text-xl text-gray-300">
                Choose the support channel that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{channel.title}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <div className="text-cyan-400 font-medium mb-2">{channel.contact}</div>
                  <div className="text-sm text-gray-400">{channel.availability}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Find answers to common questions about our services
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                      <span className="text-sm text-cyan-400">{faq.category}</span>
                    </div>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Helpful Resources
              </h2>
              <p className="text-xl text-gray-300">
                Access documentation, guides, and tutorials
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Documentation</h3>
                <p className="text-gray-300 mb-6">Comprehensive guides and API documentation</p>
                <button className="text-cyan-400 hover:text-cyan-300 font-medium">
                  View Docs →
                </button>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Community Forum</h3>
                <p className="text-gray-300 mb-6">Connect with other users and get help</p>
                <button className="text-cyan-400 hover:text-cyan-300 font-medium">
                  Join Forum →
                </button>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Video Tutorials</h3>
                <p className="text-gray-300 mb-6">Step-by-step video guides and tutorials</p>
                <button className="text-cyan-400 hover:text-cyan-300 font-medium">
                  Watch Videos →
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default SupportPage