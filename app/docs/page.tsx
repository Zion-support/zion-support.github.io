import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Book, Code, Shield, Zap, Search, ChevronDown, ChevronRight, ExternalLink } from "lucide-react";

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const documentationSections = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: <Zap className="w-5 h-5" />,
      description: 'Quick start guide and setup instructions',
      articles: [
        { title: 'Installation', url: '/docs/installation' },
        { title: 'Configuration', url: '/docs/configuration' },
        { title: 'First Steps', url: '/docs/first-steps' }
      ]
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      icon: <Code className="w-5 h-5" />,
      description: 'Complete API documentation and examples',
      articles: [
        { title: 'Authentication', url: '/docs/api/auth' },
        { title: 'Endpoints', url: '/docs/api/endpoints' },
        { title: 'SDKs', url: '/docs/api/sdks' }
      ]
    },
    {
      id: 'security',
      title: 'Security',
      icon: <Shield className="w-5 h-5" />,
      description: 'Security best practices and guidelines',
      articles: [
        { title: 'Authentication', url: '/docs/security/auth' },
        { title: 'Data Protection', url: '/docs/security/data' },
        { title: 'Compliance', url: '/docs/security/compliance' }
      ]
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <>
      <Helmet>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Complete documentation for Zion Tech Group's AI and IT solutions platform." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6">
              <Book className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-300 font-medium">Documentation</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Developer
              </span>
              <span className="block text-4xl md:text-5xl text-white mt-2">Documentation</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Everything you need to build amazing applications with our AI and IT solutions platform.
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Sections */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid gap-6">
              {documentationSections.map((section) => (
                <div key={section.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-cyan-400">
                        {section.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{section.title}</h3>
                        <p className="text-gray-300">{section.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      {expandedSection === section.id ? (
                        <ChevronDown className="w-6 h-6" />
                      ) : (
                        <ChevronRight className="w-6 h-6" />
                      )}
                    </button>
                  </div>
                  
                  {expandedSection === section.id && (
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="grid gap-3">
                        {section.articles.map((article, index) => (
                          <Link
                            key={index}
                            to={article.url}
                            className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                          >
                            <span className="text-white group-hover:text-cyan-300">{article.title}</span>
                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl p-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
                <p className="text-xl text-white/90 mb-8">
                  Follow our quick start guide to begin building with our platform in just a few minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                    Start Building
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                    View Examples
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DocsPage;