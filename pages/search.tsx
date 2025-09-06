

=======

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import React, { useState } from 'react';

import React, { useState, useEffect } from 'react',

import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';

=======
import {

  Search,
  Filter,
  ArrowRight,
  Clock,
  Star,
  FileText,
  Code,
  Database,
  Cloud,
  Shield,
  Brain,
  Users,
  Settings,
  Globe,
  CheckCircle,
  X,
  ChevronDown,
  ChevronUp;


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
} from 'lucide-react';
const searchResults = [
  {
    id: 1
    title: 'AI Development Services'
    description: 'Comprehensive AI development solutions including machine learning, computer vision, and natural language processing.'
    url: '/ai-services'
    category: 'Services'
    type: 'Page'
    icon: Brain
    rating: 4.9
    lastUpdated: '2024-01-15'
  }
  {
    id: 2
    title: 'Cloud Infrastructure Setup'
    description: 'Complete guide to setting up scalable cloud infrastructure for your applications.'
    url: '/guides'
    category: 'Guides'
    type: 'Article'
    icon: Cloud
    rating: 4.8
    lastUpdated: '2024-01-10'
  }
  {
    id: 3
    title: 'Cybersecurity Best Practices'
    description: 'Essential cybersecurity practices to protect your applications and data.'
    url: '/guides'
    category: 'Guides'
    type: 'Article'
    icon: Shield
    rating: 4.7
    lastUpdated: '2024-01-08'
  }
  {
    id: 4
    title: 'Database Optimization'
    description: 'Learn database design principles and optimization techniques.'
    url: '/guides'
    category: 'Guides'
    type: 'Article'
    icon: Database
    rating: 4.8
    lastUpdated: '2024-01-05'
  }
  {
    id: 5
    title: 'Our Team'
    description: 'Meet our talented team of experts who are passionate about technology and innovation.'
    url: '/team'
    category: 'Company'
    type: 'Page'
    icon: Users
    rating: 4.9
    lastUpdated: '2024-01-12'
  }
  {
    id: 6
    title: 'Contact Us'
    description: 'Get in touch with our team for project inquiries and support.'
    url: '/contact'
    category: 'Company'
    type: 'Page'
    icon: Settings
    rating: 4.9
    lastUpdated: '2024-01-14'
  }
];
const categories = [
  { name: 'All', count: searchResults.length }
  { name: 'Services', count: 1 }
  { name: 'Guides', count: 3 }
  { name: 'Company', count: 2 }
];
const filters = [
  { name: 'Pages', count: 3 }
  { name: 'Articles', count: 3 }
  { name: 'Recent', count: 4 }
  { name: 'Popular', count: 2 }
];

