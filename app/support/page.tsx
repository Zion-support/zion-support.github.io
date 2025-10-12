'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Search, MessageCircle, Phone, Mail, Clock, CheckCircle, HelpCircle, Book, FileText, Users, Settings } from 'lucide-react'
import Layout from '../layout'

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Getting Started', 'AI Services', 'IT Services', 'Billing', 'Technical Issues', 'Account']

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Simply sign up for an account, choose your plan, and follow our onboarding guide. We provide step-by-step tutorials and 24/7 support to help you get up and running quickly.',
      category: 'Getting Started'
    },
    {
      id: 2,
      question: 'What AI models do you use for content generation?',
      answer: 'We use state-of-the-art language models including GPT-4, Claude, and our proprietary models. All models are regularly updated to ensure the best performance and accuracy.',
      category: 'AI Services'
    },
    {
      id: 3,
      question: 'How secure is my data?',
      answer: 'We take data security seriously. All data is encrypted in transit and at rest, and we comply with GDPR, CCPA, and other major privacy regulations. We never share your data with third parties.',
      category: 'Technical Issues'
    },
    {
      id: 4,
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your current billing period.',
      category: 'Billing'
    },
    {
      id: 5,
      question: 'Do you offer custom AI model training?',
      answer: 'Yes, we offer custom AI model training for enterprise clients. Contact our sales team to discuss your specific requirements and get a personalized quote.',
      category: 'AI Services'
    },
    {
      id: 6,
      question: 'What support channels are available?',
      answer: 'We offer multiple support channels including email, live chat, phone support, and our comprehensive knowledge base. Response times vary by plan level.',
      category: 'Account'
    }
  ]

  const supportChannels = [
    {
      icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: 'Immediate',
      action: 'Start Chat'
    },
    {
      icon: <Phone className="w-8 h-8 text-green-500" />,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      action: 'Call Now'
    },
    {
      icon: <Mail className="w-8 h-8 text-purple-500" />,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      availability: '24/7',
      responseTime: 'Within 4 hours',
      action: 'Send Email'
    },
    {
      icon: <Book className="w-8 h-8 text-orange-500" />,
      title: 'Knowledge Base',
      description: 'Browse our comprehensive documentation and guides',
      availability: '24/7',
      responseTime: 'Immediate',
      action: 'Browse Docs'
    }
  ]

  const resources = [
    {
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      title: 'Documentation',
      description: 'Complete API documentation and integration guides',
      link: '/docs'
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: 'Community Forum',
      description: 'Connect with other users and share experiences',
      link: '/community'
    },
    {
      icon: <Settings className="w-6 h-6 text-purple-500" />,
      title: 'System Status',
      description: 'Check the current status of our services',
      link: '/status'
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-orange-500" />,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all features',
      link: '/tutorials'
    }
  ]

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <Layout 
      title="Support - Zion Tech Group"
      description="Get help and support for all your AI and IT service needs. 24/7 support, documentation, and community resources."
      keywords="support, help, documentation, FAQ, customer service, technical support"
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            How can we <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">help?</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get the support you need with our comprehensive help center, 24/7 support, and extensive documentation.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search for help articles, guides, or FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
            />
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support channel that works best for you. We're here to help 24/7.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {channel.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="space-y-2 mb-6 text-sm text-gray-400">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" />
                    {channel.availability}
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    {channel.responseTime}
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-2 rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300">
                  {channel.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Find answers to common questions about our services.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
                <div className="mt-3">
                  <span className="bg-white/5 text-gray-400 px-3 py-1 rounded-full text-sm">
                    {faq.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive resources to get the most out of our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <Link
                key={index}
                to={resource.link}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
              >
                <div className="flex justify-center mb-4">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <div className="flex items-center justify-center text-purple-400 group-hover:text-purple-300">
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-white/90 mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Support
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SupportPage