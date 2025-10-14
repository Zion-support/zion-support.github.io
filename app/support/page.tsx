'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Phone, Mail, MessageCircle, Clock, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react'

const SupportPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 (302) 464-0950',
      hours: '24/7',
      responseTime: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed responses to your questions',
      contact: 'support@ziontechgroup.com',
      hours: '24/7',
      responseTime: 'Within 2 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on website',
      hours: '9 AM - 6 PM EST',
      responseTime: 'Immediate'
    }
  ]

  const faqs = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we assess your needs and create a customized implementation plan. We\'ll guide you through every step of the process.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity, but most AI implementations take 4-12 weeks from start to finish. We provide detailed project plans with milestones and regular updates throughout the process.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We offer comprehensive ongoing support including monitoring, maintenance, updates, and 24/7 technical assistance. Our support plans are tailored to your specific needs and requirements.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We work with a wide range of technologies including Python, JavaScript, React, Node.js, AWS, Azure, Google Cloud, TensorFlow, PyTorch, and many more. We stay current with the latest technologies and best practices.'
    },
    {
      question: 'How do you ensure data security?',
      answer: 'We implement industry-standard security measures including encryption, secure data transmission, access controls, and compliance with GDPR, HIPAA, and other relevant regulations. Your data security is our top priority.'
    },
    {
      question: 'Can you work with our existing systems?',
      answer: 'Absolutely! We specialize in integrating with existing systems and can work with your current infrastructure. We\'ll assess your systems and create a seamless integration plan that works with your existing setup.'
    }
  ]

  const handleFaqToggle = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | 24/7 Technical Support</title>
        <meta name="description" content="Get 24/7 technical support for all your AI and IT solutions. Phone, email, and live chat support available." />
        <meta name="keywords" content="technical support, customer service, help desk, AI support, IT support, 24/7 support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Support</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We're here to help you succeed. Get 24/7 technical support for all your AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <channel.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{channel.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Contact:</span>
                      <span className="text-white">{channel.contact}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Hours:</span>
                      <span className="text-white">{channel.hours}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Response:</span>
                      <span className="text-cyan-400">{channel.responseTime}</span>
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300">
                    Contact Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <button
                    onClick={() => handleFaqToggle(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
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

        {/* Contact Form */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="How can we help?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Tell us about your issue or question..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default SupportPage
