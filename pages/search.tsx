import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight, Clock, Star, Tag, FileText, Users, Briefcase } from 'lucide-react';
import Layout from '../components/Layout';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'service' | 'solution' | 'resource' | 'team';
  category: string;
  tags: string[];
  lastUpdated?: string;
  rating?: number;
}

export default function SearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Mock search data
  const searchData: SearchResult[] = [
    {
      id: '1',
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions for your business transformation',
      url: '/ai-services',
      type: 'service',
      category: 'Services',
      tags: ['AI', 'Machine Learning', 'Automation'],
      lastUpdated: '2024-01-15',
      rating: 4.8
    },
    {
      id: '2',
      title: 'Cloud & DevOps',
      description: 'Comprehensive cloud infrastructure and DevOps solutions for modern applications',
      url: '/services/cloud-devops',
      type: 'service',
      category: 'Services',
      tags: ['Cloud', 'DevOps', 'Infrastructure'],
      lastUpdated: '2024-01-14',
      rating: 4.9
    },
    {
      id: '3',
      title: 'Healthcare Solutions',
      description: 'Specialized technology solutions for the healthcare industry',
      url: '/solutions/healthcare',
      type: 'solution',
      category: 'Solutions',
      tags: ['Healthcare', 'Compliance', 'HIPAA'],
      lastUpdated: '2024-01-13',
      rating: 4.7
    },
    {
      id: '4',
      title: 'Our Team',
      description: 'Meet the experts behind Zion Tech Group',
      url: '/team',
      type: 'team',
      category: 'Company',
      tags: ['Leadership', 'Experts', 'About'],
      lastUpdated: '2024-01-12',
      rating: 5.0
    },
    {
      id: '5',
      title: 'API Documentation',
      description: 'Complete API reference and integration guides',
      url: '/api-docs',
      type: 'resource',
      category: 'Resources',
      tags: ['API', 'Documentation', 'Integration'],
      lastUpdated: '2024-01-11',
      rating: 4.6
    },
    {
      id: '6',
      title: 'Cybersecurity Services',
      description: 'Advanced security solutions to protect your digital assets',
      url: '/services/cybersecurity',
      type: 'service',
      category: 'Services',
      tags: ['Security', 'Compliance', 'Protection'],
      lastUpdated: '2024-01-10',
      rating: 4.8
    },
    {
      id: '7',
      title: 'Blog',
      description: 'Latest insights and updates from our technology experts',
      url: '/blog',
      type: 'resource',
      category: 'Resources',
      tags: ['Blog', 'Insights', 'Updates'],
      lastUpdated: '2024-01-09',
      rating: 4.5
    },
    {
      id: '8',
      title: 'Contact Us',
      description: 'Get in touch with our team for consultations and support',
      url: '/contact',
      type: 'page',
      category: 'Company',
      tags: ['Contact', 'Support', 'Consultation'],
      lastUpdated: '2024-01-08',
      rating: 4.9
    }
  ];

  const categories = [
    { id: 'all', name: 'All Results', count: searchData.length },
    { id: 'service', name: 'Services', count: searchData.filter(item => item.type === 'service').length },
    { id: 'solution', name: 'Solutions', count: searchData.filter(item => item.type === 'solution').length },
    { id: 'resource', name: 'Resources', count: searchData.filter(item => item.type === 'resource').length },
    { id: 'team', name: 'Team', count: searchData.filter(item => item.type === 'team').length },
    { id: 'page', name: 'Pages', count: searchData.filter(item => item.type === 'page').length }
  ];

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }

    // Get query from URL
    const { q } = router.query;
    if (q && typeof q === 'string') {
      setQuery(q);
      performSearch(q);
    }
  }, [router.query]);

  const performSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const filtered = searchData.filter(item => {
        const matchesQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        
        const matchesCategory = selectedCategory === 'all' || item.type === selectedCategory;
        
        return matchesQuery && matchesCategory;
      });

      setResults(filtered);
      setIsLoading(false);

      // Save to recent searches
      if (searchQuery.trim() && !recentSearches.includes(searchQuery.trim())) {
        const newRecent = [searchQuery.trim(), ...recentSearches.slice(0, 4)];
        setRecentSearches(newRecent);
        localStorage.setItem('recentSearches', JSON.stringify(newRecent));
      }
    }, 500);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(query);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (query.trim()) {
      performSearch(query);
    }
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service':
        return <Briefcase className="w-4 h-4" />;
      case 'solution':
        return <Tag className="w-4 h-4" />;
      case 'resource':
        return <FileText className="w-4 h-4" />;
      case 'team':
        return <Users className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'service':
        return 'bg-blue-100 text-blue-800';
      case 'solution':
        return 'bg-green-100 text-green-800';
      case 'resource':
        return 'bg-purple-100 text-purple-800';
      case 'team':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout
      title="Search - Zion Tech Group"
      description="Search through our comprehensive collection of services, solutions, and resources."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Search Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Search</h1>
              <p className="text-gray-600 mb-6">Find services, solutions, and resources</p>
              
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for services, solutions, or resources..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                  >
                    Search
                  </button>
                </div>
              </form>

              {/* Recent Searches */}
              {recentSearches.length > 0 && !query && (
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-medium text-gray-700">Recent Searches</h3>
                    <button
                      onClick={clearRecentSearches}
                      className="text-sm text-gray-500 hover:text-gray-700"
                    >
                      Clear
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setQuery(search);
                          performSearch(search);
                        }}
                        className="flex items-center space-x-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200"
                      >
                        <Clock className="w-3 h-3" />
                        <span>{search}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Filters and Results */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden p-1 text-gray-400 hover:text-gray-600"
                  >
                    <Filter className="w-5 h-5" />
                  </button>
                </div>
                
                <div className={`space-y-4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Category</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => handleCategoryChange(category.id)}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors duration-200 ${
                            selectedCategory === category.id
                              ? 'bg-blue-100 text-blue-700'
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          <span>{category.name}</span>
                          <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="flex-1">
              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              ) : results.length > 0 ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">
                      {results.length} result{results.length !== 1 ? 's' : ''} found
                    </p>
                  </div>
                  
                  {results.map((result, index) => (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(result.type)}`}>
                              {getTypeIcon(result.type)}
                              <span>{result.category}</span>
                            </div>
                            {result.rating && (
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-sm text-gray-600">{result.rating}</span>
                              </div>
                            )}
                          </div>
                          
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            <Link href={result.url} className="hover:text-blue-600 transition-colors duration-200">
                              {result.title}
                            </Link>
                          </h3>
                          
                          <p className="text-gray-600 mb-3">{result.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-3">
                            {result.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-700"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>Updated {result.lastUpdated}</span>
                            </span>
                          </div>
                        </div>
                        
                        <Link
                          href={result.url}
                          className="ml-4 flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                        >
                          <span className="text-sm font-medium">View</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : query ? (
                <div className="text-center py-12">
                  <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any results for "{query}". Try adjusting your search terms.
                  </p>
                  <button
                    onClick={() => setQuery('')}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Clear search
                  </button>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Start searching</h3>
                  <p className="text-gray-600">
                    Enter a search term above to find services, solutions, and resources.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}