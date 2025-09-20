'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Search } from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
  tags: string[]
}

const DynamicFAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const faqItems: FAQItem[] = [
    {
      id: '1',
      question: 'What is AI automation and how can it benefit my business?',
      answer: 'AI automation uses artificial intelligence to streamline and optimize business processes. It can reduce manual work by up to 80%, increase accuracy, and free up your team to focus on strategic tasks. Our solutions can handle everything from data processing to customer service automation.',
      category: 'AI Services',
      tags: ['automation', 'AI', 'business', 'efficiency']
    },
    {
      id: '2',
      question: 'How quickly can I see results from your AI solutions?',
      answer: 'Most clients see initial improvements within the first week of implementation. Significant ROI typically appears within 30-60 days, with full optimization achieved within 3-6 months. The exact timeline depends on your specific use case and business complexity.',
      category: 'Implementation',
      tags: ['timeline', 'results', 'ROI', 'implementation']
    },
    {
      id: '3',
      question: 'Do you offer custom AI model training?',
      answer: 'Yes! We provide custom AI model training tailored to your specific business needs. Our team works with your data to create models that understand your unique processes, terminology, and requirements. This typically results in 40-60% better accuracy than generic solutions.',
      category: 'Custom Solutions',
      tags: ['custom', 'training', 'models', 'accuracy']
    },
    {
      id: '4',
      question: 'What kind of support do you provide?',
      answer: 'We offer comprehensive support including 24/7 technical assistance, dedicated account managers for enterprise clients, regular check-ins, training sessions, and continuous optimization. Our support team has deep expertise in AI and can help you maximize the value of your investment.',
      category: 'Support',
      tags: ['support', '24/7', 'training', 'optimization']
    },
    {
      id: '5',
      question: 'Is my data secure with your AI solutions?',
      answer: 'Absolutely. We implement enterprise-grade security including end-to-end encryption, SOC 2 compliance, GDPR compliance, and regular security audits. Your data remains under your control, and we never use your proprietary information to train models for other clients.',
      category: 'Security',
      tags: ['security', 'encryption', 'compliance', 'data protection']
    },
    {
      id: '6',
      question: 'Can your solutions integrate with our existing systems?',
      answer: 'Yes, our AI solutions are designed for seamless integration with popular business systems including CRM, ERP, accounting software, and custom applications. We provide APIs, webhooks, and pre-built connectors for smooth data flow and workflow automation.',
      category: 'Integration',
      tags: ['integration', 'APIs', 'systems', 'connectors']
    },
    {
      id: '7',
      question: 'What is the difference between your pricing tiers?',
      answer: 'Our Starter plan is perfect for small teams with basic automation needs. Professional adds advanced features, more team members, and priority support. Enterprise includes custom AI training, unlimited users, dedicated support, and on-premise deployment options.',
      category: 'Pricing',
      tags: ['pricing', 'tiers', 'features', 'comparison']
    },
    {
      id: '8',
      question: 'Do you offer a free trial?',
      answer: 'Yes! We offer a 30-day free trial with full access to our Professional tier features. No credit card required, and you can cancel anytime. During the trial, our team will help you set up and optimize your AI solutions to ensure you see immediate value.',
      category: 'Trial',
      tags: ['trial', 'free', '30-day', 'no credit card']
    },
    {
      id: '9',
      question: 'How do you ensure AI model accuracy and reliability?',
      answer: 'We use multiple validation techniques including cross-validation, A/B testing, and continuous monitoring. Our models undergo rigorous testing before deployment, and we provide real-time performance metrics. We also offer model retraining and fine-tuning based on your feedback and data.',
      category: 'Quality',
      tags: ['accuracy', 'reliability', 'testing', 'monitoring']
    },
    {
      id: '10',
      question: 'What industries do you specialize in?',
      answer: 'We work across various industries including healthcare, finance, e-commerce, manufacturing, and professional services. Our AI solutions are adaptable to different regulatory requirements and business processes. We have specialized expertise in healthcare AI, financial analytics, and supply chain optimization.',
      category: 'Industries',
      tags: ['industries', 'healthcare', 'finance', 'specialization']
    }
  ]

  const categories = ['all', ...Array.from(new Set(faqItems.map(item => item.category)))]

  const filteredItems = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const toggleItem = (itemId: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(itemId)) {
      newOpenItems.delete(itemId)
    } else {
      newOpenItems.add(itemId)
    }
    setOpenItems(newOpenItems)
  }

  const openAll = () => {
    setOpenItems(new Set(filteredItems.map(item => item.id)))
  }

  const closeAll = () => {
    setOpenItems(new Set())
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our AI solutions and services.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search FAQs..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>

            {/* Expand/Collapse Controls */}
            <div className="flex gap-2">
              <button
                onClick={openAll}
                className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Open All
              </button>
              <button
                onClick={closeAll}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-700"
              >
                Close All
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-2">No FAQs found</div>
              <div className="text-gray-400">Try adjusting your search or category filter</div>
            </div>
          ) : (
            filteredItems.map((item) => {
              const isOpen = openItems.has(item.id)
              
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.question}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                          {item.category}
                        </span>
                        <div className="flex gap-1">
                          {item.tags.slice(0, 3).map((tag, index) => (
                            <span
                              key={index}
                              className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-4 border-t border-gray-100">
                      <div className="pt-4 text-gray-700 leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  )}
                </div>
              )
            })
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our AI experts are here to help you find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Contact Our Experts
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-colors"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DynamicFAQ