<<<<<<< HEAD
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
=======
import { motion } from 'framer-motion';
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Search, HelpCircle, BookOpen, MessageCircle, Phone, Mail, FileText, Video, Download, ExternalLink, ChevronDown, ChevronRight } from 'lucide-react';;
import React, { useState } from 'react';
import Head from 'next/head';';
import Link from 'next/link';';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, 
  HelpCircle, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  FileText, 
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Search, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Users, 
  BookOpen, 
  MessageSquare, 
  Phone, 
  Mail,
  HelpCircle,
  Settings,
  Shield,
  Zap,
  Globe,
  FileText,
  Video,
  Download,
  Star,
  TrendingUp
>>>>>>> pr-11913
  Video,
  Download,
  ExternalLink,
  ChevronDown,
<<<<<<< HEAD
=======
  ChevronRight;
} from 'lucide-react';

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
>>>>>>> pr-11913
  ChevronRight,
  ArrowRight
} from 'lucide-react';
const helpCategories = [
  {
    name: 'Getting Started',
    icon: BookOpen,
    description: 'Learn the basics and get up and running quickly',
    articles: [
      {
        title: 'Welcome to Zion Tech Group',
        description: 'Introduction to our platform and services',
        type: 'Guide',
        readTime: '5 min',
        difficulty: 'Beginner'
      },
      {
        title: 'Setting Up Your Account',
        description: 'Complete guide to account setup and configuration',
        type: 'Tutorial',
        readTime: '10 min',
        difficulty: 'Beginner'
      },
      {
        title: 'First Steps with Our Services',
        description: 'Quick start guide for new users',
        type: 'Guide',
        readTime: '8 min',
        difficulty: 'Beginner'
      }
    ];
  },
<<<<<<< HEAD
  {
    name: 'Account Management',
    icon: Settings,
    description: 'Manage your account settings and preferences',
    articles: [
      {
        title: 'Account Settings',
        description: 'Manage your account preferences and settings',
        type: 'Guide',
        readTime: '6 min',
        difficulty: 'Beginner'
      },
      {
        title: 'Billing and Payments',
        description: 'Understanding billing cycles and payment methods',
        type: 'Guide',
        readTime: '7 min',
        difficulty: 'Beginner'
      },
      {
        title: 'User Permissions',
        description: 'Setting up team members and access levels',
        type: 'Tutorial',
        readTime: '12 min',
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    name: 'Services & Features',
    icon: Zap,
    description: 'Learn about our services and how to use them',
    articles: [
      {
        title: 'AI Services Overview',
        description: 'Complete guide to our AI solutions',
        type: 'Guide',
        readTime: '15 min',
        difficulty: 'Intermediate'
      },
      {
        title: 'Cloud Migration Guide',
        description: 'Step-by-step cloud migration process',
        type: 'Tutorial',
        readTime: '20 min',
        difficulty: 'Advanced'
      },
      {
        title: 'Micro SaaS Development',
        description: 'Building custom micro SaaS applications',
        type: 'Guide',
        readTime: '18 min',
        difficulty: 'Advanced'
      }
    ]
  },
  {
    name: 'Security & Compliance',
    icon: Shield,
    description: 'Security best practices and compliance information',
    articles: [
      {
        title: 'Security Best Practices',
        description: 'Essential security guidelines for your projects',
        type: 'Guide',
        readTime: '12 min',
        difficulty: 'Intermediate'
      },
      {
        title: 'Data Privacy & GDPR',
        description: 'Understanding data privacy and GDPR compliance',
        type: 'Guide',
        readTime: '10 min',
        difficulty: 'Intermediate'
      },
      {
        title: 'Access Control Setup',
        description: 'Configuring user access and permissions',
        type: 'Tutorial',
        readTime: '14 min',
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    name: 'Troubleshooting',
    icon: HelpCircle,
    description: 'Common issues and how to resolve them',
    articles: [
      {
        title: 'Common Login Issues',
        description: 'Troubleshooting login and authentication problems',
        type: 'Guide',
        readTime: '8 min',
        difficulty: 'Beginner'
      },
      {
        title: 'API Error Codes',
        description: 'Understanding and resolving API errors',
        type: 'Reference',
        readTime: '6 min',
        difficulty: 'Intermediate'
      },
      {
        title: 'Performance Optimization',
        description: 'Tips for improving application performance',
        type: 'Guide',
        readTime: '16 min',
        difficulty: 'Advanced'
      }
    ];
  },
  {
    name: 'API Documentation',
    icon: Settings,
    description: 'Technical documentation and API references',
    articles: [
      {
        title: 'API Quick Start',
        description: 'Get started with our REST API',
        type: 'Tutorial',
        readTime: '12 min',
        difficulty: 'Intermediate'
      },
      {
        title: 'Authentication Guide',
        description: 'API authentication methods and examples',
        type: 'Guide',
        readTime: '10 min',
        difficulty: 'Intermediate'
      },
      {
        title: "Security Best Practices",
        description: "Keep your cloud environment secure",
        type: "Guide",
        readTime: "15 min"
=======
  {}
    title: "AI Services","
    icon: HelpCircle,
    articles: [;
      {}
        title: "Understanding AI Models","
        description: "Learn about different AI models and their applications","
        type: "Guide","
        readTime: "8 min"";
      },
      {}
        title: "Integrating AI APIs","
        description: "How to integrate our AI services into your applications","
        type: "Tutorial","
        readTime: "20 min"";
      },
      {}
        title: "AI Best Practices","
        description: "Tips and best practices for using AI effectively","
        type: "Guide","
        readTime: "12 min"";
      }
    ];
  },
  {}
    title: "Cloud Services","
    icon: MessageCircle,
    articles: [;
      {}
        title: "Cloud Migration Guide","
        description: "Complete guide to migrating to our cloud platform","
        type: "Guide","
        readTime: "25 min"";
      },
      {}
        title: "Managing Cloud Resources","
        description: "How to efficiently manage your cloud infrastructure","
        type: "Tutorial","
        readTime: "18 min"";
      },
      {}
        title: "Security Best Practices","
        description: "Keep your cloud environment secure","
        type: "Guide","
        readTime: "15 min"";
        title: 'SDK Documentation',
        description: 'Software development kits and libraries',
        type: 'Reference',
        readTime: '15 min',
        difficulty: 'Advanced'
>>>>>>> pr-11913
      }
    ];
  },
  {}
    title: "Billing & Account","
    icon: FileText,
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
<<<<<<< HEAD
      {
        title: "Account Settings",
        description: "Manage your account preferences and settings",
        type: "Tutorial",
        readTime: "10 min"
      }
    ];
  }
];
const quickLinks = [
  { title: "API Documentation", href: "/docs/api", icon: FileText },
  { title: "Video Tutorials", href: "/tutorials", icon: Video },
  { title: "Download Resources", href: "/downloads", icon: Download },
  { title: "Community Forum", href: "/community", icon: MessageCircle }
];
const faqs = [
=======
      {}
        title: "Account Settings","
        description: "Manage your account preferences and settings","
        type: "Tutorial","
        readTime: "10 min"";
      }
    ];
  }
