'use client';
import React, { useState } from 'react';
import { Brain, BookOpen, Search, Code, FileText, ArrowRight, Zap, Settings, BarChart, Cloud, Target, MessageSquare, Cpu, Database, Users, Mail, Phone, MapPin, Lock, Eye, Truck, Factory, GraduationCap, Stethoscope, CreditCard, Home, Briefcase, Wrench, Bot, Music, Video, Gamepad2, ShoppingCart, Building, Car, Plane, Ship, Train, Heart, Paintbrush, Scissors, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, TrendingUp, Plus, Minus, ExternalLink, Download } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Documentation', icon: BookOpen },
    { id: 'getting-started', name: 'Getting Started', icon: Zap },
    { id: 'api', name: 'API Reference', icon: Code },
    { id: 'ai-services', name: 'AI Services', icon: Brain },
    { id: 'it-services', name: 'IT Services', icon: Settings },
    { id: 'tutorials', name: 'Tutorials', icon: Video },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: Wrench }
  ];

  const documentationSections = [
    {
      id: 1,
      title: 'Getting Started',
      category: 'getting-started',
      description: 'Everything you need to know to get started with Zion Tech Group services',
      icon: Zap,
      articles: [
        {
          title: 'Quick Start Guide',
          description: 'Get up and running in minutes with our quick start guide',
          link: '/docs/quick-start',
          type: 'guide'
        },
        {
          title: 'Account Setup',
          description: 'Learn how to set up your account and configure your preferences',
          link: '/docs/account-setup',
          type: 'tutorial'
        },
        {
          title: 'First Project',
          description: 'Create your first AI project with step-by-step instructions',
          link: '/docs/first-project',
          type: 'tutorial'
        },
        {
          title: 'Best Practices',
          description: 'Follow our recommended best practices for optimal results',
          link: '/docs/best-practices',
          type: 'guide'
        }
      ]
    },
    {
      id: 2,
      title: 'AI Services',
      category: 'ai-services',
      description: 'Comprehensive documentation for all our AI-powered services',
      icon: Brain,
      articles: [
        {
          title: 'Machine Learning API',
          description: 'Complete API reference for our machine learning services',
          link: '/docs/ml-api',
          type: 'api'
        },
        {
          title: 'Natural Language Processing',
          description: 'Guide to using our NLP services for text analysis and processing',
          link: '/docs/nlp-guide',
          type: 'guide'
        },
        {
          title: 'Computer Vision',
          description: 'Documentation for image recognition and computer vision features',
          link: '/docs/computer-vision',
          type: 'guide'
        },
        {
          title: 'AI Model Training',
          description: 'Learn how to train custom AI models with our platform',
          link: '/docs/model-training',
          type: 'tutorial'
        },
        {
          title: 'AI Automation',
          description: 'Automate business processes with our AI automation tools',
          link: '/docs/ai-automation',
          type: 'guide'
        }
      ]
    },
    {
      id: 3,
      title: 'IT Services',
      category: 'it-services',
      description: 'Documentation for our comprehensive IT infrastructure services',
      icon: Settings,
      articles: [
        {
          title: 'Cloud Migration Guide',
          description: 'Step-by-step guide for migrating to the cloud',
          link: '/docs/cloud-migration',
          type: 'guide'
        },
        {
          title: 'Security Configuration',
          description: 'Configure security settings for your infrastructure',
          link: '/docs/security-config',
          type: 'guide'
        },
        {
          title: 'DevOps Pipeline',
          description: 'Set up CI/CD pipelines with our DevOps tools',
          link: '/docs/devops-pipeline',
          type: 'tutorial'
        },
        {
          title: 'Database Management',
          description: 'Manage and optimize your databases with our tools',
          link: '/docs/database-management',
          type: 'guide'
        },
        {
          title: 'Monitoring & Analytics',
          description: 'Monitor your systems and analyze performance data',
          link: '/docs/monitoring',
          type: 'guide'
        }
      ]
    },
    {
      id: 4,
      title: 'API Reference',
      category: 'api',
      description: 'Complete API documentation for developers',
      icon: Code,
      articles: [
        {
          title: 'Authentication',
          description: 'Learn how to authenticate with our APIs',
          link: '/docs/api-auth',
          type: 'api'
        },
        {
          title: 'REST API Endpoints',
          description: 'Complete reference for all REST API endpoints',
          link: '/docs/rest-api',
          type: 'api'
        },
        {
          title: 'GraphQL API',
          description: 'Documentation for our GraphQL API',
          link: '/docs/graphql-api',
          type: 'api'
        },
        {
          title: 'Webhooks',
          description: 'Set up and manage webhooks for real-time updates',
          link: '/docs/webhooks',
          type: 'guide'
        },
        {
          title: 'SDKs & Libraries',
          description: 'Download and use our official SDKs and libraries',
          link: '/docs/sdks',
          type: 'guide'
        }
      ]
    },
    {
      id: 5,
      title: 'Tutorials',
      category: 'tutorials',
      description: 'Step-by-step tutorials for common use cases',
      icon: Video,
      articles: [
        {
          title: 'Building a Chatbot',
          description: 'Create an intelligent chatbot using our AI services',
          link: '/docs/chatbot-tutorial',
          type: 'tutorial'
        },
        {
          title: 'Data Visualization',
          description: 'Create interactive dashboards and data visualizations',
          link: '/docs/data-viz-tutorial',
          type: 'tutorial'
        },
        {
          title: 'Mobile App Integration',
          description: 'Integrate our services into your mobile applications',
          link: '/docs/mobile-integration',
          type: 'tutorial'
        },
        {
          title: 'E-commerce AI',
          description: 'Implement AI features in your e-commerce platform',
          link: '/docs/ecommerce-ai',
          type: 'tutorial'
        }
      ]
    },
    {
      id: 6,
      title: 'Troubleshooting',
      category: 'troubleshooting',
      description: 'Common issues and their solutions',
      icon: Wrench,
      articles: [
        {
          title: 'Common Errors',
          description: 'Solutions to frequently encountered errors',
          link: '/docs/common-errors',
          type: 'guide'
        },
        {
          title: 'Performance Issues',
          description: 'Troubleshoot performance and optimization issues',
          link: '/docs/performance-troubleshooting',
          type: 'guide'
        },
        {
          title: 'API Rate Limits',
          description: 'Understand and work with API rate limits',
          link: '/docs/rate-limits',
          type: 'guide'
        },
        {
          title: 'Debugging Tools',
          description: 'Use our debugging tools to diagnose issues',
          link: '/docs/debugging-tools',
          type: 'guide'
        }
      ]
    }
  ];

  const quickLinks = [
    {
      title: 'API Documentation',
      description: 'Complete API reference',
      icon: Code,
      link: '/api-docs',
      color: 'text-blue-400'
    },
    {
      title: 'SDK Downloads',
      description: 'Download our SDKs',
      icon: Download,
      link: '/sdk-downloads',
      color: 'text-green-400'
    },
    {
      title: 'Code Examples',
      description: 'Sample code and examples',
      icon: FileText,
      link: '/code-examples',
      color: 'text-purple-400'
    },
    {
      title: 'Status Page',
      description: 'Check service status',
      icon: Activity,
      link: '/status',
      color: 'text-orange-400'
    }
  ];

  const filteredSections = documentationSections.filter(section => {
    const matchesCategory = selectedCategory === 'all' || section.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.articles.some(article => 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const toggleSection = (sectionId: number) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'api': return Code;
      case 'tutorial': return Video;
      case 'guide': return BookOpen;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'api': return 'text-blue-400';
      case 'tutorial': return 'text-purple-400';
      case 'guide': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Documentation - Zion Tech Group"
        description="Comprehensive documentation for Zion Tech Group's AI and IT services. Find guides, API references, tutorials, and more."
        keywords={['documentation', 'API docs', 'guides', 'tutorials', 'Zion Tech Group', 'developer resources']}
        canonicalUrl="https://ziontechgroup.com/docs"
      />
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Documentation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Everything you need to know to get the most out of our AI and IT services. 
            From quick start guides to advanced API documentation.
          </p>
        </section>

        {/* Search Bar */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Quick Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300 block"
              >
                <link.icon className={`w-12 h-12 ${link.color} mx-auto mb-4`} />
                <h3 className="text-xl font-bold text-white mb-2">{link.title}</h3>
                <p className="text-gray-300">{link.description}</p>
                <ArrowRight className="w-5 h-5 text-cyan-400 mx-auto mt-4" />
              </a>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-16">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-400 text-slate-900'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="mb-16">
          <div className="space-y-6">
            {filteredSections.map((section) => (
              <div key={section.id} className="cyber-card p-6">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between text-left mb-4"
                >
                  <div className="flex items-center">
                    <section.icon className="w-8 h-8 text-cyan-400 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-white">{section.title}</h3>
                      <p className="text-gray-300">{section.description}</p>
                    </div>
                  </div>
                  {expandedSection === section.id ? <Minus className="w-6 h-6 text-cyan-400 flex-shrink-0" /> : <Plus className="w-6 h-6 text-cyan-400 flex-shrink-0" />}
                </button>
                
                {expandedSection === section.id && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.articles.map((article, articleIndex) => {
                      const TypeIcon = getTypeIcon(article.type);
                      const typeColor = getTypeColor(article.type);
                      
                      return (
                        <a
                          key={articleIndex}
                          href={article.link}
                          className="bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition-all duration-300 group"
                        >
                          <div className="flex items-start mb-3">
                            <TypeIcon className={`w-5 h-5 ${typeColor} mr-2 mt-0.5 flex-shrink-0`} />
                            <div className="flex-1">
                              <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                                {article.title}
                              </h4>
                              <span className={`text-xs ${typeColor} uppercase tracking-wide`}>
                                {article.type}
                              </span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                          </div>
                          <p className="text-gray-300 text-sm">{article.description}</p>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredSections.length === 0 && (
            <div className="cyber-card p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">No documentation found</h3>
              <p className="text-gray-300 mb-6">
                We couldn't find any documentation matching your search. Try different keywords or browse all categories.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="cyber-button px-6 py-3"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>

        {/* Help Section */}
        <section className="cyber-card p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Need More Help?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team and community are here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/support"
              className="cyber-button px-8 py-3 text-lg font-semibold"
            >
              Contact Support
            </a>
            <a
              href="/forum"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Community Forum
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DocsPage;