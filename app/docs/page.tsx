'use client';
import React, {useState}from 'react';
import {Helmet}}from 'react-helmet-async';
import {Search, BookOpen, Code, Zap, Shield, Cloud, Brain, Users, ArrowRight, CheckCircle, ExternalLink, Download, FileText, Settings, Database}}from 'lucide-react';

const DocsPage: React.FC = () => {,
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

<<<<<<< HEAD
<<<<<<< HEAD
  const categories = const categories = const categories = [
=======
  const categories = [
<<<<<<< HEAD
    { id: 'all', name: 'All Documentation', icon: BookOpen ,},
    {id: 'getting-started', name: 'Getting Started', icon: Zap ,},
    {id: 'ai-services', name: 'AI Services', icon: Brain ,},
    {id: 'it-services', name: 'IT Services', icon: Cloud ,},
    {id: 'api', name: 'API Reference', icon: Code ,},
    {id: 'security', name: 'Security', icon: Shield ,}];
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
    { id: 'all', name: 'All Documentation', icon: BookOpen },
=======
  const categories = [
     id: 'all', name: 'All Documentation', icon: BookOpen },
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    { id: 'getting-started', name: 'Getting Started', icon: Zap },
    { id: 'ai-services', name: 'AI Services', icon: Brain },
    { id: 'it-services', name: 'IT Services', icon: Cloud },
<<<<<<< HEAD
    { id: 'api', name: 'API Reference', icon: Code },;
    { id: 'security', name: 'Security', icon: Shield };
  ];
  const documentation = const documentation = const documentation = [
    {
      id: 1,
=======
    { id: 'api', name: 'API Reference', icon: Code },
    { id: 'security', name: 'Security', icon: Shield }
  ];];];
>>>>>>> origin/main
  const documentation = [
    {id: 1,
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
      title: 'Getting Started Guide',
      description: 'Complete guide to setting up and using our services',
      category: 'getting-started',
      difficulty: 'Beginner',
      readTime: '10 min',
      lastUpdated: '2024-01-15',
      sections: [,
        'Account Setup',
<<<<<<< HEAD
        'First API Call',;
        'Authentication',;
=======
        'First API Call',
        'Authentication',
<<<<<<< HEAD
        'Basic Configuration'
      ]},
    {id: 2,
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
        'Basic Configuration';
      ];
    },
    {
      id: 2,
>>>>>>> origin/main
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
      category: 'api',
      difficulty: 'Intermediate',
      readTime: '45 min',
      lastUpdated: '2024-01-12',
      sections: [,
        'Authentication',
        'Endpoints',
        'Error Handling',
        'Rate Limits'
      ]},
    {id: 5,
      title: 'Security Best Practices',
      description: 'Security guidelines and best practices for our services',
      category: 'security',
      difficulty: 'Intermediate',
      readTime: '20 min',
      lastUpdated: '2024-01-11',
      sections: [,
        'Data Protection',
        'Access Control',
        'Encryption',
        'Compliance'
      ]},
    {id: 6,
      title: 'Troubleshooting Guide',
      description: 'Common issues and their solutions',
      category: 'getting-started',
      difficulty: 'Beginner',
      readTime: '15 min',
      lastUpdated: '2024-01-10',
      sections: [,
        'Common Errors',
        'Debugging Tips',
        'Performance Issues',
        'Support Resources'
<<<<<<< HEAD
      ]
    }
  ];
<<<<<<< HEAD
  const quickLinks = const quickLinks = const quickLinks = [
=======
      ]}];
  const quickLinks = [
<<<<<<< HEAD
    {title: 'API Reference', url: '/api', icon: Code ,},
    {title: 'Tutorials', url: '/tutorials', icon: BookOpen ,},
    {title: 'Community', url: '/community', icon: Users ,},
    {title: 'Support', url: '/support', icon: Shield ,}]

  const filteredDocs = selectedCategory === 'all' 
    ? documentation;
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
    { title: 'API Reference', url: '/api', icon: Code },
    { title: 'Tutorials', url: '/tutorials', icon: BookOpen },
    { title: 'Community', url: '/community', icon: Users },;
    { title: 'Support', url: '/support', icon: Shield };
  ];
  const filteredDocs = const filteredDocs = selectedCategory === 'all' ;
    ? documentation ;
    : documentation.filter(doc => doc.category === selectedCategory);

  const searchResults = const searchResults = const searchResults = searchQuery 
    ? documentation.filter()
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase());
      );
    : filteredDocs;

  return ()
