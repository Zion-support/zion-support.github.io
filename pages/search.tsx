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
    description: 'Comprehensive IT infrastructure and support services including cloud migration, cybersecurity, and system administration.',
    href: '/it-services',
    category: 'Services',
    type: 'service',
    relevance: 90
  },
  {
    title: 'Micro SaaS Solutions',
    description: 'Scalable software as a service solutions designed for specific business needs with rapid deployment and enterprise security.',
    href: '/micro-saas',
    category: 'Services',
    type: 'service',
    relevance: 88
  },
  {
    title: 'About Us',
    description: 'Learn about Zion Tech Group\'s mission, values, and the expert team behind our innovative technology solutions.',
    href: '/about',
    category: 'Company',
    type: 'page',
    relevance: 85
  },
  {
    title: 'Contact Us',
    description: 'Get in touch with our team to discuss your technology needs and how we can help transform your business.',
    href: '/contact',
    category: 'Company',
    type: 'page',
    relevance: 80
  },
  {
    title: 'Privacy Policy',
    description: 'Our commitment to protecting your privacy and how we collect, use, and safeguard your personal information.',
    href: '/privacy',
    category: 'Legal',
    type: 'page',
    relevance: 75
  }
];

export default function SearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  useEffect(() => {
    if (router.query.q) {
      setQuery(router.query.q as string);
    }
  }, [router.query.q]);

  useEffect(() => {
    let results = searchResults;

    if (query) {
      results = results.filter(result =>
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase()) ||
        result.category.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      results = results.filter(result => result.category === selectedCategory);
    }

    if (selectedType !== 'all') {
      results = results.filter(result => result.type === selectedType);
    }

    setFilteredResults(results);
  }, [query, selectedCategory, selectedType]);

  const categories = ['all', ...Array.from(new Set(searchResults.map(result => result.category)))];
  const types = ['all', ...Array.from(new Set(searchResults.map(result => result.type)))];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Search Results
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Find exactly what you're looking for across our comprehensive technology solutions and services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search for services, pages, or solutions..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <Filter className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">Category:</span>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category === 'all' ? 'All Categories' : category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-700">Type:</span>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {types.map(type => (
                        <option key={type} value={type}>
                          {type === 'all' ? 'All Types' : type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} found
                </h2>
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-4 h-4" />
                    <span>Clear search</span>
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {filteredResults.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">{result.title}</h3>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                            {result.category}
                          </span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                            {result.type}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{result.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4" />
                            <span>{result.relevance}% match</span>
                          </div>
                        </div>
                      </div>
                      <Link
                        href={result.href}
                        className="ml-4 flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <span>View</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>

              {filteredResults.length === 0 && (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
                  <p className="text-gray-400 mb-6">
                    Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                  <button
                    onClick={() => {
                      setQuery('');
                      setSelectedCategory('all');
                      setSelectedType('all');
                    }}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}