import React, { useState } from 'react'"
import { Helmet } from 'react-helmet-async'"
import { 
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  ArrowRightIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'"

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('')"
  const [selectedCategory, setSelectedCategory] = useState('all')"

  const supportCategories = [
    { id: 'all', name: 'All Topics', icon: DocumentTextIcon },
    { id: 'technical', name: 'Technical Support', icon: InformationCircleIcon },
    { id: 'billing', name: 'Billing & Account', icon: CheckCircleIcon },
    { id: 'general', name: 'General Questions', icon: ChatBubbleLeftRightIcon },
    { id: 'emergency', name: 'Emergency Support', icon: ExclamationTriangleIcon }
  ]"

  const faqs = [
    {
      id: 1,
      question: "How do I get started with your AI solutions?",
      answer: "Getting started is easy! Contact our team for a free consultation where we'll assess your needs and recommend the best AI solutions for your business. We'll guide you through the entire implementation process.",
      category: 'technical'
    },
    {
      id: 2,
      question: "What is your response time for support requests?",
      answer: "We offer different response times based on your support tier. Standard support: 24-48 hours, Priority support: 4-8 hours, Emergency support: 1-2 hours. All emergency issues are handled immediately.",
      category: 'general'
    },
    {
      id: 3,
      question: "How do I update my billing information?",
      answer: "You can update your billing information through your account dashboard or by contacting our billing team directly. We accept all major credit cards and offer flexible payment options.",
      category: 'billing'
    },
    {
      id: 4,
      question: "What security measures do you have in place?",
      answer: "We implement enterprise-grade security including end-to-end encryption, multi-factor authentication, regular security audits, and compliance with industry standards like SOC 2 and GDPR.",
      category: 'technical'
    },
    {
      id: 5,
      question: "Can I schedule a training session for my team?",
      answer: "Absolutely! We offer comprehensive training sessions for all our solutions. You can schedule group training, one-on-one sessions, or request custom training materials for your specific needs.",
      category: 'general'
    },
    {
      id: 6,
      question: "What happens if I experience a system outage?",
      answer: "In case of a system outage, our emergency support team is immediately notified and works around the clock to restore services. We also provide regular updates and have backup systems in place.",
      category: 'emergency'
    }
  ]"

  const supportChannels = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: ChatBubbleLeftRightIcon,
      availability: "24/7",
      responseTime: "Immediate",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our technical experts",
      icon: PhoneIcon,
      availability: "Mon-Fri 9AM-6PM EST",
      responseTime: "Immediate",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Email Support",
      description: "Send us detailed questions and get comprehensive answers",
      icon: EnvelopeIcon,
      availability: "24/7",
      responseTime: "Within 24 hours",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Video Call",
      description: "Schedule a screen sharing session for complex issues",
      icon: VideoCameraIcon,
      availability: "By appointment",
      responseTime: "Scheduled",
      color: "from-yellow-500 to-orange-500"
    }
  ]"

  const filteredFaqs = faqs.filter(faq => 
    selectedCategory === 'all' || faq.category === selectedCategory
  ).filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )"

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT solutions. Find answers, contact support, and access resources." />
        <meta name="keywords" content="support, help, technical support, customer service, FAQ, documentation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're here to help you succeed with our AI and IT solutions
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Find answers to common questions, access documentation, or get in touch 
              with our expert support team.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-slate-900 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {supportCategories.map((category) => {
                const Icon = category.icon"
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                        : 'border-slate-600 text-gray-300 hover:border-purple-400 hover:text-purple-300'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{category.name}</span>
                  </button>
                )"
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support channel that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon"
              return (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{channel.title}</h3>
                  <p className="text-gray-300 mb-6">{channel.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-4 h-4" />
                      <span>{channel.availability}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4" />
                      <span>Response: {channel.responseTime}</span>
                    </div>
                  </div>
                </div>
              )"
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find quick answers to the most common questions about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {filteredFaqs.map((faq) => (
              <div 
                key={faq.id}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No FAQs found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Documentation */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Documentation & Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access comprehensive guides, API documentation, and helpful resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <DocumentTextIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">User Guides</h3>
              <p className="text-gray-300 mb-6">
                Step-by-step guides to help you get the most out of our solutions.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold">
                View Guides <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                <DocumentTextIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">API Documentation</h3>
              <p className="text-gray-300 mb-6">
                Complete API reference and integration guides for developers.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold">
                View API Docs <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                <VideoCameraIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Video Tutorials</h3>
              <p className="text-gray-300 mb-6">
                Watch video tutorials and walkthroughs for visual learners.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold">
                Watch Videos <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Our support team is ready to assist you with any questions or issues
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
                <p className="text-gray-300 mb-4">Available 24/7</p>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  Start Chat
                </button>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PhoneIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone Support</h3>
                <p className="text-gray-300 mb-4">+1-302-464-0950</p>
                <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors">
                  Call Now
                </button>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <EnvelopeIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
                <p className="text-gray-300 mb-4">kleber@ziontechgroup.com</p>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )"
}