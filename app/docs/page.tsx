'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, BookOpen, Code, Zap, Shield, Cloud, Brain, Users, ArrowRight, CheckCircle, ExternalLink, Download, FileText, Video, PlayCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

<<<<<<< HEAD
    { id: 'getting-started', name: 'Getting Started', icon: Zap },
=======
  const categories = [
    { id: 'all', name: 'All Documentation', icon: BookOpen },
    { id: 'getting-started', name: 'Getting Started', icon: PlayCircle },
    { id: 'api', name: 'API Reference', icon: Code },
>>>>>>> cursor/website-audit-and-update-with-deployment-a275
    { id: 'ai-services', name: 'AI Services', icon: Brain },
    { id: 'it-services', name: 'IT Services', icon: Cloud },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'tutorials', name: 'Tutorials', icon: Video },
    { id: 'guides', name: 'Guides', icon: FileText }
  ];

  const documentation = [
    {
      id: 1,
      title: 'Getting Started with Zion Tech Group',
      description: 'Complete guide to setting up your account and accessing our services.',
      category: 'getting-started',
      type: 'guide',
      readTime: '5 min read',
      lastUpdated: '2024-01-15'
    },
    {
      id: 2,
<<<<<<< HEAD
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
      description: 'Complete API reference with examples and endpoints',
=======
      title: 'AI Services API Documentation',
      description: 'Comprehensive API reference for all AI services and endpoints.',
>>>>>>> cursor/website-audit-and-update-with-deployment-a275
      category: 'api',
      type: 'api',
      readTime: '15 min read',
      lastUpdated: '2024-01-14'
    },
    {
      id: 3,
      title: 'Machine Learning Model Integration',
      description: 'Step-by-step guide to integrating our ML models into your applications.',
      category: 'ai-services',
      type: 'tutorial',
      readTime: '20 min read',
      lastUpdated: '2024-01-13'
    },
    {
      id: 4,
      title: 'Cloud Infrastructure Setup',
      description: 'How to configure and deploy cloud infrastructure using our services.',
      category: 'it-services',
      type: 'guide',
      readTime: '12 min read',
      lastUpdated: '2024-01-12'
    },
    {
      id: 5,
      title: 'Security Best Practices',
      description: 'Essential security guidelines for protecting your data and applications.',
      category: 'security',
      type: 'guide',
      readTime: '8 min read',
      lastUpdated: '2024-01-11'
    },
    {
      id: 6,
      title: 'Building Your First AI Application',
      description: 'Tutorial series for creating AI-powered applications from scratch.',
      category: 'tutorials',
      type: 'tutorial',
      readTime: '30 min read',
      lastUpdated: '2024-01-10'
    },
    {
      id: 7,
      title: 'Data Processing and Analytics',
      description: 'Guide to processing and analyzing data using our analytics tools.',
      category: 'ai-services',
      type: 'guide',
      readTime: '18 min read',
      lastUpdated: '2024-01-09'
    },
    {
      id: 8,
      title: 'API Authentication and Authorization',
      description: 'Understanding authentication methods and permission systems.',
      category: 'api',
      type: 'guide',
      readTime: '10 min read',
      lastUpdated: '2024-01-08'
    }
  ];
<<<<<<< HEAD
  const quickLinks = [
    {
      title: 'API Reference', url: '/api', icon: Code },
    {
      title: 'Tutorials', url: '/tutorials', icon: BookOpen },
    {
      title: 'Community', url: '/community', icon: Users },
    {
      title: 'Support', url: '/support', icon: Shield }
  ];];];
  const filteredDocs = selectedCategory === 'all' 
    ? documentation ;
    : documentation.filter(doc => doc.category === selectedCategory);

  const searchResults = searchQuery;
    ? documentation.filter(doc => )
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase()
      )
    : filteredDocs;

  return(<>)
      <Helmet />
=======

  const filteredDocs = documentation.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
>>>>>>> cursor/website-audit-and-update-with-deployment-a275
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's AI and IT services, APIs, and implementation guides." />
        <meta name="keywords" content="documentation, API, guides, tutorials, AI services, IT services, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-enhanced">
                  Documentation
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive guides, API references, and tutorials to help you 
                  get the most out of our AI and IT services.
                </p>
              </div>

<<<<<<< HEAD
          {/* Search Bar */}
          <div className="cyber-card-enhanced p-6 mb-12">
            </div></div><div className="relative max-w-2xl mx-auto">
              </div></div><Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input;
                type="text" placeholder="Search documentation...")
                value={searchQuery})
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Quick Links */}
            ))}
          </div>

          {/* Category Filter */}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 $
                    selectedCategory === category.id;
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover: bg-slate-700',}`}
                >
                </button>
              ))}
            </div>
          </div>

          {/* Documentation List */}
                    ))}
                  </div>
                </div>

                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */},
    {searchResults.length === 0 && searchQuery && (
            <div className="cyber-card-enhanced p-8 text-center">
              </div></div><Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No results found</h3></h3></h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search terms or browse our documentation categories.
              </p></p></p>)
              <button)
                onClick=() => setSearchQuery('')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Clear Search;
              </button></button></button>
            </div>
          )},
    {/* Additional Resources */}
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" / /></ArrowRight>
              </a>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" / /></ArrowRight>
              </a>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" / /></ArrowRight>
              </a>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" / /></ArrowRight>
              </a>
=======
              {/* Search and Filter */}
              <div className="mb-12">
                <div className="relative mb-8">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search documentation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:border-cyan-500/40 focus:outline-none transition-colors"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                          selectedCategory === category.id
                            ? 'bg-cyan-500 text-white'
                            : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{category.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Documentation Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {filteredDocs.map((doc) => (
                  <div
                    key={doc.id}
                    className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
                            {doc.type}
                          </span>
                          <div className="text-sm text-gray-400">
                            {doc.readTime}
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {doc.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Updated {doc.lastUpdated}
                      </span>
                      <button className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                  Quick Links
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <a
                    href="/api-docs"
                    className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors group"
                  >
                    <Code className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
                    <div>
                      <div className="text-white font-medium">API Reference</div>
                      <div className="text-sm text-gray-400">Complete API docs</div>
                    </div>
                  </a>
                  <a
                    href="/tutorials"
                    className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors group"
                  >
                    <Video className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
                    <div>
                      <div className="text-white font-medium">Tutorials</div>
                      <div className="text-sm text-gray-400">Step-by-step guides</div>
                    </div>
                  </a>
                  <a
                    href="/support"
                    className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors group"
                  >
                    <Users className="w-6 h-6 text-green-400 group-hover:text-green-300" />
                    <div>
                      <div className="text-white font-medium">Support</div>
                      <div className="text-sm text-gray-400">Get help & support</div>
                    </div>
                  </a>
                  <a
                    href="/contact"
                    className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors group"
                  >
                    <FileText className="w-6 h-6 text-orange-400 group-hover:text-orange-300" />
                    <div>
                      <div className="text-white font-medium">Contact</div>
                      <div className="text-sm text-gray-400">Reach out to us</div>
                    </div>
                  </a>
                </div>
              </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-a275
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default DocsPage;