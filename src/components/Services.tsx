import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { COMPREHENSIVE_SERVICES_2030 } from "../data/comprehensiveServices2030";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("AI Development");
  const [selectedService, setSelectedService] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const categories = Object.keys(COMPREHENSIVE_SERVICES_2030);
  const services = COMPREHENSIVE_SERVICES_2030[selectedCategory] || [];

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
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
        />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
            >
              Our Services
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Comprehensive AI-powered development services to help you build, deploy, and scale your applications.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 px-4 bg-gray-800 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
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
            key={selectedCategory}
          >
            {services.map((service, index) => (
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

export default Services;
