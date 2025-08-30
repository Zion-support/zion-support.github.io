import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Eye, Heart, Clock, MapPin, Users, Tag, ArrowRight } from 'lucide-react';

const featuredListings = [
  {
    id: 1,
    title: "AI-Powered E-commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce platform with AI-powered product recommendations and real-time analytics",
    rating: 4.9,
    reviews: 234,
    views: 4567,
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
  }
];

export function FeaturedListingsSection() {
  const [hoveredListing, setHoveredListing] = useState(null);

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
    hidden: { 
      y: 30,
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-zion-purple rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-zion-cyan rounded-full blur-3xl"></div>
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
            Featured <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Discover our most successful and innovative projects that showcase our expertise 
            and commitment to delivering exceptional results.
          </p>
        </motion.div>

        {/* Featured Listings Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredListings.map((listing) => (
            <motion.div
              key={listing.id}
              className="group relative"
              variants={itemVariants}
              onHoverStart={() => setHoveredListing(listing.id)}
              onHoverEnd={() => setHoveredListing(null)}
            >
              <div className="bg-gradient-to-br from-zion-slate/20 to-zion-slate/10 backdrop-blur-sm rounded-2xl border border-zion-slate/30 overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={listing.image} 
                    alt={listing.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {listing.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-zion-slate-dark/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {listing.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category and Rating */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-zion-cyan text-sm font-medium">{listing.category}</span>
                    <div className="flex items-center gap-1">
                      {renderStars(listing.rating)}
                      <span className="text-zion-slate-light text-sm ml-1">({listing.reviews})</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {listing.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                    {listing.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                    <div className="flex items-center gap-2 text-zion-slate-light">
                      <Clock className="w-4 h-4" />
                      <span>{listing.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light">
                      <Users className="w-4 h-4" />
                      <span>{listing.team}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light">
                      <MapPin className="w-4 h-4" />
                      <span>{listing.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light">
                      <Eye className="w-4 h-4" />
                      <span>{listing.views}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {listing.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 flex items-center justify-center gap-2">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
            <div className="px-8 py-6 bg-zion-blue-dark rounded-xl">
              <p className="text-white text-lg mb-4">
                Ready to start your next project?
              </p>
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
