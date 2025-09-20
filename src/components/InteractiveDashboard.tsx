import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPREHENSIVE_SERVICES_2030 } from '../data/comprehensiveServices2030';

const InteractiveDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("AI Development");
  const [selectedService, setSelectedService] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [filterBy, setFilterBy] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  const categories = Object.keys(COMPREHENSIVE_SERVICES_2030);
  const allServices = Object.values(COMPREHENSIVE_SERVICES_2030).flat();

  const filteredServices = useMemo(() => {
    let filtered = allServices;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(service => 
        COMPREHENSIVE_SERVICES_2030[selectedCategory]?.includes(service)
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by price range
    if (filterBy !== "all") {
      filtered = filtered.filter(service => {
        const price = parseInt(service.pricing);
        switch (filterBy) {
          case "low":
            return price < 1000;
          case "medium":
            return price >= 1000 && price < 5000;
          case "high":
            return price >= 5000;
          default:
            return true;
        }
      });
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title);
        case "price":
          return parseInt(a.pricing) - parseInt(b.pricing);
        case "features":
          return b.features.length - a.features.length;
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, searchTerm, sortBy, filterBy, allServices]);

  const handleServiceClick = (service) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedService(service);
      setIsLoading(false);
    }, 500);
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="py-8 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
            >
              Interactive Services Dashboard
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-gray-300"
            >
              Explore and filter our comprehensive range of AI-powered development services.
            </motion.p>
          </motion.div>
        </div>
      </header>

      {/* Filters */}
      <section className="py-6 px-4 bg-gray-800 border-b border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium mb-2">Search</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search services..."
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div>
              <label className="block text-sm font-medium mb-2">Price Range</label>
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="all">All Prices</option>
                <option value="low">Under $1,000</option>
                <option value="medium">$1,000 - $5,000</option>
                <option value="high">Over $5,000</option>
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-medium mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="title">Title</option>
                <option value="price">Price</option>
                <option value="features">Features</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="py-4 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-300">
            Showing {filteredServices.length} of {allServices.length} services
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={`${selectedCategory}-${searchTerm}-${sortBy}-${filterBy}`}
          >
            {filteredServices.map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 cursor-pointer group"
                onClick={() => handleServiceClick(service)}
              >
                <div className="text-blue-400 mb-4 text-2xl">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <span 
                      key={idx}
                      className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-400">
                  Starting at ${service.pricing}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No services found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setFilterBy("all");
                  setSelectedCategory("all");
                }}
                className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 p-8 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold">{selectedService.title}</h2>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Description</h3>
                  <p className="text-gray-300">{selectedService.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Features</h3>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <span className="text-blue-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Pricing</h3>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400 mb-2">
                      Starting at ${selectedService.pricing}
                    </div>
                    <p className="text-gray-300">{selectedService.pricingDetails}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Timeline</h3>
                  <p className="text-gray-300">{selectedService.timeline}</p>
                </div>

                <div className="flex gap-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Get Started
                  </button>
                  <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <div className="bg-gray-800 p-8 rounded-lg text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-white">Loading service details...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveDashboard;