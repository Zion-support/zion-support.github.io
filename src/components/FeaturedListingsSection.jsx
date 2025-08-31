import React, { useState } from 'react';
<<<<<<< HEAD
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
import { Star, Eye, Heart, ArrowRight, Clock, Users, Award import { Link } from 'react-router-dom';
=======
import { motion } from 'framer-motion';
import { Star, Eye, Heart, Clock, MapPin, Users, Tag, ArrowRight } from 'lucide-react';
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
=======
import { Star, Eye, Heart, ArrowRight, Clock, Users, Award, Zap, Shield, Rocket, Brain, TrendingUp, Phone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
>>>>>>> 0db51c83ec2639597974243032be26f90b238361

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
<<<<<<< HEAD
    highlights: ["AI Recommendations", "Real-time Analytics", "Mobile Responsive", "SEO Optimized"]
=======
    highlights: ["AI Recommendations", "Real-time Analytics", "Mobile Responsive", "SEO Optimized"],
    link: "/services/ai-ecommerce"
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
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
<<<<<<< HEAD
    highlights: ["Biometric Auth", "Real-time Transactions", "Security Compliance", "Cross-platform"]
=======
    highlights: ["Biometric Auth", "Real-time Transactions", "Security Compliance", "Cross-platform"],
    link: "/services/mobile-banking"
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
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
<<<<<<< HEAD
    highlights: ["Zero Downtime", "Auto-scaling", "Monitoring", "Security"]
=======
    highlights: ["Zero Downtime", "Auto-scaling", "Monitoring", "Security"],
    link: "/services/cloud-migration"
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
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
<<<<<<< HEAD
    highlights: ["95% Accuracy", "Real-time Processing", "HIPAA Compliant", "API Integration"]
  },
  {
    id: 5,
    title: "Smart City IoT Platform",
    category: "IoT Solutions",
    description: "Comprehensive IoT platform for smart city management with real-time monitoring and analytics",
=======
    highlights: ["AI Diagnostics", "Medical Imaging", "HIPAA Compliant", "Real-time Analysis"],
    link: "/services/healthcare-ai"
  },
  {
    id: 5,
    title: "IoT Smart City Platform",
    category: "IoT & Smart Cities",
    description: "Comprehensive IoT platform for smart city management including traffic, utilities, and public services",
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
    rating: 4.6,
    reviews: 78,
    views: 1890,
    likes: 112,
<<<<<<< HEAD
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    price: "$28,000",
    tags: ["IoT", "Big Data", "Analytics", "Smart Cities"],
    duration: "5-6 months",
=======
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    price: "$28,000",
    tags: ["IoT", "Smart Cities", "Real-time Data", "Analytics"],
    duration: "5-7 months",
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
    team: "7 experts",
    location: "Hybrid",
    featured: false,
    technologies: ["IoT Sensors", "Apache Kafka", "Elasticsearch", "React", "Node.js"],
<<<<<<< HEAD
    highlights: ["Real-time Monitoring", "Predictive Analytics", "Scalable Architecture", "Dashboard"]

=======
    highlights: ["Real-time Monitoring", "Predictive Analytics", "Scalable Architecture", "Dashboard"],
    link: "/services/iot-smart-city"
  }
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
];

export function FeaturedListingsSection() {
  const [hoveredListing, setHoveredListing] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
<<<<<<< HEAD
        staggerChildren: 0.15,
        delayChildren: 0.1


  };

  const itemVariants = {
    hidden: { 
      y: 30,
      opacity: 0 
    },
=======
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
    visible: {
      y: 0,
      opacity: 1,
      transition: {
<<<<<<< HEAD
        duration: 0.6,
        ease: "easeOut"


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
<<<<<<< HEAD
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
=======
        <motion.div 
          className="text-center mb-16" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} 
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          transition={{ duration: 0.6 }}

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Discover our most successful and innovative projects that showcase our expertise
            and commitment to delivering exceptional results.
          </p>
        </motion.div>

<<<<<<< HEAD
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
=======
        {/* Featured Listings Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
=======
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Featured Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Discover our most popular and innovative solutions that are transforming businesses worldwide
          </motion.p>
        </div>

        <motion.div 
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD

=======
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
          {featuredListings.map((listing, index) => (
            <motion.div
              key={listing.id}
              variants={itemVariants}
<<<<<<< HEAD
              onHoverStart={() => setHoveredListing(listing.id)}
              onHoverEnd={() => setHoveredListing(null)}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative"

              <div className="bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 rounded-2xl overflow-hidden hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 h-full">
=======
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
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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

<<<<<<< HEAD
                  <p className="text-zion-slate-light text-sm mb-4 line-clamp-2">
=======
                  {/* Description */}
                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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
<<<<<<< HEAD
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

                        <h4 className="text-zion-cyan font-semibold text-sm mb-3">Key Highlights:</h4>
                        <div className="space-y-2 mb-4">
                          {listing.highlights.map((highlight, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center gap-2 text-zion-slate-light/80 text-xs"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}

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

                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
=======
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 flex items-center justify-center gap-2">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </button>
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                </div>
              </div>
=======
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
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
                {listing.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                      Featured
                    </Badge>
                  </div>
                )}
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <div className="flex items-center bg-black/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm font-medium ml-1">{listing.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {listing.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{listing.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {listing.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {listing.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>{listing.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{listing.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{listing.team}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-gray-900">{listing.price}</div>
                  <div className="text-sm text-gray-500">
                    {listing.reviews} reviews
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {listing.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {listing.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{listing.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {listing.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    <Link to={listing.link} className="flex items-center gap-2">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" className="group-hover:bg-blue-50">
                    <Heart className="w-4 h-4 group-hover:text-red-500 transition-colors" />
                  </Button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <AnimatePresence>
                {hoveredListing === listing.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-blue-600/90 to-purple-600/90 flex items-center justify-center"
                  >
                    <div className="text-center text-white p-6">
                      <h3 className="text-xl font-bold mb-2">{listing.title}</h3>
                      <p className="text-sm mb-4 opacity-90">{listing.description}</p>
                      <Button className="bg-white text-blue-600 hover:bg-gray-100">
                        <Link to={listing.link} className="flex items-center gap-2">
                          Explore Now
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
            </motion.div>
          ))}
        </motion.div>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Enhanced bottom CTA */}
        <motion.div
          className="text-center mt-20"
=======
        {/* CTA Section */}
        <motion.div 
          className="text-center"
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}

          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
            <div className="px-8 py-6 bg-zion-blue-dark rounded-xl">
              <p className="text-white text-lg mb-4">
                Ready to start your next project?
              </p>
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </button>
=======
        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of businesses already using our solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/contact" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Contact Sales
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link to="/services" className="flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Browse All Services
                </Link>
              </Button>
>>>>>>> 0db51c83ec2639597974243032be26f90b238361
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}}}}}}}