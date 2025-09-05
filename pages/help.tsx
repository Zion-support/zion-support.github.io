import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, HelpCircle, BookOpen, MessageCircle, Phone, Mail, FileText, Video, Download, ExternalLink, ChevronDown, ChevronRight } from 'lucide-react';
import Layout from '../components/Layout';

const helpCategories = [
  {
    id: 1,
    title: 'Getting Started',
    icon: BookOpen,
    articles: [
      { title: 'How to create an account', url: '#' },
      { title: 'Setting up your first project', url: '#' },
      { title: 'Understanding the dashboard', url: '#' }
    ]
  },
  {
    id: 2,
    title: 'Account & Billing',
    icon: FileText,
    articles: [
      { title: 'Managing your subscription', url: '#' },
      { title: 'Payment methods', url: '#' },
      { title: 'Billing history', url: '#' }
    ]
  },
  {
    id: 3,
    title: 'Technical Support',
    icon: HelpCircle,
    articles: [
      { title: 'Troubleshooting common issues', url: '#' },
      { title: 'API documentation', url: '#' },
      { title: 'System requirements', url: '#' }
    ]
  }
];

<<<<<<< HEAD
=======
const supportOptions = [
  {
    title: 'Documentation',
    description: 'Comprehensive guides and API references',
    icon: BookOpen,
    href: '/docs'
  },
  {
    title: 'Video Tutorials',
    description: 'Step-by-step video guides',
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

>>>>>>> main
  const filteredCategories = helpCategories.map(category => ({
    ...category,
    articles: category.articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.articles.length > 0);
<<<<<<< HEAD

  return (
    <Layout
      title="Help Center - Zion Tech Group"
      description="Find answers to your questions, access tutorials, and get support for our AI and IT services. Comprehensive help resources for all users."
      keywords="help, support, tutorials, guides, FAQ, documentation, assistance"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
=======

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <Layout>
      <Head>
        <title>Help Center - Zion Tech Group</title>
    icon: Video,
    href: '/tutorials'
  },
  {
    title: 'Community Forum',
    description: 'Connect with other users and experts',
    icon: MessageCircle,
    href: '/community'
  },
  {
    title: 'Contact Support',
    description: 'Get help from our support team',
    icon: Phone,
    href: '/contact'
  }
];

>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const toggleCategory = (categoryId: number) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <Layout
      title="Help & Support - Zion Tech Group"
      description="Get help and support for our services. Find answers to common questions and contact our support team."
      keywords="help, support, documentation, FAQ, contact"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
=======
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <HelpCircle className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Help <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Center</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Find answers to your questions, access tutorials, and get the support you need to succeed with our platform.
              </p>
=======
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Help <span className="text-blue-600">Center</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Find answers, get support, and learn how to make the most of our services.
              </p>
              <div className="relative max-w-md mx-auto">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search help articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
=======
        <meta name="description" content="Get help and support for Zion Tech Group services. Find guides, tutorials, FAQs, and contact information." />
        <meta name="keywords" content="help, support, documentation, FAQ, tutorials, guides" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 overflow-hidden">
>>>>>>> b00d294d536ffa13ab6811db6a392cfd8c423409
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Help & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Support</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Find answers to your questions and get the support you need to succeed.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Contact Support */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Support
                </a>
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Call: +1 302 464 0950
                </a>
=======
        {/* Help Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Help Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse our help articles organized by category to find the information you need.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {helpCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <category.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                        <p className="text-sm text-gray-500">{category.articles.length} articles</p>
                      </div>
                    </div>
                    {expandedCategory === category.id ? (
                      <ChevronDown className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                  
                  {expandedCategory === category.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <div className="space-y-2">
                        {category.articles.map((article, idx) => (
                          <a
                            key={idx}
                            href={article.url}
                            className="block py-2 px-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                          >
                            {article.title}
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Our support team is here to help you succeed. Contact us through any of these channels.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
                  <p className="text-gray-600 mb-4">+1 302 464 0950</p>
                  <p className="text-sm text-gray-500">Mon-Fri: 9AM-6PM EST</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-gray-600 mb-4">kleber@ziontechgroup.com</p>
                  <p className="text-sm text-gray-500">24/7 response within 24 hours</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
                  <p className="text-gray-600 mb-4">Available on our website</p>
                  <p className="text-sm text-gray-500">Mon-Fri: 9AM-6PM EST</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}