=======
export default function SearchPage() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [showFilters, setShowFilters] = useState(false);


  const filteredResults = searchResults && searchResults.filter(result => {;
    const matchesQuery = result && result.title.toLowerCase().includes(searchQuery && searchQuery.toLowerCase()) ||;
                        result && result.description.toLowerCase().includes(searchQuery && searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || result && result.category === selectedCategory;
    const matchesFilter = selectedFilter === 'All' || result && result.type === selectedFilter;


    return matchesQuery && matchesCategory && matchesFilter;
  });

  return (

      <div className="min-h-screen bg-gray-50">
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

    <Layout>;
      <Head>;
        <title>Search - Zion Tech Group</title>;
        <meta name="description" content="Search our website for information, guides, services, and more." />;
      </Head>;
      <div className="min-h-screen bg-gray-50">;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0 && 0.8 }}>;
              <h1 className="text-5xl font-bold mb-6">;
                Search Our Website;
              </h1>;
              <p className="text-xl mb-8 text-blue-100">;
                Find the information you need quickly and easily.;
              </p>;


              {/* Search Bar */}
                    <button
                      key={filter && filter.name}
                      onClick={() => setSelectedFilter(filter && filter.name)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${;
                        selectedFilter === filter && filter.name;
                          ? 'bg-blue-600 text-white';
                          : 'bg-white text-gray-700 hover:bg-gray-100';
                      }`}

                      {filter.name} ({filter.count})
                    </button>

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
))}
                </div>
              </motion.div>
            )}
          </div>
        </section>
                    >;
                      {filter && filter.name} ({filter && filter.count});
                    </button>;
                  ))}
                </div>;
              </motion && motion.div>;
            )}
          </div>;
        </section>;
        {/* Search Results */}
        <section className="py-16">;
          <div className="container mx-auto px-4">;
            {filteredResults && filteredResults.length > 0 ? (;
              <div className="space-y-6">;
                {filteredResults && filteredResults.map((result, index) => (;
                  <motion&& motion.div
                    key={result && result.id}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}

                    transition={{ duration: 0.5, delay: index * 0.1 }}

=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <result.icon className="w-5 h-5 text-blue-600 mr-2" />
                          <span className="text-sm text-gray-500">{result.category}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-500">{result.type}</span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          <Link

                            href={result.url}
                            className="hover:text - blue - 600 transition - colors";
                          >;
                            {result.title}

                      </Link>

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    category: 'all',
    status: 'all',
    priceRange: 'all',

=======
          switch (filters.priceRange) {
            case 'under-500':
              matchesPrice = price < 500,
              break,
            case '500-1000':
              matchesPrice = price >= 500 && price < 1000,
              break,
            case '1000-2500':
              matchesPrice = price >= 1000 && price < 2500,
              break,
            case 'over-2500':
              matchesPrice = price >= 2500,
              break
          }
              matchesPrice = price >= 2500;
              break;}

        }
        
        return matchesSearch && matchesCategory && matchesStatus && matchesTechnology && matchesPrice
      }),

      // Sort results
      const _sortedResults = results.sort(_(a, _b) => {_switch (sortBy) {
          case 'relevance':
            return b.relevance - a.relevance,
          case 'price-low':
            return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')),
          case 'price-high':
            return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, '')),
          case 'name':
            return a.title.localeCompare(b.title),
          case 'status':
          case 'name':
            return a.title.localeCompare(b.title),
          case 'status':

            return a.status.localeCompare(b.status),
          default: return 0
        }
      }),

      setSearchResults(sortedResults),
      setIsSearching(false)
    }, 500)
  },

  // Handle search on Enter key
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      performSearch()
    }
};
  // Update search when filters change
  useEffect(() => {
    if (searchTerm.trim()) {
      performSearch()
    }
}, [filters, sortBy]);
  // Clear all filters
  const clearFilters = () => {
    setFilters({
      category: 'all',
      status: 'all',
      priceRange: 'all',
      technology: 'all'
});
    setSortBy('relevance')
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Search | Zion Tech Group</title>
        <meta name="description" content="Search across all AI and technology services, solutions, and resources at Zion Tech Group. Find exactly what you need with our advanced search and filtering." />
        <meta property="og:title" content="Search | Zion Tech Group" />
        <meta property="og:description" content="Advanced search across all services and solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/search" />
      </Head>
      <SmartHeader />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Search Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              Find the perfect AI and technology solutions for your business needs. 
              Search across our comprehensive service catalog with advanced filtering options.
            </p>
          </motion.div>
        </div>
      </section>
{/* Search Interface */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            {/* Search Bar */}
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-6">
              <div className="flex-1 max-w-2xl">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-6 h-6" />

                  <input
                    type="text"
                    placeholder="Search for services, technologies, or solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all text-lg"
                  />
                  <button

                    onClick={performSearch}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-md text-white font-medium transition-colors"
                  >
                    Search
                  </button>
                </div>
              </div>
{/* View Mode Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/10 text-white/60 hover:bg-white/20'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/10 text-white/60 hover:bg-white/20'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
            {/* Filters and Sort */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-colors"
                >
                  <Sliders className="w-4 h-4" />
                  Filters
                  {Object.values(filters).some(f => f !== 'all') && (
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                  )}
                </button>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                >
                  <option value="relevance">Sort by Relevance</option>
                  <option value="price-low">Sort by Price: Low to High</option>
                  <option value="price-high">Sort by Price: High to Low</option>
                  <option value="name">Sort by Name</option>
                  <option value="status">Sort by Status</option>
                </select>
              </div>
              {Object.values(filters).some(f => f !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear Filters
                </button>
              )}
            </div>

            {/* Expanded Filters */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
className="mt-6 pt-6 border-t border-white/20"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-white font-medium mb-2">Category</label>
                    <select
                      value={filters.category}
                      onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                    >
                      {categories.map(category => (
                        <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                          {category.icon} {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
{/* Status Filter */}
                  <div>
                    <label className="block text-white font-medium mb-2">Status</label>
                    <select
                      value={filters.status}
                      onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                    >
                      {statuses.map(status => (
                        <option key={status.id} value={status.id} className="bg-slate-800 text-white">
                          {status.icon} {status.name}
                        </option>
                      ))}
                    </select>
                  </div>
{/* Price Range Filter */}
                  <div>
                    <label className="block text-white font-medium mb-2">Price Range</label>
                    <select
                      value={filters.priceRange}
                      onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                    >
                      {priceRanges.map(range => (
                        <option key={range.id} value={range.id} className="bg-slate-800 text-white">
                          {range.icon} {range.name}
                        </option>
                      ))}
                    </select>
                  </div>
{/* Technology Filter */}
                  <div>
                    <label className="block text-white font-medium mb-2">Technology</label>
                    <select
                      value={filters.technology}
                      onChange={(e) => setFilters(prev => ({ ...prev, technology: e.target.value }))}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all"
                    >
                      {technologies.map(tech => (
                        <option key={tech.id} value={tech.id} className="bg-slate-800 text-white">
                          {tech.icon} {tech.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>

            )}
          </div>
        </div>
      </section>


      {/* Search Results */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Results Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {searchTerm ? `Search Results for "${searchTerm}"` : 'All Services'}
            </h2>
            <p className="text-white/60">
              {isSearching ? 'Searching...' : `${searchResults.length} services found`}
              {Object.values(filters).some(f => f !== 'all') && ' (filtered)'}
=======
        </div>
      </section>

      {/* Search Results */}
      <section className='px-6 pb-20'>
        <div className='max-w-7xl mx-auto'>
          {/* Results Header */}
          <div className='mb-8'>
            <h2 className='text-3xl font-bold text-white mb-2'>
              {searchTerm
                ? `Search Results for "${searchTerm}"`
                : 'All Services'}
            </h2>
            <p className='text-white/60'>
              {isSearching
                ? 'Searching...'
                : `${searchResults.length} services found`}              {Object.values(filters).some(f => f !== 'all') && ' (filtered)'}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            </p>
          </div>
{/* Loading State */}
          {isSearching && (

          )}
          {/* No Results */}
          {!isSearching && searchTerm && searchResults.length === 0 && (

                Clear All Filters
              </button>
            </div>
          )}
{/* Search Results */}
          {!isSearching && searchResults.length > 0 && (

                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`group relative ${

                            </div>
                          ))}
                        </div>
                      </div>

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
</Link>
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                    </div>

                  </motion.div>
                ))}
              </div>

