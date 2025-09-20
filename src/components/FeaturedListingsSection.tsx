import React, { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
const featuredListings = [
  {
    id: 1,title: "AI-Powered Business Intelligence",description: "Transform your data into actionable insights with our advanced AI analytics platform.",category: "AI Services",price: "$299/month",image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",rating: 4.8,reviews: 156,features: ["Real-time analytics", "Predictive insights", "Custom dashboards"],
    link: "/services/ai-analytics"
  }
  {
    id: 2,title: "Quantum Computing Solutions",description: "Next-generation quantum computing services for complex optimization problems.",category: "Emerging Tech",price: "$1,999/month",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400",rating: 4.9,reviews: 89,features: ["Quantum algorithms", "Optimization", "Research support"],
    link: "/services/quantum-computing"
  }
  {
    id: 3,title: "Blockchain Supply Chain Platform",description: "Transparent and secure supply chain management using blockchain technology.",category: "Blockchain",price: "$599/month",image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400",rating: 4.7,reviews: 234,features: ["Smart contracts", "Traceability", "Security"],
    link: "/services/blockchain"
  }
  {
    id: 4,title: "IoT Edge Computing Platform",description: "Real-time IoT data processing and analytics at the edge for instant insights.",category: "IoT",price: "$449/month",image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",rating: 4.6,reviews: 178,features: ["Edge processing", "Real-time analytics", "Device management"],
    link: "/services/iot-platform"
  }
]
export function FeaturedListingsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All"),
  const [hoveredListing, setHoveredListing] = useState<number | null>(null)
  const [showFilters, setShowFilters] = useState(false)
  const filteredListings = selectedCategory === "All"
    ? featuredListings
    : featuredListings.filter(listing => listing.category === selectedCategory)
  const containerVariants = {
    hidden: { opacity: 0 }
    visible: {
      opacity: 1,transition: {
        staggerChildren: 0.15,delayChildren: 0.1
      }
    }
  }
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ))
  }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredListings.map((listing, index) => (
            <motion.div 
              key={listing.id} 
              className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredListing(listing.id)}
              onHoverEnd={() => setHoveredListing(null)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {listing.category}
                  </span>
                  <div className="flex items-center gap-1">
                    {renderStars(listing.rating)}
                    <span className="text-sm text-gray-500">({listing.reviews})</span>
                  </div>
                </div>

                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {listing.image ? (
                    <img src={listing.image} alt={listing.title} className="w-full h-full object-cover rounded-xl" />
                  ) : (
                    <span className="text-white text-2xl">🚀</span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {listing.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {listing.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {listing.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">{listing.price}</span>
                  <Link
                    to={listing.link}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>

              <div className="px-6 pb-6">
                <Link
                  to={listing.link}
                  className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-center block group-hover:shadow-lg"
                >
                  Get Started
                </Link>
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover: from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105"
          >
            View All Services
            <span className="text-xl">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}