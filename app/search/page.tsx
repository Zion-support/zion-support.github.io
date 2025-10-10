'use client';

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, ArrowRight, Filter, X } from 'lucide-react';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  type: 'page' | 'service' | 'blog' | 'documentation';
}

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isSearching, setIsSearching] = useState(false);

  const allResults: SearchResult[] = [
    // AI Services
    { id: '1', title: 'AI Solutions', description: 'Comprehensive AI solutions for enterprise', url: '/ai-services', category: 'AI Services', type: 'service' },
    { id: '2', title: 'AI Marketing Automation', description: 'AI-powered marketing automation tools', url: '/ai-marketing', category: 'AI Services', type: 'service' },
    { id: '3', title: 'AI Customer Support', description: 'AI-powered customer support systems', url: '/ai-customer-support', category: 'AI Services', type: 'service' },
    { id: '4', title: 'AI Data Analytics', description: 'Advanced data analytics with AI', url: '/ai-data-analytics', category: 'AI Services', type: 'service' },
    { id: '5', title: 'AI Content Generation', description: 'AI-powered content creation tools', url: '/ai-content-generation', category: 'AI Services', type: 'service' },
    { id: '6', title: 'AI Healthcare Solutions', description: 'AI solutions for healthcare industry', url: '/ai-healthcare', category: 'AI Services', type: 'service' },
    { id: '7', title: 'AI Financial Services', description: 'AI solutions for financial services', url: '/ai-fintech', category: 'AI Services', type: 'service' },
    { id: '8', title: 'AI Cybersecurity', description: 'AI-powered cybersecurity solutions', url: '/ai-cybersecurity', category: 'AI Services', type: 'service' },
    
    // IT Services
    { id: '9', title: 'Cloud Services', description: 'Comprehensive cloud solutions', url: '/cloud-services', category: 'IT Services', type: 'service' },
    { id: '10', title: 'DevOps & CI/CD', description: 'Development operations and continuous integration', url: '/devops', category: 'IT Services', type: 'service' },
    { id: '11', title: 'Cybersecurity', description: 'Enterprise cybersecurity solutions', url: '/cybersecurity', category: 'IT Services', type: 'service' },
    { id: '12', title: 'Database Services', description: 'Database management and optimization', url: '/database', category: 'IT Services', type: 'service' },
    { id: '13', title: 'IT Infrastructure', description: 'Enterprise IT infrastructure solutions', url: '/it-infrastructure', category: 'IT Services', type: 'service' },
    { id: '14', title: 'Managed IT Services', description: '24/7 managed IT services', url: '/managed-it', category: 'IT Services', type: 'service' },
    
    // Micro SAAS
    { id: '15', title: 'AI Analytics Dashboard', description: 'Business intelligence dashboard', url: '/ai-analytics-dashboard', category: 'Micro SAAS', type: 'service' },
    { id: '16', title: 'AI-Powered CRM', description: 'Customer relationship management', url: '/ai-crm', category: 'Micro SAAS', type: 'service' },
    { id: '17', title: 'AI Content Studio', description: 'Content creation and management', url: '/ai-content-studio', category: 'Micro SAAS', type: 'service' },
    { id: '18', title: 'AI Chatbot Builder', description: 'Build and deploy AI chatbots', url: '/ai-chatbot-builder', category: 'Micro SAAS', type: 'service' },
    
    // Company Pages
    { id: '19', title: 'About Us', description: 'Learn about Zion Tech Group', url: '/about', category: 'Company', type: 'page' },
    { id: '20', title: 'Our Team', description: 'Meet our expert team', url: '/team', category: 'Company', type: 'page' },
    { id: '21', title: 'Careers', description: 'Join our team', url: '/careers', category: 'Company', type: 'page' },
    { id: '22', title: 'Contact', description: 'Get in touch with us', url: '/contact', category: 'Company', type: 'page' },
    { id: '23', title: 'Partners', description: 'Our strategic partnerships', url: '/partners', category: 'Company', type: 'page' },
    
    // Support
    { id: '24', title: 'Support Center', description: 'Get help and support', url: '/support', category: 'Support', type: 'page' },
    { id: '25', title: 'Documentation', description: 'Technical documentation', url: '/docs', category: 'Support', type: 'documentation' },
    { id: '26', title: 'API Reference', description: 'API documentation and guides', url: '/api-docs', category: 'Support', type: 'documentation' },
    { id: '27', title: 'FAQ', description: 'Frequently asked questions', url: '/faq', category: 'Support', type: 'page' },
    
    // Blog
    { id: '28', title: 'Tech Blog', description: 'Latest insights and news', url: '/blog', category: 'Blog', type: 'blog' },
    { id: '29', title: 'Case Studies', description: 'Success stories and case studies', url: '/case-studies', category: 'Blog', type: 'blog' },
    { id: '30', title: 'News', description: 'Company news and updates', url: '/news', category: 'Blog', type: 'blog' }
  ];

  const categories = ['all', 'AI Services', 'IT Services', 'Micro SAAS', 'Company', 'Support', 'Blog'];

  useEffect(() => {
    if (searchTerm.trim()) {
      setIsSearching(true);
      const filtered = allResults.filter(result => {
        const matchesSearch = result.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            result.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || result.category === selectedCategory;
        return matchesSearch && matchesCategory;
      });
      setSearchResults(filtered);
      setIsSearching(false);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, selectedCategory]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services': return '🤖';
      case 'IT Services': return '☁️';
      case 'Micro SAAS': return '⚡';
      case 'Company': return '🏢';
      case 'Support': return '🛠️';
      case 'Blog': return '📝';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'service': return 'bg-blue-500/20 text-blue-400';
      case 'page': return 'bg-green-500/20 text-green-400';
      case 'blog': return 'bg-purple-500/20 text-purple-400';
      case 'documentation': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <>
      <Helmet>
        <title>Search - Zion Tech Group</title>
        <meta name="description" content="Search through our comprehensive AI and IT solutions, services, and resources." />
        <meta name="keywords" content="search, AI solutions, IT services, documentation, support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Search Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Find the perfect AI and IT solutions for your business needs
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search solutions, services, or documentation..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category === 'all' ? 'All' : category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Search Results */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            {isSearching && (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
                <p className="text-gray-400">Searching...</p>
              </div>
            )}

            {!isSearching && searchTerm && searchResults.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-6">🔍</div>
                <h2 className="text-2xl font-bold text-white mb-4">No Results Found</h2>
                <p className="text-gray-400 text-lg mb-8">
                  No results found for "{searchTerm}". Try adjusting your search terms or category filter.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Clear Search
                </button>
              </div>
            )}

            {!isSearching && searchTerm && searchResults.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-white">
                    {searchResults.length} Result{searchResults.length !== 1 ? 's' : ''} Found
                  </h2>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Filter className="w-4 h-4" />
                    <span>Filtered by: {selectedCategory === 'all' ? 'All Categories' : selectedCategory}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {searchResults.map((result) => (
                    <div
                      key={result.id}
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{getCategoryIcon(result.category)}</span>
                          <div>
                            <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                              {result.title}
                            </h3>
                            <p className="text-sm text-gray-400">{result.category}</p>
                          </div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(result.type)}`}>
                          {result.type}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {result.description}
                      </p>
                      
                      <a
                        href={result.url}
                        className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium group-hover:translate-x-1 transform duration-300"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!searchTerm && (
              <div className="text-center py-12">
                <div className="text-6xl mb-6">🔍</div>
                <h2 className="text-2xl font-bold text-white mb-4">Start Your Search</h2>
                <p className="text-gray-400 text-lg mb-8">
                  Enter a search term above to find AI solutions, IT services, documentation, and more.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  {categories.slice(1).map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="text-2xl mb-2">{getCategoryIcon(category)}</div>
                      <div className="text-sm font-medium text-white">{category}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default SearchPage;