;];

const quickLinks = [;
  { title: "API Documentation", href: "/docs/api", icon: FileText },"
  { title: "Video Tutorials", href: "/tutorials", icon: Video },"
  { title: "Download Resources", href: "/downloads", icon: Download },"
  { title: "Community Forum", href: "/community", icon: MessageCircle }"
;];

const faqs = [;
  {}
    question: "How do I get started with your AI services?","
    answer: "Getting started is easy! First, create an account, then choose a plan that fits your needs. You can start with our free trial to explore our AI capabilities before committing to a paid plan.""
  },
  {}
    question: "What programming languages do you support?","
    answer: "We support all major programming languages including Python, JavaScript, Java, C#, Go, and more. Our APIs are language-agnostic and can be integrated with any technology stack.""
  },
  {}
    question: "How secure is my data?","
    answer: "Security is our top priority. We use enterprise-grade encryption, comply with industry standards like SOC 2 and GDPR, and implement strict access controls to protect your data.""
  },
  {}
    question: "Can I cancel my subscription anytime?","
    answer: "Yes, you can cancel your subscription at any time. There are no cancellation fees, and you'll continue to have access to your services until the end of your current billing period.""
  }
;];

const popularArticles = [
>>>>>>> pr-11913
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
<<<<<<< HEAD
    title: 'Security Best Practices',
    views: 720,
    rating: 4.9,
    category: 'Security'
  }
];
export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');',
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategory(expandedCategory === categoryTitle ? null : categoryTitle);
  };
=======
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. There are no cancellation fees, and you'll continue to have access to your services until the end of your current billing period."
  }]

