'use client';
import React, {useState}from 'react';
import {Helmet}}from 'react-helmet-async';
import {Search, BookOpen, Code, Zap, Shield, Cloud, Brain, Users, ArrowRight, CheckCircle, ExternalLink, Download, FileText, Settings, Database}}from 'lucide-react';

const DocsPage: React.FC = () => {,
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

    { id: 'all', name: 'All Documentation', icon: BookOpen ,},
    {id: 'getting-started', name: 'Getting Started', icon: Zap ,},
    {id: 'ai-services', name: 'AI Services', icon: Brain ,},
    {id: 'it-services', name: 'IT Services', icon: Cloud ,},
    {id: 'api', name: 'API Reference', icon: Code ,},
    {id: 'security', name: 'Security', icon: Shield ,}];
  ];];];
        'Basic Configuration'
      ]},
    {id: 2,
      ]},
    {id: 3,
      ]},
    {id: 4,
      ]},
    {id: 5,
      ]},
    {id: 6,
      ]}];
    {title: 'API Reference', url: '/api', icon: Code ,},
    {title: 'Tutorials', url: '/tutorials', icon: BookOpen ,},
    {title: 'Community', url: '/community', icon: Users ,},
    {title: 'Support', url: '/support', icon: Shield ,}]

  const filteredDocs = selectedCategory === 'all' 
    ? documentation;
    ? documentation ;
    : documentation.filter(doc => doc.category === selectedCategory);

  const searchResults = searchQuery;
    ? documentation.filter(doc =>)
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredDocs;

  return(<>)
      <Helmet />
        <title>Documentation - Zion Tech Group</title>
        <div className="container mx-auto px-4 py-16 pt-24">{/* Header */</div>} <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                <BookOpen className="w-8 h-8 text-white" />
          {/* Search Bar */} <div className="cyber-card-enhanced p-6 mb-12">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input;
              <a;
                key={index}href={link.url}className="cyber-card-enhanced p-6 text-center group hover: scale-105 transition-all duration-300",
              >
                <link.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover: text-cyan-300" />,
                <h3 className="text-lg font-semibold text-white group-hover: text-cyan-300">{link.title,}</h3>
          {/* Category Filter */} <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Browse by Category</h2>
            <div className="flex flex-wrap gap-4">{categories.map((category) => (</div>
                <button;
                  key={category.id}onClick={() =>setSelectedCategory(category.id)</button>}className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id;
                  <category.icon className="w-5 h-5" />
                  <span>{category.name</span>}</span>
          {/* Documentation List */} <div className="space-y-6">{searchResults.map((doc) => (</div>
              <div key={doc.id}className="cyber-card-enhanced p-8 group hover: scale-105 transition-all duration-300">,</div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover: text-cyan-400 transition-colors">,
                      {doc.title} </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{doc.description</p>} </p>
                    <div className="flex items-center space-x-6 text-sm text-gray-400 mb-4">
                      <span className="flex items-center">
                        <FileText className="w-4 h-4 mr-1" />
                        {doc.readTime}read;
                      </span>
                      <span className="flex items-center">
                        <Settings className="w-4 h-4 mr-1" />
                        {doc.difficulty} </span>
                      <span className="flex items-center">
                        <Database className="w-4 h-4 mr-1" />
                        Updated {doc.lastUpdated}} </span>
                  <h4 className="text-white font-semibold mb-3">Sections: </h4>,
                  <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-2">,</div>
                    {doc.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex}className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {section} </div>
                  <div className="flex space-x-4">
                    <a;
                      Read Guide;
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                    <a;
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF;
          {/* No Results */}{searchResults.length === 0 && searchQuery && (
              <button;
                onClick={() =>setSearchQuery('')</button>}className="bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300",
          )}

          {/* Additional Resources */} <div className="cyber-card-enhanced p-8 mt-16">
              <a;
              <a;
              <a;
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Documentation
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Center
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our AI and IT solutions. 
            Comprehensive guides, API references, and best practices.
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
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
      
            </div>
          ))
        </div>
      </section>

                ))
              </div>
import React from 'react';

const DocsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Documentation</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300 mb-6">
            Comprehensive documentation for all our services, APIs, and tools.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-gray-300 mb-6">
            Quick start guides and tutorials to get you up and running with our platform.
          </p>
          <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
          <p className="text-gray-300 mb-6">
            Detailed API documentation with examples and code snippets.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;

