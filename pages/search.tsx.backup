import React { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useRouter } from 'next/router';
<<<<<<< HEAD
=======
import { motion } from 'framer-motion';
import { Search, ArrowRight, FileText, Users, Briefcase, Building2 } from 'lucide-react';
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { Search, Clock, ArrowRight } from 'lucide-react';

const searchResults = [
  {
    id: 1,
    title: 'AI-Powered Code Review Assistant',
    type: 'Service',
    category: 'AI Services',
    description: 'Automated code review with security analysis, performance optimization, and best practices suggestions.',
    url: '/ai-services',
    date: '2024-01-15'
  },
  {
    id: 2,
    title: 'Cloud Migration Services',
    type: 'Service',
    category: 'IT Services',
    description: 'Comprehensive cloud migration solutions for businesses of all sizes.',
    url: '/it-services',
    date: '2024-01-10'
  },
  {
    id: 3,
    title: 'Micro SAAS Solutions',
    type: 'Service',
    category: 'Micro SAAS',
    description: 'Innovative micro software solutions for modern businesses.',
    url: '/micro-saas',
    date: '2024-01-05'
  },
  {
    id: 4,
    title: 'Cybersecurity Best Practices',
    type: 'Article',
    category: 'Security',
    description: 'Learn about the latest cybersecurity trends and best practices for 2024.',
    url: '/news',
    date: '2024-01-01'
  },
  {
    id: 5,
    title: 'Digital Transformation Guide',
    type: 'Guide',
    category: 'Guides',
    description: 'A comprehensive guide to digital transformation and how it can benefit your business.',
    url: '/guides',
    date: '2023-12-20'
  }
];

const categories = [
  'All',
  'AI Services',
  'IT Services',
  'Micro SAAS',
  'Security',
  'Guides',
  'Articles'
];

export default function SearchPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [results, setResults] = useState(searchResults);

  useEffect(() => {
    if (router.query.q) {
      setSearchQuery(router.query.q as string);
      performSearch(router.query.q as string)}
  }, [router.query.q]);

<<<<<<< HEAD
  useEffect(() => {
    const filtered = searchResults.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setResults(filtered);
  }, [searchTerm, selectedCategory]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
=======
  const performSearch = (query: string) => {
    setIsLoading(true);
    try {
      // Simulate search functionality
      // In a real implementation, this would call your search API
      const mockResults = [
  {
          title: 'AI Services',
          description:
            'Cutting-edge artificial intelligence solutions for your business',
          url: '/services/ai-services',
          type: 'service' }, {
          title: 'IT Services',
          description:
            'Comprehensive information technology services and support',
          url: '/services/it-services',
          type: 'service' }, {
          title: 'Micro SaaS Solutions',
          description:
            'Scalable software as a service solutions for modern businesses',
          url: '/services/micro-saas',
          type: 'service' }, {
          title: 'About Zion Tech Group',
          description: 'Learn more about our company, mission, and team',
          url: '/about',
          type: 'page' }, {
          title: 'Contact Us',
          description:
            'Get in touch with our team for consultation and support',
          url: '/contact',
          type: 'page' } ].filter(
        result =>
          result.title.toLowerCase().includes(query.toLowerCase()) ||
          result.description.toLowerCase().includes(query.toLowerCase())
      );

      setSearchResults(mockResults)} catch (error) {
      console.error('Search error: ', error)} finally {
      setIsLoading(false)}
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)}
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case 'service':
        return <Zap className="w-5 h-5 text-blue-600" />;
      case 'page':
        return <FileText className="w-5 h-5 text-green-600" />;
      default:
        return <Globe className="w-5 h-5 text-gray-600" />}
  };

  return (
    <Layout
      title="Search - Zion Tech Group"
<<<<<<< HEAD
      description="Search our comprehensive collection of services, articles, and resources."
      keywords="search, services, articles, resources, technology"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
=======
      description="Search our website for services, solutions, and resources."
      keywords="search, find, services, solutions, resources"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Search <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Results</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Find exactly what you're looking for in our comprehensive collection of services and resources.
              </p>
=======
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Search Results
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Find exactly what you're looking for
              </p>
              
              {/* Search Form */}
              <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search services, solutions, resources..."
                    className="w-full pl-12 pr-4 py-4 text-lg bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Search
                  </button>
                </div>
              </form>
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Search Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSearch} className="mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for services, articles, or resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </form>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </section>

          {/* Search Results */}, {router.query.q && (
            <div className="mb-6">
              <p className="text-gray-600">
                {isLoading
                  ? 'Searching...'
                  : `Found ${searchResults.length} results for "${router.query.q}"`}
              </p>
            </div>
          )}, {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Searching...</p>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="space-y-6">
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm hover: shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      {getIconForType(result.type)}
                    </div>
                    <div className="flex-1">
                      <Link href={result.url} className="group">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover: text-blue-600 transition-colors mb-2">
                          {result.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {result.description}
                        </p>
                        
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{new Date(result.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <Link
                        href={result.url}
                        className="ml-4 flex items-center text-blue-600 hover:text-blue-800 font-medium group-hover:translate-x-1 transition-transform"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>

              {results.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search terms or filters.</p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                    }}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Clear All Filters
                  </button>
                </div>
=======
        {/* Search Results */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {router.query.q && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Search results for "{router.query.q}"
                  </h2>
                  <p className="text-gray-600">
                    {isLoading ? 'Searching...' : `${results.length} result${results.length !== 1 ? 's' : ''} found`}`
                  </p>
                </motion.div>
              )}
              {isLoading ? (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  <p className="mt-4 text-gray-600">Searching...</p>
                </div>
              ) : results.length > 0 ? (
                <div className="space-y-6">
                  {results.map((result, index) => {
                    const IconComponent = result.icon;
                    return (
                      <motion.div
                        key={result.id}
                        className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="text-xl font-bold text-gray-900">
                                {result.title}
                              </h3>
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                                {result.type}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-4">
                              {result.description}
                            </p>
                            <a
                              href={result.href}
                              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              ) : router.query.q ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                >
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    No results found;
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any results for "{router.query.q}". Try searching with different keywords.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setResults(searchResults);
                      router.push('/search');
                    }}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Clear Search
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                >
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Start your search
                  </h3>
                  <p className="text-gray-600">
                    Enter a search term above to find services, solutions, and resources.
                  </p>
                </motion.div>
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
              )}
            </div>
          </div>
        </section>
<<<<<<< HEAD

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Still Can't Find What You're Looking For?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our team is here to help. Contact us for personalized assistance and recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold"
                >
                  Browse All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )}
