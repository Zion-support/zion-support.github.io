import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Eye, Heart, ArrowRight, Clock, Users, TrendingUp, Award, Filter, Search, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedListing {
  id: number;
  title: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  views: number;
  likes: number;
  image: string;
  price: string;
  tags: string[];
  duration: string;
  team: string;
  location: string;
  featured: boolean;
  technologies: string[];
  highlights: string[];
}

const featuredListings: FeaturedListing[] = [
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
    duration: "3-4 months",
    team: "5 experts",
    location: "Remote",
    featured: true,
    technologies: ["React", "Node.js", "MongoDB", "AI/ML", "AWS"],
    highlights: ["AI Recommendations", "Real-time Analytics", "Mobile Responsive", "SEO Optimized"]
  },
  {
    id: 2,
    title: "Mobile Banking Application",
    category: "Mobile Development",
    description: "Secure and user-friendly mobile banking app with biometric authentication and real-time transactions",
    rating: 4.8,
    reviews: 89,
    views: 1956,
    likes: 134,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$22,000",
    tags: ["React Native", "Security", "FinTech", "Biometrics"],
    duration: "4-5 months",
    team: "6 experts",
    location: "Hybrid",
    featured: true,
    technologies: ["React Native", "Node.js", "PostgreSQL", "Biometrics", "Security"],
    highlights: ["Biometric Auth", "Real-time Transactions", "Security Compliance", "Cross-platform"]
  },
  {
    id: 3,
    title: "Cloud Infrastructure Migration",
    category: "Cloud & DevOps",
    description: "Complete migration from on-premise to cloud with automated CI/CD pipelines and monitoring",
    rating: 4.7,
    reviews: 156,
    views: 3241,
    likes: 189,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    price: "$18,500",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    duration: "2-3 months",
    team: "4 experts",
    location: "On-site",
    featured: true,
    technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Prometheus"],
    highlights: ["Zero Downtime", "Auto-scaling", "Monitoring", "Security"]
  }
];

export default function FeaturedListingsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredListing, setHoveredListing] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
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
                    to={`/services/${listing.id}`}
                    className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
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
            to="/comprehensive-services-showcase-2025"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/25"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}