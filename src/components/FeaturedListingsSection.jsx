import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Eye, 
  Heart, 
  Clock, 
  Users, 
  ArrowRight,
  Zap,
  Shield,
  Rocket,
  Brain
} from 'lucide-react';

export default function FeaturedListingsSection() {
  const [hoveredListing, setHoveredListing] = useState(null);

  const featuredListings = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence Platform",
      description: "Advanced analytics platform with machine learning capabilities for enterprise decision making.",
      price: "$2,999/month",
      rating: 4.9,
      reviews: 127,
      views: 2847,
      likes: 156,
      duration: "8-12 weeks",
      team: "5-8 experts",
      tags: ["AI", "Analytics", "Machine Learning", "Business Intelligence"],
      highlights: [
        "Real-time data processing",
        "Predictive analytics",
        "Custom dashboards",
        "API integration"
      ],
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS"],
      link: "/services/ai-business-intelligence"
    },
    {
      id: 2,
      title: "Quantum Financial Modeling Platform",
      description: "Cutting-edge quantum computing solution for portfolio optimization and risk assessment.",
      price: "$10,000/month",
      rating: 4.8,
      reviews: 89,
      views: 1956,
      likes: 134,
      duration: "16-20 weeks",
      team: "8-12 experts",
      tags: ["Quantum Computing", "Finance", "Risk Management", "Portfolio Optimization"],
      highlights: [
        "Quantum algorithm optimization",
        "Portfolio risk assessment",
        "Real-time market analysis",
        "Compliance monitoring"
      ],
      technologies: ["Qiskit", "Python", "React", "Financial APIs", "Quantum Hardware"],
      link: "/services/quantum-financial-modeling"
    },
    {
      id: 3,
      title: "AI-Powered Cybersecurity Suite",
      description: "Comprehensive security platform using AI to detect and prevent cyber threats in real-time.",
      price: "$3,500/month",
      rating: 4.9,
      reviews: 203,
      views: 3421,
      likes: 189,
      duration: "10-14 weeks",
      team: "6-10 experts",
      tags: ["Cybersecurity", "AI", "Threat Detection", "Compliance"],
      highlights: [
        "AI threat detection",
        "Behavioral analytics",
        "Automated response",
        "24/7 monitoring"
      ],
      technologies: ["Python", "TensorFlow", "React", "Kubernetes", "Security APIs"],
      link: "/services/ai-cybersecurity"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-400'}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Innovations</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Discover our most advanced and popular technology solutions that are transforming industries worldwide
          </p>
        </motion.div>

        {/* Featured Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredListings.map((listing, index) => (
            <motion.div
              key={listing.id}
              className="group bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 rounded-2xl overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredListing(listing.id)}
              onHoverEnd={() => setHoveredListing(null)}
              whileHover={{ y: -8 }}
            >
              {/* Header */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                      {listing.title}
                    </h3>
                    <p className="text-zion-slate-light text-sm">
                      {listing.description}
                    </p>
                  </div>
                </div>

                {/* Meta Information */}
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-zion-slate-light/80 text-xs">
                    <Clock className="w-3 h-3"/>
                    <span>{listing.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light/80 text-xs">
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
                  <Link 
                    to={listing.link}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4"/>
                  </Link>
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
        </div>
        
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
              <Link 
                to="/services"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
              >
                View All Projects
                <ArrowRight className="w-5 h-5"/>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
