import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MessageCircle, Clock, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const SupportPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire implementation process.',
      category: 'Getting Started'
    },
    {
      id: 2,
      question: 'What support do you provide after implementation?',
      answer: 'We provide 24/7 technical support, regular maintenance, updates, and ongoing optimization to ensure your systems run smoothly. Our support team is always available to help with any issues or questions.',
      category: 'Support'
    },
    {
      id: 3,
      question: 'How secure are your solutions?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures including encryption, access controls, and compliance with industry standards. All our solutions undergo rigorous security testing.',
      category: 'Security'
    },
    {
      id: 4,
      question: 'What is your pricing structure?',
      answer: 'Our pricing is flexible and based on your specific needs. We offer various plans starting from $2,999/month for basic services. Contact us for a customized quote based on your requirements.',
      category: 'Pricing'
    },
    {
      id: 5,
      question: 'Do you offer training for our team?',
      answer: 'Yes! We provide comprehensive training programs for your team to ensure they can effectively use and maintain the solutions we implement. Training is included with all our service packages.',
      category: 'Training'
    },
    {
      id: 6,
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely! We specialize in integrating our solutions with existing systems and workflows. Our team will work closely with you to ensure seamless integration without disrupting your current operations.',
      category: 'Integration'
    }
  ]

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '(302) 464-0950',
      availability: '24/7'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us an email and we\'ll respond within 24 hours',
      contact: 'kleber@ziontechgroup.com',
      availability: '24/7'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST'
    }
  ]

  const categories = ['All', 'Getting Started', 'Support', 'Security', 'Pricing', 'Training', 'Integration']

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id)
  }

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Help & Support Center</title>
        <meta name="description" content="Get help and support for your AI and IT solutions. Find answers to common questions, contact our support team, and access resources." />
        <meta name="keywords" content="support, help, FAQ, contact support, technical support, customer service" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Help & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Support</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We're here to help! Find answers to common questions, contact our support team, 
                and access resources to get the most out of your AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300">
                Choose the support channel that works best for you
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{channel.title}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <div className="text-cyan-400 font-semibold mb-2">{channel.contact}</div>
                  <div className="text-gray-400 text-sm">{channel.availability}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Find answers to common questions about our services
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
                  >
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                    </div>
                    {openFaq === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-cyan-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-cyan-400" />
                    )}
                  </button>
                  {openFaq === faq.id && (
                    <div className="px-8 pb-6">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Support
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default SupportPage