import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Filter, ArrowRight, Clock, Star, Tag, FileText, Users, Briefcase } from 'lucide-react';
import Layout from '../components/Layout';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'page' | 'service' | 'solution' | 'resource' | 'team';
  category: string;
  tags: string[];
  lastUpdated?: string;
  rating?: number;
}

export default function SearchPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  // Mock search results - in a real app, this would come from an API
  const mockResults: SearchResult[] = [
    {
      id: '1',
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions including machine learning, natural language processing, and computer vision.',
      url: '/ai-services',
      type: 'service',
      category: 'Services',
      tags: ['AI', 'Machine Learning', 'Automation'],
      lastUpdated: '2024-01-15',
      rating: 4.8
    },
    {
      id: '2',
      title: 'Cloud Migration Solutions',
      description: 'Comprehensive cloud migration services to help you move your infrastructure to the cloud securely and efficiently.',
      url: '/solutions/cloud-migration',
      type: 'solution',
      category: 'Solutions',
      tags: ['Cloud', 'Migration', 'AWS', 'Azure'],
      lastUpdated: '2024-01-10',
      rating: 4.9
    },
    {
      id: '3',
      title: 'Cybersecurity Services',
      description: 'Advanced cybersecurity solutions to protect your business from threats and ensure compliance.',
      url: '/services/cybersecurity',
      type: 'service',
      category: 'Services',
      tags: ['Security', 'Compliance', 'Protection'],
      lastUpdated: '2024-01-12',
      rating: 4.7
    },
    {
      id: '4',
      title: 'Healthcare Industry Solutions',
      description: 'Specialized technology solutions for healthcare organizations including HIPAA compliance and patient data management.',
      url: '/industries/healthcare',
      type: 'solution',
      category: 'Industries',
      tags: ['Healthcare', 'HIPAA', 'Compliance', 'Patient Data'],
      lastUpdated: '2024-01-08',
      rating: 4.9
    },
    {
      id: '5',
      title: 'Our Team',
      description: 'Meet the expert team of developers, designers, and consultants who make Zion Tech Group a leader in technology solutions.',
      url: '/team',
      type: 'team',
      category: 'Company',
      tags: ['Team', 'Experts', 'Leadership'],
      lastUpdated: '2024-01-05',
      rating: 4.8
    },
    {
      id: '6',
      title: 'White Papers',
      description: 'In-depth research and analysis on the latest technology trends and best practices.',
      url: '/white-papers',
      type: 'resource',
      category: 'Resources',
      tags: ['Research', 'Analysis', 'Trends'],
      lastUpdated: '2024-01-03',
      rating: 4.6
    }
  ];

  useEffect(() => {
    if (router.query.q) {
      setSearchQuery(router.query.q as string);
      performSearch(router.query.q as string);
    }
  }, [router.query.q]);

  const performSearch = (query: string) => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const filteredResults = mockResults.filter(result => 
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        result.description.toLowerCase().includes(query.toLowerCase()) ||
        result.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
      );
      
      setSearchResults(filteredResults);
      setIsLoading(false);
    }, 500);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      performSearch(searchQuery);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service':
        return <Briefcase className="w-4 h-4" />;
      case 'solution':
        return <Tag className="w-4 h-4" />;
      case 'resource':
        return <FileText className="w-4 h-4" />;
      case 'team':
        return <Users className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'service':
        return 'text-blue-600 bg-blue-100';
      case 'solution':
        return 'text-green-600 bg-green-100';
      case 'resource':
        return 'text-purple-600 bg-purple-100';
      case 'team':
        return 'text-orange-600 bg-orange-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const filteredResults = searchResults.filter(result => {
    if (selectedCategory !== 'all' && result.category !== selectedCategory) return false;
    if (selectedType !== 'all' && result.type !== selectedType) return false;
    return true;
  });

  const categories = ['all', ...Array.from(new Set(mockResults.map(r => r.category)))];
  const types = ['all', ...Array.from(new Set(mockResults.map(r => r.type)))];

  return (
    <Layout
      title={`Search Results${searchQuery ? ` for "${searchQuery}"` : ''} - Zion Tech Group`}
      description="Search through our comprehensive library of services, solutions, and resources."
    >
      <div className="min-h-screen bg-gray-50">
        {/* Search Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                {searchQuery ? `Search Results for "${searchQuery}"` : 'Search'}
              </h1>
              
              <form onSubmit={handleSearch} className="relative max-w-2xl">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search services, solutions, resources..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="absolute inset-y-0 right-0 px-6 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
                  >
                    Search
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Category
                    </label>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <label key={category} className="flex items-center">
                          <input
                            type="radio"
                            name="category"
                            value={category}
                            checked={selectedCategory === category}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                          <span className="ml-2 text-sm text-gray-700 capitalize">
                            {category}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Type
                    </label>
                    <div className="space-y-2">
                      {types.map((type) => (
                        <label key={type} className="flex items-center">
                          <input
                            type="radio"
                            name="type"
                            value={type}
                            checked={selectedType === type}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                          <span className="ml-2 text-sm text-gray-700 capitalize">
                            {type}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Search Results */}
            <div className="flex-1">
              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  <span className="ml-3 text-gray-600">Searching...</span>
                </div>
              ) : filteredResults.length > 0 ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600">
                      {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} found
                    </p>
                  </div>

                  {filteredResults.map((result, index) => (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(result.type)} mr-3`}>
                              {getTypeIcon(result.type)}
                              <span className="ml-1 capitalize">{result.type}</span>
                            </span>
                            <span className="text-sm text-gray-500">{result.category}</span>
                          </div>
                          
                          <Link href={result.url} className="group">
                            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                              {result.title}
                            </h3>
                          </Link>
                          
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {result.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-2">
                              {result.tags.map((tag, tagIndex) => (
                                <span
                                  key={tagIndex}
                                  className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              {result.rating && (
                                <div className="flex items-center">
                                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                  {result.rating}
                                </div>
                              )}
                              {result.lastUpdated && (
                                <div className="flex items-center">
                                  <Clock className="w-4 h-4 mr-1" />
                                  {new Date(result.lastUpdated).toLocaleDateString()}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <Link
                          href={result.url}
                          className="ml-4 flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : searchQuery ? (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No results found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any results for "{searchQuery}". Try adjusting your search terms.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSearchResults([]);
                      router.push('/search');
                    }}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Clear search
                  </button>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Start your search
                  </h3>
                  <p className="text-gray-600">
                    Enter a search term above to find services, solutions, and resources.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}