=======
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
>>>>>>> origin/main
    : documentation.filter(doc => doc.category === selectedCategory);

  const searchResults = searchQuery;
<<<<<<< HEAD
    ? documentation.filter(doc => )
=======
    ? documentation.filter(doc =>)
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase()
      )
    : filteredDocs;

  return(<>)
      <Helmet />
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Complete documentation for Zion Tech Group's AI, IT, and Micro SaaS services. Get started with our comprehensive guides and API references." />
        <meta name="keywords" content="documentation, API docs, guides, tutorials, developer resources, AI services, IT services" />
        <link rel="canonical" href="https: //ziontechgroup.com/docs" />,
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
        </div></div><div className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          </div></div><div className="text-center mb-16">
            </div></div><div className="flex items-center justify-center mb-6">
              </div></div><div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                </div></div><BookOpen className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white neon-text-enhanced">
                Documentation;
              </h1></h1></h1>
=======
        <div className="container mx-auto px-4 py-16 pt-24">{/* Header */</div>} <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md: text-5xl font-bold text-white neon-text-enhanced">,</h1>
                Documentation;
              </h1>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Complete documentation for all our AI, IT, and Micro SaaS services.</p>
              Find guides, API references, and best practices to help you build amazing applications.
            </p></p></p>
          </div>

<<<<<<< HEAD
          {/* Search Bar */}
          <div className="cyber-card-enhanced p-6 mb-12">
            </div></div><div className="relative max-w-2xl mx-auto">
              </div></div><Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input;
                type="text" placeholder="Search documentation...")
                value={searchQuery})
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
=======
          {/* Search Bar */} <div className="cyber-card-enhanced p-6 mb-12">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input;
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}onChange={(e) => setSearchQuery(e.target.value)}className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent",
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
              />
            </div>
          </div>

<<<<<<< HEAD
          {/* Quick Links */}
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12" /></div>
            {quickLinks.map((link, index) => ()
=======
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {quickLinks.map((link, index) => (
              </div></div><a;
                key=index}
                href={link.url}
                className="cyber-card-enhanced p-6 text-center group hover:scale-105 transition-all duration-300"
              >
                <link.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:text-cyan-300" />
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300">{link.title}</h3></h3></h3>)
              </a>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
            ))}
          </div>

          {/* Category Filter */}
<<<<<<< HEAD
          <div className="mb-8" /></div>
            <h2 className="text-2xl font-bold text-white mb-6">Browse by Category</h2>
            <div className="flex flex-wrap gap-4" /></div>
              {categories.map((category) => ()
=======
          <div className="mb-8">
            </div></div><h2 className="text-2xl font-bold text-white mb-6">Browse by Category</h2></h2></h2>
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                </div></div><button;)
                  key=category.id})
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 $
=======
          {/* Quick Links */} <div className="grid grid-cols-1 md: grid-cols-4 gap-6 mb-12">,</div>
            {quickLinks.map((link, index) => (
              <a;
                key={index}href={link.url}className="cyber-card-enhanced p-6 text-center group hover: scale-105 transition-all duration-300",
              >
                <link.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover: text-cyan-300" />,
                <h3 className="text-lg font-semibold text-white group-hover: text-cyan-300">{link.title,}</h3>
              </a>
            ))}
          </div>

          {/* Category Filter */} <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Browse by Category</h2>
            <div className="flex flex-wrap gap-4">{categories.map((category) => (</div>
                <button;
                  key={category.id}onClick={() =>setSelectedCategory(category.id)</button>}className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
                    selectedCategory === category.id;
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover: bg-slate-700',}`}
                >
<<<<<<< HEAD
<<<<<<< HEAD
                  <category.icon className="w-5 h-5" /></category>
                  <span>{category.name}</span>
=======
                  </button></button><category.icon className="w-5 h-5" />
                  <span>{category.name}</span></span></span>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
                  <category.icon className="w-5 h-5" />
                  <span>{category.name</span>}</span>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
                </button>
              ))}
            </div>
          </div>

<<<<<<< HEAD
          {/* Documentation List */}
