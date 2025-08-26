import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Services2024Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const services = [
    {
      id: 1,
      name: 'AI Automation Platform',
      description: 'Advanced AI automation for business processes',
      category: 'ai',
      price: '$299/month',
      popular: true,
      rating: 5
    },
    {
      id: 2,
      name: 'Quantum Security Suite',
      description: 'Next-generation quantum encryption',
      category: 'quantum',
      price: '$599/month',
      popular: false,
      rating: 5
    },
    {
      id: 3,
      name: 'Enterprise IT Solutions',
      description: 'Comprehensive enterprise technology services',
      category: 'enterprise',
      price: '$999/month',
      popular: true,
      rating: 5
    }
  ];

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      return matchesSearch && matchesCategory;
    }).sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
        default:
          return b.popular ? 1 : -1;
      }
    });
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <>
      <Head>
        <title>2024 Revolutionary Services | Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's revolutionary 2024 services including AI automation, quantum security, and enterprise IT solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/services-2024" />
      </Head>

      <main className="min-h-screen bg-black text-white p-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                2024 Revolutionary
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Experience the future of technology with our cutting-edge AI automation, quantum security, 
              and enterprise IT solutions designed for the modern digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/pricing-2033"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105"
              >
                View Pricing
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 rounded-lg transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-black/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-black/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-black/50 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
              >
                <option value="all">All Categories</option>
                <option value="ai">AI & Machine Learning</option>
                <option value="quantum">Quantum & Security</option>
                <option value="enterprise">Enterprise IT</option>
                <option value="api">API & Development</option>
                <option value="business">Business & Analytics</option>
                <option value="marketing">Marketing & Automation</option>
              </select>

              {/* Price Filter */}
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-3 bg-black/50 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
              >
                <option value="all">All Prices</option>
                <option value="low">Under $500/month</option>
                <option value="medium">$500 - $1000/month</option>
                <option value="high">Over $1000/month</option>
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-black/50 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
              >
                <option value="popularity">Sort by Popularity</option>
                <option value="rating">Sort by Rating</option>
                <option value="name">Sort by Name</option>
              </select>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map(service => (
              <div key={service.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="mb-4">
                  {service.popular && (
                    <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30 mb-3">
                      Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        {i < service.rating ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Link
                  href={`/services/${service.id}`}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}