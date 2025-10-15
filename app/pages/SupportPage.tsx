import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MessageCircle, Clock, CheckCircle } from 'lucide-react'

const SupportPage: React.FC = () => {
  const supportMethods = [
    {
      name: 'Phone Support',
      description: 'Get immediate help from our technical experts',
      icon: Phone,
      contact: '+1 302 464 0950',
      availability: '24/7 Available',
      color: 'text-blue-400'
    },
    {
      name: 'Email Support',
      description: 'Get detailed responses to your questions',
      icon: Mail,
      contact: 'kleber@ziontechgroup.com',
      availability: 'Response within 2 hours',
      color: 'text-green-400'
    },
    {
      name: 'Live Chat',
      description: 'Instant help when you need it most',
      icon: MessageCircle,
      contact: 'Available on website',
      availability: 'Business hours',
      color: 'text-purple-400'
    }
  ]

  const faqs = [
    {
      question: 'How do I get technical support?',
      answer: 'You can contact us via phone, email, or live chat. Our support team is available 24/7 to help with any technical issues.'
    },
    {
      question: 'What is your response time?',
      answer: 'We aim to respond to all inquiries within 2 hours during business hours and within 24 hours for non-urgent matters.'
    },
    {
      question: 'Do you offer remote support?',
      answer: 'Yes, we provide remote support for most technical issues. Our team can securely access your systems to diagnose and resolve problems.'
    },
    {
      question: 'What if I need emergency support?',
      answer: 'For critical issues affecting your business operations, call our emergency support line for immediate assistance.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get technical support and help from our expert team. Multiple support channels available 24/7." />
        <meta name="keywords" content="technical support, help desk, customer service, IT support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get help and support from our expert team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                View Documentation
              </button>
            </div>
          </div>
        </div>

        {/* Support Methods */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How Can We Help?
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Choose the support method that works best for you
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {supportMethods.map((method, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{method.name}</h3>
                  <p className="text-gray-300 mb-4">{method.description}</p>
                  <div className="space-y-2">
                    <p className={`${method.color} font-medium`}>{method.contact}</p>
                    <p className="text-sm text-gray-400">{method.availability}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-300 text-lg">
                Find answers to common questions
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Our support team is here to help you succeed. Contact us today for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SupportPage