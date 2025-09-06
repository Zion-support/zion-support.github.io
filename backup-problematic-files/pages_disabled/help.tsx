import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
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
                  key={categoryIndex}
                  className="bg-white rounded-lg shadow-lg overflow-hidden""
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >,
                  <button;
                    onClick={() => toggleCategory(category.title)}
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
                              >
                                <div className="flex items-start justify-between mb-2">
                                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                    {article.type}
                                  </span>
                                  <span className="text-xs text-gray-500">
                                    {article.readTime}
                                  </span>,
                                </div>;
                                <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">";
                                  {article.title}
                                </h4>
                                <p className="text-sm text-gray-600">
                                  {article.description}
                                </p>
                              </motion.div>
                            ))}
                          </div>
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
                  key={index}
                  className="bg-gray-50 rounded-lg p-6""
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
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
  );
}