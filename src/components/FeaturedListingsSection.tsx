import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Eye, Heart, ArrowRight, Clock, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export function FeaturedListingsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const featuredListings = [
    {
      id: 1,
      title: "AI-Powered E-commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with AI-driven product recommendations and personalized shopping experience",
      rating: 4.9,
      reviews: 127,
      views: 2847,
      likes: 156,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      price: "$15,000",
      tags: ["React", "Node.js", "AI/ML", "E-commerce"],
      delivery: "4-6 weeks",
      seller: "Zion Tech Group",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Compliance Dashboard",
      category: "Cybersecurity",
      description: "Comprehensive security monitoring and compliance reporting system for enterprise organizations",
      rating: 4.8,
      reviews: 89,
      views: 1956,
      likes: 134,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      price: "$25,000",
      tags: ["Security", "Compliance", "Dashboard", "Enterprise"],
      delivery: "6-8 weeks",
      seller: "Zion Tech Group",
      featured: true
    },
    {
      id: 3,
      title: "Cloud Infrastructure Migration",
      category: "Cloud Solutions",
      description: "End-to-end cloud migration service with zero-downtime deployment and optimization",
      rating: 4.9,
      reviews: 203,
      views: 3421,
      likes: 287,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      price: "$35,000",
      tags: ["AWS", "Azure", "Migration", "DevOps"],
      delivery: "8-12 weeks",
      seller: "Zion Tech Group",
      featured: true
    },
    {
      id: 4,
      title: "AI Business Intelligence Platform",
      category: "AI & Analytics",
      description: "Advanced BI platform with machine learning insights and predictive analytics capabilities",
      rating: 4.7,
      reviews: 156,
      views: 2678,
      likes: 198,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      price: "$45,000",
      tags: ["AI/ML", "Analytics", "BI", "Predictive"],
      delivery: "10-14 weeks",
      seller: "Zion Tech Group",
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: featuredListings.length },
    { id: 'Web Development', name: 'Web Development', count: featuredListings.filter(item => item.category === 'Web Development').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: featuredListings.filter(item => item.category === 'Cybersecurity').length },
    { id: 'Cloud Solutions', name: 'Cloud Solutions', count: featuredListings.filter(item => item.category === 'Cloud Solutions').length },
    { id: 'AI & Analytics', name: 'AI & Analytics', count: featuredListings.filter(item => item.category === 'AI & Analytics').length }
  ];

  const filteredListings = selectedCategory === 'all' 
    ? featuredListings 
    : featuredListings.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our most popular and innovative technology solutions that are transforming businesses worldwide
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-slate-700'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredListings.map((listing, index) => (
              <motion.div
                key={listing.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-slate-500 transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {listing.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      Featured
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-slate-900/80 text-white p-2 rounded-full hover:bg-slate-900 transition-colors duration-300">
                    <Heart className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-cyan-400 font-medium">{listing.category}</span>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm text-white">{listing.rating}</span>
                      <span className="ml-1 text-xs text-gray-400">({listing.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {listing.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {listing.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {listing.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full border border-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-cyan-400">{listing.price}</div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {listing.delivery}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {listing.views} views
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {listing.likes} likes
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">by {listing.seller}</span>
                    <Link
                      to={`/services/${listing.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}