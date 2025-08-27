import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useMemo } from 'react';
import { ALL_EXPANDED_SERVICES_2027 } from '../data/expandedInnovativeServices2027';

const ExpandedServicesShowcase2027: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Get unique categories and subcategories
  const categories = useMemo(() => {
    const cats = ['all', ...Array.from(new Set(ALL_EXPANDED_SERVICES_2027.map(s => s.category)))];
    return cats;
  }, []);

  const subcategories = useMemo(() => {
    if (selectedCategory === 'all') {
      const subcats = ['all', ...Array.from(new Set(ALL_EXPANDED_SERVICES_2027.map(s => s.subcategory)))];
      return subcats;
    }
    const subcats = ['all', ...Array.from(new Set(ALL_EXPANDED_SERVICES_2027.filter(s => s.category === selectedCategory).map(s => s.subcategory)))];
    return subcats;
  }, [selectedCategory]);

  // Filter services based on search and filters
  const filteredServices = useMemo(() => {
    return ALL_EXPANDED_SERVICES_2027.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.subcategory.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
      
      return matchesSearch && matchesCategory && matchesSubcategory;
    });
  }, [searchTerm, selectedCategory, selectedSubcategory]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedSubcategory('all');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Expanded Innovative Services 2027 - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive range of advanced cybersecurity, data analytics, cloud solutions, IoT, fintech, and healthcare technology services for 2027." />
        <meta name="keywords" content="Zion Tech Group, innovative services 2027, cybersecurity, data analytics, cloud solutions, IoT, fintech, healthcare technology" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/expanded-services-2027" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Expanded Innovative Services 2027
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Discover our cutting-edge portfolio of advanced technology services designed to transform your business 
            with next-generation cybersecurity, data analytics, cloud infrastructure, IoT solutions, fintech innovations, 
            and healthcare technology breakthroughs.
          </p>
          
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Contact Zion Tech Group</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong>Phone:</strong><br />
                <a href="tel:+13024640950" className="text-blue-300 hover:text-blue-200">+1 302 464 0950</a>
              </div>
              <div>
                <strong>Email:</strong><br />
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-300 hover:text-blue-200">kleber@ziontechgroup.com</a>
              </div>
              <div>
                <strong>Address:</strong><br />
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setSelectedSubcategory('all');
              }}
              className="px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {categories.map(cat => (
                <option key={cat} value={cat} className="bg-gray-800 text-white">
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
            
            <select
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              className="px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {subcategories.map(subcat => (
                <option key={subcat} value={subcat} className="bg-gray-800 text-white">
                  {subcat === 'all' ? 'All Subcategories' : subcat}
                </option>
              ))}
            </select>
            
            <button
              onClick={resetFilters}
              className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors"
            >
              Reset Filters
            </button>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-white">
              <span className="font-semibold">{filteredServices.length}</span> services found
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-white text-sm">View:</span>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white/20 text-white'}`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white/20 text-white'}`}
              >
                List
              </button>
            </div>
          </div>
        </div>

        {/* Services Grid/List */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-blue-400 transition-all duration-300 ${
                viewMode === 'list' ? 'flex items-start space-x-4' : ''
              }`}
            >
              {viewMode === 'list' && (
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                  {service.name.charAt(0)}
                </div>
              )}
              
              <div className={viewMode === 'list' ? 'flex-1' : ''}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    service.status === 'active' ? 'bg-green-600 text-white' :
                    service.status === 'beta' ? 'bg-yellow-600 text-white' :
                    'bg-gray-600 text-white'
                  }`}>
                    {service.status}
                  </span>
                </div>
                
                <div className="mb-3">
                  <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded mr-2 mb-1">
                    {service.category}
                  </span>
                  <span className="inline-block bg-purple-600 text-white text-xs px-2 py-1 rounded">
                    {service.subcategory}
                  </span>
                </div>
                
                <p className="text-white/80 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="text-white/70 text-sm space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-blue-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Pricing:</h4>
                  <div className="text-white/80">
                    <span className="font-bold text-lg">${service.pricing.basePrice}</span>
                    <span className="text-sm ml-1">/month</span>
                    <span className="text-sm ml-2">({service.pricing.model})</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < service.rating ? 'text-yellow-400' : 'text-gray-600'}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-white/70 text-sm">({service.reviews})</span>
                  </div>
                  
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/80 mb-6">
              Our expanded 2027 services portfolio is designed to give you the competitive edge. 
              Contact us today to discuss how we can help implement these cutting-edge solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                Get Started Today
              </a>
              <a
                href="/expanded-services-pricing-2027"
                className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg font-semibold transition-colors"
              >
                View Detailed Pricing
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExpandedServicesShowcase2027;