=======

            ) : (
              <motion.div
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            ) : (
              <motion.div

                className="text-center py-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8 }}>;
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />;
                <h3 className="text-xl font-semibold text-gray-900 mb-2">;
                  No results found;
                </h3>;
                <p className="text-gray-600 mb-6">;
                  Try adjusting your search terms or filters.;
                </p>;
                <button
                  onClick={() => {;
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setSelectedFilter('All');
                  }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors";
                >;
                  Clear Filters;
                </button>;
              </motion && motion.div>;
            )}

          </div>;
        </section>;


        {/* Popular Searches */}
        <section className="py-16 bg-white">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
=======
              transition={{ duration: 0 && 0.8 }}>;
              <h2 className="text-3xl font-bold text-gray-900 mb-4">;
                Popular Searches;
              </h2>;
              <p className="text-gray-600 max-w-2xl mx-auto">;
                Common searches to help you find what you're looking for.;
              </p>;
            </motion && motion.div>;


            <div className="flex flex-wrap gap-3 justify-center">;
              {[;
                'AI Development',;
                'Cloud Services',;
                'Cybersecurity',;
                'Database Design',;
                'Mobile Apps',;
                'Web Development',;
                'IT Support',;
                'Consulting';
              ].map((term, index) => (;
                <motion&& motion.button
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors";
                  initial={{ opacity: 0, scale: 0 && 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                >;
                  {term}
                </motion && motion.button>;
              ))}
                          </Link>;
                        </h3>;
                        <p className="text - gray - 600 mb - 4">;
                          {result.description}
                        </p>;
                        <div className="flex items - center text - sm text - gray - 500">;
                          <Clock className="w - 4 h - 4 mr - 1" />;
                          <span className="mr - 4">Updated {result.last_updated}</span>;
                          <div className="flex items - center">;
                            <Star className="w - 4 h - 4 text - yellow - 400 fill - current mr - 1" />;
                            <span>{result.rating}</span>;
                          </div>;
                        </div>;
                      </div>;
                      <Link;
                        href={result.url}
                        className="ml - 4 text - blue - 600 hover:text - blue - 700 transition - colors";
                      >;
                        <ArrowRight className="w - 5 h - 5" />;
</Link>;
                    </div>;
                  </motion.div>))}
              </div>) : (
              <motion.div;
                className="text - center py - 16";
                initial={{ opacity: 0, coordinate_y: 30 }}
                animate={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.8 }}
              >;
                <Search className="w - 16 h - 16 text - gray - 400 mx - auto mb - 4" />;
                <h3 className="text - xl font - semibold text - gray - 900 mb - 2">;
                  No results found;
                </h3>;
                <p className="text - gray - 600 mb - 6">;
                  Try adjusting your search terms or filters.;
                </p>;
                <button;
                  on_click={() => {
                    setSearchQuery ('');
                    setSelectedCategory ('All');
                    setSelectedFilter ('All');
                  }}
                  className="bg - blue - 600 text - white px - 6 py - 2 rounded - lg hover:bg - blue - 700 transition - colors";
                >;
                  Clear Filters;
                </button>;
              </motion.div>)}
          </div>;
        </section>;
        {/* Popular Searches */}
        <section className="py - 16 bg - white">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center mb - 12";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h2 className="text - 3xl font - bold text - gray - 900 mb - 4">;
                Popular Searches;
              </h2>;
              <p className="text - gray - 600 max - w-2xl mx - auto">;
                Common searches to help you find what you're looking for.;
              </p>;
            </motion.div>;
            <div className="flex flex - wrap gap - 3 justify - center">;
              {[;
                'AI Development',
                'Cloud Services',
                'Cybersecurity',
                'Database Design',
                'Mobile Apps',
                'Web Development',
                'IT Support',
                'Consulting';
              ].map ((term, index) => (
                <motion.button;
                  key={term}
                  on_click={() => setSearchQuery (term)}
                  className="px - 4 py - 2 bg - gray - 100 text - gray - 700 rounded - full hover:bg - blue - 100 hover:text - blue - 700 transition - colors";
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >;
                  {term}
                </motion.button>))}
            </div>;
          </div>;
        </section>;
      </div>;

  );
}

}

            </AnimatePresence>
          )}
          {/* Initial State - Show all services when no search */}
          {!isSearching && !searchTerm && (

                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
<SmartFooter />
    </div>

}
}


  )
}



)
}

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/automation-improvements-final
=======
)
}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
    </Layout>);
}  );
}
);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
