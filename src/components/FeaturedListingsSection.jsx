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
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-purple-400 rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our most popular and innovative technology solutions
          </p>
        </motion.div>

        {/* Featured Listings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredListings.map((listing, index) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredListing(listing.id)}
              onHoverEnd={() => setHoveredListing(null)}
              className="group"
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {listing.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {listing.description}
                    </p>
                  </div>
                </div>

                {/* Price and Rating */}
                <div className="flex justify-between items-center mb-6">
                  <div className="text-2xl font-bold text-cyan-400">{listing.price}</div>
                  <div className="flex items-center gap-2">
                    <div className="flex">{renderStars(listing.rating)}</div>
                    <span className="text-sm text-gray-400">({listing.reviews})</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {listing.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {listing.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <Zap className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {listing.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Clock className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="text-sm text-gray-400">{listing.duration}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="text-sm text-gray-400">{listing.team}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Eye className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="text-sm text-gray-400">{listing.views}</div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to={listing.link}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  <span className="flex items-center justify-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
