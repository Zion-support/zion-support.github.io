<<<<<<< HEAD
  Video,
  Download,
  ExternalLink,
  ChevronDown,

const helpCategories = [;
  {}
    title: "Getting Started","
    icon: BookOpen,
    articles: [;
      {}
        title: "Welcome to Zion Tech Group","
        description: "Learn the basics of our platform and services","
        type: "Guide","
        readTime: "5 min"";
      },
      {}
        title: "Setting Up Your Account","
        description: "Step-by-step guide to create and configure your account","
        type: "Tutorial","
        readTime: "10 min"";
      },
      {}
        title: "First Steps with AI Services","
        description: "How to get started with our AI solutions","
        type: "Tutorial","
        readTime: "15 min"";
  ChevronRight,
  ArrowRight
=======
<<<<<<< HEAD
import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  HelpCircle, 
  Search, 
  BookOpen, 
  Video, 
  MessageSquare, 
  Phone, 
  Mail, 
  FileText, 
  Download,
  ExternalLink,
  ChevronRight,
  Clock,
  User,
  Tag
>>>>>>> main
} from 'lucide-react';
import Layout from '../components/Layout';

const helpCategories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'New to Zion Tech Group? Start here to learn the basics.',
    icon: BookOpen,
    color: 'blue',
    articles: [
      {
        title: 'Welcome to Zion Tech Group',
        description: 'Learn about our platform and how to get started',
        readTime: '5 min read',
        type: 'Guide'
      },
      {
        title: 'Setting Up Your Account',
        description: 'Step-by-step guide to configure your account',
        readTime: '3 min read',
        type: 'Tutorial'
      },
      {
<<<<<<< HEAD
        title: 'First Steps with Our Services',
        description: 'Quick start guide for new users',
        type: 'Guide',
        readTime: '8 min',
        difficulty: 'Beginner'
=======
        title: 'Understanding Our Services',
        description: 'Overview of all available services and solutions',
        readTime: '7 min read',
        type: 'Overview'
>>>>>>> main
      }
    ]
  },
<<<<<<< HEAD
=======
  {
    id: 'ai-services',
    title: 'AI Services',
    description: 'Everything about our AI and machine learning solutions.',
    icon: HelpCircle,
    color: 'green',
    articles: [
      {
        title: 'AI Implementation Guide',
        description: 'How to implement AI solutions in your business',
        readTime: '10 min read',
        type: 'Guide'
      },
      {
        title: 'Machine Learning Models',
        description: 'Understanding different ML models and their applications',
        readTime: '8 min read',
        type: 'Technical'
      },
      {
        title: 'AI Best Practices',
        description: 'Tips and best practices for AI development',
        readTime: '6 min read',
        type: 'Best Practice'
      }
    ]
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Cloud infrastructure, migration, and management help.',
    icon: HelpCircle,
    color: 'purple',
    articles: [
      {
        title: 'Cloud Migration Checklist',
        description: 'Complete checklist for migrating to the cloud',
        readTime: '12 min read',
        type: 'Checklist'
      },
      {
        title: 'AWS vs Azure vs Google Cloud',
        description: 'Comparison of major cloud providers',
        readTime: '9 min read',
        type: 'Comparison'
      },
      {
        title: 'Cloud Security Best Practices',
        description: 'Essential security practices for cloud environments',
        readTime: '7 min read',
        type: 'Security'
>>>>>>> main
      }
    ]
  },
