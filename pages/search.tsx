import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Search, FileText, ExternalLink, ArrowRight, Clock, User } from 'lucide-react';

const searchResults = [
  {
    id: 1,
    title: 'AI Services',
    description: 'Comprehensive AI solutions for your business needs',
    url: '/ai-services',
    type: 'Service',
    icon: FileText
  },
  {
    id: 2,
    title: 'IT Services',
    description: 'Professional IT support and consulting services',
    url: '/it-services',
    type: 'Service',
    icon: FileText
  },
  {
    id: 3,
    title: 'About Us',
    description: 'Learn about our company and mission',
    url: '/about',
    type: 'Page',
    icon: FileText
  },
  {
    id: 4,
    title: 'Contact',
    description: 'Get in touch with our team',
    url: '/contact',
    type: 'Page',
    icon: FileText
  },
  {
    id: 5,
    title: 'Blog',
    description: 'Latest news and insights from our team',
    url: '/blog',
    type: 'Page',
    icon: FileText
  }
];

export default function SearchPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (router.query.q) {
      setSearchTerm(router.query.q);
      performSearch(router.query.q);
    }
  }, [router.query.q]);

  const performSearch = async (query) => {
    if (!query) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const filteredResults = searchResults.filter(result =>
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
      setIsLoading(false);
    }, 500);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <>
      <Head>
        <title>Search - Zion Tech Group</title>
        <meta name="description" content="Search our website for services, pages, and information" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Search</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Find exactly what you're looking for on our website.
              </p>
              
              {/* Search Form */}
              <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for services, pages, or information..."
                    className="w-full px-6 py-4 pr-12 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Search className="w-6 h-6" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Search Results */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
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
                  {isLoading ? 'Searching...' : `${results.length} result${results.length !== 1 ? 's' : ''} found`}
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
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <IconComponent className="w-8 h-8 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            <Link
                              href={result.url}
                              className="hover:text-blue-600 transition-colors"
                            >
                              {result.title}
                            </Link>
                          </h3>
                          <p className="text-gray-600 mb-3">{result.description}</p>
                          <div className="flex items-center text-sm text-gray-500">
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full mr-3">
                              {result.type}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              Updated recently
                            </span>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <Link
                            href={result.url}
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : router.query.q ? (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any results for "{router.query.q}". Try different keywords or check your spelling.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Contact Support
                </Link>
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Start your search</h3>
                <p className="text-gray-600">
                  Enter a search term above to find services, pages, and information on our website.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}