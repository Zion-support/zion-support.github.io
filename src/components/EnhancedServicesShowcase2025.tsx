import React from 'react';

const EnhancedServicesShowcase2025: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-16">
        <div
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            2025 Services Showcase
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our cutting-edge technology solutions designed for the future. 
            From AI-powered automation to quantum computing, we're building tomorrow's innovations today.
          </p>
        </div>

        {/* Search and Filters */}
        <div
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search services, technologies, or features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'category')}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="category">Sort by Category</option>
            </select>
          </div>
        </div>

        {/* Category Tabs */}
        <div
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20'
              }`}
            >
              All Services
            </button>
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300"
              onClick={() => handleServiceSelect(service)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-sm text-gray-400">{serviceCategories.find(c => c.id === service.category)?.name}</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 line-clamp-3">{service.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {service.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
                {service.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                    +{service.technologies.length - 3} more
                  </span>
                )}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-blue-400">
                  ${service.pricing.starter}
                  <span className="text-sm text-gray-400 font-normal">/month</span>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-300 mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search terms or category filters</p>
          </div>
        )}
      </div>

      {/* Service Detail Modal */}
      <div>
        {selectedService && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div
              className="bg-gray-900 border border-white/20 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                    {selectedService.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService.title}</h2>
                    <p className="text-gray-400">{serviceCategories.find(c => c.id === selectedService.category)?.name}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <span className="text-2xl">×</span>
                </button>
              </div>

              <p className="text-gray-300 text-lg mb-8">{selectedService.description}</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Features */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Key Benefits</h3>
                  <ul className="space-y-2">
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 bg-white/10 rounded-lg text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Pricing Plans</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(selectedService.pricing).map(([plan, price]) => (
                    <div
                      key={plan}
                      className="p-4 bg-white/5 border border-white/20 rounded-lg text-center"
                    >
                      <h4 className="text-lg font-bold text-white capitalize mb-2">{plan}</h4>
                      <div className="text-3xl font-bold text-blue-400 mb-2">
                        ${price}
                        <span className="text-sm text-gray-400 font-normal">/month</span>
                      </div>
                      <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                        Get Started
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedServicesShowcase2025;