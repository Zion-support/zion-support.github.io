
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
import React, { useState } from 'react';
import Head from 'next/head';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import {
  Search
  Filter
  ArrowRight
  Clock
  Star
  FileText
  Code
  Database
  Cloud
  Shield
  Brain
  Users
  Settings
  Globe
  CheckCircle
  X
  ChevronDown
  ChevronUp
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
export default function SearchPage() {
import {
  Search,
  Filter,
  Grid,
  List,
  ArrowRight,
  ExternalLink,
  Brain,
  Shield,
  Rocket,
  Cpu,
  Database,
  Atom,
  Target,
  Star,
  Sparkles,
  Zap,
  Users,
  Award,
  Clock,
  CheckCircle,
  Globe,
  Code,
  Server,
  TrendingUp,
  BarChart3,
  Cloud,
  Network,
  Lightbulb,
  Flame,
  Zap as ZapIcon,
  X,
  Sliders,
  SortAsc,
  SortDesc,;
} from 'lucide-react';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';

import { 
  Search, Filter, Grid, List, ArrowRight, ExternalLink, 
  Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server;
  TrendingUp, BarChart3, Cloud, Network, Lightbulb, Flame, Zap as ZapIcon;
  X, Sliders, SortAsc, SortDesc
} from 'lucide-react';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';
export default function SearchPage() {
import {;
  Search,;
  Filter,;
  ArrowRight,;
  Clock,;
  Star,;
  FileText,;
  Code,;
  Database,;
  Cloud,;
  Shield,;
  Brain,;
  Users,;
  Settings,;
  Globe,;
  CheckCircle,;
  X,;
  ChevronDown,;
  ChevronUp;
} from 'lucide-react';

const searchResults = [;
  {;
    id: 1,;
    title: 'AI Development Services',;
    description: 'Comprehensive AI development solutions including machine learning, computer vision, and natural language processing.',;
    url: '/ai-services',;
    category: 'Services',;
    type: 'Page',;
    icon: Brain,;
    rating: 4 && 4.9,;
    lastUpdated: '2024-01-15';
  },;
  {;
    id: 2,;
    title: 'Cloud Infrastructure Setup',;
    description: 'Complete guide to setting up scalable cloud infrastructure for your applications.',;
    url: '/guides',;
    category: 'Guides',;
    type: 'Article',;
    icon: Cloud,;
    rating: 4 && 4.8,;
    lastUpdated: '2024-01-10';
  },;
  {;
    id: 3,;
    title: 'Cybersecurity Best Practices',;
    description: 'Essential cybersecurity practices to protect your applications and data.',;
    url: '/guides',;
    category: 'Guides',;
    type: 'Article',;
    icon: Shield,;
    rating: 4 && 4.7,;
    lastUpdated: '2024-01-08';
  },;
  {;
    id: 4,;
    title: 'Database Optimization',;
    description: 'Learn database design principles and optimization techniques.',;
    url: '/guides',;
    category: 'Guides',;
    type: 'Article',;
    icon: Database,;
    rating: 4 && 4.8,;
    lastUpdated: '2024-01-05';
  },;
  {;
    id: 5,;
    title: 'Our Team',;
    description: 'Meet our talented team of experts who are passionate about technology and innovation.',;
    url: '/team',;
    category: 'Company',;
    type: 'Page',;
    icon: Users,;
    rating: 4 && 4.9,;
    lastUpdated: '2024-01-12';
  },;
  {;
    id: 6,;
    title: 'Contact Us',;
    description: 'Get in touch with our team for project inquiries and support.',;
    url: '/contact',;
    category: 'Company',;
    type: 'Page',;
    icon: Settings,;
    rating: 4 && 4.9,;
    lastUpdated: '2024-01-14';
  }
];

const categories = [;
  { name: 'All', count: searchResults && searchResults.length },;
  { name: 'Services', count: 1 },;
  { name: 'Guides', count: 3 },;
  { name: 'Company', count: 2 }
];

const filters = [;
  { name: 'Pages', count: 3 },;
  { name: 'Articles', count: 3 },;
  { name: 'Recent', count: 4 },;
  { name: 'Popular', count: 2 }
];

export default function SearchPage() {;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const filteredResults = searchResults.filter(result => {
    const matchesQuery = result.title.toLowerCase().includes(searchQuery.toLowerCase()) |
                        result.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' |result.category === selectedCategory;
    const matchesFilter = selectedFilter === 'All' |result.type === selectedFilter;
    return matchesQuery && matchesCategory && matchesFilter;
  });
  return (
    <Layout>
      <Head>
        <title>Search - Zion Tech Group</title>
        <meta name="description" content="Search our website for information, guides, services, and more." />
      </Head>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-6">
                Search Our Website
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Find the information you need quickly and easily.
              </p>
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">;
                <div className="relative">;
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Filters Section */}
        <section className="py-8 bg-white border-b">;
          <div className="container mx-auto px-4">;
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">;
              <div className="flex flex-wrap gap-4">;
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors";
                >;
                  <Filter className="w-4 h-4 mr-2" />;
                  Filters;
                  {showFilters ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
                </button>
                {categories.map((category) => (
                  <button
                    key={category.name}
                    on_click={() => setSelectedCategory (category.name)}
                    className={`px - 4 py - 2 rounded - lg transition - colors ${
                      selected_category === category.name;
                        ? 'bg - blue - 600 text - white';
                        : 'bg - gray - 100 text - gray - 700 hover:bg - gray - 200';
                    }`}

                  >
                    {term}
                  </button>
                ))}
              </div>

              <div className="text-sm text-gray-600">
                {filteredResults.length} results found
              </div>
            </div>
            {showFilters && (
              <motion.div
                className="mt-4 p-4 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0 && 0.3 }}>;
                <div className="flex flex-wrap gap-4">;
                  {filters && filters.map((filter) => (;
                    <button
                      key={filter && filter.name}
                      onClick={() => setSelectedFilter(filter && filter.name)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${;
                        selectedFilter === filter && filter.name;
                          ? 'bg-blue-600 text-white';
                          : 'bg-white text-gray-700 hover:bg-gray-100';
                      }`}
                    >
                      {filter.name} ({filter.count})
                    </button>
                  ))}
                </div>
                  ))}
                </div>
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
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <result.icon className="w-5 h-5 text-blue-600 mr-2" />
                          <span className="text-sm text-gray-500">{result.category}</span>
                          <span className="mx-2 text-gray-300"></span>
                          <span className="text-sm text-gray-500">{result.type}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          <Link
                            href={result.url}
                            className="hover:text - blue - 600 transition - colors";
                          >;
                            {result.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {result.description}
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          <span className="mr-4">Updated {result.lastUpdated}</span>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                            <span>{result.rating}</span>
                          </div>
                        </div>
                      </div>
                      <Link
                        href={result.url}
                        className="ml-4 text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                  <input
                    type="text"
                    placeholder="Search for services, technologies, or solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-cyan-400/50 focus:bg-white/15 transition-all text-lg"
                  />
                  <button
                    key={category && category.name}
                    onClick={() => setSelectedCategory(category && category.name)}
                    className={`px-4 py-2 rounded-lg transition-colors ${;
                      selectedCategory === category && category.name;
                        ? 'bg-blue-600 text-white';
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200';
                    }`}
                  >;
                    {category && category.name} ({category && category.count});
                  </button>;
                ))}
              </div>;

              <div className="text-sm text-gray-600">;
                {filteredResults && filteredResults.length} results found;
              </div>;
            </div>;

            {showFilters && (;
              <motion&& motion.div
                className="mt-4 p-4 bg-gray-50 rounded-lg"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0 && 0.3 }}>;
                <div className="flex flex-wrap gap-4">;
                  {filters && filters.map((filter) => (;
                    <button
                      key={filter && filter.name}
                      onClick={() => setSelectedFilter(filter && filter.name)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${;
                        selectedFilter === filter && filter.name;
                          ? 'bg-blue-600 text-white';
                          : 'bg-white text-gray-700 hover:bg-gray-100';
                      }`}
                    >;
                      {filter && filter.name} ({filter && filter.count});
                    </button>;
                  ))}
                </div>;
              </motion && motion.div>;
            )}
          </div>
        </div>
      </section>

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
</Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                    transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}>;
                    <div className="flex items-start justify-between">;
                      <div className="flex-1">;
                        <div className="flex items-center mb-2">;
                          <result && result.icon className="w-5 h-5 text-blue-600 mr-2" />;
                          <span className="text-sm text-gray-500">{result && result.category}</span>;
                          <span className="mx-2 text-gray-300"></span>;
                          <span className="text-sm text-gray-500">{result && result.type}</span>;
                        </div>;

                        <h3 className="text-xl font-bold text-gray-900 mb-2">;
                          <Link
                            href={result && result.url}
                            className="hover:text-blue-600 transition-colors">;
                            {result && result.title}
                          </Link>;
                        </h3>;

                        <p className="text-gray-600 mb-4">;
                          {result && result.description}
                        </p>;

                        <div className="flex items-center text-sm text-gray-500">;
                          <Clock className="w-4 h-4 mr-1" />;
                          <span className="mr-4">Updated {result && result.lastUpdated}</span>;
                          <div className="flex items-center">;
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />;
                            <span>{result && result.rating}</span>;
                          </div>;
                        </div>;
                      </div>;

                      <Link
                        href={result && result.url}
                        className="ml-4 text-blue-600 hover:text-blue-700 transition-colors">;
                        <ArrowRight className="w-5 h-5" />;
                      </Link>;
                    </div>;
                  </motion && motion.div>;
                ))}
              </div>;
            ) : (;
              <motion&& motion.div
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
          </div>
        </section>
        {/* Popular Searches */}
        <section className="py-16 bg-white">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}>;
              <h2 className="text-3xl font-bold text-gray-900 mb-4">;
                Popular Searches;
              </h2>;
              <p className="text-gray-600 max-w-2xl mx-auto">;
                Common searches to help you find what you're looking for.;
              </p>;
            </motion && motion.div>;

            <div className="flex flex-wrap gap-3 justify-center">
              {[
                'AI Development'
                'Cloud Services'
                'Cybersecurity'
                'Database Design'
                'Mobile Apps'
                'Web Development'
                'IT Support'
                'Consulting'
              ].map((term, index) => (
                <motion.button
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
    </Layout>;
  );
}  )
}
  )
}
            </AnimatePresence>
          )}

          {/* Initial State - Show all services when no search */}
          {!isSearching && !searchTerm && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
                <Search className="w-12 h-12 text-white/40" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">Start Your Search</h3>
              <p className="text-white/60 mb-6">
                Enter keywords above to find the perfect technology solutions for your business
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="text-sm text-white/40">Popular searches:</span>
                {['AICybersecurityQuantum ComputingEdge Computing'].map((term) => (
                  <button
                    key={term}
                    onClick={() => {
                      setSearchTerm(term);
                      performSearch()
                    }}
                    className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <SmartFooter />
    </div>
  )
}
)
}
    </Layout>);
}  );
}
);
}
