import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HelpCircle, Search, MessageCircle, Phone, Mail, 
  FileText, Video, BookOpen, Users, Clock, CheckCircle,
  ChevronDown, ChevronUp, Send, AlertCircle
} from 'lucide-react';
import Layout from '../components/layout/Layout';

const Support: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'medium'
  });

  const categories = [
    { id: 'all', name: 'All Topics', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'getting-started', name: 'Getting Started', icon: <FileText className="w-5 h-5" /> },
    { id: 'billing', name: 'Billing & Plans', icon: <CheckCircle className="w-5 h-5" /> },
    { id: 'technical', name: 'Technical Issues', icon: <AlertCircle className="w-5 h-5" /> },
    { id: 'account', name: 'Account Management', icon: <Users className="w-5 h-5" /> }
  ];

  const faqs = [
    {
      id: 1,
      question: "How do I get started with your services?",
      answer: "Getting started is easy! Simply sign up for an account, choose your plan, and follow our onboarding guide. We provide step-by-step tutorials and 24/7 support to help you get up and running quickly.",
      category: 'getting-started'
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our encrypted payment system.",
      category: 'billing'
    },
    {
      id: 3,
      question: "How can I contact customer support?",
      answer: "You can reach our support team through multiple channels: live chat (available 24/7), email support (response within 2 hours), phone support (business hours), and our comprehensive help center.",
      category: 'account'
    },
    {
      id: 4,
      question: "What if I experience technical issues?",
      answer: "If you encounter any technical problems, please check our troubleshooting guide first. If the issue persists, contact our technical support team with detailed information about the problem, and we'll resolve it promptly.",
      category: 'technical'
    },
    {
      id: 5,
      question: "Can I change my plan at any time?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences on your next invoice.",
      category: 'billing'
    },
    {
      id: 6,
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade encryption, regular security audits, and comply with industry standards like SOC 2 and GDPR. Your data is protected with multiple layers of security.",
      category: 'technical'
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    (selectedCategory === 'all' || faq.category === selectedCategory) &&
    (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
     faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', contactForm);
    // Reset form
    setContactForm({
      name: '',
      email: '',
      subject: '',
      message: '',
      priority: 'medium'
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-sm font-bold mb-6">
                <HelpCircle className="w-5 h-5 mr-2" />
                SUPPORT CENTER
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                How Can We Help?
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Find answers, get support, and connect with our team. We're here to help you succeed.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, and guides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 text-center hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
                <p className="text-gray-300 mb-4">Get instant help from our support team</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Start Chat
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-green-900/50 to-teal-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20 text-center hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Phone Support</h3>
                <p className="text-gray-300 mb-4">Call us for immediate assistance</p>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Call Now
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 text-center hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
                <p className="text-gray-300 mb-4">Send us a detailed message</p>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Send Email
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Find quick answers to common questions
              </p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-xl transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </button>
              ))}
            </div>

            {/* FAQs */}
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50"
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    {expandedFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFAQ === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-black/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Send us a message and we'll get back to you as soon as possible
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
            >
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Brief description of your issue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Priority
                    </label>
                    <select
                      value={contactForm.priority}
                      onChange={(e) => setContactForm({ ...contactForm, priority: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-none"
                    placeholder="Please provide detailed information about your question or issue..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Support;