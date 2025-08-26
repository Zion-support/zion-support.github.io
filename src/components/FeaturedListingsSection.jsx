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
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-blue rounded-full"></div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Solutions</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover cutting-edge AI and technology solutions from our top-rated providers
          </p>
        </motion.div>

        {/* Featured Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredListings.map((listing, index) => (
            <motion.div
              key={listing.id}
              className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onHoverStart={() => setHoveredListing(listing.id)}
              onHoverEnd={() => setHoveredListing(null)}
            >
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-zion-cyan rounded-full"></div>
                    <span className="text-zion-cyan text-sm font-medium">Featured</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {renderStars(listing.rating)}
                    <span className="text-zion-slate-light text-sm ml-1">({listing.reviews})</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {listing.title}
                </h3>
                
                <p className="text-zion-slate-light text-sm leading-relaxed">
                  {listing.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {listing.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {listing.highlights.slice(0, 2).map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="text-zion-slate-light text-xs flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                <div>
                  <div className="text-lg font-bold text-white">{listing.duration}</div>
                  <div className="text-xs text-zion-slate-light">Duration</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-white">{listing.team}</div>
                  <div className="text-xs text-zion-slate-light">Team Size</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-white">{listing.price}</div>
                  <div className="text-xs text-zion-slate-light">Starting Price</div>
                </div>
              </div>

              {/* CTA */}
              <Link 
                to={listing.link}
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-3 px-4 rounded-xl font-semibold text-center block hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 group-hover:shadow-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link 
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white rounded-xl font-semibold transition-all duration-300 group"
          >
            View All Solutions
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
