import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Eye, Heart, ArrowRight, Clock, Users, TrendingUp, Award, Filter, Search, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

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

export function FeaturedListingsSection() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover our most popular and highly-rated technology solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {["All", "Web Development", "Mobile Development", "Cloud & DevOps", "AI & Machine Learning", "IoT Solutions"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-zion-cyan text-zion-blue-dark shadow-lg shadow-zion-cyan/25'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredListings.map((listing, index) => (
            <motion.div
              key={listing.id}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25 overflow-hidden group"
              whileHover={{ y: -8, scale: 1.02 }}
              onHoverStart={() => setHoveredListing(listing.id)}
              onHoverEnd={() => setHoveredListing(null)}
            >
              {/* Featured Badge */}
              {listing.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white text-xs font-semibold rounded-full">
                    Featured
                  </div>
                </div>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={listing.image} 
                  alt={listing.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category and Rating */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm font-medium rounded-full border border-zion-cyan/30">
                    {listing.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    {renderStars(listing.rating)}
                    <span className="text-sm text-zion-slate-light ml-1">({listing.reviews})</span>
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {listing.title}
                </h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  {listing.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-white mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {listing.highlights.slice(0, 3).map((highlight, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 text-zion-slate-light text-xs rounded-md border border-white/20">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div className="text-center">
                    <div className="text-lg font-bold text-zion-cyan">{listing.team}</div>
                    <div className="text-xs text-zion-slate-light">Team Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-zion-cyan">{listing.duration}</div>
                    <div className="text-xs text-zion-slate-light">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-zion-cyan">{listing.location}</div>
                    <div className="text-xs text-zion-slate-light">Location</div>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-white">{listing.price}</div>
                  <Link
                    to={service.link}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:underline"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              
              <div className="px-6 pb-6">
                <Link
                  to={service.link}
                  className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-center block group-hover:shadow-lg"
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-300"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}