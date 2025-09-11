import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Filter, X, Clock, TrendingUp, Star } from 'lucide-react';
import Head from 'next/head';

const searchResults = [
  {
    id: 1,
    title: 'AI-Powered Analytics Dashboard',
    description: 'Advanced analytics platform with AI-driven insights and predictions.',
    category: 'AI Services',
    url: '/ai-services',
    featured: true
  },
  {
    id: 2,
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions including AWS, Azure, and Google Cloud Platform management.',
    category: 'IT Services',
    url: '/it-services',
    featured: true
  },
  {
    id: 3,
    title: 'Micro SaaS Solutions',
    description: 'Innovative micro SaaS solutions powered by AI for modern businesses.',
    category: 'Micro SaaS',
    url: '/micro-saas',
    featured: true
  }
];

export default function SearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(searchResults);
  const [filters, setFilters] = useState({
    category: 'all',
    featured: false
  });

  useEffect(() => {
    if (router.query.q) {
      setQuery(router.query.q as string);
    }
  }, [router.query.q]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', query);
  };

  const handleFilterChange = (filterType: string, value: string | boolean) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Search - Zion Tech Group</title>
        <meta name="description" content="Search our comprehensive technology solutions and services" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Search Results
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect solution for your business needs
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSearch} className="mb-8">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for services, solutions, or features..."
                className="w-full px-4 py-3 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {result.category}
                  </span>
                  {result.featured && (
                    <Star className="h-5 w-5 text-yellow-500" />
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {result.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {result.description}
                </p>
                
                <Link href={result.url}>
                  <a className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
