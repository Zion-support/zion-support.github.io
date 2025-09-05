import React, { useState } from 'react'
import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle, Search } from 'lucide-react'

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What services does Zion Tech Group offer?",
        answer: "We offer comprehensive AI solutions, IT services, cloud computing, cybersecurity, and micro SaaS solutions."
      },
      {
        question: "How can I get started with your services?",
        answer: "Getting started is easy! Simply contact us through our contact form or call us directly."
      }
    ]
  },
  {
    category: "AI Services",
    questions: [
      {
        question: "What AI technologies do you specialize in?",
        answer: "We specialize in machine learning, natural language processing, computer vision, and AI automation solutions."
      }
    ]
  }
]

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  const toggleExpanded = (itemId: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId)
    } else {
      newExpanded.add(itemId)
    }
    setExpandedItems(newExpanded)
  }

  return (
    <>
      <Head>
        <title>FAQ - Zion Tech Group</title>
        <meta name="description" content="Frequently asked questions about Zion Tech Group's services and solutions." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600">Find answers to common questions about our services</p>
          </div>

          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="space-y-6">
            {filteredFaqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-600 text-white px-6 py-4">
                  <h2 className="text-xl font-semibold flex items-center">
                    <HelpCircle className="mr-2" size={24} />
                    {category.category}
                  </h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {category.questions.map((faq, faqIndex) => {
                    const itemId = `${categoryIndex}-${faqIndex}`
                    const isExpanded = expandedItems.has(itemId)
                    
                    return (
                      <div key={faqIndex} className="p-6">
                        <button
                          onClick={() => toggleExpanded(itemId)}
                          className="w-full text-left flex justify-between items-center focus:outline-none"
                        >
                          <h3 className="text-lg font-medium text-gray-900 pr-4">{faq.question}</h3>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 text-gray-600 leading-relaxed">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No FAQs found</h3>
              <p className="text-gray-600">Try adjusting your search terms</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}