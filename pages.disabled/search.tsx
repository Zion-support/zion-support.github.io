import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Search, Filter, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
const SearchPage: NextPage = () => {;
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = [;
    { id: 'all', name: 'All Content' },
    { id: 'services', name: 'Services' },
    { id: 'solutions', name: 'Solutions' },
    { id: 'blog', name: 'Blog Posts' },
    { id: 'pages', name: 'Pages' }
  ];
  const mockResults = [;
    {;
      id: 1,
      title: 'AI Services - Custom AI Development',
      description: 'Comprehensive AI services including custom model development, machine learning solutions, and AI integration.',
      url: '/services/ai-services',
      category: 'services',
      type: 'Service Page';
},
    {;
      id: 2,
      title: 'Micro SaaS Solutions',
      description: 'Innovative micro SaaS applications designed to solve specific business problems with minimal overhead.',
      url: '/services/micro-saas',
      category: 'services',
      type: 'Service Page';
},
    {;
      id: 3,
      title: 'The Future of AI in Business',
      description: 'Explore the latest AI trends that are transforming businesses and how companies can leverage these technologies.',
      url: '/blog/1',
      category: 'blog',
      type: 'Blog Post';
},
    {;
      id: 4,
      title: 'Enterprise Solutions',
      description: 'Comprehensive enterprise-grade solutions designed for large organizations and complex business requirements.',
      url: '/solutions/enterprise',
      category: 'solutions',
      type: 'Solution Page';
},
    {;
      id: 5,
      title: 'About Zion Tech Group',
      description: 'Learn about our company, mission, values, and the team behind our innovative technology solutions.',
      url: '/about',
      category: 'pages',
      type: 'Company Page';
}
  ];
  const handleSearch = async (query: string) => {;
    if (!query.trim()) {;
      setSearchResults([]);
      return;
}

    setIsSearching(true);
    // Simulate search delay;
    await new Promise(resolve => setTimeout(resolve, 500));
    // Filter results based on query and category;
    const filtered = mockResults.filter(result => {
      const matchesQuery = result.title.toLowerCase().includes(query.toLowerCase()) ||;
                          result.description.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || result.category === selectedCategory;
      return matchesQuery && matchesCategory;
});
    setSearchResults(filtered);
    setIsSearching(false);
};
  useEffect(() => {
    if (searchQuery) {;
      const timeoutId = setTimeout(() => {;
        handleSearch(searchQuery);
}, 300);
      return () => clearTimeout(timeoutId);
} else {;
      setSearchResults([]);
}
  }, [searchQuery, selectedCategory]);
  return (;
    <MainLayout;
      title="Search - Zion Tech Group";
      description="Search through Zion Tech Group's website to find the information you need.">;
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">;
        <div className="container mx-auto px-4 text-center">;
          <div className="flex justify-center mb-6">;
            <Search className="w-16 h-16 text-blue-400" />;
          </div>;
          <h1 className="text-5xl md:text-6xl font-bold mb-6">;
            Search <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Results</span>;
          </h1>;
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">;
            Find exactly what you're looking for across our website.;
          </p>;
        </div>;
      </section>;

      {/* Search Interface */}
      <section className="py-12 bg-gray-50">;
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto">;
            <div className="bg-white p-8 rounded-lg shadow-lg">;
              <div className="flex flex-col md:flex-row gap-4 mb-6">;
                <div className="flex-1 relative">;
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;
                  <input;
                    type="text";
                    placeholder="Search for services, solutions, articles, or any content...";
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
                  />;
                </div>;
                <div className="flex items-center gap-2">;
                  <Filter className="w-5 h-5 text-gray-400" />;
                  <select;
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">;
                    {categories.map((category) => (;
                      <option key={category.id} value={category.id}>;
                        {category.name}
                      </option>;
                    ))}
                  </select>;
                </div>;
              </div>;
              {searchQuery && (;
                <div className="text-sm text-gray-600">;
                  {isSearching ? (;
                    <div className="flex items-center">;
                      <Clock className="w-4 h-4 mr-2 animate-spin" />;
                      Searching...;
                    </div>;
                  ) : (;
                    <span>;
                      {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found for "{searchQuery}";
                    </span>;
                  )}
                </div>;
              )}
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Search Results */}
      <section className="py-12">;
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto">;
            {searchQuery && !isSearching && (;
              <>;
                {searchResults.length > 0 ? (;
                  <div className="space-y-6">;
                    {searchResults.map((result) => (;
                      <div key={result.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">;
                        <div className="flex items-start justify-between">;
                          <div className="flex-1">;
                            <div className="flex items-center gap-2 mb-2">;
                              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">;
                                {result.type}
                              </span>;
                              <span className="text-sm text-gray-500 capitalize">;
                                {result.category}
                              </span>;
                            </div>;
                            <h3 className="text-xl font-bold text-gray-900 mb-2">;
                              <Link ;
                                href={result.url}
                                className="hover:text-blue-600 transition-colors">;
                                {result.title}
                              </Link>;
                            </h3>;
                            <p className="text-gray-600 mb-4">{result.description}</p>;
                            <Link ;
                              href={result.url}
                              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">;
                              Read More;
                              <ArrowRight className="w-4 h-4 ml-1" />;
                            </Link>;
                          </div>;
                        </div>;
                      </div>;
                    ))}
                  </div>;
                ) : (;
                  <div className="text-center py-12">;
                    <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />;
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>;
                    <p className="text-gray-600 mb-6">;
                      Try adjusting your search terms or browse our main sections.;
                    </p>;
                    <div className="flex flex-wrap justify-center gap-4">;
                      <Link href="/services" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">;
                        Browse Services;
                      </Link>;
                      <Link href="/solutions" className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors">;
                        Browse Solutions;
                      </Link>;
                      <Link href="/blog" className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors">;
                        Browse Blog;
                      </Link>;
                    </div>;
                  </div>;
                )}
              </>;
            )}

            {!searchQuery && (;
              <div className="text-center py-12">;
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />;
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Start your search</h3>;
                <p className="text-gray-600 mb-6">;
                  Enter your search terms above to find relevant content across our website.;
                </p>;
                <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">;
                  <div className="bg-white p-6 rounded-lg shadow-lg">;
                    <h4 className="font-semibold text-gray-900 mb-2">Popular Searches</h4>;
                    <ul className="text-sm text-gray-600 space-y-1">;
                      <li>• AI Services</li>;
                      <li>• Cloud Migration</li>;
                      <li>• Micro SaaS</li>;
                      <li>• Digital Transformation</li>;
                    </ul>;
                  </div>;
                  <div className="bg-white p-6 rounded-lg shadow-lg">;
                    <h4 className="font-semibold text-gray-900 mb-2">Quick Links</h4>;
                    <ul className="text-sm text-gray-600 space-y-1">;
                      <li>• <Link href="/services" className="text-blue-600 hover:text-blue-700">All Services</Link></li>;
                      <li>• <Link href="/solutions" className="text-blue-600 hover:text-blue-700">Solutions</Link></li>;
                      <li>• <Link href="/contact" className="text-blue-600 hover:text-blue-700">Contact Us</Link></li>;
                    </ul>;
                  </div>;
                  <div className="bg-white p-6 rounded-lg shadow-lg">;
                    <h4 className="font-semibold text-gray-900 mb-2">Need Help?</h4>;
                    <p className="text-sm text-gray-600 mb-3">;
                      Can't find what you're looking for?;
                    </p>;
                    <Link href="/contact" className="text-blue-600 hover:text-blue-700 text-sm font-medium">;
                      Contact Support →;
                    </Link>;
                  </div>;
                </div>;
              </div>;
            )}
          </div>;
        </div>;
      </section>;
    </MainLayout>;
  );
};
export default SearchPage;