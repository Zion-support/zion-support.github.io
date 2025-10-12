import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Search, HelpCircle, MessageCircle, Mail, Phone, Clock, ChevronDown, ChevronRight, BookOpen, Video, FileText, Users } from 'lucide-react'

const HelpPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact us through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and provide a customized solution proposal.'
    },
    {
      question: 'What AI services do you offer?',
      answer: 'We offer comprehensive AI services including machine learning, natural language processing, computer vision, predictive analytics, chatbots, and custom AI solutions tailored to your business needs.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity and scope. Simple AI implementations can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during consultation.'
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes! We offer 24/7 support and maintenance packages. Our team ensures your solutions continue to perform optimally with regular updates, monitoring, and technical support.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including healthcare, finance, manufacturing, retail, e-commerce, education, and government sectors. Our solutions are adaptable to any industry.'
    },
    {
      question: 'How do you ensure data security and privacy?',
      answer: 'We implement enterprise-grade security measures including encryption, secure data handling protocols, compliance with GDPR and other regulations, and regular security audits to protect your data.'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely! Our solutions are designed to integrate seamlessly with your existing infrastructure, APIs, and third-party systems. We ensure minimal disruption to your current operations.'
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing models including project-based, subscription-based, and custom enterprise agreements. Pricing depends on project scope, complexity, and ongoing support requirements.'
    }
  ]

  const helpCategories = [
    {
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      title: 'Documentation',
      description: 'Comprehensive guides and technical documentation',
      link: '/docs'
    },
    {
      icon: <Video className="w-6 h-6 text-green-500" />,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and tutorials',
      link: '/tutorials'
    },
    {
      icon: <FileText className="w-6 h-6 text-purple-500" />,
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      link: '/api-docs'
    },
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      title: 'Community Forum',
      description: 'Connect with other users and get help',
      link: '/community'
    }
  ]

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      contact: 'support@ziontechgroup.com',
      availability: '24/7'
    },
    {
      icon: <Phone className="w-6 h-6 text-green-500" />,
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      contact: '+1 302 464 0950',
      availability: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-purple-500" />,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST'
    }
  ]

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT solutions. Find answers, documentation, and contact our support team." />
        <meta name="keywords" content="help, support, documentation, FAQ, contact" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            How Can We <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Help?</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Find answers, get support, and access resources to make the most of our AI and IT solutions.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Help Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access our comprehensive help resources and support materials.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category, index) => (
              <a
                key={index}
                href={category.link}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{category.title}</h3>
                <p className="text-gray-300 text-sm">{category.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Find quick answers to common questions about our services.
            </p>
          </div>
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className="text-white font-medium">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our support team is here to help you succeed. Choose your preferred contact method.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mx-auto mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-gray-300 mb-4">{method.description}</p>
                <p className="text-purple-400 font-medium mb-2">{method.contact}</p>
                <p className="text-sm text-gray-400 flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {method.availability}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HelpPage