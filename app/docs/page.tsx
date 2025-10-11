'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Book, 
  Code, 
  FileText, 
  ExternalLink, 
  ChevronRight,
  Download,
  Copy,
  CheckCircle,
  Star,
  Users,
  Clock
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const documentation = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Quick start guide for new users',
      category: 'guides',
      icon: Book,
      sections: [
        {
          title: 'Introduction',
          content: 'Welcome to Zion Tech Group! This guide will help you get started with our AI services, IT solutions, and micro SaaS tools.',
          code: null
        },
        {
          title: 'Account Setup',
          content: 'Learn how to create and configure your account for optimal performance.',
          code: 'curl -X POST https://api.ziontechgroup.com/auth/register \\\n  -H "Content-Type: application/json" \\\n  -d \'{"email": "your@email.com", "password": "yourpassword"}\''
        },
        {
          title: 'First Steps',
          content: 'Follow these steps to set up your first project and start using our services.',
          code: null
        }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI Services',
      description: 'Complete guide to our AI solutions',
      category: 'ai',
      icon: Code,
      sections: [
        {
          title: 'AI Chatbot Integration',
          content: 'Learn how to integrate our AI chatbot into your website or application.',
          code: 'import { ZionChatbot } from \'@ziontechgroup/ai-chatbot\';\n\nconst chatbot = new ZionChatbot({\n  apiKey: \'your-api-key\',\n  model: \'gpt-4\',\n  language: \'en\'\n});'
        },
        {
          title: 'Analytics API',
          content: 'Access real-time analytics and insights through our comprehensive API.',
          code: 'const analytics = await fetch(\'https://api.ziontechgroup.com/analytics\', {\n  headers: {\n    \'Authorization\': \'Bearer your-token\',\n    \'Content-Type\': \'application/json\'\n  }\n});'
        }
      ]
    },
    {
      id: 'it-services',
      title: 'IT Services',
      description: 'Infrastructure and cloud solutions documentation',
      category: 'it',
      icon: FileText,
      sections: [
        {
          title: 'Cloud Migration',
          content: 'Step-by-step guide for migrating your infrastructure to the cloud.',
          code: null
        },
        {
          title: 'Security Configuration',
          content: 'Configure security settings and best practices for your infrastructure.',
          code: '# Security Configuration\nsecurity:\n  encryption: true\n  mfa: enabled\n  audit_logs: true'
        }
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS',
      description: 'Documentation for our micro SaaS tools',
      category: 'saas',
      icon: Book,
      sections: [
        {
          title: 'API Reference',
          content: 'Complete API reference for all micro SaaS tools and services.',
          code: 'GET /api/v1/analytics/dashboard\nPOST /api/v1/chatbot/message\nPUT /api/v1/invoice/create'
        },
        {
          title: 'SDK Installation',
          content: 'Install and configure our SDKs for various programming languages.',
          code: 'npm install @ziontechgroup/sdk\n# or\npip install ziontechgroup-sdk'
        }
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Documentation', count: documentation.length },
    { id: 'guides', name: 'Guides', count: documentation.filter(d => d.category === 'guides').length },
    { id: 'ai', name: 'AI Services', count: documentation.filter(d => d.category === 'ai').length },
    { id: 'it', name: 'IT Services', count: documentation.filter(d => d.category === 'it').length },
    { id: 'saas', name: 'Micro SaaS', count: documentation.filter(d => d.category === 'saas').length }
  ];

  const filteredDocs = documentation.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group | API Docs & Guides</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's AI services, IT solutions, and micro SaaS tools including API references and guides." />
        <meta name="keywords" content="documentation, API docs, guides, AI services, IT solutions, micro saas, developer resources" />
        <meta property="og:title" content="Documentation - Zion Tech Group" />
        <meta property="og:description" content="Complete documentation and API references" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/docs" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Documentation
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Complete API References & Guides
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive documentation for all our services including API references, 
              integration guides, and best practices for developers and users.
            </p>
          </section>

          {/* Search and Filter */}
          <section className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search documentation..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-slate-800 text-white border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Documentation Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDocs.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <doc.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{doc.title}</h3>
                      <p className="text-cyan-400 text-sm capitalize">{doc.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{doc.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Sections</h4>
                    <ul className="space-y-2">
                      {doc.sections.map((section, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <ChevronRight className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {section.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-2">
                    <Link
                      to={`/docs/${doc.id}`}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center"
                    >
                      View Docs
                    </Link>
                    <button className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredDocs.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No documentation found</h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your search terms or category filter.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </section>

          {/* Quick Links */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white text-center mb-8">Quick Links</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <a
                  href="/api-docs"
                  className="flex items-center p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
                >
                  <Code className="w-8 h-8 text-cyan-400 mr-4" />
                  <div>
                    <div className="text-white font-semibold">API Reference</div>
                    <div className="text-gray-400 text-sm">Complete API documentation</div>
                  </div>
                </a>
                
                <a
                  href="/guides"
                  className="flex items-center p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
                >
                  <Book className="w-8 h-8 text-cyan-400 mr-4" />
                  <div>
                    <div className="text-white font-semibold">User Guides</div>
                    <div className="text-gray-400 text-sm">Step-by-step tutorials</div>
                  </div>
                </a>
                
                <a
                  href="/examples"
                  className="flex items-center p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
                >
                  <FileText className="w-8 h-8 text-cyan-400 mr-4" />
                  <div>
                    <div className="text-white font-semibold">Code Examples</div>
                    <div className="text-gray-400 text-sm">Sample implementations</div>
                  </div>
                </a>
                
                <a
                  href="/support"
                  className="flex items-center p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
                >
                  <Users className="w-8 h-8 text-cyan-400 mr-4" />
                  <div>
                    <div className="text-white font-semibold">Support</div>
                    <div className="text-gray-400 text-sm">Get help from our team</div>
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Can't find what you're looking for? Our support team is here to help 
                with any questions about our documentation or services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  Contact Support
                </Link>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  Email Us
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
