import React from 'react'
import { Helmet } from 'react-helmet-async'
const DocsPage: React.FC = () => {
 origin/cursor/analyze-improve-and-deploy-application-1247;
import React, { useState } from 'react';
 origin/cursor/analyze-improve-and-deploy-application-1247;
      title: 'AI Services Documentation',
      description: 'Comprehensive guide to our AI-powered services',
      category: 'ai-services',
      difficulty: 'Intermediate',
      readTime: '25 min',
      lastUpdated: '2024-01-14',
      sections: [,
        'AI Chat API',
        'Content Generation',
        'Data Analytics',
        'Computer Vision'
      ]},
    {id: 3,
      title: 'IT Services Guide',
      description: 'Complete documentation for our IT infrastructure services',
      category: 'it-services',
      difficulty: 'Advanced',
      readTime: '30 min',
      lastUpdated: '2024-01-13',
      sections: [,
        'Cloud Infrastructure',
        'DevOps & CI/CD',
        'Cybersecurity',
        'Database Management'
      ]},
    {id: 4,
      title: 'API Reference',
? documentation ;
    : documentation.filter(doc => doc.category === selectedCategory)
  const searchResults = searchQuery ;
    ? documentation.filter(doc => origin/cursor/analyze-improve-and-deploy-application-1247;
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredDocs;
  return (
    <React.Fragment /><Helmet />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232;
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Documentation services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" /><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" /><div className="text-center" /><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Documentation</h1>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Coming soon - Advanced Documentation solutions by Zion Tech Group</p>
            </p>
          </div>
{/* Search Bar */}
          <div className="cyber-card-enhanced p-6 mb-12" /><div className="relative max-w-2xl mx-auto" /><Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input;
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {quickLinks.map((link, index) => (
              </div><a;
                key={index}
                href={link.url}
                className="cyber-card-enhanced p-6 text-center group hover:scale-105 transition-all duration-300"
               /><link.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:text-cyan-300" />
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300">{link.title}</h3>
              </a>
            ))}
          </div>
          {/* Category Filter */}
          <div className="mb-8" /><h2 className="text-2xl font-bold text-white mb-6">Browse by Category</h2>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                </div><button;
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id;
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  </button><category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
          {/* Documentation List */}
          <div className="space-y-6">
            {searchResults.map((doc) => (
              </div><div key={doc.id} className="cyber-card-enhanced p-8 group hover:scale-105 transition-all duration-300" /><div className="flex items-start justify-between mb-4" /><div className="flex-1" /><h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {doc.title}</h3>
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {doc.description}</p>
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-gray-400 mb-4" /><span className="flex items-center" /><FileText className="w-4 h-4 mr-1" />
                        {doc.readTime} read;
                      </span>
                      <span className="flex items-center" /><Settings className="w-4 h-4 mr-1" />
                        {doc.difficulty}
                      </span>
                      <span className="flex items-center" /><Database className="w-4 h-4 mr-1" />
                        Updated {doc.lastUpdated}
                      </span>
                    </div>
 origin/cursor/analyze-improve-and-deploy-application-1247;
        </div>
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const DocsPage: React.FC = () => {
  return (
    <>
      <Helmet /><title>Docs - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Docs page" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" /><Navigation />
        <div className="pt-24 pb-16" /><div className="container mx-auto px-4 text-center" /><h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Docs</h1>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              This page is under construction. Please check back soon.</p>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};
export default DocsPage; origin/cursor/analyze-improve-and-deploy-application-1009;
 cursor/fix-errors-and-merge-to-main-6ce7;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
;