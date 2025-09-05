import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { 
  BookOpen, 
  Search, 
  MessageCircle, 
  Video, 
  Download, 
  ExternalLink, 
  ChevronDown,
  HelpCircle,
  FileText,
  PlayCircle,
  Phone,
  Mail,
  Clock,
  Cloud,
  Settings
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
        type: "Guide",
        readTime: "15 min"
      }
    ]
  },
  {
    title: "AI Services",
    icon: MessageCircle,
    articles: [
      {
        title: "AI Email Responder Setup",
        description: "Configure and use the AI email responder service",
        type: "Tutorial",
        readTime: "20 min"
      },
      {
        title: "Predictive Analytics Guide",
        description: "Understanding and using predictive analytics features",
        type: "Guide",
        readTime: "25 min"
      },
      {
        title: "Content Generation Best Practices",
        description: "Tips for getting the best results from content generation",
        type: "Guide",
        readTime: "12 min"
      }
    ]
  },
  {
    title: "Cloud Services",
    icon: Cloud,
    articles: [
      {
        title: "Cloud Migration Guide",
        description: "Step-by-step cloud migration process",
        type: "Guide",
        readTime: "30 min"
      },
      {
        title: "Infrastructure Management",
        description: "Managing your cloud infrastructure effectively",
        type: "Tutorial",
        readTime: "18 min"
      }
    ]
  },
  {
    title: "Account & Billing",
    icon: Settings,
    articles: [
      {
        title: "Managing Your Subscription",
        description: "How to update, cancel, or change your subscription",
        type: "Guide",
        readTime: "8 min"
      },
      {
        title: "Payment Methods",
        description: "Adding and managing payment methods",
        type: "Tutorial",
        readTime: "5 min"
      }
    ]
  }
];

const faqs = [
  {
    question: "How do I get started with your AI services?",
    answer: "Getting started is easy! Simply sign up for an account, choose your AI service plan, and follow our quick setup guide. You'll be up and running in minutes."
  },
  {
    question: "What programming languages do you support?",
    answer: "We support all major programming languages including JavaScript, Python, Java, C#, PHP, Ruby, and Go. Our APIs are language-agnostic and work with any language that can make HTTP requests."
  },
  {
    question: "How secure are your services?",
    answer: "Security is our top priority. We use enterprise-grade encryption, follow SOC 2 compliance standards, and implement strict access controls to protect your data and applications."
  },
  {
    question: "Can I integrate your APIs with my existing systems?",
    answer: "Absolutely! Our APIs are designed to integrate seamlessly with existing systems. We provide comprehensive documentation and SDKs for easy integration."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer 24/7 technical support via email, chat, and phone. We also provide comprehensive documentation, tutorials, and a community forum for additional help."
  },
  {
    question: "How does billing work?",
    answer: "We offer flexible billing options including pay-as-you-go and monthly/annual subscriptions. You only pay for what you use, and we provide detailed usage reports."
  }
];

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const filteredArticles = helpCategories.flatMap(category => 
    category.articles.map(article => ({ ...article, category: category.title }))
  ).filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout
      title="Help & Support - Zion Tech Group"
      description="Get help with Zion Tech Group services. Find guides, tutorials, FAQs, and contact our support team."
      keywords="help, support, documentation, FAQ, guides, tutorials"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Help & Support
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Find answers, get help, and learn how to make the most of our services
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Bar */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, or FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How can we help you?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our most popular help topics or search for specific information
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Documentation</h3>
                <p className="text-gray-600 mb-4">Comprehensive guides and API documentation</p>
                <button className="text-blue-600 hover:text-blue-800 font-medium">
                  Browse Docs
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Video Tutorials</h3>
                <p className="text-gray-600 mb-4">Step-by-step video guides and walkthroughs</p>
                <button className="text-green-600 hover:text-green-800 font-medium">
                  Watch Videos
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Get instant help from our support team</p>
                <button className="text-purple-600 hover:text-purple-800 font-medium">
                  Start Chat
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-4">Speak directly with our technical experts</p>
                <button className="text-orange-600 hover:text-orange-800 font-medium">
                  Call Now
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Help Articles */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Help Articles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find detailed guides and tutorials for all our services
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {filteredArticles.map((article, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{article.title}</h3>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {article.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{article.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </span>
                        <span>{article.category}</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 font-medium">
                        Read More
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Quick answers to the most common questions
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-sm"
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      <ChevronDown 
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          expandedFaq === index ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-6 pb-4"
                      >
                        <p className="text-gray-600">{faq.answer}</p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our support team is here to help you succeed. Get in touch with us today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold">
                  Contact Support
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">
                  Schedule a Call
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}