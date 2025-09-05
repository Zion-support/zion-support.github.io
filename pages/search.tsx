import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Search, ArrowRight, FileText, Users, Briefcase, Building2 } from 'lucide-react';
import Layout from '../components/Layout';

// Mock search results data;
const searchResults = [
  {
    id: 1,
    title: "AI Services",
    description: "Cutting-edge artificial intelligence solutions including machine learning, natural language processing, and computer vision.",
    type: "Service",
    href: "/ai-services",
    icon: Briefcase
  },
  {
    id: 2,
    title: "IT Services",
    description: "Comprehensive information technology services including cloud infrastructure, cybersecurity, and system administration.",
    type: "Service",
    href: "/it-services",
    icon: Briefcase
  },
  {
    id: 3,
    title: "Micro SaaS",
    description: "Scalable software as a service solutions including AI-powered tools, blockchain applications, and business automation.",
    type: "Service",
    href: "/micro-saas",
    icon: Briefcase
  },
  {
    id: 4,
    title: "About Us",
    description: "Learn about Zion Tech Group's mission, values, and the expert team behind our innovative technology solutions.",
    type: "Page",
    href: "/about",
    icon: Building2
  },
  {
    id: 5,
    title: "Our Team",
    description: "Meet the talented professionals who make Zion Tech Group a leader in technology consulting and development.",
    type: "Page",
    href: "/team",
    icon: Users
  },
  {
    id: 6,
    title: "Blog",
    description: "Stay updated with the latest insights, trends, and best practices in AI, cloud computing, and technology.",
    type: "Resource",
    href: "/blog",
    icon: FileText
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-55cb
  }
];

export default function SearchPage() {
  const router = useRouter();
<<<<<<< HEAD
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState(searchResults);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (router.query.q) {
      setSearchQuery(router.query.q as string);
      performSearch(router.query.q as string);
    }
  }, [router.query.q]);

  const performSearch = (query: string) => {
    setIsLoading(true);
    
    // Simulate search delay
    setTimeout(() => {
      const filteredResults = searchResults.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.type.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
      setIsLoading(false);
    }, 500);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <Layout
      title="Search - Zion Tech Group"
      description="Search our website for services, solutions, and resources."
      keywords="search, find, services, solutions, resources"
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
            </motion.div>
          </div>
        </section>

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
                    )
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
                    No results found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any results for "{router.query.q}". Try searching with different keywords.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setResults(searchResults);
                      router.push('/search')
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
              )}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-55cb
