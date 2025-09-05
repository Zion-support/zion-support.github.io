<<<<<<< HEAD
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
  ArrowRight
} from 'lucide-react';

const faqCategories = [
  {
    title: 'General Questions',
    icon: HelpCircle,
    questions: [
      {
        question: 'What services does Zion Tech Group offer?',
        answer: 'We offer comprehensive AI services, IT solutions, and micro SAAS products including machine learning, cloud migration, cybersecurity, and custom software development.'
=======
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
const helpCategories = [{
    title: "Getting Started",
    icon: BookOpen,
    articles: [{
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
      }]
  },
  {
    title: "AI Services",
    icon: HelpCircle,
    articles: [{
        title: "Understanding AI Models",
        description: "Learn about different AI models and their applications",
        type: "Guide",
        readTime: "8 min"
>>>>>>> main
      },
      {
        question: 'How can I get started with your services?',
        answer: 'Contact us through our website, call us at +1 302 464 0950, or email kleber@ziontechgroup.com to discuss your needs and get a personalized quote.'
      },
      {
<<<<<<< HEAD
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
        question: 'How long does AI implementation take?',
        answer: 'Implementation timelines vary based on complexity, typically ranging from 2-12 weeks for most AI solutions.'
      }
    ]
  },
  {
    title: 'IT Services',
    icon: Clock,
    questions: [
      {
        question: 'Do you provide cloud migration services?',
        answer: 'Yes, we offer comprehensive cloud migration services for AWS, Azure, and Google Cloud platforms with minimal downtime.'
      },
      {
        question: 'What cybersecurity services do you offer?',
        answer: 'Our cybersecurity services include threat detection, vulnerability assessments, security audits, incident response, and compliance management.'
      }
    ]
  }
];

export default function HelpPage() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (categoryTitle: string) => {
    setOpenCategory(openCategory === categoryTitle ? null : categoryTitle);
  };

=======
        title: "AI Best Practices",
        description: "Tips and best practices for using AI effectively",
        type: "Guide",
        readTime: "12 min"
      }]
  },
  {
    title: "Cloud Services",
    icon: MessageCircle,
    articles: [{
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
      }]
  },
  {
    title: "Billing & Account",
    icon: FileText,
    articles: [{
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
        type: "Tutorial",
        readTime: "10 min"
      }]
  }]
const quickLinks = [
  { title: "API Documentation", href: "/docs/api", icon: FileText },
  { title: "Video Tutorials", href: "/tutorials", icon: Video },
  { title: "Download Resources", href: "/downloads", icon: Download },
  { title: "Community Forum", href: "/community", icon: MessageCircle }]
const faqs = [{
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
  }]
export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
>>>>>>> main
  return (
    <>
      <Head>
        <title>Help & Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Find answers to frequently asked questions and contact our support team." />
        <meta name="keywords" content="help, support, FAQ, contact, Zion Tech Group, AI services, IT services" />
        <link rel="canonical" href="https://ziontechgroup.com/help" />
      </Head>

      <div className="min-h-screen bg-gray-50">
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
            </div>
          </div>
<<<<<<< HEAD
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={categoryIndex}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: categoryIndex * 0.1 }}
                  >
                    <button
                      onClick={() => toggleCategory(category.title)}
                      className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <category.icon className="w-6 h-6 text-blue-600" />
                        <h3 className="text-xl font-semibold text-gray-900">
                          {category.title}
                        </h3>
                        {openCategory === category.title ? (
                          <ChevronDown className="w-5 h-5 text-gray-500 ml-auto" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-500 ml-auto" />
                        )}
                      </div>
                    </button>
                    
                    {openCategory === category.title && (
=======
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Quick Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 hover:shadow-lg transition-all group"
                  whileHover={{ y: -2 }}
                >
                  <link.icon className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:text-blue-700" />
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                    {link.title}
                  </h3>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {helpCategories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >
                  <button
                    onClick={() => toggleCategory(category.title)}
<<<<<<< HEAD
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
=======
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
>>>>>>> main
                  >
                    <div className="flex items-center gap-4">
                      <category.icon className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {category.title}
                      </h3>
                    </div>
<<<<<<< HEAD
                    <ChevronDown className="w-5 h-5 text-gray-500" />
=======
                    {expandedCategories[category.title] ? (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    )}
>>>>>>> main
                  </button>
                  <AnimatePresence>
<<<<<<< HEAD
                    {expandedCategories.includes(category.title) && (
=======
                    {expandedCategories[category.title] && (
>>>>>>> main
>>>>>>> main
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
<<<<<<< HEAD
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
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Still Need Help?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact our support team for personalized assistance
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center">
                  <Phone className="h-6 w-6 mr-3" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-blue-100">+1 302 464 0950</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="h-6 w-6 mr-3" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-100">kleber@ziontechgroup.com</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="h-6 w-6 mr-3" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Us
                </Link>
                <Link href="/ai-services" className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
=======
                        <div className="px-6 pb-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {category.articles.map((article, articleIndex) => (
                              <motion.div
                                key={articleIndex}
                                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                                whileHover={{ y: -2 }}
                              >
                                <div className="flex items-start justify-between mb-2">
                                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
<<<<<<< HEAD
                                    {article.category}
=======
                                    {article.type}
>>>>>>> main
                                  </span>
                                  <span className="text-xs text-gray-500">
                                    {article.readTime}
                                  </span>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                                  {article.title}
                                </h4>
                                <p className="text-sm text-gray-600">
<<<<<<< HEAD
                                  {article.excerpt}
=======
                                  {article.description}
>>>>>>> main
                                </p>
                              </motion.div>
                            ))}
                          </div>
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Contact Support
            </h2>
            <div className="space-y-6">
<<<<<<< HEAD
              {contactMethods.map((method, index) => (
=======
              {supportMethods.map((method, index) => (
>>>>>>> main
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {method.title}
                  </h3>
                  <p className="text-gray-600">
                    {method.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
<<<<<<< HEAD
              Our support team is here to help you succeed. Get in touch with us today.
=======
              Our team is here to help you succeed. Get in touch with us today.
>>>>>>> main
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-6">
                <Mail className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>
                <p className="text-blue-100 mb-4">Get help via email</p>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="text-white hover:text-blue-200 font-medium"
                >
                  support@ziontechgroup.com
                </a>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <Phone className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>
                <p className="text-blue-100 mb-4">Call us directly</p>
                <a
<<<<<<< HEAD
                  href="tel:+13024640950"
                  className="text-white hover:text-blue-200 font-medium"
                >
                  +1 302 464 0950
=======
                  href="tel:+15551234567"
                  className="text-white hover:text-blue-200 font-medium"
                >
                  +1 (555) 123-4567
>>>>>>> main
                </a>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <MessageCircle className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-blue-100 mb-4">Chat with our team</p>
                <button className="text-white hover:text-blue-200 font-medium">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> main
>>>>>>> main
}