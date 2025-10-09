'use client';

import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, BookOpen, Code, FileText, ArrowRight } from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const docCategories = [
    {
      title: 'Getting Started',
      description: 'Quick start guides and setup instructions',
      icon: BookOpen,
      articles: [
        { title: 'Installation Guide', href: '/docs/installation' },
        { title: 'Quick Start', href: '/docs/quick-start' },
        { title: 'Configuration', href: '/docs/configuration' }
      ]
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      icon: Code,
      articles: [
        { title: 'Authentication', href: '/docs/api/auth' },
        { title: 'Endpoints', href: '/docs/api/endpoints' },
        { title: 'SDKs', href: '/docs/api/sdks' }
      ]
    },
    {
      title: 'Guides',
      description: 'Step-by-step tutorials and best practices',
      icon: FileText,
      articles: [
        { title: 'Best Practices', href: '/docs/guides/best-practices' },
        { title: 'Troubleshooting', href: '/docs/guides/troubleshooting' },
        { title: 'Migration Guide', href: '/docs/guides/migration' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Everything you need to get started
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {docCategories.map((category, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className="text-cyan-400 mr-3">
                      <category.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    {category.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <a
                          href={article.href}
                          className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <ArrowRight className="w-4 h-4 mr-2" />
                          {article.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DocsPage;