const supportMethods = [
  {
    title: "Email Support",
    description: "Get help via email at kleber@ziontechgroup.com. We typically respond within 24 hours."
  },
  {
    title: "Phone Support",
    description: "Call us at +1 302 464 0950 for immediate assistance during business hours."
  },
  {
    title: "Live Chat",
    description: "Chat with our support team in real-time through our website chat widget."
  },
  {
    title: "Documentation",
    description: "Browse our comprehensive documentation and guides for self-service support."
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
  

const supportChannels = [
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Get instant help from our support team',
    availability: '24/7',
    responseTime: '2-5 minutes',
    color: 'blue'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our technical experts',
    availability: 'Mon-Fri 9AM-6PM EST',
    responseTime: 'Immediate',
    color: 'green'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us detailed questions and get comprehensive answers',
    availability: '24/7',
    responseTime: '2-4 hours',
    color: 'purple'
  },
  {
    icon: Users,
    title: 'Community Forum',
    description: 'Connect with other users and share knowledge',
    availability: '24/7',
    responseTime: 'Varies',
    color: 'orange'
  }
];

export default function HelpPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Help Center
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Find answers, learn best practices, and get the most out of our services. 
                Our comprehensive help center has everything you need to succeed.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search help articles, guides, and tutorials..."
                    className="w-full pl-12 pr-4 py-4 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Browse by Category
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find the information you need organized by topic and difficulty level.
              </p>
            </motion.div>

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

  const toggleCategory = (categoryTitle: string) => {
;    setExpandedCategory(expandedCategory === categoryTitle ? null : categoryTitle);
  };

  return (;
    <div className="min-h-screen bg-gray-50">";
      <Head>;
        <title>Help Center - Zion Tech Group</title>;
        <meta name="description" content="Get help with Zion Tech Group services. Find guides, tutorials, and support resources." />"
      </Head>;

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">"
        <div className="container mx-auto px-4">";
          <div className="max-w-4xl mx-auto text-center">";
            <HelpCircle className="w-16 h-16 mx-auto mb-6" />";
            <h1 className="text-5xl font-bold mb-6">");
              Help Center;
            </h1>;
            <p className="text-xl text-blue-100 mb-8">";
              Find answers, guides, and support to help you succeed,
            </p>;
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">"
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />";
              <input;
                type="text"";
                placeholder="Search for help articles, guides, and tutorials...""
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500""
              />;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Quick Links */}
      <section className="py-12 bg-white">"
        <div className="container mx-auto px-4">";
          <div className="max-w-6xl mx-auto">";
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">";
              Quick Links;
            </h2>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">";
              {quickLinks.map((link, index) => (,
                <motion.a}),
>>>>>>> pr-11913
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
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 hover:shadow-lg transition-all group""
                  whileHover={{ y: -2 }}
                >,
                  <link.icon className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:text-blue-700" />";
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">";
                    {link.title}
                  </h3>,
                </motion.a>;
              ))}