<<<<<<< HEAD
=======
  {
    id: 'technical-support',
    title: 'Technical Support',
    description: 'Technical issues, troubleshooting, and advanced topics.',
    icon: HelpCircle,
    color: 'orange',
    articles: [
      {
        title: 'Common Technical Issues',
        description: 'Solutions to frequently encountered problems',
        readTime: '5 min read',
        type: 'Troubleshooting'
      },
      {
        title: 'API Documentation',
        description: 'Complete API reference and examples',
        readTime: '15 min read',
        type: 'Documentation'
      },
      {
        title: 'System Requirements',
        description: 'Hardware and software requirements for our solutions',
        readTime: '4 min read',
        type: 'Requirements'
>>>>>>> main
      }
=======
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Search, HelpCircle, BookOpen, MessageCircle, Phone, Mail, FileText, Video, Download, ExternalLink, ChevronDown, ChevronRight } from 'lucide-react';

const helpCategories = [
  {
    title: 'Getting Started',
    description: 'Learn the basics and get up and running quickly',
    icon: BookOpen,
    articles: [
      { title: 'Account Setup', href: '/help/getting-started/account-setup' },
      { title: 'First Steps', href: '/help/getting-started/first-steps' },
      { title: 'Basic Configuration', href: '/help/getting-started/configuration' }
    ]
  },
  {
    title: 'AI Services',
    description: 'Guides for our AI and machine learning services',
    icon: HelpCircle,
    articles: [
      { title: 'AI Email Responder Setup', href: '/help/ai-services/email-responder' },
      { title: 'Predictive Analytics Guide', href: '/help/ai-services/predictive-analytics' },
      { title: 'Chatbot Configuration', href: '/help/ai-services/chatbot' }
    ]
  },
  {
    title: 'IT Services',
    description: 'Documentation for our IT infrastructure services',
    icon: FileText,
<<<<<<< HEAD
    articles: [;
      {}
        title: "Understanding Your Bill","
        description: "Learn how to read and understand your billing statement","
        type: "Guide","
        readTime: "5 min"";
      },
      {}
        title: "Payment Methods","
        description: "How to add and manage payment methods","
        type: "Tutorial","
        readTime: "8 min"";
      },
      }
    ];
  }
  {
    title: 'Getting Started with AI Services',
    views: 1250,
    rating: 4.8,
    category: 'AI Services'
  },
  {
    title: 'Cloud Migration Checklist',
    views: 980,
    rating: 4.9,
    category: 'Cloud Services'
  },
  {
    title: 'API Authentication Guide',
    views: 850,
    rating: 4.7,
    category: 'API Documentation'
  },
  {

const supportChannels = [
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    availability: '24/7',
    responseTime: '2-5 minutes',
=======
    articles: [
      { title: 'Cloud Infrastructure Setup', href: '/help/it-services/cloud-infrastructure' },
      { title: 'Cybersecurity Configuration', href: '/help/it-services/cybersecurity' },
      { title: 'Network Setup', href: '/help/it-services/network' }
    ]
  },
  {
    title: 'Troubleshooting',
    description: 'Common issues and their solutions',
    icon: MessageCircle,
    articles: [
      { title: 'Common Issues', href: '/help/troubleshooting/common-issues' },
      { title: 'Error Messages', href: '/help/troubleshooting/error-messages' },
      { title: 'Performance Issues', href: '/help/troubleshooting/performance' }
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
    ]
  }
];

