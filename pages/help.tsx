<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
=======
<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, HelpCircle, BookOpen, MessageCircle, Phone, Mail, FileText, Video, Download, ExternalLink, ChevronDown, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout';

const faqCategories = [
  {
    title: 'Getting Started',
    icon: BookOpen,
    faqs: [
      {
        question: 'How do I get started with Zion Tech Group services?',
        answer: 'Getting started is easy! Simply contact us through our contact form, call us at +1 302 464 0950, or email us at kleber@ziontechgroup.com. We\'ll schedule a consultation to understand your needs and provide a customized solution.'
      },
      {
        question: 'What services do you offer?',
        answer: 'We offer comprehensive AI solutions, IT services, and Micro SaaS products. This includes machine learning, computer vision, cloud infrastructure, cybersecurity, data analytics, and custom software development.'
      },
      {
        question: 'Do you work with small businesses?',
        answer: 'Yes! We work with businesses of all sizes, from startups to large enterprises. We have flexible pricing and solutions tailored to different business needs and budgets.'
      }
    ]
  },
  {
    title: 'AI Services',
    icon: HelpCircle,
    faqs: [
      {
        question: 'What AI technologies do you specialize in?',
        answer: 'We specialize in machine learning, natural language processing, computer vision, predictive analytics, quantum AI, autonomous systems, and custom AI solutions for various industries.'
      },
      {
        question: 'How long does it take to implement an AI solution?',
        answer: 'Implementation time varies depending on complexity. Simple AI integrations can take 2-4 weeks, while complex custom solutions may take 3-6 months. We provide detailed timelines during consultation.'
      },
      {
        question: 'Do you provide AI training for our team?',
        answer: 'Yes! We offer comprehensive training programs to help your team understand and effectively use the AI solutions we implement. This includes documentation, workshops, and ongoing support.'
      }
    ]
  },
  {
    title: 'IT Services',
    icon: MessageCircle,
    faqs: [
      {
        question: 'What IT infrastructure services do you provide?',
        answer: 'We provide cloud infrastructure management, network setup and security, server administration, data backup and recovery, cybersecurity solutions, and 24/7 monitoring and support.'
      },
      {
        question: 'Do you offer cloud migration services?',
        answer: 'Yes! We help businesses migrate to cloud platforms like AWS, Azure, and Google Cloud. Our migration process is designed to minimize downtime and ensure data security.'
      },
      {
        question: 'What cybersecurity measures do you implement?',
        answer: 'We implement comprehensive cybersecurity measures including firewalls, intrusion detection, data encryption, security audits, compliance management, and employee training programs.'
      }
    ]
  },
  {
    title: 'Micro SaaS',
    icon: FileText,
    faqs: [
      {
        question: 'What is Micro SaaS and how can it help my business?',
        answer: 'Micro SaaS refers to small, focused software solutions that solve specific business problems. Our Micro SaaS products include AI-powered tools, automation platforms, analytics dashboards, and productivity solutions.'
      },
      {
        question: 'Can Micro SaaS solutions be customized?',
        answer: 'Absolutely! All our Micro SaaS solutions can be customized to fit your specific business needs, branding, and workflows. We work closely with you to ensure the solution aligns with your requirements.'
      },
      {
        question: 'Do you provide ongoing support for Micro SaaS products?',
        answer: 'Yes! We provide comprehensive support including updates, maintenance, feature enhancements, and technical support. Our support packages are designed to keep your solutions running smoothly.'
      }
    ]
  }
];

const supportChannels = [
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Call us for immediate assistance',
    value: '+1 302 464 0950',
    available: 'Mon-Fri 9AM-6PM EST',
    action: 'Call Now'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us an email anytime',
    value: 'kleber@ziontechgroup.com',
    available: '24/7 Response',
    action: 'Send Email'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our support team',
    value: 'Available 24/7',
    available: 'Instant Response',
    action: 'Start Chat'
  }
];

const resources = [
  {
    title: 'API Documentation',
    description: 'Complete API reference and integration guides',
    icon: BookOpen,
    link: '/api-docs',
    type: 'Documentation'
  },
  {
    title: 'Video Tutorials',
    description: 'Step-by-step video guides for our services',
    icon: Video,
    link: '/tutorials',
    type: 'Video'
  },
  {
    title: 'Download Center',
    description: 'SDKs, tools, and resources for developers',
    icon: Download,
    link: '/downloads',
    type: 'Download'
  },
  {
    title: 'Case Studies',
    description: 'Real-world examples of our successful projects',
    icon: FileText,
    link: '/case-studies',
    type: 'Case Study'
  }
];

