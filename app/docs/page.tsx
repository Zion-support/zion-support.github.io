'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, BookOpen, Code, Zap, Shield, Cloud, Brain, Users, ArrowRight, CheckCircle, ExternalLink, Download, FileText, Settings, Database } from 'lucide-react';

const DocsPage: React.FC = () => {
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
      sections: [
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
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
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
