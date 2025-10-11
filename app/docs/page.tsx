'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Book, Code, FileText, ExternalLink, ChevronRight, Download, Globe, Shield, Zap, Database, Cloud, Brain, Users, Settings, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const documentation = [
    {
      id: 1,
      title: 'Getting Started Guide',
      description: 'Complete guide to getting started with Zion Tech Group services and platforms.',
      category: 'Getting Started',
      icon: Book,
      sections: ['Account Setup', 'First Steps', 'Basic Configuration', 'Troubleshooting'],
      lastUpdated: '2024-01-15',
      difficulty: 'Beginner'
    },
    {
      id: 2,
      title: 'API Documentation',
      description: 'Comprehensive API reference for all our services and endpoints.',
      category: 'API',
      icon: Code,
      sections: ['Authentication', 'Endpoints', 'Rate Limits', 'Error Codes', 'SDKs'],
      lastUpdated: '2024-01-12',
      difficulty: 'Intermediate'
    },
    {
      id: 3,
      title: 'AI Services Guide',
      description: 'Detailed documentation for our AI and machine learning services.',
      category: 'AI Services',
      icon: Brain,
      sections: ['Model Training', 'Data Preparation', 'Deployment', 'Monitoring', 'Best Practices'],
      lastUpdated: '2024-01-10',
      difficulty: 'Advanced'
    },
    {
      id: 4,
      title: 'Security Best Practices',
      description: 'Security guidelines and best practices for using our services.',
      category: 'Security',
      icon: Shield,
      sections: ['Authentication', 'Data Protection', 'Compliance', 'Incident Response'],
      lastUpdated: '2024-01-08',
      difficulty: 'Intermediate'
    },
    {
      id: 5,
      title: 'Cloud Migration Guide',
      description: 'Step-by-step guide for migrating your infrastructure to the cloud.',
      category: 'Cloud',
      icon: Cloud,
      sections: ['Planning', 'Migration Process', 'Testing', 'Go-Live', 'Optimization'],
      lastUpdated: '2024-01-05',
      difficulty: 'Advanced'
    },
    {
      id: 6,
      title: 'Micro SaaS Development',
      description: 'Building and deploying micro SaaS applications with our platform.',
      category: 'Development',
      icon: Database,
      sections: ['Architecture', 'Development', 'Deployment', 'Scaling', 'Monitoring'],
      lastUpdated: '2024-01-03',
      difficulty: 'Intermediate'
    },
    {
      id: 7,
      title: 'User Management',
      description: 'Managing users, roles, and permissions across our platforms.',
      category: 'Administration',
      icon: Users,
      sections: ['User Creation', 'Role Assignment', 'Permissions', 'SSO Integration'],
      lastUpdated: '2024-01-01',
      difficulty: 'Beginner'
    },
    {
      id: 8,
      title: 'Performance Optimization',
      description: 'Optimizing performance and scalability of your applications.',
      category: 'Performance',
      icon: Zap,
      sections: ['Monitoring', 'Profiling', 'Optimization Techniques', 'Scaling'],
      lastUpdated: '2023-12-28',
      difficulty: 'Advanced'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Documentation', count: documentation.length },
    { id: 'Getting Started', name: 'Getting Started', count: documentation.filter(d => d.category === 'Getting Started').length },
    { id: 'API', name: 'API', count: documentation.filter(d => d.category === 'API').length },
    { id: 'AI Services', name: 'AI Services', count: documentation.filter(d => d.category === 'AI Services').length },
    { id: 'Security', name: 'Security', count: documentation.filter(d => d.category === 'Security').length },
    { id: 'Cloud', name: 'Cloud', count: documentation.filter(d => d.category === 'Cloud').length },
    { id: 'Development', name: 'Development', count: documentation.filter(d => d.category === 'Development').length },
    { id: 'Administration', name: 'Administration', count: documentation.filter(d => d.category === 'Administration').length },
    { id: 'Performance', name: 'Performance', count: documentation.filter(d => d.category === 'Performance').length }
  ];

  const filteredDocs = documentation.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'text-green-400 bg-green-400/10';
      case 'Intermediate':
        return 'text-yellow-400 bg-yellow-400/10';
      case 'Advanced':
        return 'text-red-400 bg-red-400/10';
      default:
        return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group | Technical Documentation & Guides</title>
        <meta name="description" content="Comprehensive technical documentation for Zion Tech Group services including API guides, AI services, cloud migration, and development resources." />
        <meta name="keywords" content="documentation, API docs, technical guides, AI services, cloud migration, development resources" />
        <meta property="og:title" content="Documentation - Zion Tech Group" />
        <meta property="og:description" content="Technical documentation and guides" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/docs" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-cyan-400">Documentation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive technical documentation, guides, and resources to help you get the most out of our services.
              </p>
            </div>
          </section>

          {/* Search Section */}
          <section className="py-8 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg"
                />
              </div>
            </div>
          </section>

          {/* Categories */}
          <section className="py-8 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Documentation Grid */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              {filteredDocs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredDocs.map((doc) => (
                    <div key={doc.id} className="group bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <doc.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(doc.difficulty)}`}>
                          {doc.difficulty}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {doc.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {doc.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-cyan-400 mb-3">Sections:</h4>
                        <div className="flex flex-wrap gap-2">
                          {doc.sections.slice(0, 3).map((section, idx) => (
                            <span key={idx} className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs">
                              {section}
                            </span>
                          ))}
                          {doc.sections.length > 3 && (
                            <span className="text-gray-400 text-xs">
                              +{doc.sections.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-sm text-gray-400">
                          Updated: {doc.lastUpdated}
                        </span>
                        <span className="text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                          {doc.category}
                        </span>
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25 flex items-center justify-center">
                        View Documentation
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">No documentation found matching your criteria.</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="mt-4 text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Quick Links */}
          <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Quick <span className="text-cyan-400">Links</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Popular resources and quick access to essential documentation
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <a
                  href="#"
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <Code className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    API Reference
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Complete API documentation with examples and code snippets
                  </p>
                </a>

                <a
                  href="#"
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <Book className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    Getting Started
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Step-by-step guides to get you up and running quickly
                  </p>
                </a>

                <a
                  href="#"
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <Brain className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    AI Guides
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Comprehensive guides for AI and machine learning services
                  </p>
                </a>

                <a
                  href="#"
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <Shield className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    Security
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Security best practices and compliance guidelines
                  </p>
                </a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need <span className="text-cyan-400">Help?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Can't find what you're looking for? Our technical support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  Contact Support
                </a>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  Email Support
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default DocsPage;