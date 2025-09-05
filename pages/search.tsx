import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Clock, Star, FileText, Globe, Code, Database, Cloud } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const searchResults = [
  {
    id: 1,
    title: 'AI-Powered Email Responder',
    description: 'Automatically respond to emails using advanced AI technology with natural language processing.',
    category: 'AI Services',
    icon: FileText,
    rating: 4.8,
    price: '$99/month',
    tags: ['AI', 'Email', 'Automation']
  },
  {
    id: 2,
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud infrastructure management and optimization services.',
    category: 'IT Services',
    icon: Cloud,
    rating: 4.9,
    price: '$150/hour',
    tags: ['Cloud', 'Infrastructure', 'Management']
  },
  {
    id: 3,
    title: 'Voice-to-Text Meeting Assistant',
    description: 'Convert voice meetings to text with real-time transcription and AI-powered insights.',
    category: 'Micro SaaS',
    icon: Globe,
    rating: 4.7,
    price: '$49/month',
    tags: ['Voice', 'Transcription', 'AI']
  },
  {
    id: 4,
    title: 'Smart Contract Analyzer',
    description: 'Analyze and audit smart contracts for security vulnerabilities and optimization opportunities.',
    category: 'Blockchain',
    icon: Code,
    rating: 4.6,
    price: '$199/month',
    tags: ['Blockchain', 'Security', 'Analysis']
  },
  {
    id: 5,
    title: 'Predictive Maintenance AI',
    description: 'Predict equipment failures before they happen using machine learning algorithms.',
    category: 'AI Services',
    icon: Database,
    rating: 4.8,
    price: '$299/month',
    tags: ['AI', 'Maintenance', 'Predictive']
  }
];

