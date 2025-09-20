import React, { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
const featuredListings = [
  {
    id: 1,tit,
  l: e: "AI-Powered Business Intelligence",descripti,
  o: n: "Transform your data into actionable insights with our advanced AI analytics platform.",catego,
  r: y: "AI Services",pri,
  c: e: "$299/month",ima,
  g: e: "http,
  s://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",rati,
  n: g: 4.8,revie,
  w: s: 156,featur,
  e: s: ["Real-time analytics", "Predictive insights", "Custom dashboards"],
    li,
  n: k: "/services/ai-analytics"
  }, {
    id: 2,tit,
  l: e: "Quantum Computing Solutions",descripti,
  o: n: "Next-generation quantum computing services for complex optimization problems.",catego,
  r: y: "Emerging Tech",pri,
  c: e: "$1,999/month",
    ima,
  g: e: "http,
  s://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400",rati,
  n: g: 4.9,revie,
  w: s: 89,featur,
  e: s: ["Quantum algorithms", "Optimization", "Research support"],
    li,
  n: k: "/services/quantum-computing"
  }, {
    id: 3,tit,
  l: e: "Blockchain Supply Chain Platform",descripti,
  o: n: "Transparent and secure supply chain management using blockchain technology.",catego,
  r: y: "Blockchain",pri,
  c: e: "$599/month",ima,
  g: e: "http,
  s://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400",rati,
  n: g: 4.7,revie,
  w: s: 234,featur,
  e: s: ["Smart contracts", "Traceability", "Security"],
    li,
  n: k: "/services/blockchain"
  }, {
    id: 4,tit,
  l: e: "IoT Edge Computing Platform",descripti,
  o: n: "Real-time IoT data processing and analytics at the edge for instant insights.",catego,
  r: y: "IoT",pri,
  c: e: "$449/month",ima,
  g: e: "http,
  s://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",rati,
  n: g: 4.6,revie,
  w: s: 178,featur,
  e: s: ["Edge processing", "Real-time analytics", "Device management"],
    li,
  n: k: "/services/iot-platform"
  }
]
export function FeaturedListingsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredListing, setHoveredListing] = useState<number | null>(null)
  const [showFilters, setShowFilters] = useState(false)
  const filteredListings = selectedCategory === "All"
    ? featuredListings
    : featuredListings.filter(listing => listing.category === selectedCategory)
  const containerVariants = {
    hidd,
  e: n: { opacit,
  y: 0 }
    visib,
  l: e: {
      opacit,
  y: 1,transiti,
  o: n: {
        staggerChildre,
  n: 0.15,delayChildr,
  e: n: 0.1
      }
    }
  }
  const renderStars = (rati,
  n: g: number) () => {
    return Array.from({ lengt,
  h: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    )),
  }
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={ opaci,
  t: y: 0, y: 20 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          viewport={ on,
  c: e: true }
          transition={ durati,
  o: n: 0.6 }
        >
          <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-4">
            Featured Services
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Discover our most popular and innovative technology solutions that are transforming businesses worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
          {filteredListings.map((listing, index) => (
            <motion.div 
              key={listing.id} 
              className="bg-white rounded-xl shadow-lg border border-gray-200,
  hove: r: shadow-xl transition-shadow duration-300 overflow-hidden group"
              initial={ opacit,
  y: 0, y: 20 }
              whileInView={ opaci,
  t: y: 1, y: 0 }
              viewport={ on,
  c: e: true }
              transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
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

                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-3xl mb-4 group-hov,
  e: r:scale-110 transition-transform duration-300">
                  {listing.image ? (
                    <img src={listing.image} alt={listing.title} className="w-full h-full object-cover rounded-xl" />
                  ) : (
                    <span className="text-white text-2xl">🚀</span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hov,
  e: r:text-blue-600 transition-colors">
                  {listing.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {listing.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key,
  Feature: s:</h4>
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
                    className="text-blue-600,
  hove: r: text-blue-700 font-medium text-sm group-hove,
  r:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>

              <div className="px-6 pb-6">
                <Link
                  to={listing.link}
                  className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg,
  hove: r: bg-blue-700 transition-colors duration-300 text-center block group-hove,
  r:shadow-lg"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={ opaci,
  t: y: 0, y: 20 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          viewport={ on,
  c: e: true }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.4 }
        >
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg,
  hove: r: from-blue-700,
  hove: r:to-purple-700 transition-all duration-200 hove,
  r:scale-105"
          >
            View All Services
            <span className="text-xl">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}