import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Search, Filter, X, ArrowRight, FileText, Code, BookOpen, MessageSquare } from 'lucide-react';
import Layout from '../components/Layout';

const searchResults = [
  {
    id: 1,
    title: 'AI Solutions',
    description: 'Comprehensive AI solutions including machine learning, natural language processing, and computer vision.',
    url: '/ai-services',
    category: 'Services',
    icon: FileText
  },
  {
    id: 2,
    title: 'IT Services',
    description: 'Complete IT infrastructure management, cloud services, and cybersecurity solutions.',
    url: '/it-services',
    category: 'Services',
    icon: Code
  },
  {
    id: 3,
    title: 'Micro SaaS',
    description: 'Scalable software as a service solutions for rapid business application deployment.',
    url: '/micro-saas',
    category: 'Services',
    icon: BookOpen
  },
  {
    id: 4,
    title: 'Documentation',
    description: 'Technical documentation and API references for all our services.',
    url: '/docs',
    category: 'Resources',
    icon: FileText
  },
  {
    id: 5,
    title: 'Case Studies',
    description: 'Success stories and implementation examples from our client projects.',
    url: '/case-studies',
    category: 'Resources',
    icon: MessageSquare
  },
  {
    id: 6,
    title: 'Tutorials',
    description: 'Step-by-step guides and tutorials for implementing our solutions.',
    url: '/tutorials',
    category: 'Resources',
    icon: BookOpen
  }
];

const categories = ['All', 'Services', 'Solutions', 'Resources', 'About', 'Support'];

export default function SearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredResults, setFilteredResults] = useState(searchResults);

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
        result.description.toLowerCase().includes(query.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'All') {
      results = results.filter(result => result.category === selectedCategory);
    }
    
    setFilteredResults(results);
  }, [query, selectedCategory]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <Layout
      title="Search - Zion Tech Group"
      description="Search our comprehensive knowledge base for AI solutions, IT services, and technology resources."
      keywords="search, AI solutions, IT services, technology resources, documentation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Search Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Search Results</h1>
              
              {/* Search Form */}
              <form onSubmit={handleSearch} className="relative mb-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search our services, documentation, and resources..."
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                  {query && (
                    <button
                      type="button"
                      onClick={() => setQuery('')}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Search
                </button>
              </form>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {query ? (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} for "{query}"
                  </h2>
                  {selectedCategory !== 'All' && (
                    <span className="text-sm text-gray-500">
                      Filtered by: {selectedCategory}
                    </span>
                  )}
                </div>

                {filteredResults.length > 0 ? (
                  <div className="space-y-4">
                    {filteredResults.map((result) => {
                      const IconComponent = result.icon;
                      return (
                        <div
                          key={result.id}
                          className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <IconComponent className="w-5 h-5 text-blue-600" />
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <h3 className="text-lg font-semibold text-gray-900">
                                  {result.title}
                                </h3>
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                  {result.category}
                                </span>
                              </div>
                              <p className="text-gray-600 mb-3">{result.description}</p>
                              <a
                                href={result.url}
                                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                              >
                                Learn more
                                <ArrowRight className="w-4 h-4 ml-1" />
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
                    <p className="text-gray-600 mb-6">
                      Try adjusting your search terms or browse our categories.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {categories.slice(1).map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                        >
                          Browse {category}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Search our knowledge base</h3>
                <p className="text-gray-600 mb-6">
                  Find information about our AI solutions, IT services, and technology resources.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <FileText className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Services</h4>
                    <p className="text-sm text-gray-600">AI, IT, and SaaS solutions</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Resources</h4>
                    <p className="text-sm text-gray-600">Documentation and guides</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <MessageSquare className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900 mb-1">Support</h4>
                    <p className="text-sm text-gray-600">Help and tutorials</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}