<<<<<<< HEAD
          <div className="space-y-6" /></div>
            {searchResults.map((doc) => ()
                    {doc.sections.map((section, sectionIndex) => ()
=======
          <div className="space-y-6">
            {searchResults.map((doc) => (
              </div></div><div key=doc.id} className="cyber-card-enhanced p-8 group hover:scale-105 transition-all duration-300">
                </div></div><div className="flex items-start justify-between mb-4">
                  </div></div><div className="flex-1">
                    </div></div><h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {doc.title}
                    </h3></h3></h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {doc.description}
                    </p></p></p>
                    <div className="flex items-center space-x-6 text-sm text-gray-400 mb-4">
                      </div></div><span className="flex items-center">
                        </span></span><FileText className="w-4 h-4 mr-1" />
                        {doc.readTime} read;
                      </span>
                      <span className="flex items-center">
                        </span></span><Settings className="w-4 h-4 mr-1" />
                        {doc.difficulty}
                      </span>
                      <span className="flex items-center">
                        </span></span><Database className="w-4 h-4 mr-1" />
                        Updated {doc.lastUpdated}
                      </span>
=======
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
                    </div>
                  </div>
                  <div className="ml-6">
                    </div></div><span className={`px-3 py-1 rounded text-xs font-semibold $
                      doc.difficulty === 'Beginner' 
                        ? 'bg-green-600 text-white' 
                        : doc.difficulty === 'Intermediate'
                        ? 'bg-yellow-600 text-white'
<<<<<<< HEAD
                        : 'bg-red-600 text-white'
                    }`}>
                      {doc.difficulty}
                    </span></span></span>
=======
                        : 'bg-red-600 text-white'}`}>{doc.difficulty</span>} </span>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
                  </div>
                </div>
                
                <div className="mb-6">
<<<<<<< HEAD
                  </div></div><h4 className="text-white font-semibold mb-3">Sections:</h4>)
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">)
                    {doc.sections.map((section, sectionIndex) => (
                      </div></div><div key=sectionIndex} className="flex items-center text-gray-300 text-sm">
                        </div></div><CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {section})
                      </div>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
                  <h4 className="text-white font-semibold mb-3">Sections: </h4>,
                  <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-2">,</div>
                    {doc.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex}className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {section} </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
                    ))}
                  </div>
                </div>

<<<<<<< HEAD
                <div className="flex items-center justify-between" /></div>
                  <div className="flex space-x-4" /></div>
                    <a href={`/docs/${doc.id}`}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center" /></a>
                      Read Guide
                      <ArrowRight className="w-4 h-4 ml-2" / /></ArrowRight>
                    </a>
                    <a href={`/docs/${doc.id}/download`}
                      className="border-2 border-cyan-400 text-cyan-400 px-6 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center" /></a>
                      <Download className="w-4 h-4 mr-2" / /></Download>
                      Download PDF
=======
                <div className="flex items-center justify-between">
<<<<<<< HEAD
                  </div></div><div className="flex space-x-4">
                    </div></div><a;
                      href={`/docs/$doc.id}`}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center"
=======
                  <div className="flex space-x-4">
                    <a;
                      href={`/docs/${doc.id}`}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center",
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
                    >
                      Read Guide;
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                    <a;
<<<<<<< HEAD
                      href={`/docs/$doc.id}/download`}
                      className="border-2 border-cyan-400 text-cyan-400 px-6 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF;
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
=======
                      href={`/docs/${doc.id}/download`}
                      className="border-2 border-cyan-400 text-cyan-400 px-6 py-2 rounded-lg font-semibold hover: bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center",
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF;
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

<<<<<<< HEAD
          {/* No Results */}{searchResults.length === 0 && searchQuery && (
=======
          {/* No Results */},
<<<<<<< HEAD
    {searchResults.length === 0 && searchQuery && ()
                onClick={() => setSearchQuery('')}
=======
    {searchResults.length === 0 && searchQuery && (
>>>>>>> origin/main
            <div className="cyber-card-enhanced p-8 text-center">
<<<<<<< HEAD
              </div></div><Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No results found</h3></h3></h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search terms or browse our documentation categories.
              </p></p></p>)
              <button)
                onClick=() => setSearchQuery('')}
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Clear Search;
              </button></button></button>
=======
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
              <p className="text-gray-300 mb-6">Try adjusting your search terms or browse our documentation categories.</p>
              </p>
              <button;
                onClick={() =>setSearchQuery('')</button>}className="bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300",
              >
                Clear Search;
              </button>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
            </div>
<<<<<<< HEAD
          )}

          {/* Additional Resources */} <div className="cyber-card-enhanced p-8 mt-16">
=======
          )},
    {/* Additional Resources */}
<<<<<<< HEAD
<<<<<<< HEAD
          <div className="cyber-card-enhanced p-8 mt-16" /></div>
            <h2 className="text-2xl font-bold text-white mb-6">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" /></div>
              <a href="/tutorials"
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300" /></a>
                <BookOpen className="w-8 h-8 text-cyan-400" / /></BookOpen>
                <div></div>
                  <div className="text-white font-semibold">Tutorials</div>
                  <div className="text-gray-300 text-sm">Step-by-step guides</div>
=======
          <div className="cyber-card-enhanced p-8 mt-16">
            </div></div><h2 className="text-2xl font-bold text-white mb-6">Additional Resources</h2></h2></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              </div></div><a;
                href="/tutorials" className="flex items-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300"
=======
          <div className="cyber-card-enhanced p-8 mt-16">
>>>>>>> origin/main
            <h2 className="text-2xl font-bold text-white mb-6">Additional Resources</h2>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,</div>
              <a;
                href="/tutorials"
                className="flex items-center space-x-3 p-4 rounded-lg hover: bg-cyan-500/10 transition-colors duration-300",
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
              >
                <BookOpen className="w-8 h-8 text-cyan-400" />
                <div>
                  </div></div><div className="text-white font-semibold">Tutorials</div></div></div>
                  <div className="text-gray-300 text-sm">Step-by-step guides</div></div></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" / /></ArrowRight>
              </a>
<<<<<<< HEAD
<<<<<<< HEAD
              <a href="/api"
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300" /></a>
                <Code className="w-8 h-8 text-green-400" / /></Code>
                <div></div>
                  <div className="text-white font-semibold">API Reference</div>
                  <div className="text-gray-300 text-sm">Complete API documentation</div>
=======
              <a;
                href="/api" className="flex items-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300"
=======
              <a;
                href="/api"
                className="flex items-center space-x-3 p-4 rounded-lg hover: bg-cyan-500/10 transition-colors duration-300",
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
              >
                <Code className="w-8 h-8 text-green-400" />
                <div>
                  </div></div><div className="text-white font-semibold">API Reference</div></div></div>
                  <div className="text-gray-300 text-sm">Complete API documentation</div></div></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" / /></ArrowRight>
              </a>
<<<<<<< HEAD
<<<<<<< HEAD
              <a href="/community"
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300" /></a>
                <Users className="w-8 h-8 text-purple-400" / /></Users>
                <div></div>
                  <div className="text-white font-semibold">Community</div>
                  <div className="text-gray-300 text-sm">Developer community</div>
=======
              <a;
                href="/community" className="flex items-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300"
=======
              <a;
                href="/community"
                className="flex items-center space-x-3 p-4 rounded-lg hover: bg-cyan-500/10 transition-colors duration-300",
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
              >
                <Users className="w-8 h-8 text-purple-400" />
                <div>
                  </div></div><div className="text-white font-semibold">Community</div></div></div>
                  <div className="text-gray-300 text-sm">Developer community</div></div></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" / /></ArrowRight>
              </a>
<<<<<<< HEAD
<<<<<<< HEAD
              <a href="/support"
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300" /></a>
                <Shield className="w-8 h-8 text-orange-400" / /></Shield>
                <div></div>
                  <div className="text-white font-semibold">Support</div>
                  <div className="text-gray-300 text-sm">Get help and support</div>
=======
              <a;
                href="/support" className="flex items-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300"
=======
              <a;
                href="/support"
                className="flex items-center space-x-3 p-4 rounded-lg hover: bg-cyan-500/10 transition-colors duration-300",
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-0c44
              >
                <Shield className="w-8 h-8 text-orange-400" />
                <div>
                  </div></div><div className="text-white font-semibold">Support</div></div></div>
                  <div className="text-gray-300 text-sm">Get help and support</div></div></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" / /></ArrowRight>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocsPage;
