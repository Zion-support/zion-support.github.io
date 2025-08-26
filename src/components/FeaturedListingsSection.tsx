import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Eye, Heart, ArrowRight, Clock, Users, TrendingUp, Award, Filter, Search, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FeaturedListingsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredListing, setHoveredListing] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const featuredServices = [
    {
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      category: 'AI Solutions',
      rating: 4.9,
      reviews: 127,
      price: 'From $2,500',
      image: '🤖',
      link: '/services/ai',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards']
    },
    {
      title: 'Cloud Migration & Optimization',
      description: 'Seamlessly migrate to the cloud with our proven methodology and expert guidance.',
      category: 'Cloud & DevOps',
      rating: 4.8,
      reviews: 89,
      price: 'From $5,000',
      image: '☁️',
      link: '/services/cloud',
      features: ['Zero-downtime Migration', 'Cost Optimization', 'Security Compliance']
    },
    {
      title: 'Cybersecurity Assessment & Implementation',
      description: 'Comprehensive security evaluation and implementation for enterprise-level protection.',
      category: 'Cybersecurity',
      rating: 4.9,
      reviews: 156,
      price: 'From $3,500',
      image: '🔒',
      link: '/services/cybersecurity',
      features: ['Security Audits', 'Threat Detection', 'Incident Response']
    }
  ];

  const filteredServices = selectedCategory === "All" 
    ? featuredServices 
    : featuredServices.filter(service => service.category === selectedCategory);

  const categories = ["All", "AI Solutions", "Cloud & DevOps", "Cybersecurity", "Digital Transformation", "IT Consulting"];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover our most popular and highly-rated technology services. 
            Each solution is crafted to deliver exceptional value and results.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-light/10 text-zion-slate-light hover:bg-zion-blue-light/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate="visible"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              onHoverStart={() => setHoveredListing(index)}
              onHoverEnd={() => setHoveredListing(null)}
            >
              <div className="bg-zion-blue-light/10 rounded-xl p-6 border border-zion-blue-light/20 hover:border-zion-cyan/40 transition-all duration-300 h-full hover:shadow-lg hover:shadow-zion-cyan/10">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{service.image}</div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium text-white">{service.rating}</span>
                  </div>
                </div>

                {/* Service Info */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full font-medium mb-3">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        <span className="text-zion-slate-light">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Stats */}
                <div className="flex items-center justify-between text-sm text-zion-slate-light mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{service.reviews} reviews</span>
                  </div>
                  <div className="text-zion-cyan font-semibold">{service.price}</div>
                </div>

                {/* CTA Button */}
                <Link
                  to={service.link}
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 group-hover:shadow-lg group-hover:shadow-zion-cyan/25"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Hover Overlay */}
              <AnimatePresence>
                {hoveredListing === index && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 to-zion-purple/10 rounded-xl border border-zion-cyan/30 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/25"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
