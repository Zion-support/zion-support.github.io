import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../src/components/seo/SEOHead';
import { Search, Book, Code, Zap, Shield, Cloud, ArrowRight, ChevronRight, FileText, Video, Download } from 'lucide-react';

const Docs = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const documentationCategories = [
    {
      title: 'Getting Started',
      icon: Book,
      color: 'from-blue-500 to-cyan-500',
      articles: [
        {
          title: 'Quick Start Guide',
          description: 'Get up and running with Zion Tech Group services in minutes',
          type: 'guide',
          readTime: '5 min',
          href: '/docs/quick-start'
        },
        {
          title: 'API Overview',
          description: 'Introduction to our RESTful APIs and authentication',
          type: 'api',
          readTime: '10 min',
          href: '/docs/api-overview'
        },
        {
          title: 'Account Setup',
          description: 'How to create and configure your account',
          type: 'guide',
          readTime: '3 min',
          href: '/docs/account-setup'
        }
      ]
    },
    {
      title: 'AI Services',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      articles: [
        {
          title: 'AI Content Generation',
          description: 'Generate high-quality content using our AI models',
          type: 'guide',
          readTime: '8 min',
          href: '/docs/ai-content-generation'
        },
        {
          title: 'Machine Learning APIs',
          description: 'Integrate machine learning capabilities into your applications',
          type: 'api',
          readTime: '12 min',
          href: '/docs/ml-apis'
        },
        {
          title: 'AI Model Training',
          description: 'Train custom AI models with your data',
          type: 'guide',
          readTime: '15 min',
          href: '/docs/ai-model-training'
        }
      ]
    },
    {
      title: 'Cloud Services',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      articles: [
        {
          title: 'Cloud Deployment',
          description: 'Deploy applications to our cloud infrastructure',
          type: 'guide',
          readTime: '10 min',
          href: '/docs/cloud-deployment'
        },
        {
          title: 'Container Orchestration',
          description: 'Manage containers with Kubernetes and Docker',
          type: 'guide',
          readTime: '12 min',
          href: '/docs/container-orchestration'
        },
        {
          title: 'Auto-scaling Configuration',
          description: 'Configure automatic scaling for your applications',
          type: 'guide',
          readTime: '7 min',
          href: '/docs/auto-scaling'
        }
      ]
    },
    {
      title: 'Security',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      articles: [
        {
          title: 'Authentication & Authorization',
          description: 'Secure your applications with our auth system',
          type: 'guide',
          readTime: '8 min',
          href: '/docs/authentication'
        },
        {
          title: 'API Security Best Practices',
          description: 'Best practices for securing your API endpoints',
          type: 'guide',
          readTime: '10 min',
          href: '/docs/api-security'
        },
        {
          title: 'Data Encryption',
          description: 'Encrypt sensitive data in transit and at rest',
          type: 'guide',
          readTime: '6 min',
          href: '/docs/data-encryption'
        }
      ]
    },
    {
      title: 'SDKs & Libraries',
      icon: Code,
      color: 'from-indigo-500 to-purple-500',
      articles: [
        {
          title: 'JavaScript SDK',
          description: 'Integrate our services with JavaScript and Node.js',
          type: 'sdk',
          readTime: '8 min',
          href: '/docs/javascript-sdk'
        },
        {
          title: 'Python SDK',
          description: 'Use our Python SDK for data science and AI projects',
          type: 'sdk',
          readTime: '8 min',
          href: '/docs/python-sdk'
        },
        {
          title: 'React Components',
          description: 'Pre-built React components for common use cases',
          type: 'sdk',
          readTime: '6 min',
          href: '/docs/react-components'
        }
      ]
    }
  ];

  const popularArticles = [
    {
      title: 'Getting Started with AI Services',
      category: 'AI Services',
      readTime: '5 min',
      href: '/docs/ai-services-getting-started'
    },
    {
      title: 'Cloud Migration Best Practices',
      category: 'Cloud Services',
      readTime: '12 min',
      href: '/docs/cloud-migration-best-practices'
    },
    {
      title: 'API Rate Limiting',
      category: 'API Reference',
      readTime: '3 min',
      href: '/docs/api-rate-limiting'
    },
    {
      title: 'Error Handling Guide',
      category: 'Development',
      readTime: '8 min',
      href: '/docs/error-handling'
    }
  ];

  const resources = [
    {
      title: 'API Reference',
      description: 'Complete API documentation with examples',
      icon: Code,
      href: '/docs/api-reference'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for common tasks',
      icon: Video,
      href: '/docs/video-tutorials'
    },
    {
      title: 'Code Examples',
      description: 'Ready-to-use code snippets and examples',
      icon: FileText,
      href: '/docs/code-examples'
    },
    {
      title: 'Download SDKs',
      description: 'Download our SDKs and libraries',
      icon: Download,
      href: '/docs/downloads'
    }
  ];

  return (
    <>
      <SEOHead
        title="Documentation - Zion Tech Group | Developer Resources & API Docs"
        description="Comprehensive documentation for Zion Tech Group services. Get started with our APIs, SDKs, and guides for AI, cloud, and security services."
        keywords="documentation, API docs, developer resources, SDK, guides, tutorials, Zion Tech Group API"
        canonical="https://ziontechgroup.com/docs"
      />
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Documentation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Everything you need to integrate and use Zion Tech Group services. From quick start guides to advanced API references.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Resources */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Quick Resources</h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <Link
                    key={index}
                    href={resource.href}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                        {resource.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{resource.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Popular Articles</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {popularArticles.map((article, index) => (
                <Link
                  key={index}
                  href={article.href}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Documentation Categories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Browse our comprehensive documentation organized by service and use case.
              </p>
            </div>
            
            <div className="space-y-12">
              {documentationCategories.map((category, categoryIndex) => {
                const IconComponent = category.icon;
                return (
                  <div key={categoryIndex} className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      {category.articles.map((article, articleIndex) => (
                        <Link
                          key={articleIndex}
                          href={article.href}
                          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                {article.title}
                              </h4>
                              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                {article.description}
                              </p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors flex-shrink-0 ml-2" />
                          </div>
                          
                          <div className="flex items-center gap-4 text-xs text-gray-400">
                            <span className={`px-2 py-1 rounded-full ${
                              article.type === 'guide' ? 'bg-blue-600/20 text-blue-400' :
                              article.type === 'api' ? 'bg-green-600/20 text-green-400' :
                              'bg-purple-600/20 text-purple-400'
                            }`}>
                              {article.type.toUpperCase()}
                            </span>
                            <span>{article.readTime}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our support team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Contact Support
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact?type=consultation"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white hover:bg-white/10 font-semibold rounded-lg transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Docs;