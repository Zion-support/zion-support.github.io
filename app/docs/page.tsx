'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Search, 
  BookOpen, 
  Code, 
  Video, 
  FileText, 
  Download, 
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Brain,
  Cloud,
  Shield,
  Zap,
  Smartphone,
  BarChart3,
  Settings,
  Users,
  Mail,
  Phone,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      description: 'Quick start guides and setup instructions',
      articles: [
        {
          title: 'Welcome to Zion Tech Group',
          description: 'Overview of our platform and services',
          type: 'guide',
          estimatedTime: '5 min read'
        },
        {
          title: 'Account Setup',
          description: 'How to create and configure your account',
          type: 'tutorial',
          estimatedTime: '10 min read'
        },
        {
          title: 'First Steps',
          description: 'Getting started with your first project',
          type: 'tutorial',
          estimatedTime: '15 min read'
        },
        {
          title: 'Pricing & Plans',
          description: 'Understanding our pricing structure',
          type: 'guide',
          estimatedTime: '8 min read'
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      description: 'Documentation for our AI solutions',
      articles: [
        {
          title: 'AI Content Generator API',
          description: 'Complete API reference for content generation',
          type: 'api',
          estimatedTime: '20 min read'
        },
        {
          title: 'AI Chatbot Builder',
          description: 'Building and deploying intelligent chatbots',
          type: 'tutorial',
          estimatedTime: '30 min read'
        },
        {
          title: 'AI Analytics Dashboard',
          description: 'Setting up and using analytics dashboards',
          type: 'tutorial',
          estimatedTime: '25 min read'
        },
        {
          title: 'Custom AI Models',
          description: 'Training and deploying custom AI models',
          type: 'advanced',
          estimatedTime: '45 min read'
        }
      ]
    },
    {
      id: 'it-services',
      title: 'IT Services',
      icon: <Code className="w-6 h-6 text-green-400" />,
      description: 'Technical documentation for IT solutions',
      articles: [
        {
          title: 'Cloud Migration Guide',
          description: 'Step-by-step cloud migration process',
          type: 'guide',
          estimatedTime: '60 min read'
        },
        {
          title: 'Cybersecurity Best Practices',
          description: 'Security implementation and monitoring',
          type: 'guide',
          estimatedTime: '40 min read'
        },
        {
          title: 'Mobile App Development',
          description: 'Building cross-platform mobile applications',
          type: 'tutorial',
          estimatedTime: '90 min read'
        },
        {
          title: 'DevOps Implementation',
          description: 'Setting up CI/CD pipelines and automation',
          type: 'tutorial',
          estimatedTime: '75 min read'
        }
      ]
    },
    {
      id: '5g-solutions',
      title: '5G Solutions',
      icon: <Cloud className="w-6 h-6 text-blue-400" />,
      description: '5G implementation and optimization guides',
      articles: [
        {
          title: '5G Network Planning',
          description: 'Planning and designing 5G networks',
          type: 'guide',
          estimatedTime: '50 min read'
        },
        {
          title: 'Edge Computing Setup',
          description: 'Implementing edge computing solutions',
          type: 'tutorial',
          estimatedTime: '35 min read'
        },
        {
          title: 'IoT Device Integration',
          description: 'Connecting and managing IoT devices',
          type: 'tutorial',
          estimatedTime: '40 min read'
        },
        {
          title: 'Performance Optimization',
          description: 'Optimizing 5G network performance',
          type: 'advanced',
          estimatedTime: '55 min read'
        }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: <Code className="w-6 h-6 text-orange-400" />,
      description: 'Complete API documentation and examples',
      articles: [
        {
          title: 'Authentication',
          description: 'API authentication and security',
          type: 'api',
          estimatedTime: '15 min read'
        },
        {
          title: 'Rate Limits',
          description: 'Understanding API rate limits and quotas',
          type: 'api',
          estimatedTime: '10 min read'
        },
        {
          title: 'Error Handling',
          description: 'Common errors and troubleshooting',
          type: 'api',
          estimatedTime: '20 min read'
        },
        {
          title: 'SDKs & Libraries',
          description: 'Available SDKs and code libraries',
          type: 'api',
          estimatedTime: '25 min read'
        }
      ]
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      icon: <Shield className="w-6 h-6 text-red-400" />,
      description: 'Common issues and solutions',
      articles: [
        {
          title: 'Common Issues',
          description: 'Frequently encountered problems and solutions',
          type: 'troubleshooting',
          estimatedTime: '30 min read'
        },
        {
          title: 'Performance Issues',
          description: 'Diagnosing and fixing performance problems',
          type: 'troubleshooting',
          estimatedTime: '25 min read'
        },
        {
          title: 'Integration Problems',
          description: 'Resolving integration and compatibility issues',
          type: 'troubleshooting',
          estimatedTime: '35 min read'
        },
        {
          title: 'Contact Support',
          description: 'When and how to contact our support team',
          type: 'support',
          estimatedTime: '5 min read'
        }
      ]
    }
  ];

  const quickLinks = [
    {
      title: 'API Documentation',
      description: 'Complete API reference',
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      link: '/docs/api-reference'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: <Video className="w-6 h-6 text-purple-400" />,
      link: '/docs/video-tutorials'
    },
    {
      title: 'Code Examples',
      description: 'Ready-to-use code snippets',
      icon: <FileText className="w-6 h-6 text-green-400" />,
      link: '/docs/code-examples'
    },
    {
      title: 'SDK Downloads',
      description: 'Download our SDKs and libraries',
      icon: <Download className="w-6 h-6 text-orange-400" />,
      link: '/docs/sdk-downloads'
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'guide': return 'text-blue-400 bg-blue-500/20';
      case 'tutorial': return 'text-green-400 bg-green-500/20';
      case 'api': return 'text-purple-400 bg-purple-500/20';
      case 'advanced': return 'text-red-400 bg-red-500/20';
      case 'troubleshooting': return 'text-orange-400 bg-orange-500/20';
      case 'support': return 'text-cyan-400 bg-cyan-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Documentation - Zion Tech Group | API Docs & Guides</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's AI and IT services. API references, tutorials, guides, and code examples." />
        <meta name="keywords" content="documentation, API docs, tutorials, guides, code examples, Zion Tech Group" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Documentation
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive guides, API references, and tutorials to help you get the most out of our AI and IT solutions.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Quick Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  {link.icon}
                  <h3 className="text-lg font-semibold text-white ml-3">{link.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{link.description}</p>
                <div className="mt-4 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  <span className="text-sm">View</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Browse Documentation</h2>
          <div className="space-y-4">
            {documentationSections.map((section) => (
              <div key={section.id} className="bg-slate-800/50 rounded-xl border border-slate-700">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                >
                  <div className="flex items-center">
                    {section.icon}
                    <div className="ml-4 text-left">
                      <h3 className="text-xl font-semibold text-white">{section.title}</h3>
                      <p className="text-gray-300 text-sm">{section.description}</p>
                    </div>
                  </div>
                  {expandedSection === section.id ? (
                    <ChevronDown className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                
                {expandedSection === section.id && (
                  <div className="px-6 pb-4 border-t border-slate-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      {section.articles.map((article, articleIndex) => (
                        <div key={articleIndex} className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-600/50 transition-colors">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-lg font-medium text-white">{article.title}</h4>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(article.type)}`}>
                              {article.type}
                            </span>
                          </div>
                          <p className="text-gray-300 text-sm mb-3">{article.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-400">{article.estimatedTime}</span>
                            <div className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                              <span className="text-sm">Read</span>
                              <ChevronRight className="w-3 h-3 ml-1" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Support Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <div>
                  <p className="text-sm text-gray-400">Email Support</p>
                  <p className="text-white">kleber@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400">Phone Support</p>
                  <p className="text-white">+1 (302) 464-0950</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-sm text-gray-400">Response Time</p>
                  <p className="text-white">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
          >
            Contact Support
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}