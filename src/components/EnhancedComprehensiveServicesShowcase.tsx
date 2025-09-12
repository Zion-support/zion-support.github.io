import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

import { 
  Search, 
  Filter, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Shield, 
  Globe, 
  Target,
  TrendingUp,
  Users,
  Award,
  Clock,
  DollarSign,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";

// Comprehensive services data
const servicesData = {
  ai: {
    title: "AI & Machine Learning",
    description: "Cutting-edge artificial intelligence solutions",
    services: [
      {
        id: 1,
        name: "AI-Powered Business Automation",
        description: "Transform your business operations with intelligent automation",
        price: "From $5,000/month",
        features: ["Process Automation", "Predictive Analytics", "Natural Language Processing"],
        icon: Zap,
        category: "AI Solutions"
      },
      {
        id: 2,
        name: "Machine Learning Platform",
        description: "Build, deploy, and scale ML models with ease",
        price: "From $3,000/month",
        features: ["Model Training", "Real-time Inference", "AutoML"],
        icon: Target,
        category: "AI Solutions"
      }
    ]
  },
  saas: {
    title: "SAAS Platforms",
    description: "Scalable software-as-a-service solutions",
    services: [
      {
        id: 3,
        name: "Enterprise SAAS Platform",
        description: "Complete business management platform",
        price: "From $2,500/month",
        features: ["Multi-tenant Architecture", "API Integration", "Analytics Dashboard"],
        icon: Globe,
        category: "SAAS Solutions"
      }
    ]
  },
  it: {
    title: "IT Services",
    description: "Comprehensive IT infrastructure and support",
    services: [
      {
        id: 4,
        name: "Cloud Infrastructure",
        description: "Secure and scalable cloud solutions",
        price: "From $1,500/month",
        features: ["AWS/Azure/GCP", "24/7 Monitoring", "Auto-scaling"],
        icon: Shield,
        category: "IT Services"
      }
    ]
  }
};

export function EnhancedComprehensiveServicesShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState(null);

  // Flatten all services for filtering
  const allServices = Object.values(servicesData).flatMap(category => 
    category.services.map(service => ({
      ...service,
      categoryName: category.title
    }))
  );

  const filteredServices = allServices.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'All Services', count: allServices.length },
    { id: 'AI Solutions', name: 'AI Solutions', count: servicesData.ai.services.length },
    { id: 'SAAS Solutions', name: 'SAAS Solutions', count: servicesData.saas.services.length },
    { id: 'IT Services', name: 'IT Services', count: servicesData.it.services.length }
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Header Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Zion Tech Group
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Innovative Services 2025
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Discover our cutting-edge portfolio of micro SAAS solutions, IT services, and AI-powered innovations designed to transform your business and drive competitive advantage in the digital age
            </p>
          </motion.div>
          
          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">{allServices.length}+</div>
              <div className="text-sm text-gray-300">Innovative Services</div>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-3xl font-bold text-cyan-400 mb-2">15+</div>
              <div className="text-sm text-gray-300">Technology Categories</div>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-3xl font-bold text-green-400 mb-2">99%</div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </motion.div>
            <motion.div 
              className="bg-white/10 backdrop-blur-lg rounded-lg p-6 border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-sm text-gray-300">Support Available</div>
            </motion.div>
          </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services, features, or use cases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 py-4 text-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:bg-white/20 focus:border-zion-cyan rounded-lg"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                    : 'bg-white/10 backdrop-blur-lg border border-white/20 text-gray-300 hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 hover:border-blue-400/50 transition-all duration-300 h-full rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl text-white group-hover:text-blue-400 transition-colors mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      <div className="flex items-center text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="ml-1 text-sm">4.9</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-300">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleServiceClick(service)}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 py-2 rounded-lg transition-all duration-300 flex items-center justify-center"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                      <button className="border border-white/20 text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-300 mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-slate-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                    <selectedService.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedService.name}</h2>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {selectedService.category}
                    </span>
                  </div>
                </div>
                <button onClick={closeModal} className="text-gray-400 hover:text-white text-2xl">
                  ×
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                  <p className="text-gray-300">{selectedService.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Pricing</h3>
                  <p className="text-2xl font-bold text-green-400">{selectedService.price}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Features</h3>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <button className="border border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-lg transition-all duration-300">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}