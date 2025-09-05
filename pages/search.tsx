import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Clock, Filter, X } from 'lucide-react';
import Layout from '../components/Layout';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'service' | 'solution' | 'resource';
  category: string;
  lastModified?: string;
}

export default function SearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Mock search data
  const searchData: SearchResult[] = [
    {
      id: '1',
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions for your business transformation',
      url: '/ai-services',
      type: 'service',
      category: 'Services',
      lastModified: '2024-01-15'
    },
    {
      id: '2',
      title: 'IT Services',
      description: 'Comprehensive information technology services and support',
      url: '/it-services',
      type: 'service',
      category: 'Services',
      lastModified: '2024-01-10'
    },
    {
      id: '3',
      title: 'Micro SaaS Solutions',
      description: 'Scalable software as a service solutions for modern businesses',
      url: '/micro-saas',
      type: 'service',
      category: 'Services',
      lastModified: '2024-01-12'
    },
    {
      id: '4',
      title: 'Enterprise Solutions',
      description: 'Tailored enterprise-grade solutions for large organizations',
      url: '/solutions/enterprise',
      type: 'solution',
      category: 'Solutions',
      lastModified: '2024-01-08'
    },
    {
      id: '5',
      title: 'Cloud & DevOps',
      description: 'Cloud infrastructure and DevOps services for scalable applications',
      url: '/services/cloud-devops',
      type: 'service',
      category: 'Services',
      lastModified: '2024-01-14'
    },
    {
      id: '6',
      title: 'Cybersecurity Services',
      description: 'Advanced cybersecurity solutions to protect your digital assets',
      url: '/services/cybersecurity',
      type: 'service',
      category: 'Services',
      lastModified: '2024-01-11'
    },
    {
      id: '7',
      title: 'About Us',
      description: 'Learn about Zion Tech Group and our mission to transform businesses',
      url: '/about',
      type: 'page',
      category: 'Company',
      lastModified: '2024-01-09'
    },
    {
      id: '8',
      title: 'Contact Us',
      description: 'Get in touch with our team for consultations and support',
      url: '/contact',
      type: 'page',
      category: 'Company',
      lastModified: '2024-01-13'
    },
    {
      id: '9',
      title: 'Blog',
      description: 'Latest insights and articles on technology trends and innovations',
      url: '/blog',
      type: 'resource',
      category: 'Resources',
      lastModified: '2024-01-16'
    },
    {
      id: '10',
      title: 'White Papers',
      description: 'In-depth research and analysis on technology topics',
      url: '/white-papers',
      type: 'resource',
      category: 'Resources',
      lastModified: '2024-01-07'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Results', count: searchData.length },
    { id: 'Services', label: 'Services', count: searchData.filter(r => r.category === 'Services').length },
    { id: 'Solutions', label: 'Solutions', count: searchData.filter(r => r.category === 'Solutions').length },
    { id: 'Company', label: 'Company', count: searchData.filter(r => r.category === 'Company').length },
    { id: 'Resources', label: 'Resources', count: searchData.filter(r => r.category === 'Resources').length }
  ];

  useEffect(() => {
    const { q } = router.query;
    if (q && typeof q === 'string') {
      setQuery(q);
      performSearch(q);
    }
  }, [router.query]);

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  const performSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

      const categoryFiltered = selectedCategory === 'all' 
        ? filtered 
        : filtered.filter(item => item.category === selectedCategory);

      setResults(categoryFiltered);
      setIsLoading(false);

      // Save to recent searches
      if (searchQuery.trim()) {
        const newRecent = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5);
        setRecentSearches(newRecent);
        localStorage.setItem('recentSearches', JSON.stringify(newRecent));
      }
    }, 500);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(query);
    router.push(`/search?q=${encodeURIComponent(query)}`, undefined, { shallow: true });
  };

  const handleRecentSearch = (searchTerm: string) => {
    setQuery(searchTerm);
    performSearch(searchTerm);
    router.push(`/search?q=${encodeURIComponent(searchTerm)}`, undefined, { shallow: true });
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service':
        return '🔧';
      case 'solution':
        return '💡';
      case 'page':
        return '📄';
      case 'resource':
        return '📚';
      default:
        return '🔍';
    }
  };

  return (
    <Layout title={`Search Results${query ? ` for "${query}"` : ''} - Zion Tech Group`}>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          {/* Search Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Search Results
            </h1>
            <p className="text-gray-300 text-lg">
              Find exactly what you're looking for
            </p>
          </motion.div>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search services, solutions, or resources..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Search
                </button>
              </div>
            </form>
          </motion.div>

          {/* Recent Searches */}
          {!query && recentSearches.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl mx-auto mb-8"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Recent Searches
                </h3>
                <button
                  onClick={clearRecentSearches}
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Clear all
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleRecentSearch(search)}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-gray-300 hover:bg-white/20 hover:text-white transition-colors text-sm"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Category Filters */}
          {query && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-4xl mx-auto mb-8"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Filter className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300 font-medium">Filter by category:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category.label} ({category.count})
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Search Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            {isLoading ? (
              <div className="text-center py-12">
                <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-300">Searching...</p>
              </div>
            ) : query ? (
              <>
                <div className="mb-6">
                  <p className="text-gray-300">
                    {results.length} result{results.length !== 1 ? 's' : ''} found for "{query}"
                  </p>
                </div>

                {results.length > 0 ? (
                  <div className="space-y-4">
                    {results.map((result, index) => (
                      <motion.div
                        key={result.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-200"
                      >
                        <Link href={result.url} className="block group">
                          <div className="flex items-start space-x-4">
                            <div className="text-2xl">{getTypeIcon(result.type)}</div>
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                                {result.title}
                              </h3>
                              <p className="text-gray-300 mb-3">{result.description}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-400">
                                <span className="bg-white/10 px-2 py-1 rounded">{result.category}</span>
                                <span className="flex items-center">
                                  <ArrowRight className="w-4 h-4 mr-1" />
                                  {result.url}
                                </span>
                                {result.lastModified && (
                                  <span>Updated {new Date(result.lastModified).toLocaleDateString()}</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                    <p className="text-gray-300 mb-6">
                      Try adjusting your search terms or browse our categories
                    </p>
                    <Link
                      href="/services"
                      className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Browse Services
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-2">Start your search</h3>
                <p className="text-gray-300 mb-6">
                  Search for services, solutions, or resources
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}