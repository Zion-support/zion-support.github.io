import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Search, HelpCircle } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const faqCategories = [
  { name: "General", count: 12, active: true },
  { name: "API", count: 8, active: false },
  { name: "Billing", count: 6, active: false },
  { name: "Technical", count: 10, active: false },
  { name: "Account", count: 5, active: false }
];

const faqItems = [
  {
    category: "General",
    question: "What services does Zion Tech Group offer?",
    answer: "We offer comprehensive technology solutions including AI services, IT services, micro SaaS applications, custom development, and consulting. Our services cover everything from cloud infrastructure to machine learning solutions."
  },
  {
    category: "General",
    question: "How do I get started with your services?",
    answer: "Getting started is easy! You can contact us through our contact page, schedule a free consultation, or reach out to our sales team. We'll work with you to understand your needs and recommend the best solutions."
  },
  {
    category: "General",
    question: "Do you offer support for your services?",
    answer: "Yes, we provide 24/7 support for all our services. Our support team includes technical experts who can help with implementation, troubleshooting, and ongoing maintenance."
  },
  {
    category: "API",
    question: "How do I get an API key?",
    answer: "You can get an API key by signing up for an account and accessing the API section in your dashboard. For enterprise clients, we can provide dedicated API keys with enhanced features."
  },
  {
    category: "API",
    question: "What are your API rate limits?",
    answer: "Our API rate limits vary by plan. Free tier users get 1,000 requests per month, while paid plans offer higher limits. Enterprise clients can get custom rate limits based on their needs."
  },
  {
    category: "API",
    question: "Do you provide SDKs for different programming languages?",
    answer: "Yes, we provide official SDKs for JavaScript/Node.js, Python, PHP, and Java. All SDKs are well-documented and include examples to help you get started quickly."
  },
  {
    category: "Billing",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers. Enterprise clients can also arrange for invoice-based billing with net payment terms."
  },
  {
    category: "Billing",
    question: "Can I change my plan at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
  },
  {
    category: "Billing",
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee for all our services. If you're not satisfied, you can request a full refund within 30 days of your initial purchase."
  },
  {
    category: "Technical",
    question: "What technologies do you use?",
    answer: "We use modern technologies including React, Node.js, Python, AWS, Docker, Kubernetes, and various AI/ML frameworks. Our tech stack is constantly updated to use the latest and most reliable tools."
  },
  {
    category: "Technical",
    question: "Do you provide documentation and tutorials?",
    answer: "Yes, we provide comprehensive documentation, API references, tutorials, and guides. Our documentation is regularly updated and includes code examples and best practices."
  },
  {
    category: "Technical",
    question: "Can you help with migration from other platforms?",
    answer: "Absolutely! We have extensive experience helping clients migrate from various platforms and technologies. We'll assess your current setup and create a migration plan that minimizes downtime."
  },
  {
    category: "Account",
    question: "How do I reset my password?",
    answer: "You can reset your password by clicking the 'Forgot Password' link on the login page. We'll send you an email with instructions to create a new password."
  },
  {
    category: "Account",
    question: "Can I have multiple users on my account?",
    answer: "Yes, most of our plans support multiple users with different permission levels. You can invite team members and assign them specific roles and access levels."
  },
  {
    category: "Account",
    question: "How do I update my account information?",
    answer: "You can update your account information by logging into your dashboard and navigating to the account settings section. Changes are saved automatically."
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('General');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const filteredItems = faqItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout
      title="FAQ - Zion Tech Group"
      description="Find answers to frequently asked questions about our services, API, billing, and technical support."
      keywords="FAQ, frequently asked questions, help, support, questions, answers"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Frequently Asked{' '}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Questions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Find answers to common questions about our services, 
                API, billing, and technical support.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Categories */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQ..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {faqCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.name
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Items */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {filteredItems.length === 0 ? (
                <div className="text-center py-12">
                  <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
                  <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredItems.map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      <button
                        onClick={() => toggleItem(index)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {item.question}
                        </h3>
                        {openItems.includes(index) ? (
                          <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        ) : (
                          <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {openItems.includes(index) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Contact Support
                </a>
                <a href="/support" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Get Help
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}