<<<<<<< HEAD
const quickLinks = [
  {
    title: 'API Documentation',
    description: 'Complete API reference',
    href: '/api-docs',
    icon: FileText,
>>>>>>> main
    color: 'blue'
=======
const supportOptions = [
  {
    title: 'Documentation',
    description: 'Comprehensive guides and API references',
    icon: BookOpen,
    href: '/docs'
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
  },
  {
    title: 'Video Tutorials',
    description: 'Step-by-step video guides',
<<<<<<< HEAD
    href: '/tutorials',
    icon: Video,
    color: 'green'
  },
  {
    title: 'Status Page',
    description: 'Check system status',
    href: '/status',
    icon: Clock,
    color: 'orange'
  },
  {
    title: 'Contact Support',
    description: 'Get help from our team',
    href: '/contact',
    icon: MessageSquare,
    color: 'purple'
  }
];

const supportChannels = [
  {
    title: 'Email Support',
    description: 'Get detailed help via email',
    contact: 'support@ziontechgroup.com',
    responseTime: 'Within 24 hours',
    icon: Mail,
    color: 'blue'
  },
  {
    title: 'Phone Support',
    description: 'Speak with our experts',
    contact: '+1 302 464 0950',
    responseTime: 'Immediate',
    icon: Phone,
    color: 'green'
  },
  {
    title: 'Live Chat',
    description: 'Get instant help online',
    contact: 'Available 24/7',
    responseTime: 'Immediate',
    icon: MessageSquare,
    color: 'purple'
  }
];

export default function Help() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('getting-started');

  const filteredCategories = helpCategories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <Head>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's services. Find documentation, tutorials, and contact our support team." />
        <meta name="keywords" content="help center, support, documentation, tutorials, Zion Tech Group, customer service" />
        <link rel="canonical" href="https://ziontechgroup.com/help" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
=======
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

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  const filteredCategories = helpCategories.map(category => ({
    ...category,
    articles: category.articles.filter(article => 
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.articles.length > 0);

  return (
    <>
      <Head>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help with Zion Tech Group services. Find documentation, tutorials, and support resources." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
<<<<<<< HEAD
              <h1 className="text-5xl font-bold mb-6">Help Center</h1>
              <p className="text-xl text-blue-100 mb-8">
                Find answers, get support, and learn how to make the most of our services.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search help articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
              </div>
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Quick Links */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Links</h2>
              <p className="text-gray-600">Popular resources and support channels</p>
            </motion.div>

<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {helpCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <motion.div
                    key={category.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {category.articles.slice(0, 3).map((article, articleIndex) => (
                        <div key={articleIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm">{article.title}</h4>
                            <div className="flex items-center mt-1">
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                article.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                                article.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {article.difficulty}
                              </span>
                              <span className="text-xs text-gray-500 ml-2">{article.readTime}</span>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');',
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Help Center - Zion Tech Group</title>
        <meta name="description" content="Get help with Zion Tech Group services. Find guides, tutorials, and support resources." />
      </Head>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <HelpCircle className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">
              Help Center
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find answers, guides, and support to help you succeed
            </p>
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and tutorials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Quick Links */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Quick Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
=======
            <div className="grid md:grid-cols-4 gap-6">
>>>>>>> main
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
<<<<<<< HEAD
                  className="bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 hover:shadow-lg transition-all group""
                  whileHover={{ y: -2 }}
                >,
                  <link.icon className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:text-blue-700" />";
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">";
                    {link.title}
                  </h3>,
                </motion.a>;
              ))}
                  key={categoryIndex}
                  className="bg-white rounded-lg shadow-lg overflow-hidden""
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >,
                  <button;
                    onClick={() => toggleCategory(category.title)}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto, opacity: 1 }}',
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden""
                      >;
                        <div className="px-6 pb-6">";
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">";
                            {category.articles.map((article, articleIndex) => (,
                              <motion.div}),
                                key={articleIndex}
                                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group""
                                whileHover={{ y: -2 }}
                                    {article.readTime}
                                  </span>,
                                </div>;
                                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">";
                                  {article.title}
                        </div>
                      ))}
                    </div>
                    
                    <Link
                      href={`/help/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center block"
                    >
                      View All Articles
                    </Link>
                  </motion.div>
                );
              })}
=======
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-center transition-colors group"
                >
                  <div className={`bg-${link.color}-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-${link.color}-200 transition-colors`}>
                    <link.icon className={`w-6 h-6 text-${link.color}-600`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{link.title}</h3>
                  <p className="text-gray-600 text-sm">{link.description}</p>
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-auto mt-2 group-hover:text-gray-600" />
                </motion.a>
              ))}
>>>>>>> main
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Browse Help Topics</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find help articles organized by topic and service area.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className={`bg-${category.color}-600 p-6 text-white`}>
                    <category.icon className="w-8 h-8 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-${category.color}-100 text-sm">{category.description}</p>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      {category.articles.slice(0, 3).map((article, articleIndex) => (
                        <div key={articleIndex} className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            <div className={`w-2 h-2 bg-${category.color}-600 rounded-full mt-2`}></div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {article.title}
                            </p>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className="text-xs text-gray-500">{article.readTime}</span>
                              <span className="text-xs text-gray-400">•</span>
                              <span className="text-xs text-gray-500">{article.type}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center text-sm text-blue-600 hover:text-blue-800">
                      <span>View all articles</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
=======
        {/* Support Options */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How Can We Help?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the support option that works best for you.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 text-center"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <Link
                    href={option.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn More
                    <ExternalLink className="ml-1 w-4 h-4" />
                  </Link>
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
                </motion.div>
              ))}
            </div>
          </div>
<<<<<<< HEAD
                  key={index}
                  className="bg-gray-50 rounded-lg p-6""
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
=======
        </section>

<<<<<<< HEAD
        {/* Selected Category Articles */}
        {selectedCategory && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {helpCategories.find(cat => cat.id === selectedCategory)?.title} Articles
                  </h2>
                  <p className="text-gray-600">
                    {helpCategories.find(cat => cat.id === selectedCategory)?.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {helpCategories.find(cat => cat.id === selectedCategory)?.articles.map((article, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {article.title}
                          </h3>
                          <p className="text-gray-600 mb-3">{article.description}</p>
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="w-4 h-4 mr-1" />
                              {article.readTime}
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Tag className="w-4 h-4 mr-1" />
                              {article.type}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <Download className="w-4 h-4 text-gray-400" />
                          <ExternalLink className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Support Channels */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Support</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Can't find what you're looking for? Our support team is here to help.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className={`bg-${channel.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <channel.icon className={`w-8 h-8 text-${channel.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{channel.title}</h3>
                  <p className="text-gray-600 mb-4">{channel.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-900">{channel.contact}</p>
                    <p className="text-xs text-gray-500">Response time: {channel.responseTime}</p>
                  </div>
=======
        {/* Help Categories */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Help Categories</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Browse our help articles by category.
              </p>
            </motion.div>
            <div className="space-y-6">
              {filteredCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleCategory(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center">
                      <category.icon className="w-6 h-6 mr-3 text-blue-600" />
                      <div>
                        <h3 className="text-xl font-semibold">{category.title}</h3>
                        <p className="text-gray-600">{category.description}</p>
                      </div>
                    </div>
                    {expandedCategory === index ? (
                      <ChevronDown className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-blue-600" />
                    )}
                  </button>
                  <AnimatePresence>
                    {expandedCategory === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 border-t border-gray-200">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                            {category.articles.map((article, articleIndex) => (
                              <Link
                                key={articleIndex}
                                href={article.href}
                                className="flex items-center p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                <FileText className="w-4 h-4 mr-3 text-gray-400" />
                                <span className="text-gray-700">{article.title}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
                </motion.div>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD
      </div>
    </Layout>
=======

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Our support team is here to help you succeed. Contact us for personalized assistance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Support
                  <MessageCircle className="ml-2 w-4 h-4" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  Call Us
                  <Phone className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
>>>>>>> cursor/expand-services-advertise-and-build-project-9473
>>>>>>> main
  );
}