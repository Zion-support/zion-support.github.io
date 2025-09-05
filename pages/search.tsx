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
  );
}