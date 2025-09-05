import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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
} from 'lucide-react';

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
        title: "Integrating AI APIs",
        description: "How to integrate our AI services into your applications",
        type: "Tutorial",
        readTime: "20 min"
      },
      {
        title: "AI Best Practices",
        description: "Tips and best practices for using AI effectively",
        type: "Guide",
        readTime: "12 min"
      }
    ]
  },
  {
    title: "Cloud Services",
    icon: MessageCircle,
    articles: [
      {
        title: "Cloud Migration Guide",
        description: "Complete guide to migrating to our cloud platform",
        type: "Guide",
        readTime: "25 min"
      },
      {
        title: "Managing Cloud Resources",
        description: "How to efficiently manage your cloud infrastructure",
        type: "Tutorial",
        readTime: "18 min"
      },
      {
        title: "Security Best Practices",
        description: "Keep your cloud environment secure",
        type: "Guide",
        readTime: "15 min"
      }
    ]
  },
  {
    title: "Billing & Account",
    icon: FileText,
    articles: [
      {
        title: "Understanding Your Bill",
        description: "Learn how to read and understand your billing statement",
        type: "Guide",
        readTime: "5 min"
      },
      {
        title: "Payment Methods",
        description: "How to add and manage payment methods",
        type: "Tutorial",
        readTime: "8 min"
      },
      {
        title: "Account Settings",
        description: "Manage your account preferences and settings",
        type: "Guide",
        readTime: "6 min"
      }
    ]
  }
];

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [expandedArticles, setExpandedArticles] = useState<number[]>([]);

  const toggleArticle = (index: number) => {
    setExpandedArticles(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredArticles = helpCategories[selectedCategory].articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help with Zion Tech Group services, AI solutions, and cloud platform." />
      </Head>

      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Help Center
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Find answers, guides, and support for all our services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search help articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {helpCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(index)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === index
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <category.icon className="w-4 h-4 inline mr-2" />
                  {category.title}
                </button>
              ))}
            </div>

            {/* Articles */}
            <div className="space-y-4">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleArticle(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">
                        {article.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
                          {article.type}
                        </span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      {expandedArticles.includes(index) ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedArticles.includes(index) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                          <p>This is a detailed explanation of {article.title.toLowerCase()}. 
                          Here you would find comprehensive information about the topic, 
                          step-by-step instructions, and helpful tips.</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Still Need Help?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our support team is here to help you succeed
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Live Chat
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Get instant help from our support team
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold">
                    Start Chat
                  </button>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Phone Support
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Speak directly with our experts
                  </p>
                  <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-700 font-semibold">
                    Call Now
                  </a>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Email Support
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Send us a detailed message
                  </p>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                    Send Email
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}