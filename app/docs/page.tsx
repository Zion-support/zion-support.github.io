'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, BookOpen, Code, FileText, Download, ArrowRight, ChevronRight } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const docCategories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      description: 'Learn the basics and get up and running quickly',
      docs: [
        {
          title: 'Quick Start Guide',
          description: 'Get started with our platform in under 5 minutes',
          url: '/docs/quick-start',
          type: 'guide',
          duration: '5 min read'
        },
        {
          title: 'Installation',
          description: 'Step-by-step installation instructions',
          url: '/docs/installation',
          type: 'tutorial',
          duration: '10 min read'
        },
        {
          title: 'Configuration',
          description: 'Configure your environment and settings',
          url: '/docs/configuration',
          type: 'tutorial',
          duration: '15 min read'
        }
      ]
    },
    {
      title: 'AI Services',
      icon: Code,
      description: 'Comprehensive guides for our AI solutions',
      docs: [
        {
          title: 'AI Analytics API',
          description: 'Complete API reference for AI analytics services',
          url: '/docs/ai-analytics-api',
          type: 'api',
          duration: '30 min read'
        },
        {
          title: 'Machine Learning Models',
          description: 'Guide to using our pre-trained ML models',
          url: '/docs/ml-models',
          type: 'guide',
          duration: '20 min read'
        },
        {
          title: 'AI Workflow Automation',
          description: 'Automate business processes with AI',
          url: '/docs/ai-workflow',
          type: 'tutorial',
          duration: '25 min read'
        }
      ]
    },
    {
      title: 'Cloud Solutions',
      icon: FileText,
      description: 'Cloud infrastructure and deployment guides',
      docs: [
        {
          title: 'Cloud Migration',
          description: 'Migrate your applications to the cloud',
          url: '/docs/cloud-migration',
          type: 'guide',
          duration: '45 min read'
        },
        {
          title: 'Container Deployment',
          description: 'Deploy applications using containers',
          url: '/docs/container-deployment',
          type: 'tutorial',
          duration: '20 min read'
        },
        {
          title: 'Auto-scaling Setup',
          description: 'Configure automatic scaling for your applications',
          url: '/docs/auto-scaling',
          type: 'tutorial',
          duration: '15 min read'
        }
      ]
    },
    {
      title: 'Security',
      icon: FileText,
      description: 'Security best practices and implementation',
      docs: [
        {
          title: 'Security Best Practices',
          description: 'Essential security guidelines for your applications',
          url: '/docs/security-best-practices',
          type: 'guide',
          duration: '30 min read'
        },
        {
          title: 'Authentication Setup',
          description: 'Implement secure authentication in your apps',
          url: '/docs/authentication',
          type: 'tutorial',
          duration: '25 min read'
        },
        {
          title: 'Data Encryption',
          description: 'Encrypt sensitive data in your applications',
          url: '/docs/data-encryption',
          type: 'tutorial',
          duration: '20 min read'
        }
      ]
    }
  ];

  const filteredDocs = docCategories.map(category => ({
    ...category,
    docs: category.docs.filter(doc =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.docs.length > 0);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'guide': return 'text-blue-400 bg-blue-500/10';
      case 'tutorial': return 'text-green-400 bg-green-500/10';
      case 'api': return 'text-purple-400 bg-purple-500/10';
      default: return 'text-gray-400 bg-gray-500/10';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide': return BookOpen;
      case 'tutorial': return Code;
      case 'api': return FileText;
      default: return FileText;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Documentation - Zion Tech Group"
        description="Comprehensive documentation for our AI, cloud, and cybersecurity solutions. Get started with guides, tutorials, and API references."
        keywords={["documentation","API reference","guides","tutorials","AI documentation","cloud docs"]}
        canonicalUrl="https://ziontechgroup.com/docs"
      />

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive guides, tutorials, and API references to help you get the most out of our AI, cloud, and cybersecurity solutions.
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            {filteredDocs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.docs.map((doc, docIndex) => {
                    const TypeIcon = getTypeIcon(doc.type);
                    return (
                      <div key={docIndex} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:scale-105 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <TypeIcon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(doc.type)}`}>
                                {doc.type}
                              </span>
                              <span className="text-xs text-gray-400">{doc.duration}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">{doc.title}</h3>
                            <p className="text-gray-300 text-sm mb-4">{doc.description}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <Link
                            to={doc.url}
                            className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                          <button className="text-gray-400 hover:text-white transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Quick Links</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white mb-4">Popular Guides</h3>
                  <div className="space-y-3">
                    <a href="/docs/quick-start" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                      <ChevronRight className="w-4 h-4" />
                      Quick Start Guide
                    </a>
                    <a href="/docs/ai-analytics-api" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                      <ChevronRight className="w-4 h-4" />
                      AI Analytics API
                    </a>
                    <a href="/docs/cloud-migration" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                      <ChevronRight className="w-4 h-4" />
                      Cloud Migration
                    </a>
                    <a href="/docs/security-best-practices" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                      <ChevronRight className="w-4 h-4" />
                      Security Best Practices
                    </a>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white mb-4">API References</h3>
                  <div className="space-y-3">
                    <a href="/docs/api/ai-services" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                      <ChevronRight className="w-4 h-4" />
                      AI Services API
                    </a>
                    <a href="/docs/api/cloud-management" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                      <ChevronRight className="w-4 h-4" />
                      Cloud Management API
                    </a>
                    <a href="/docs/api/security" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                      <ChevronRight className="w-4 h-4" />
                      Security API
                    </a>
                    <a href="/docs/api/analytics" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                      <ChevronRight className="w-4 h-4" />
                      Analytics API
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              Need Help?
            </h2>
            <p className="text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/support"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Contact Support
              </a>
              <a
                href="mailto:support@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DocsPage;