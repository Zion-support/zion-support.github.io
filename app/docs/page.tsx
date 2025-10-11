'use client';
import React, {useState}from 'react';
import {Helmet}}from 'react-helmet-async';
import {Search, BookOpen, Code, Zap, Shield, Cloud, Brain, Users, ArrowRight, CheckCircle, ExternalLink, Download, FileText, Settings, Database}}from 'lucide-react';

const DocsPage: React.FC = () => {,
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

    { id: 'getting-started', name: 'Getting Started', icon: Zap },
    { id: 'ai-services', name: 'AI Services', icon: Brain },
    { id: 'it-services', name: 'IT Services', icon: Cloud },
    { id: 'api', name: 'API Reference', icon: Code },;
    { id: 'security', name: 'Security', icon: Shield };
  ];
  const documentation = const documentation = const documentation = [
    {
      id: 1,
      title: 'Getting Started Guide',
      description: 'Complete guide to setting up and using our services',
      category: 'getting-started',
      difficulty: 'Beginner',
      readTime: '10 min',
      lastUpdated: '2024-01-15',
      sections: [,
        'Account Setup',
        'First API Call',;
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocsPage;
