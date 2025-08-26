import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Eye, Heart, ArrowRight, Clock, Users } from 'lucide-react';

export function FeaturedListingsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredListing, setHoveredListing] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const featuredListings = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence Platform",
      description: "Enterprise-grade BI solution with advanced analytics and machine learning capabilities",
      category: "AI & Analytics",
      rating: 4.9,
      reviews: 156,
      price: "$15,000",
      image: "🤖",
      link: "/services/ai-business-intelligence",
      duration: "8-12 weeks",
      team: "5-8 experts",
      tags: ["AI", "Analytics", "Machine Learning", "Business Intelligence"],
      views: 1247,
      likes: 89,
      highlights: ["Real-time analytics", "Predictive modeling", "Custom dashboards"],
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL"]
    },
    {
      id: 2,
      title: "Quantum-Secure Blockchain Infrastructure",
      description: "Next-generation blockchain with quantum-resistant cryptography and enterprise features",
      category: "Blockchain",
      rating: 4.8,
      reviews: 98,
      price: "$25,000",
      image: "🔗",
      link: "/services/blockchain-infrastructure",
      duration: "12-16 weeks",
      team: "6-10 experts",
      tags: ["Blockchain", "Cryptography", "Quantum", "Security"],
      views: 892,
      likes: 67,
      highlights: ["Quantum-resistant", "High throughput", "Enterprise ready"],
      technologies: ["Rust", "Substrate", "Web3", "Zero-Knowledge Proofs"]
    },
    {
      id: 3,
      title: "5G Network Optimization Suite",
      description: "Comprehensive 5G network management and optimization platform for telecom operators",
      category: "5G & IoT",
      rating: 4.7,
      reviews: 134,
      price: "$35,000",
      image: "📡",
      link: "/services/5g-network-optimization",
      duration: "16-20 weeks",
      team: "8-12 experts",
      tags: ["5G", "Network", "IoT", "Telecom"],
      views: 1103,
      likes: 78,
      highlights: ["Network slicing", "Edge computing", "AI optimization"],
      technologies: ["C++", "Kubernetes", "OpenStack", "Machine Learning"]
    }
  ];

  const featuredServices = [
    {
      title: "AI-Powered Cybersecurity Suite",
      description: "Advanced threat detection and response system using machine learning",
      category: "Cybersecurity",
      rating: 4.9,
      reviews: 156,
      price: "From $3,500",
      image: "🔒",
      link: "/services/cybersecurity",
      features: ['Security Audits', 'Threat Detection', 'Incident Response']
    }
  ];

  const filteredListings = selectedCategory === "All" 
    ? featuredListings 
    : featuredListings.filter(listing => listing.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover our most innovative and successful technology solutions that are transforming industries
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {["All", "AI & Analytics", "Blockchain", "5G & IoT", "Cybersecurity"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25"
                  : "bg-zion-blue-dark/40 text-zion-slate-light hover:bg-zion-blue-dark/60 hover:text-white border border-zion-blue-light/30"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured listings grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
        >
          {filteredListings.map((listing, index) => (
            <motion.div
              key={listing.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              onHoverStart={() => setHoveredListing(listing.id)}
              onHoverEnd={() => setHoveredListing(null)}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative overflow-hidden bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm rounded-2xl border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
            >
              {/* Header with image and category */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-zion-cyan bg-zion-cyan/10 px-3 py-1 rounded-full border border-zion-cyan/30">
                    {listing.category}
                  </span>
                  <div className="text-4xl">{listing.image}</div>
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {listing.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed text-sm mb-4">
                  {listing.description}
                </p>

                {/* Duration and team size */}
                <div className="flex items-center gap-4 mb-4 text-zion-slate-light text-xs">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3"/>
                    <span>{listing.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3"/>
                    <span>{listing.team}</span>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {listing.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 rounded-md bg-zion-slate/30 text-zion-slate-light text-xs">
                      {tag}
                    </span>
                  ))}
                  {listing.tags.length > 3 && (
                    <span className="text-zion-cyan/60 text-xs">
                      +{listing.tags.length - 3} more
                    </span>
                  )}
                </div>
                
                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-zion-slate-light">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current"/>
                    <span>{listing.rating}</span>
                    <span>({listing.reviews})</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4"/>
                      <span>{listing.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4"/>
                      <span>{listing.likes}</span>
                    </div>
                  </div>
                </div>
                
                {/* Price and CTA */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold text-zion-cyan">
                    {listing.price}
                  </span>
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                    View Details
                    <ArrowRight className="w-4 h-4"/>
                  </button>
                </div>

                {/* Expanded details on hover */}
                <AnimatePresence>
                  {hoveredListing === listing.id && (
                    <motion.div 
                      className="mt-4 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30" 
                      initial={{ opacity: 0, height: 0, y: 10 }} 
                      animate={{ opacity: 1, height: "auto", y: 0 }} 
                      exit={{ opacity: 0, height: 0, y: 10 }} 
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-zion-cyan font-semibold text-sm mb-3">Key Highlights:</h4>
                      <div className="space-y-2 mb-4">
                        {listing.highlights.map((highlight, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-center gap-2 text-zion-slate-light/80 text-xs" 
                            initial={{ opacity: 0, x: -10 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                            <span>{highlight}</span>
                          </motion.div>
                        ))}
                      </div>

                      <h4 className="text-zion-cyan font-semibold text-sm mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {listing.technologies.slice(0, 4).map((tech, idx) => (
                          <motion.span 
                            key={idx} 
                            className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30" 
                            initial={{ opacity: 0, scale: 0.8 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            transition={{ delay: idx * 0.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Enhanced bottom CTA */}
        <motion.div 
          className="text-center" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
            <div className="px-8 py-4 bg-zion-blue-dark rounded-xl">
              <p className="text-white text-lg mb-4">
                Ready to start your next project?
              </p>
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                View All Projects
                <ArrowRight className="w-5 h-5"/>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
