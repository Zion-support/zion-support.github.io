import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const featuredListings = [
  {
    id: 1,
    title: "AI-Powered Business Intelligence",
    description: "Transform your data into actionable insights with our advanced AI analytics platform.",
    category: "AI Services",
    price: "$299/month",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
    rating: 4.8,
    reviews: 156
  },
  {
    id: 2,
    title: "Quantum Computing Solutions",
    description: "Next-generation quantum computing services for complex optimization problems.",
    category: "Emerging Tech",
    price: "$1,999/month",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400",
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    title: "Blockchain Supply Chain Platform",
    description: "Transparent and secure supply chain management using blockchain technology.",
    category: "Blockchain",
    price: "$599/month",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400",
    rating: 4.7,
    reviews: 234
  },
  {
    id: 4,
    title: "IoT Edge Computing Platform",
    description: "Real-time IoT data processing and analytics at the edge for instant insights.",
    category: "IoT",
    price: "$449/month",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
    rating: 4.6,
    reviews: 178
  }
];

export function FeaturedListingsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Services
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Discover our most popular and innovative technology solutions that are transforming businesses worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredListings.map((listing, index) => (
            <motion.div
              key={listing.id}
              className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative">
                <img 
                  src={listing.image} 
                  alt={listing.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    {listing.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/70 px-2 py-1 rounded-full">
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-white text-xs">{listing.rating}</span>
                  <span className="text-gray-300 text-xs">({listing.reviews})</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                  {listing.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {listing.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-blue-400">{listing.price}</span>
                  <Link 
                    to={`/services/${listing.id}`}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105"
          >
            View All Services
            <span className="text-xl">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}