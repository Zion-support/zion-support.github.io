import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Eye, Heart, ArrowRight, Clock, Users, TrendingUp, Award, Filter, Search, MapPin, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  },
  {
    id: 4,
    title: "Healthcare AI Diagnostic System",
    category: "AI & Machine Learning",
    description: "Advanced medical diagnostic platform using computer vision and machine learning for accurate disease detection",
    rating: 4.9,
    reviews: 203,
    views: 4567,
    likes: 278,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    price: "$35,000",
    tags: ["Python", "TensorFlow", "Computer Vision", "Healthcare"],
    duration: "6-8 months",
    team: "8 experts",
    location: "Remote",
    featured: true,
    technologies: ["Python", "TensorFlow", "OpenCV", "Docker", "AWS"],
    highlights: ["95% Accuracy", "Real-time Processing", "HIPAA Compliant", "API Integration"]
  },
  {
    id: 5,
    title: "Smart City IoT Platform",
    category: "IoT Solutions",
    description: "Comprehensive IoT platform for smart city management with real-time monitoring and analytics",
    rating: 4.6,
    reviews: 78,
    views: 1890,
    likes: 112,
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    price: "$28,000",
    tags: ["IoT", "Big Data", "Analytics", "Smart Cities"],
    duration: "5-6 months",
    team: "7 experts",
    location: "Hybrid",
    featured: false,
    technologies: ["IoT Sensors", "Apache Kafka", "Elasticsearch", "React", "Node.js"],
    highlights: ["Real-time Monitoring", "Predictive Analytics", "Scalable Architecture", "Dashboard"]
  },
  {
    id: 6,
    title: "Cybersecurity Assessment & Implementation",
    description: "Comprehensive security evaluation and implementation for enterprise-level protection.",
    category: "Cybersecurity",
    rating: 4.9,
    reviews: 156,
    views: 3241,
    likes: 189,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    price: "$25,000",
    tags: ["Security", "Compliance", "Threat Detection", "Incident Response"],
    duration: "2-4 months",
    team: "4 experts",
    location: "Hybrid",
    featured: true,
    technologies: ["Security Tools", "Compliance Frameworks", "Threat Intelligence", "SIEM"],
    highlights: ["Security Audits", "Threat Detection", "Incident Response", "Compliance"]
  }
];

export function FeaturedListingsSection() {
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-slate-dark to-zion-blue-dark relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Discover our most popular and highly-rated technology solutions that drive business transformation
          </p>
        </motion.div>
        
        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {["All", "Web Development", "Mobile Development", "Cloud & DevOps", "AI & Machine Learning", "IoT Solutions", "Cybersecurity"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                  : 'bg-zion-blue-dark/50 text-zion-slate-light hover:bg-zion-blue-dark/80 border border-zion-blue-light/30'
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
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-zion-blue-dark/40 backdrop-blur-sm rounded-2xl border border-zion-blue-light/30 overflow-hidden group hover:border-zion-cyan/50 transition-all duration-300"
              onMouseEnter={() => setHoveredListing(listing.id)}
              onMouseLeave={() => setHoveredListing(null)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={listing.image} 
                  alt={listing.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zion-blue-dark/80 to-transparent" />
                
                {/* Featured Badge */}
                {listing.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-3 py-1 rounded-full text-xs font-bold">
                    Featured
                  </div>
                )}
                
                {/* Category */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-zion-cyan/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {listing.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {renderStars(listing.rating)}
                    <span className="text-zion-slate-light text-sm ml-1">({listing.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-4 text-zion-slate-light text-sm">
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {listing.views}
                    </span>
                    <span className="flex items-center">
                      <Heart className="w-4 h-4 mr-1" />
                      {listing.likes}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {listing.title}
                </h3>
                
                <p className="text-zion-slate-light text-sm leading-relaxed mb-4">
                  {listing.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {listing.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="bg-zion-blue-light/20 text-zion-cyan text-xs px-2 py-1 rounded-full border border-zion-cyan/30">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Details */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-center text-zion-slate-light">
                    <Clock className="w-4 h-4 mr-2 text-zion-cyan" />
                    {listing.duration}
                  </div>
                  <div className="flex items-center text-zion-slate-light">
                    <Users className="w-4 h-4 mr-2 text-zion-cyan" />
                    {listing.team}
                  </div>
                  <div className="flex items-center text-zion-slate-light">
                    <MapPin className="w-4 h-4 mr-2 text-zion-cyan" />
                    {listing.location}
                  </div>
                  <div className="flex items-center text-zion-slate-light">
                    <TrendingUp className="w-4 h-4 mr-2 text-zion-cyan" />
                    {listing.rating}
                  </div>
                </div>
                
                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-zion-cyan">{listing.price}</span>
                  <Link
                    to={`/services/${listing.id}`}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-medium rounded-lg hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 group-hover:shadow-lg group-hover:shadow-zion-cyan/25"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-zion-blue-dark/80 to-zion-purple-dark/80 backdrop-blur-sm rounded-3xl p-12 border border-zion-blue-light/30 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Let our expert team help you bring your vision to life with cutting-edge technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-bold rounded-xl hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-bold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}