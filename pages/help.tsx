import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HelpCircle,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  CheckCircle,
  ArrowRight,
  Search,
  BookOpen,
  MessageCircle,
  FileText,
  Video,
  Download,
  ExternalLink
} from 'lucide-react';
import Layout from '../components/Layout';

const faqCategories = [
  {
    title: 'General Questions',
    icon: HelpCircle,
    questions: [
      {
        question: 'What services does Zion Tech Group offer?',
        answer: 'We offer comprehensive AI services, IT solutions, and micro SAAS products including machine learning, cloud migration, cybersecurity, and custom software development.'
      },
      {
        question: 'How can I get started with your services?',
        answer: 'You can get started by contacting us through our contact form, calling us directly, or scheduling a consultation. We\'ll assess your needs and provide a customized solution.'
      },
      {
        question: 'Do you offer custom solutions?',
        answer: 'Yes, we specialize in creating custom AI and technology solutions tailored to your specific business needs and requirements.'
      }
    ]
  },
  {
    title: 'AI Services',
    icon: MessageSquare,
    questions: [
      {
        question: 'What AI technologies do you work with?',
        answer: 'We work with machine learning, natural language processing, computer vision, predictive analytics, and custom AI model development.'
      },
      {
        question: 'How long does an AI project typically take?',
        answer: 'Project timelines vary based on complexity, but most AI implementations take 2-6 months from initial consultation to deployment.'
      },
      {
        question: 'Do you provide AI training for our team?',
        answer: 'Yes, we offer comprehensive training programs to help your team understand and effectively use AI solutions.'
      }
    ]
  },
  {
    title: 'IT Services',
    icon: CheckCircle,
    questions: [
      {
        question: 'What cloud platforms do you support?',
        answer: 'We support all major cloud platforms including AWS, Azure, Google Cloud, and hybrid cloud solutions.'
      },
      {
        question: 'Do you provide 24/7 support?',
        answer: 'Yes, we offer 24/7 support for all our managed services and critical systems.'
      },
      {
        question: 'How do you ensure data security?',
        answer: 'We implement industry-standard security measures including encryption, access controls, regular audits, and compliance with security frameworks.'
      }
    ]
  }
];

const helpCategories = [
  {
    title: "Getting Started",
    icon: BookOpen,
    articles: [
      {
        title: "Welcome to Zion Tech Group",
        description: "Learn about our services and how we can help your business",
        readTime: "5 min read"
      },
      {
        title: "Setting Up Your Account",
        description: "Step-by-step guide to creating and configuring your account",
        readTime: "3 min read"
      },
      {
        title: "Understanding Our Services",
        description: "Overview of AI, IT, and micro SAAS solutions we offer",
        readTime: "7 min read"
      }
    ]
  },
  {
    title: "AI Services",
    icon: MessageSquare,
    articles: [
      {
        title: "AI Implementation Guide",
        description: "Complete guide to implementing AI solutions in your business",
        readTime: "10 min read"
      },
      {
        title: "Machine Learning Best Practices",
        description: "Best practices for successful ML projects",
        readTime: "8 min read"
      },
      {
        title: "AI Model Training",
        description: "How to train and optimize your AI models",
        readTime: "12 min read"
      }
    ]
  },
  {
    title: "IT Support",
    icon: Phone,
    articles: [
      {
        title: "Cloud Migration Checklist",
        description: "Essential steps for successful cloud migration",
        readTime: "6 min read"
      },
      {
        title: "Cybersecurity Guidelines",
        description: "Protect your business with these security measures",
        readTime: "9 min read"
      },
      {
        title: "System Maintenance",
        description: "Keep your systems running smoothly",
        readTime: "4 min read"
      }
    ]
  }
];

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our support team',
    contact: '+1 (555) 123-4567',
    action: 'Call Now'
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us a detailed message',
    contact: 'support@ziontechgroup.com',
    action: 'Send Email'
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Chat with us in real-time',
    contact: 'Available 24/7',
    action: 'Start Chat'
  }
];

export default function HelpPage() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openFaqCategory, setOpenFaqCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleCategory = (categoryTitle: string) => {
    setOpenCategory(openCategory === categoryTitle ? null : categoryTitle);
  };

  const toggleFaqCategory = (categoryTitle: string) => {
    setOpenFaqCategory(openFaqCategory === categoryTitle ? null : categoryTitle);
  };

  return (
    <Layout
      title="Help & Support - Zion Tech Group"
      description="Get help and support for all Zion Tech Group services. Find answers to common questions and contact our support team."
      keywords="help, support, FAQ, contact, Zion Tech Group"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Help & Support
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Find answers to your questions and get the support you need
            </motion.p>
            
            {/* Search Bar */}
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or topics..."
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Browse Help Topics
              </h2>
              <p className="text-xl text-gray-600">
                Find detailed guides and resources organized by category
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {helpCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <category.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {category.articles.map((article, articleIndex) => (
                        <div key={articleIndex} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                          <div>
                            <h4 className="font-semibold text-gray-900">{article.title}</h4>
                            <p className="text-sm text-gray-600">{article.description}</p>
                          </div>
                          <span className="text-xs text-gray-500">{article.readTime}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to the most common questions
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  className="bg-white rounded-xl shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors"
                    onClick={() => toggleFaqCategory(category.title)}
                  >
                    <div className="flex items-center">
                      <category.icon className="w-6 h-6 text-blue-600 mr-4" />
                      <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                    </div>
                    {openFaqCategory === category.title ? (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-gray-400" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {openFaqCategory === category.title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 space-y-4">
                          {category.questions.map((faq, faqIndex) => (
                            <div key={faqIndex} className="border-l-4 border-blue-500 pl-4">
                              <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
                              <p className="text-gray-600">{faq.answer}</p>
                            </div>
                          ))}
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-600">
                Our support team is here to help you succeed
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <method.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{method.title}</h3>
                  <p className="text-gray-600 mb-4">{method.description}</p>
                  <p className="text-blue-600 font-semibold mb-6">{method.contact}</p>
                  <button className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                    {method.action}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}