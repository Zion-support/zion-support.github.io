

import React, { useState } from 'react';
import React, { useState, useEffect } from 'react',

import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';

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

                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

                  <input
                    type="text"
                    placeholder="Search for services, guides, articles..."
                    value={searchQuery}

              >
                <div className="flex flex-wrap gap-4">
                  {filters.map((filter) => (

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

                  ))}                </div>
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
                  >;
                    {category.name} ({category.count});
                  </button>))}
              </div>;
              <div className="text - sm text - gray - 600">;
                {filtered_results.length} results found;
              </div>;
            </div>;
            {show_filters && (
              <motion.div;
                className="mt - 4 p - 4 bg - gray - 50 rounded - lg";
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >;
                <div className="flex flex - wrap gap - 4">;
                  {filters.map ((filter) => (
                    <button;
                      key={filter.name}
                      on_click={() => setSelectedFilter (filter.name)}
                      className={`px - 3 py - 1 rounded - full text - sm transition - colors ${
                        selected_filter === filter.name;
                          ? 'bg - blue - 600 text - white';
                          : 'bg - white text - gray - 700 hover:bg - gray - 100';
                      }`}
                    >;
                      {filter.name} ({filter.count});
                    </button>))}
                </div>;
              </motion.div>)}
          </div>;
        </section>;
        {/* Search Results */}
        <section className="py - 16">;
          <div className="container mx - auto px - 4">;
            {filtered_results.length > 0 ? (
              <div className="space - y-6">;
                {filtered_results.map ((result, index) => (
                  <motion.div;
                    key={result.id}
                    className="bg - white rounded - lg shadow - sm border border - gray - 200 p - 6 hover:shadow - md transition - shadow";
                    initial={{ opacity: 0, coordinate_y: 20 }}
                    animate={{ opacity: 1, coordinate_y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}

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

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    category: 'all',
    status: 'all',
    priceRange: 'all',

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

                    </div>

                  </motion.div>
                ))}
              </div>

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
