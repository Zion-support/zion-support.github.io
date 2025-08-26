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

export function FeaturedListingsSection() {
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
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover our most popular and innovative AI-powered solutions that are transforming businesses worldwide
          </p>
        </motion.div>

        {/* Featured Listings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredListings.map((listing, index) => (
            <motion.div
              key={listing.id}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredListing(listing.id)}
              onHoverEnd={() => setHoveredListing(null)}
              whileHover={{ y: -8 }}
            >
              {/* Listing Card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 h-full transition-all duration-300 hover:bg-white/20 hover:border-zion-cyan/50">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-zion-cyan rounded-full"></div>
                    <span className="text-zion-cyan text-sm font-medium">Featured</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {renderStars(listing.rating)}
                    <span className="text-zion-slate-light text-sm ml-2">({listing.reviews})</span>
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {listing.title}
                </h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  {listing.description}
                </p>

                {/* Price and Duration */}
                <div className="flex justify-between items-center mb-4">
                  <div className="text-2xl font-bold text-zion-cyan">{listing.price}</div>
                  <div className="text-zion-slate-light text-sm">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {listing.duration}
                  </div>
                </div>

                {/* Team Size */}
                <div className="flex items-center gap-2 mb-4 text-zion-slate-light text-sm">
                  <Users className="w-4 h-4" />
                  <span>{listing.team}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {listing.tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-zion-blue-dark/50 border border-zion-cyan/30 rounded-full text-xs text-zion-cyan"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <p className="text-zion-slate-light text-sm mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-1">
                    {listing.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded text-xs text-zion-purple-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-between items-center mb-4 text-zion-slate-light text-sm">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{listing.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{listing.likes}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link 
                  to={listing.link}
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
                >
                  View Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Hover Details */}
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
                    <div className="space-y-2">
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
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-white/10 backdrop-blur-sm border border-zion-cyan/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-zion-slate-light mb-6">
              Our expert team can build a tailored solution that perfectly fits your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
              >
                Get Custom Quote
              </Link>
              <Link 
                to="/services"
                className="px-8 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan hover:text-white transition-colors"
              >
                Browse All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
