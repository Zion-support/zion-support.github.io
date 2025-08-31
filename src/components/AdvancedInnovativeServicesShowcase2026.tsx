import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ADVANCED_INNOVATIVE_SERVICES_2025 } from "../data/advancedInnovativeServices2025";
import { NEXT_GEN_INNOVATIVE_SERVICES_2026 } from "../data/nextGenInnovativeServices2026";

const AdvancedInnovativeServicesShowcase2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState<any>(null);

  // Combine all services
  const allServices = [...ADVANCED_INNOVATIVE_SERVICES_2025, ...NEXT_GEN_INNOVATIVE_SERVICES_2026];

  const categories = [
    { id: 'all', name: 'All Services', icon: '🌟', color: 'from-purple-600 to-pink-600' },
    { id: 'AI Financial Services', name: 'AI Financial', icon: '💰', color: 'from-green-600 to-emerald-600' },
    { id: 'AI Healthcare', name: 'AI Healthcare', icon: '🏥', color: 'from-red-600 to-pink-600' },
    { id: 'Cybersecurity', name: 'Cybersecurity', icon: '🔒', color: 'from-blue-600 to-cyan-600' },
    { id: 'IoT & Smart Cities', name: 'Smart Cities', icon: '🏙️', color: 'from-indigo-600 to-purple-600' },
    { id: 'AI Manufacturing', name: 'AI Manufacturing', icon: '🏭', color: 'from-orange-600 to-red-600' },
    { id: 'Data Analytics', name: 'Data Analytics', icon: '📊', color: 'from-teal-600 to-blue-600' },
    { id: 'AI Robotics', name: 'AI Robotics', icon: '🤖', color: 'from-gray-600 to-slate-600' },
    { id: 'AI Energy', name: 'AI Energy', icon: '⚡', color: 'from-yellow-600 to-orange-600' },
    { id: 'AI Logistics', name: 'AI Logistics', icon: '🚚', color: 'from-blue-600 to-indigo-600' },
    { id: 'AI Education', name: 'AI Education', icon: '🎓', color: 'from-purple-600 to-blue-600' },
    { id: 'AI Marketing', name: 'AI Marketing', icon: '📈', color: 'from-pink-600 to-red-600' },
    { id: 'AI Customer Experience', name: 'Customer Experience', icon: '👥', color: 'from-green-600 to-blue-600' },
    { id: 'AI Human Resources', name: 'AI HR', icon: '👨‍💼', color: 'from-indigo-600 to-purple-600' },
    { id: 'AI Legal Tech', name: 'AI Legal', icon: '⚖️', color: 'from-gray-600 to-blue-600' },
    { id: 'AI Real Estate', name: 'AI Real Estate', icon: '🏠', color: 'from-orange-600 to-yellow-600' },
    { id: 'Quantum AI', name: 'Quantum AI', icon: '⚛️', color: 'from-purple-600 to-blue-600' },
    { id: 'Blockchain & Web3', name: 'Blockchain', icon: '🔗', color: 'from-green-600 to-cyan-600' },
    { id: 'Space Technology', name: 'Space Tech', icon: '🛰️', color: 'from-indigo-600 to-purple-600' },
    { id: 'Biotechnology', name: 'Biotech', icon: '🧬', color: 'from-red-600 to-pink-600' },
    { id: 'Autonomous Systems', name: 'Autonomous', icon: '🚗', color: 'from-blue-600 to-green-600' },
    { id: 'Metaverse & AR/VR', name: 'Metaverse', icon: '🌐', color: 'from-purple-600 to-pink-600' },
    { id: 'Green Technology', name: 'Green Tech', icon: '🌱', color: 'from-green-600 to-emerald-600' },
    { id: 'FinTech', name: 'FinTech', icon: '💳', color: 'from-blue-600 to-green-600' },
    { id: 'IoT & Edge Computing', name: 'IoT Edge', icon: '📡', color: 'from-cyan-600 to-blue-600' },
    { id: 'Data Science', name: 'Data Science', icon: '🔬', color: 'from-purple-600 to-indigo-600' },
    { id: 'Cloud & DevOps', name: 'Cloud DevOps', icon: '☁️', color: 'from-blue-600 to-cyan-600' },
    { id: 'Digital Transformation', name: 'Digital Transform', icon: '🔄', color: 'from-purple-600 to-pink-600' }
  ];

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Advanced
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {" "}Innovative
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Services 2026
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover cutting-edge AI, blockchain, quantum computing, and emerging technology solutions 
            that transform businesses and drive innovation across industries.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a 
              href="https://ziontechgroup.com/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </a>
            <a 
              href="tel:+13024640950"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Call +1 302 464 0950
            </a>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search innovative services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <div className="absolute right-3 top-3 text-gray-400">
                  🔍
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                variants={itemVariants}
                onClick={() => handleServiceClick(service)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Price and Rating */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-green-400">
                      ${service.price.toLocaleString()}
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-white">{service.rating}</span>
                      <span className="text-gray-400">({service.reviewCount})</span>
                    </div>
                  </div>

                  {/* Market Price */}
                  <div className="text-sm text-gray-400">
                    Market Price: {service.marketPrice}
                  </div>

                  {/* ROI */}
                  <div className="text-sm text-green-400 font-semibold">
                    ROI: {service.roi}
                  </div>

                  {/* Setup Time */}
                  <div className="text-sm text-blue-400">
                    Setup: {service.setupTime}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* AI Score */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-cyan-400">
                      AI Score: {service.aiScore}/100
                    </div>
                    <div className="text-sm text-gray-400">
                      {service.availability}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </motion.div>
            ))}
          </motion.div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our team of experts to discuss how our innovative services can drive your success
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl mb-2">📞</div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-purple-300 hover:text-purple-200">
                +1 302 464 0950
              </a>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">✉️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-purple-300 hover:text-purple-200">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌐</div>
              <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
              <a href="https://ziontechgroup.com" className="text-purple-300 hover:text-purple-200">
                ziontechgroup.com
              </a>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://ziontechgroup.com/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Get Your Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl font-bold text-white">{selectedService.title}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                  <p className="text-gray-300">{selectedService.description}</p>
                </div>

                {/* Key Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Service Details</h3>
                    <div className="space-y-2 text-sm">
                      <div><span className="text-gray-400">Category:</span> <span className="text-white">{selectedService.category}</span></div>
                      <div><span className="text-gray-400">Subcategory:</span> <span className="text-white">{selectedService.subcategory}</span></div>
                      <div><span className="text-gray-400">Price:</span> <span className="text-green-400 font-semibold">${selectedService.price.toLocaleString()}</span></div>
                      <div><span className="text-gray-400">Market Price:</span> <span className="text-white">{selectedService.marketPrice}</span></div>
                      <div><span className="text-gray-400">ROI:</span> <span className="text-green-400">{selectedService.roi}</span></div>
                      <div><span className="text-gray-400">Setup Time:</span> <span className="text-blue-400">{selectedService.setupTime}</span></div>
                      <div><span className="text-gray-400">AI Score:</span> <span className="text-cyan-400">{selectedService.aiScore}/100</span></div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Contact Information</h3>
                    <div className="space-y-2 text-sm">
                      <div><span className="text-gray-400">Phone:</span> <a href={`tel:${selectedService.contactInfo.phone}`} className="text-purple-300 hover:text-purple-200">{selectedService.contactInfo.phone}</a></div>
                      <div><span className="text-gray-400">Email:</span> <a href={`mailto:${selectedService.contactInfo.email}`} className="text-purple-300 hover:text-purple-200">{selectedService.contactInfo.email}</a></div>
                      <div><span className="text-gray-400">Website:</span> <a href={selectedService.contactInfo.website} className="text-purple-300 hover:text-purple-200" target="_blank" rel="noopener noreferrer">{selectedService.contactInfo.website}</a></div>
                      <div><span className="text-gray-400">Address:</span> <span className="text-white">{selectedService.contactInfo.address}</span></div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Technologies & Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Competitors */}
                {selectedService.competitors && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Competitors</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.competitors.map((competitor, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-red-600/20 text-red-300 text-sm rounded-full border border-red-500/30"
                        >
                          {competitor}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Integrations */}
                {selectedService.integrations && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Integrations</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.integrations.map((integration, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-600/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                        >
                          {integration}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-600">
                  <a
                    href={`mailto:${selectedService.contactInfo.email}?subject=Inquiry about ${selectedService.title}`}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105"
                  >
                    Get Quote
                  </a>
                  <a
                    href={`tel:${selectedService.contactInfo.phone}`}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedInnovativeServicesShowcase2026;