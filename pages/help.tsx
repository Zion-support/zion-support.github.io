import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search, 
  HelpCircle, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  FileText, 
  Video,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronRight
} from 'lucide-react'

const helpCategories = [
  {
    title: "Getting Started",
    icon: BookOpen,
    articles: [
      {
        title: "Welcome to Zion Tech Group",
        description: "Learn the basics of our platform and services",
        type: "Guide",
        readTime: "5 min"
      },
      {
        title: "Setting Up Your Account",
        description: "Step-by-step guide to create and configure your account",
        type: "Tutorial",
        readTime: "10 min"
      },
      {
        title: "First Steps with AI Services",
        description: "How to get started with our AI solutions",
        type: "Tutorial",
        readTime: "15 min"
      }
    ]
  },
  {
    title: "AI Services",
    icon: HelpCircle,
    articles: [
      {
        title: "Understanding AI Models",
        description: "Learn about different AI models and their applications",
        type: "Guide",
        readTime: "8 min"
      },
      {
        title: "API Integration Guide",
        description: "How to integrate our AI APIs into your applications",
        type: "Tutorial",
        readTime: "20 min"
      },
      {
        title: "Best Practices for AI Implementation",
        description: "Tips and best practices for successful AI integration",
        type: "Guide",
        readTime: "12 min"
      }
    ]
  },
  {
    title: "Technical Support",
    icon: MessageCircle,
    articles: [
      {
        title: "Troubleshooting Common Issues",
        description: "Solutions to frequently encountered problems",
        type: "Guide",
        readTime: "6 min"
      },
      {
        title: "Performance Optimization",
        description: "How to optimize your applications for better performance",
        type: "Guide",
        readTime: "15 min"
      },
      {
        title: "Security Best Practices",
        description: "Essential security measures for your applications",
        type: "Guide",
        readTime: "10 min"
      }
    ]
  }
];

const quickLinks = [
  { title: "API Documentation", href: "/docs/api", icon: FileText },
  { title: "Video Tutorials", href: "/tutorials", icon: Video },
  { title: "Download Resources", href: "/downloads", icon: Download },
  { title: "Community Forum", href: "/community", icon: MessageCircle }
];

const faqs = [
  {
    question: "How do I get started with your AI services?",
    answer: "Getting started is easy! First, create an account, then choose a plan that fits your needs. You can start with our free trial to explore our AI capabilities before committing to a paid plan."
  },
  {
    question: "What programming languages do you support?",
    answer: "We support all major programming languages including Python, JavaScript, Java, C#, PHP, Ruby, and more. Our APIs are language-agnostic and work with any language that can make HTTP requests."
  },
  {
    question: "Do you provide code examples?",
    answer: "Yes! We provide comprehensive code examples in multiple programming languages for all our APIs and services. You can find them in our documentation and GitHub repositories."
  },
  {
    question: "How do I contact support?",
    answer: "You can contact our support team through email, live chat, or phone. We also have a comprehensive knowledge base and community forum where you can find answers to common questions."
  },
  {
    question: "What about data security?",
    answer: "Security is our top priority. We use enterprise-grade encryption, comply with industry standards like SOC 2 and GDPR, and implement strict access controls to protect your data."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. There are no cancellation fees, and you'll continue to have access to your services until the end of your current billing period."
  }
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (title: string) => {
    setExpandedCategory(expandedCategory === title ? null : title);
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help with Zion Tech Group services. Find guides, tutorials, and support resources." />
      </Head>

      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Help Center
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Find answers, guides, and support resources
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search for help articles, guides, or FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Quick Links
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200 text-center group"
                  >
                    <link.icon className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:text-blue-700" />
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                      {link.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Help Categories
              </h2>
              <div className="space-y-4">
                {helpCategories.map((category, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() => toggleCategory(category.title)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="flex items-center">
                        <category.icon className="w-6 h-6 text-blue-600 mr-3" />
                        <h3 className="text-xl font-semibold text-gray-900">
                          {category.title}
                        </h3>
                        <span className="ml-3 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                          {category.articles.length} articles
                        </span>
                      </div>
                      {expandedCategory === category.title ? (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                    <AnimatePresence>
                      {expandedCategory === category.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-4 border-t border-gray-100">
                            <div className="grid md:grid-cols-2 gap-4 pt-4">
                              {category.articles.map((article, articleIndex) => (
                                <div
                                  key={articleIndex}
                                  className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                                >
                                  <h4 className="font-semibold text-gray-900 mb-2">
                                    {article.title}
                                  </h4>
                                  <p className="text-gray-600 text-sm mb-2">
                                    {article.description}
                                  </p>
                                  <div className="flex items-center justify-between text-xs text-gray-500">
                                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                      {article.type}
                                    </span>
                                    <span>{article.readTime}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Still need help?
              </h2>
              <p className="text-gray-600 text-center mb-6">
                Our support team is here to help you succeed. Get in touch with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Support
                </a>
                <a
                  href="tel:+1234567890"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </a>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}