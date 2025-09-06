import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const searchResults = [
  {
    id: 1,
    title: 'AI-Powered Analytics Platform',
    description: 'Comprehensive analytics solution with AI-powered insights and real-time reporting.',
    category: 'AI Services',
    type: 'Service',
    url: '/ai-services',
    date: '2024-01-20'
  },
  {
    id: 2,
    title: 'Cloud Infrastructure Management',
    description: 'Complete cloud infrastructure setup, management, and optimization services.',
    category: 'IT Services',
    type: 'Service',
    url: '/it-services',
    date: '2024-01-18'
  },
  {
    id: 3,
    title: 'Workflow Automation Pro',
    description: 'Automate repetitive tasks and streamline your business processes.',
    category: 'Micro SaaS',
    type: 'Product',
    url: '/micro-saas',
    date: '2024-01-15'
  },
  {
    id: 4,
    title: 'Cybersecurity Solutions',
    description: 'Advanced cybersecurity services to protect your business from threats.',
    category: 'IT Services',
    type: 'Service',
    url: '/it-services',
    date: '2024-01-12'
  },
  {
    id: 5,
    title: 'Social Media Scheduler',
    description: 'Schedule and manage your social media posts across multiple platforms.',
    category: 'Micro SaaS',
    type: 'Product',
    url: '/micro-saas',
    date: '2024-01-10'
  }
];

const categories = ['All', 'AI Services', 'IT Services', 'Micro SaaS', 'Products', 'Services'];
const types = ['All', 'Product', 'Service'];

export default function SearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [filteredResults, setFilteredResults] = useState(searchResults);

  useEffect(() => {
    const { q } = router.query;
    if (q) {
      setQuery(q as string);
    }
  }, [router.query]);

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

    if (selectedType !== 'All') {
      results = results.filter(result => result.type === selectedType);
    }

    setFilteredResults(results);
  }, [query, selectedCategory, selectedType]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <section className="bg-white border-b py-8">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Search</h1>
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Search for services, products, or solutions..."
                />
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Category:</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Type:</span>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm"
              >
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-6">
            <p className="text-gray-600">
              {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} found
              {query && ` for "${query}"`}
            </p>
          </div>

          <div className="space-y-6">
            {filteredResults.map((result, index) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{result.title}</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                        {result.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{result.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        <span>{result.category}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{result.date}</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href={result.url}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    View Details
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredResults.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-12"
            >
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}