<<<<<<< HEAD
            </div>
          </div>
        </div>
      </section>
      {/* Help Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Browse by Category
            </h2>
            <div className="space-y-6">
              {helpCategories.map((category, categoryIndex) => (
                <motion.div
=======
            </div>,
          </div>;
        </div>;
      </section>;

      {/* Help Categories */}
      <section className="py-16">"
        <div className="container mx-auto px-4">";
          <div className="max-w-6xl mx-auto">";
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">";
              Browse by Category;
            </h2>;
            
            <div className="space-y-6">";
              {helpCategories.map((category, categoryIndex) => (,
                <motion.div}),
>>>>>>> pr-11913
                  key={categoryIndex}
                  className="bg-white rounded-lg shadow-lg overflow-hidden""
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >,
                  <button;
                    onClick={() => toggleCategory(category.title)}
<<<<<<< HEAD
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <category.icon className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {category.title}
                      </h3>
                    </div>
                    {expandedCategory === category.title ? (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  <AnimatePresence>
                    {expandedCategory === category.title && (
                      <motion.div
=======
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors""
                  >;
                    <div className="flex items-center gap-4">";
                      <category.icon className="w-6 h-6 text-blue-600" />";
                      <h3 className="text-xl font-semibold text-gray-900">";
                        {category.title}
                      </h3>,
                    </div>;
                    {expandedCategory === category.title ? (;
                      <ChevronDown className="w-5 h-5 text-gray-500" />";
                    ) : (;
                      <ChevronRight className="w-5 h-5 text-gray-500" />";
                    )}
                  </button>,
                  
                  <AnimatePresence>;
                    {expandedCategory === category.title && (;
                      <motion.div}),
>>>>>>> pr-11913
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
<<<<<<< HEAD
                              >
                                <div className="flex items-start justify-between mb-2">
                                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                    {article.type}
                                  </span>
                                  <span className="text-xs text-gray-500">
=======
                              >,
                                <div className="flex items-start justify-between mb-2">";
                                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">";
                                    {article.type}
                                  </span>,
                                  <span className="text-xs text-gray-500">";
>>>>>>> pr-11913
                                    {article.readTime}
                                  </span>,
                                </div>;
                                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">";
                                  {article.title}
<<<<<<< HEAD
                                </h4>
                                <p className="text-sm text-gray-600">
                                  {article.description}
                                </p>
                              </motion.div>
                            ))}
                          </div>
=======
                                </h4>,
                                <p className="text-sm text-gray-600">";
                                  {article.description}
                                </p>,
                              </motion.div>;
                            ))}
                          </div>,
                        </div>;
                      </motion.div>;
                    )}
                  </AnimatePresence>,
                </motion.div>;
              ))}
            </div>,
          </div>;
        </div>;
      </section>;

      {/* FAQ Section */}
      <section className="py-16 bg-white">"
        <div className="container mx-auto px-4">";
          <div className="max-w-4xl mx-auto">";
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">";
              Frequently Asked Questions;
            </h2>;
            
            <div className="space-y-6">";
              {faqs.map((faq, index) => (,
                <motion.div}),
>>>>>>> pr-11913
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
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Popular Articles
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Most viewed and highly rated articles from our community.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {popularArticles.map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{article.title}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm text-gray-600">{article.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span>{article.views} views</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
<<<<<<< HEAD
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
=======
        </section>

        {/* Support Channels */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get Support
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Can't find what you're looking for? Our support team is here to help 
                you succeed with our services.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => {
                const IconComponent = channel.icon;
                return (
                  <motion.div
                    key={channel.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg shadow-lg p-6 text-center"
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      channel.color === 'blue' ? 'bg-blue-100' :
                      channel.color === 'green' ? 'bg-green-100' :
                      channel.color === 'purple' ? 'bg-purple-100' :
                      'bg-orange-100'
                    }`}>
                      <IconComponent className={`w-8 h-8 ${
                        channel.color === 'blue' ? 'text-blue-600' :
                        channel.color === 'green' ? 'text-green-600' :
                        channel.color === 'purple' ? 'text-purple-600' :
                        'text-orange-600'
                      }`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{channel.title}</h3>
                    <p className="text-gray-600 mb-4">{channel.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center justify-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{channel.availability}</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <Zap className="w-4 h-4 mr-2" />
                        <span>{channel.responseTime}</span>
                      </div>
                    </div>
                    
                    <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                      channel.color === 'blue' ? 'bg-blue-600 text-white hover:bg-blue-700' :
                      channel.color === 'green' ? 'bg-green-600 text-white hover:bg-green-700' :
                      channel.color === 'purple' ? 'bg-purple-600 text-white hover:bg-purple-700' :
                      'bg-orange-600 text-white hover:bg-orange-700'
                    }`}>
                      {channel.title === 'Live Chat' ? 'Start Chat' :
                       channel.title === 'Phone Support' ? 'Call Now' :
                       channel.title === 'Email Support' ? 'Send Email' :
                       'Join Forum'}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our expert support team is ready to help you succeed. 
                Contact us today for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Support
                </Link>
                <Link
                  href="/faq"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View FAQ
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
>>>>>>> pr-11913
                  key={index}
                  className="bg-gray-50 rounded-lg p-6""
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
<<<<<<< HEAD
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Contact Support */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our support team is here to help you succeed
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
                  href="tel:+15551234567"
                  className="text-white hover:text-blue-200 font-medium"
                >
                  +1 (555) 123-4567
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
=======
                >,
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">";
                    {faq.question}
                  </h3>,
                  <p className="text-gray-600">";
                    {faq.answer}
                  </p>,
                </motion.div>;
              ))}
            </div>,
          </div>;
        </div>;
      </section>;

      {/* Contact Support */}
      <section className="py-16 bg-blue-600">"
        <div className="container mx-auto px-4">";
          <div className="max-w-4xl mx-auto text-center">";
            <h2 className="text-3xl font-bold text-white mb-6">";
              Still Need Help?;
            </h2>;
            <p className="text-xl text-blue-100 mb-8">";
              Our support team is here to help you succeed;
            </p>;
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">";
              <div className="bg-white/10 rounded-lg p-6">";
                <Mail className="w-8 h-8 text-white mx-auto mb-4" />";
                <h3 className="text-lg font-semibold text-white mb-2">Email Support</h3>";
                <p className="text-blue-100 mb-4">Get help via email</p>";
                <a;
                  href="mailto:support@ziontechgroup.com"";
                  className="text-white hover:text-blue-200 font-medium"";
                >;
                  support@ziontechgroup.com;
                </a>;
              </div>;
              
              <div className="bg-white/10 rounded-lg p-6">";
                <Phone className="w-8 h-8 text-white mx-auto mb-4" />";
                <h3 className="text-lg font-semibold text-white mb-2">Phone Support</h3>";
                <p className="text-blue-100 mb-4">Call us directly</p>";
                <a;
                  href="tel:+15551234567"";
                  className="text-white hover:text-blue-200 font-medium"";
                >;
                  +1 (555) 123-4567;
                </a>;
              </div>;
              
              <div className="bg-white/10 rounded-lg p-6">";
                <MessageCircle className="w-8 h-8 text-white mx-auto mb-4" />";
                <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>";
                <p className="text-blue-100 mb-4">Chat with our team</p>";
                <button className="text-white hover:text-blue-200 font-medium">";
                  Start Chat;
                </button>;
              </div>;
            </div>;
          </div>;
        </div>;
      </section>;
    </div>;
>>>>>>> pr-11913
  );
}