export default function Help() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleFaqToggle = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const filteredFaqs = faqCategories[selectedCategory].faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout
      title="Help & Support - Zion Tech Group"
      description="Get help and support for Zion Tech Group services. Find answers to frequently asked questions, access documentation, and contact our support team."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Help & Support
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Find answers to your questions, access documentation, and get support 
              for all Zion Tech Group services.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, and documentation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your preferred way to get help
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{channel.title}</h3>
                <p className="text-gray-600 mb-2">{channel.description}</p>
                <p className="text-lg text-blue-600 font-semibold mb-2">{channel.value}</p>
                <p className="text-sm text-gray-500 mb-4">{channel.available}</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  {channel.action}
                </button>
              </motion.div>
            ))}
<<<<<<< HEAD
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {faqCategories.map((category, index) => (
              <button
                key={category.title}
                onClick={() => setSelectedCategory(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  selectedCategory === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-5 h-5 inline mr-2" />
                {category.title}
              </button>
            ))}
          </div>
          
          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg mb-4"
              >
                <button
                  onClick={() => handleFaqToggle(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-500" />
                  )}
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
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resources & Documentation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive resources and documentation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <resource.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-600 font-semibold">{resource.type}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
            >
              Call Support
              <Phone className="ml-2 w-5 h-5" />
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
            >
              Email Support
              <Mail className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
=======
import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
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
<<<<<<< HEAD
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import Layout from '../components/Layout';

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSection, setExpandedSection] = useState(null);

  const helpCategories = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      articles: [
        {
          title: 'Welcome to Zion Tech Group',
          description: 'Learn about our services and how to get started',
          type: 'guide',
          readTime: '5 min read'
        },
        {
          title: 'Account Setup and Configuration',
          description: 'Step-by-step guide to setting up your account',
          type: 'tutorial',
          readTime: '10 min read'
        },
        {
          title: 'First Project Setup',
          description: 'How to create and configure your first project',
          type: 'tutorial',
          readTime: '15 min read'
        }
      ]
    },
    {
      id: 'services',
      title: 'Our Services',
      icon: HelpCircle,
      articles: [
        {
          title: 'AI Services Overview',
          description: 'Understanding our AI and machine learning services',
          type: 'guide',
          readTime: '8 min read'
        },
        {
          title: 'Cloud Solutions Guide',
          description: 'Everything you need to know about our cloud services',
          type: 'guide',
          readTime: '12 min read'
        },
        {
          title: 'Security Best Practices',
          description: 'How to secure your applications and data',
          type: 'guide',
          readTime: '20 min read'
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Support',
      icon: FileText,
      articles: [
        {
          title: 'API Documentation',
          description: 'Complete API reference and integration guides',
          type: 'documentation',
          readTime: '30 min read'
        },
        {
          title: 'Troubleshooting Common Issues',
          description: 'Solutions to frequently encountered problems',
          type: 'troubleshooting',
          readTime: '15 min read'
        },
        {
          title: 'Performance Optimization',
          description: 'Tips and techniques for optimizing your applications',
          type: 'guide',
          readTime: '25 min read'
        }
      ]
    },
    {
      id: 'billing',
      title: 'Billing & Account',
      icon: MessageCircle,
      articles: [
        {
          title: 'Understanding Your Bill',
          description: 'How to read and understand your monthly bill',
          type: 'guide',
          readTime: '5 min read'
        },
        {
          title: 'Payment Methods',
          description: 'How to add and manage payment methods',
          type: 'guide',
          readTime: '3 min read'
        },
        {
          title: 'Upgrading Your Plan',
          description: 'How to upgrade or downgrade your service plan',
          type: 'guide',
          readTime: '7 min read'
        }
      ]
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your services?',
      answer: 'Getting started is easy! Simply contact us through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and recommend the best solutions for your business.'
    },
    {
      question: 'What is your response time for support requests?',
      answer: 'We aim to respond to all support requests within 24 hours during business days. For critical issues, we provide 24/7 emergency support for our enterprise clients.'
    },
    {
      question: 'Do you offer custom development services?',
      answer: 'Yes! We specialize in custom software development tailored to your specific business needs. Our team can build web applications, mobile apps, APIs, and more.'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security measures including encryption, secure data centers, regular security audits, and compliance with industry standards like SOC 2 and ISO 27001.'
    },
    {
      question: 'Can I integrate your services with my existing systems?',
      answer: 'Absolutely! We provide comprehensive integration services and APIs that allow you to seamlessly connect our solutions with your existing business systems and workflows.'
    }
  ];

  const contactMethods = [
    {
      title: 'Email Support',
      description: 'Get help via email',
      icon: Mail,
      contact: 'support@ziontechgroup.com',
      responseTime: 'Within 24 hours'
    },
    {
      title: 'Phone Support',
      description: 'Speak with our team',
      icon: Phone,
      contact: '+1 (555) 123-4567',
      responseTime: 'Mon-Fri 9AM-6PM EST'
    },
    {
      title: 'Live Chat',
      description: 'Chat with us online',
      icon: MessageCircle,
      contact: 'Available on website',
      responseTime: 'Mon-Fri 9AM-6PM EST'
    }
  ];

  const filteredCategories = helpCategories.map(category => ({
    ...category,
    articles: category.articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.articles.length > 0);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <Layout>
      <Head>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Find guides, tutorials, FAQs, and contact information." />
        <meta name="keywords" content="help, support, documentation, FAQ, tutorials, guides" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>

=======
import * as React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { 
  Search, 
  Phone, 
  Mail, 
  FileText, 
  Video, 
  Download, 
  ExternalLink, 
  ChevronDown,
  HelpCircle,
  MessageCircle,
  BookOpen,
  Clock,
  User,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const helpCategories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Everything you need to know to get started',
    icon: BookOpen,
    articles: [
      {
        title: 'Understanding Our Services',
        description: 'Overview of all available services and solutions',
        readTime: '7 min read',
        type: 'Overview'
      },
      {
        title: 'Setting Up Your Account',
        description: 'Step-by-step guide to create and configure your account',
        readTime: '5 min read',
        type: 'Tutorial'
      },
      {
        title: 'First Steps with AI',
        description: 'How to start using our AI-powered features',
        readTime: '10 min read',
        type: 'Guide'
      }
    ]
  },
  {
    id: 'ai-services',
    title: 'AI Services',
    description: 'Learn about our AI and machine learning capabilities',
    icon: HelpCircle,
    articles: [
      {
        title: 'AI Model Training',
        description: 'How to train custom AI models for your business',
        readTime: '15 min read',
        type: 'Technical'
      },
      {
        title: 'Data Preparation',
        description: 'Best practices for preparing your data for AI',
        readTime: '12 min read',
        type: 'Guide'
      },
      {
        title: 'Model Deployment',
        description: 'Deploying your AI models to production',
        readTime: '20 min read',
        type: 'Technical'
      }
    ]
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    description: 'Cloud infrastructure and deployment guides',
    icon: MessageCircle,
    articles: [
      {
        title: 'Cloud Migration',
        description: 'Migrating your applications to the cloud',
        readTime: '25 min read',
        type: 'Guide'
      },
      {
        title: 'Scaling Applications',
        description: 'How to scale your applications for growth',
        readTime: '18 min read',
        type: 'Technical'
      },
      {
        title: 'Security Best Practices',
        description: 'Keeping your cloud infrastructure secure',
        readTime: '22 min read',
        type: 'Security'
      }
    ]
  }
];

const faqs = [
  {
    question: 'How do I get started with your services?',
    answer: 'Getting started is easy! Simply create an account, choose your plan, and follow our onboarding guide. We provide step-by-step instructions and dedicated support throughout the process.'
  },
  {
    question: 'What programming languages do you support?',
    answer: 'We support all major programming languages including JavaScript, Python, Java, C#, Go, and more. Our APIs are language-agnostic and work with any language that can make HTTP requests.'
  },
  {
    question: 'Do you offer 24/7 support?',
    answer: 'Yes! We provide 24/7 support for all our customers. You can reach us via email, phone, or live chat at any time. Enterprise customers also get dedicated support managers.'
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Absolutely! You can cancel your subscription at any time with no cancellation fees. Your access will continue until the end of your current billing period.'
  },
  {
    question: 'Do you offer custom solutions?',
    answer: 'Yes, we specialize in custom solutions tailored to your specific needs. Our team of experts can work with you to design and implement solutions that perfectly fit your business requirements.'
  }
];

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Call us for immediate assistance',
    contact: '+1 (555) 123-4567',
    availability: '24/7'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us an email and we\'ll respond within 24 hours',
    contact: 'support@ziontechgroup.com',
    availability: '24/7'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our support team in real-time',
    contact: 'Available on our website',
    availability: '24/7'
  }
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);

  const filteredArticles = helpCategories.flatMap(category => 
    category.articles.filter(article => 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <>
      <Head>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Find answers to common questions and access our knowledge base." />
        <meta name="keywords" content="help, support, documentation, FAQ, guides, tutorials" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Help{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Center
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Find answers to your questions and get the support you need. 
                Our comprehensive help center is here to assist you.
              </p>
<<<<<<< HEAD
            </motion.div>
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
          </div>
        </div>
      </section>

<<<<<<< HEAD
        {/* Search Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  How can we help you?
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Search our knowledge base for articles, guides, and solutions.
                </p>
              </motion.div>

              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
=======
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help articles, guides, or FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
              </div>
            </motion.div>
          </div>
        </section>

        {/* Help Categories */}
<<<<<<< HEAD
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Browse by Category
              </h2>
<<<<<<< HEAD
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find help articles organized by topic and service area.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <div className="space-y-6">
                {filteredCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => toggleSection(category.id)}
                      className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <category.icon className="w-8 h-8 text-indigo-600 mr-4" />
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                            <p className="text-gray-600">{category.articles.length} articles</p>
                          </div>
                        </div>
                        {expandedSection === category.id ? (
                          <ChevronDown className="w-6 h-6 text-gray-400" />
                        ) : (
                          <ChevronRight className="w-6 h-6 text-gray-400" />
                        )}
                      </div>
                    </button>
=======
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find help organized by topic and service area.
              </p>
            </motion.div>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {helpCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <category.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {category.description}
                  </p>
                  <div className="space-y-3">
                    {category.articles.map((article, articleIndex) => (
                      <div key={articleIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm">
                            {article.title}
                          </h4>
                          <p className="text-gray-600 text-xs mt-1">
                            {article.description}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <span className="text-xs text-gray-500">
                            {article.readTime}
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to the most common questions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-50 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="text-lg font-medium text-gray-900">
                      {faq.question}
                    </h3>
<<<<<<< HEAD
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
=======
      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services
            </p>
=======
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
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-gray-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
          </div>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {faqCategories.map((category, index) => (
              <button
                key={category.title}
                onClick={() => setSelectedCategory(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                  selectedCategory === index
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-5 h-5 inline mr-2" />
                {category.title}
              </button>
            ))}
          </div>
          
          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg mb-4"
              >
                <button
                  onClick={() => handleFaqToggle(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-500" />
                  )}
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
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
          </div>
        </div>
      </section>

<<<<<<< HEAD
        {/* Contact Support */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our support team is here to help you succeed. Choose the best way to reach us.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <method.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {method.description}
                  </p>
                  <p className="text-blue-600 font-medium mb-2">
                    {method.contact}
                  </p>
                  <p className="text-sm text-gray-500">
                    {method.availability}
                  </p>
                </motion.div>
              ))}
            </motion.div>
=======
      {/* Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resources & Documentation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive resources and documentation
            </p>
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
          </div>
<<<<<<< HEAD
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <resource.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-600 font-semibold">{resource.type}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Can't find what you're looking for? Our support team is here to help you 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
            >
              Call Support
              <Phone className="ml-2 w-5 h-5" />
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 text-lg font-semibold inline-flex items-center"
            >
              Email Support
              <Mail className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
=======
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

const supportMethods = [
  {
    title: "Live Chat Support",
    description: "Get instant help with our 24/7 live chat support. Our team is always ready to assist you."
  },
  {
    title: "Email Support",
    description: "Send us an email at support@ziontechgroup.com and we'll respond within 4 hours."
  },
  {
    title: "Phone Support",
    description: "Call us at +1 302 464 0950 for immediate assistance during business hours."
  },
  {
    title: "Video Call Support",
    description: "Schedule a video call with our technical experts for complex issues."
  }
]

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({})
  
  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryTitle]: !prev[categoryTitle]
    }))
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>Help - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Leading AI & Technology Solutions" />
        <meta name="keywords" content="technology,AI,cloud,micro SaaS" />
      </Head>
      
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Help
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              This page is currently under development. Please check back soon for updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get Started Today
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16" 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This page is currently under development. Please check back soon for updates.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
=======
        </section>
      </div>
    </>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  );
}