'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, BookOpen, Code, Zap, Shield, Cloud, Brain, Users, ArrowRight, CheckCircle, ExternalLink, Download, FileText, Settings, Database } from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Documentation', icon: BookOpen },
    { id: 'getting-started', name: 'Getting Started', icon: Zap },
    { id: 'ai-services', name: 'AI Services', icon: Brain },
    { id: 'it-services', name: 'IT Services', icon: Cloud },
    { id: 'api', name: 'API Reference', icon: Code },;
    { id: 'security', name: 'Security', icon: Shield };
  ];
  const documentation = [
    {
      id: 1,
      title: 'Getting Started Guide',
      description: 'Complete guide to setting up and using our services',
      category: 'getting-started',
      difficulty: 'Beginner',
      readTime: '10 min',
      lastUpdated: '2024-01-15',
      sections: [
        'Account Setup',
        'First API Call',,
        'Authentication',;
        'Basic Configuration';
      ];
    },
    {
      id: 2,
      title: 'AI Services Documentation',
      description: 'Comprehensive guide to our AI-powered services',
      category: 'ai-services',
      difficulty: 'Intermediate',
      readTime: '25 min',
      lastUpdated: '2024-01-14',
      sections: [
        'AI Chat API',
        'Content Generation',
        'Data Analytics',
        'Computer Vision'
      ]
    },
    {
      id: 3,
      title: 'IT Services Guide',
      description: 'Complete documentation for our IT infrastructure services',
      category: 'it-services',
      difficulty: 'Advanced',
      readTime: '30 min',
      lastUpdated: '2024-01-13',
      sections: [
        'Cloud Infrastructure',
        'DevOps & CI/CD',
        'Cybersecurity',
        'Database Management'
      ]
    },
    {
      id: 4,
      title: 'API Reference',
      description: 'Complete API reference with examples and endpoints',
      category: 'api',
      difficulty: 'Intermediate',
      readTime: '45 min',
      lastUpdated: '2024-01-12',
      sections: [
        'Authentication',
        'Endpoints',
        'Error Handling',
        'Rate Limits'
      ]
    },
    {
      id: 5,
      title: 'Security Best Practices',
      description: 'Security guidelines and best practices for our services',
      category: 'security',
      difficulty: 'Intermediate',
      readTime: '20 min',
      lastUpdated: '2024-01-11',
      sections: [
        'Data Protection',
        'Access Control',
        'Encryption',
        'Compliance'
      ]
    },
    {
      id: 6,
      title: 'Troubleshooting Guide',
      description: 'Common issues and their solutions',
      category: 'getting-started',
      difficulty: 'Beginner',
      readTime: '15 min',
      lastUpdated: '2024-01-10',
      sections: [
        'Common Errors',
        'Debugging Tips',
        'Performance Issues',
        'Support Resources'
      ]
    }
  ];
  const quickLinks = [
    { title: 'API Reference', url: '/api', icon: Code },
    { title: 'Tutorials', url: '/tutorials', icon: BookOpen },
    { title: 'Community', url: '/community', icon: Users },;
    { title: 'Support', url: '/support', icon: Shield };
  ];
  const filteredDocs = selectedCategory === 'all' ;
    ? documentation ;
    : documentation.filter(doc => doc.category === selectedCategory);

  const searchResults = searchQuery 
    ? documentation.filter()
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase());
      );
    : filteredDocs;

  return ()
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12" /></div>
            {quickLinks.map((link, index) => ()
            ))}
          </div>

          {/* Category Filter */}
          <div className="mb-8" /></div>
            <h2 className="text-2xl font-bold text-white mb-6">Browse by Category</h2>
            <div className="flex flex-wrap gap-4" /></div>
              {categories.map((category) => ()
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  <category.icon className="w-5 h-5" /></category>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Documentation List */}
          <div className="space-y-6" /></div>
            {searchResults.map((doc) => ()
                    {doc.sections.map((section, sectionIndex) => ()
                    ))}
                  </div>
                </div>

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
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */},
    {searchResults.length === 0 && searchQuery && ()
                onClick={() => setSearchQuery('')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Clear Search
              </button>
            </div>
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
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" / /></ArrowRight>
              </a>
              <a href="/api"
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300" /></a>
                <Code className="w-8 h-8 text-green-400" / /></Code>
                <div></div>
                  <div className="text-white font-semibold">API Reference</div>
                  <div className="text-gray-300 text-sm">Complete API documentation</div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" / /></ArrowRight>
              </a>
              <a href="/community"
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300" /></a>
                <Users className="w-8 h-8 text-purple-400" / /></Users>
                <div></div>
                  <div className="text-white font-semibold">Community</div>
                  <div className="text-gray-300 text-sm">Developer community</div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" / /></ArrowRight>
              </a>
              <a href="/support"
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300" /></a>
                <Shield className="w-8 h-8 text-orange-400" / /></Shield>
                <div></div>
                  <div className="text-white font-semibold">Support</div>
                  <div className="text-gray-300 text-sm">Get help and support</div>
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
