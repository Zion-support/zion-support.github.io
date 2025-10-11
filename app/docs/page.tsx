'use client';
import React, {useState}from 'react';
import {Helmet}}from 'react-helmet-async';
import {Search, BookOpen, Code, Zap, Shield, Cloud, Brain, Users, ArrowRight, CheckCircle, ExternalLink, Download, FileText, Settings, Database}}from 'lucide-react';

const DocsPage: React.FC = () => {,
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = const categories = const categories = [
    { id: 'all', name: 'All Documentation', icon: BookOpen },

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
      ]
    }
  ];
  const quickLinks = const quickLinks = const quickLinks = [
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

    : documentation.filter(doc => doc.category === selectedCategory);

  const searchResults = searchQuery;
    ? documentation.filter(doc => )
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
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Complete documentation for all our AI, IT, and Micro SaaS services.</p>
              Find guides, API references, and best practices to help you build amazing applications.
            </p></p></p>
          </div>

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
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12" /></div>
            {quickLinks.map((link, index) => ()

            <div className="cyber-card-enhanced p-8 text-center">
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
            </div>
          )}

          {/* Additional Resources */} <div className="cyber-card-enhanced p-8 mt-16">
          )},
    {/* Additional Resources */}
          <div className="cyber-card-enhanced p-8 mt-16" /></div>
            <h2 className="text-2xl font-bold text-white mb-6">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" /></div>
              <a href="/tutorials"
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300" /></a>
                <BookOpen className="w-8 h-8 text-cyan-400" / /></BookOpen>
                <div></div>
                  <div className="text-white font-semibold">Tutorials</div>
                  <div className="text-gray-300 text-sm">Step-by-step guides</div>
          <div className="cyber-card-enhanced p-8 mt-16">
            </div></div><h2 className="text-2xl font-bold text-white mb-6">Additional Resources</h2></h2></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              </div></div><a;
                href="/tutorials" className="flex items-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300"
              >
                <BookOpen className="w-8 h-8 text-cyan-400" />
                <div>
                  </div></div><div className="text-white font-semibold">Tutorials</div></div></div>
                  <div className="text-gray-300 text-sm">Step-by-step guides</div></div></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" / /></ArrowRight>
              </a>
              <a href="/api"
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300" /></a>
                <Code className="w-8 h-8 text-green-400" / /></Code>
                <div></div>
                  <div className="text-white font-semibold">API Reference</div>
                  <div className="text-gray-300 text-sm">Complete API documentation</div>
              <a;
                href="/api" className="flex items-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300"
              >
                <Code className="w-8 h-8 text-green-400" />
                <div>
                  </div></div><div className="text-white font-semibold">API Reference</div></div></div>
                  <div className="text-gray-300 text-sm">Complete API documentation</div></div></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" / /></ArrowRight>
              </a>
              <a href="/community"
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300" /></a>
                <Users className="w-8 h-8 text-purple-400" / /></Users>
                <div></div>
                  <div className="text-white font-semibold">Community</div>
                  <div className="text-gray-300 text-sm">Developer community</div>
              <a;
                href="/community" className="flex items-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300"
              >
                <Users className="w-8 h-8 text-purple-400" />
                <div>
                  </div></div><div className="text-white font-semibold">Community</div></div></div>
                  <div className="text-gray-300 text-sm">Developer community</div></div></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" / /></ArrowRight>
              </a>
              <a href="/support"
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300" /></a>
                <Shield className="w-8 h-8 text-orange-400" / /></Shield>
                <div></div>
                  <div className="text-white font-semibold">Support</div>
                  <div className="text-gray-300 text-sm">Get help and support</div>
              <a;
                href="/support" className="flex items-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300"
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