const categories = [
  { name: 'All', count: 125 },
  { name: 'AI Services', count: 40 },
  { name: 'IT Services', count: 40 },
  { name: 'Micro SaaS', count: 45 }
];

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('relevance');

  const filteredResults = searchResults.filter(result => {
    const matchesQuery = result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        result.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || result.category === selectedCategory;
    return matchesQuery && matchesCategory;
  });

  return (
    <MainLayout
      title="Search - Zion Tech Group"
      description="Search through our comprehensive catalog of AI, IT, and Micro SaaS services and solutions."
      keywords="search, services, AI, IT, micro SaaS, technology solutions"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Search Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Find the perfect technology solution for your business needs
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-6 w-6 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search services, solutions, or technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Results */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
                  
                  {/* Category Filter */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Category</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <button
                          key={category.name}
                          onClick={() => setSelectedCategory(category.name)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            selectedCategory === category.name
                              ? 'bg-blue-100 text-blue-700'
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          {category.name} ({category.count})
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sort Filter */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Sort By</h4>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="relevance">Relevance</option>
                      <option value="rating">Rating</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="lg:col-span-3">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {filteredResults.length} results found
                  </h2>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>Last updated 2 minutes ago</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {filteredResults.map((result, index) => (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <result.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {result.title}
                              </h3>
                              <p className="text-gray-600 mb-3">
                                {result.description}
                              </p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <div className="flex items-center space-x-1">
                                  <Star className="w-4 h-4 text-yellow-400" />
                                  <span>{result.rating}</span>
                                </div>
                                <span>{result.category}</span>
                                <span className="font-medium text-green-600">{result.price}</span>
                              </div>
                            </div>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                              View Details
                            </button>
                          </div>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {result.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Filter, X, Clock, TrendingUp, Star } from 'lucide-react';
import Layout from '../components/Layout';

interface SearchResult {
  title: string;
  description: string;
  href: string;
  category: string;
  type: 'page' | 'service' | 'blog' | 'solution';
  relevance: number;
}

const searchResults: SearchResult[] = [
  {
    title: 'AI Services',
    description: 'Cutting-edge artificial intelligence solutions including machine learning, natural language processing, and computer vision.',
    href: '/ai-services',
    category: 'Services',
    type: 'service',
    relevance: 95
  },
  {
    title: 'IT Services',
    description: 'Comprehensive information technology services including cloud infrastructure, cybersecurity, and digital transformation.',
    href: '/it-services',
    category: 'Services',
    type: 'service',
    relevance: 90
  },
  {
    title: 'Micro SaaS Solutions',
    description: 'Scalable software as a service solutions designed for specific business needs and rapid deployment.',
    href: '/micro-saas',
    category: 'Services',
    type: 'service',
    relevance: 88
  },
  {
    title: 'About Zion Tech Group',
    description: 'Learn about our mission, values, and the expert team behind our innovative technology solutions.',
    href: '/about',
    category: 'Company',
    type: 'page',
    relevance: 85
  },
  {
    title: 'Contact Us',
    description: 'Get in touch with our team for consultations, support, or to discuss your project requirements.',
    href: '/contact',
    category: 'Company',
    type: 'page',
    relevance: 80
  },
  {
    title: 'Pricing Plans',
    description: 'Transparent pricing for all our services and solutions. Find the perfect plan for your business needs.',
    href: '/pricing',
    category: 'Company',
    type: 'page',
    relevance: 75
  },
  {
    title: 'AI-Powered Email Responder',
    description: 'Automated email response system using advanced AI to handle customer inquiries efficiently.',
    href: '/ai-services#ai-email-responder',
    category: 'AI Services',
    type: 'service',
    relevance: 92
  },
  {
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform management.',
    href: '/it-services#cloud-infrastructure',
    category: 'IT Services',
    type: 'service',
    relevance: 87
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Advanced security measures to protect your business from cyber threats and data breaches.',
    href: '/it-services#cybersecurity',
    category: 'IT Services',
    type: 'service',
    relevance: 85
  },
  {
    title: 'Blog',
    description: 'Latest insights, trends, and updates from the world of technology and AI.',
    href: '/blog',
    category: 'Resources',
    type: 'blog',
    relevance: 70
  }
];

const categories = ['All', 'Services', 'Company', 'AI Services', 'IT Services', 'Resources'];
const types = ['All', 'page', 'service', 'blog', 'solution'];

export default function SearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (router.query.q) {
      setQuery(router.query.q as string);
    }
  }, [router.query.q]);

  useEffect(() => {
    if (query.trim()) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        const results = searchResults.filter(result => {
          const matchesQuery = result.title.toLowerCase().includes(query.toLowerCase()) ||
                             result.description.toLowerCase().includes(query.toLowerCase());
          const matchesCategory = selectedCategory === 'All' || result.category === selectedCategory;
          const matchesType = selectedType === 'All' || result.type === selectedType;
          
          return matchesQuery && matchesCategory && matchesType;
        }).sort((a, b) => b.relevance - a.relevance);
        
        setFilteredResults(results);
        setIsLoading(false);
      }, 300);
      
      return () => clearTimeout(timer);
    } else {
      setFilteredResults([]);
    }
  }, [query, selectedCategory, selectedType]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
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
>>>>>>> origin/cursor/check-and-fix-netlify-build-1edd
    }
  };

  const clearSearch = () => {
    setQuery('');
    setFilteredResults([]);
    router.push('/search');
  };

  return (
    <Layout title="Search - Zion Tech Group" description="Search our services, solutions, and resources">
      <div className="min-h-screen bg-gray-50">
        {/* Search Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Search</h1>
              
              {/* Search Form */}
              <form onSubmit={handleSearch} className="relative max-w-2xl">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services, solutions, and resources..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    autoFocus
                  />
                  {query && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </form>

              {/* Filters */}
              {query && (
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Filter by:</span>
                  </div>
                  
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {types.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Search Results */}
        <div className="container mx-auto px-4 py-8">
          {!query ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">Start your search</h2>
              <p className="text-gray-500">Enter a search term to find services, solutions, and resources</p>
            </motion.div>
          ) : isLoading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600">Searching...</p>
            </motion.div>
          ) : filteredResults.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No results found</h2>
              <p className="text-gray-500 mb-4">Try adjusting your search terms or filters</p>
              <button
                onClick={clearSearch}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear search
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} found
                </h2>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>Search completed in 0.1s</span>
                </div>
              </div>

              <div className="space-y-4">
                {filteredResults.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            <Link href={result.href} className="hover:text-blue-600 transition-colors">
                              {result.title}
                            </Link>
                          </h3>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                            {result.category}
                          </span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                            {result.type}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-3">{result.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span>{result.relevance}% relevance</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" />
                            <span>Popular</span>
                          </div>
                        </div>
                      </div>
                      <Link
                        href={result.href}
                        className="ml-4 p-2 text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </Layout>
ursor/website-audit-and-update-with-deployment-9cae
  );
}