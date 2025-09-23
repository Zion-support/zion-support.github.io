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
  ChevronDown,
  ChevronRight,
  MapPin,
  MessageSquare,
  Clock,
  CheckCircle,
  ArrowRight
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
        answer: 'Contact us through our website, call us at +1 302 464 0950, or email kleber@ziontechgroup.com to discuss your needs and get a personalized quote.'
      },
      {
        question: 'Do you offer 24/7 support?',
        answer: 'Yes, we provide 24/7 technical support for all our services to ensure your systems run smoothly around the clock.'
      }
    ]
  },
  {
    title: 'AI Services',
    icon: MessageSquare,
    questions: [
      {
        question: 'What AI technologies do you specialize in?',
        answer: 'We specialize in machine learning, natural language processing, computer vision, predictive analytics, and custom AI model development.'
      },
      {
        question: 'How long does it take to implement AI solutions?',
        answer: 'Implementation time varies based on complexity, but typically ranges from 2-12 weeks for most AI projects.'
      }
    ]
  },
  {
    title: 'IT Services',
    icon: BookOpen,
    questions: [
      {
        question: 'Do you provide cloud migration services?',
        answer: 'Yes, we offer comprehensive cloud migration services for AWS, Azure, and Google Cloud platforms with minimal downtime.'
      },
      {
        question: 'What cybersecurity services do you offer?',
        answer: 'We provide security audits, threat detection, vulnerability assessments, compliance management, and incident response services.'
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
        description: "Learn the basics of our platform and services",
        type: "Guide",
        readTime: "5 min"
      },
      {
        title: "Setting Up Your Account",
        description: "Step-by-step guide to getting started",
        type: "Tutorial",
        readTime: "10 min"
      }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: MessageCircle,
    articles: [
      {
        title: "Understanding AI Models",
        description: "Learn about different AI models and their applications",
        type: "Guide",
        readTime: "8 min"
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
      }
    ]
  }
];

const quickLinks = [
  { title: "API Documentation", href: "/docs/api", icon: FileText },
  { title: "Video Tutorials", href: "/tutorials", icon: Video },
  { title: "Download Resources", href: "/downloads", icon: FileText },
  { title: "Community Forum", href: "/community", icon: MessageCircle }
];

const faqs = [
  {
    question: "How do I get started with your AI services?",
    answer: "Getting started is easy! First, create an account, then choose a plan that fits your needs. You can start with our free trial to explore our AI capabilities before committing to a paid plan."
  },
  {
    question: "What programming languages do you support?",
    answer: "We support all major programming languages including Python, JavaScript, Java, C#, Go, and more. Our APIs are language-agnostic and can be integrated with any technology stack."
  },
  {
    question: "How secure is my data?",
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
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (categoryTitle: string) => {
    setOpenCategory(openCategory === categoryTitle ? null : categoryTitle);
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Help & Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Find answers to common questions, tutorials, and contact information." />
        <meta name="keywords" content="help, support, FAQ, tutorials, documentation, Zion Tech Group" />
      </Head>

      <Layout
        title="Help & Support"
        description="Get help and support for Zion Tech Group services. Find answers to common questions, tutorials, and contact information."
        keywords="help, support, FAQ, tutorials, documentation"
      >
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-4xl mx-auto"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">help you?</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Find answers to your questions, access tutorials, and get the support you need.
                </p>
                
                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* FAQ Categories */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Find quick answers to the most common questions about our services.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {faqCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="flex items-center mb-4">
                      <category.icon className="w-8 h-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {category.title}
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {category.questions.map((faq, faqIndex) => (
                        <div key={faqIndex} className="border-b border-gray-200 pb-3 last:border-b-0">
                          <h4 className="font-medium text-gray-900 mb-2">
                            {faq.question}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Help Categories */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Help Resources
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explore our comprehensive help resources and tutorials.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {helpCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="flex items-center mb-4">
                      <category.icon className="w-8 h-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {category.title}
                      </h3>
                    </div>
                    <div className="space-y-3">
                      {category.articles.map((article, articleIndex) => (
                        <div key={articleIndex} className="border-b border-gray-200 pb-3 last:border-b-0">
                          <h4 className="font-medium text-gray-900 mb-1">
                            {article.title}
                          </h4>
                          <p className="text-gray-600 text-sm mb-2">
                            {article.description}
                          </p>
                          <div className="flex items-center text-xs text-gray-500">
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">
                              {article.type}
                            </span>
                            <Clock className="w-3 h-3 mr-1" />
                            {article.readTime}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Quick Links
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Access our most popular resources and documentation.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all duration-200 group"
                    >
                      <link.icon className="w-6 h-6 text-blue-600 mr-3 group-hover:text-blue-700" />
                      <span className="font-medium text-gray-900 group-hover:text-blue-700">
                        {link.title}
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Support */}
          <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center max-w-4xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Still need help?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our support team is here to help you succeed. Get in touch with us today.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Contact Support
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="inline-flex items-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}