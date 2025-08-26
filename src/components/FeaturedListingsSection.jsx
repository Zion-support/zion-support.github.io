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
  Brain,
  Award,
  TrendingUp,
  Phone
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function FeaturedListingsSection() {
  const [hoveredListing, setHoveredListing] = useState(null);

  const featuredListings = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence Platform",
      category: "AI Services",
      description: "Advanced analytics platform with machine learning capabilities for enterprise decision making.",
      price: "$399/month",
      rating: 4.9,
      reviews: 127,
      views: 2847,
      likes: 156,
      duration: "Immediate",
      team: "AI Experts",
      tags: ["AI", "Analytics", "Machine Learning", "Business Intelligence"],
      highlights: [
        "Real-time data processing",
        "Predictive analytics",
        "Custom dashboards",
        "API integration"
      ],
      technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "AWS"],
      link: "/services/ai-business-intelligence",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Financial Modeling Suite",
      category: "Quantum Computing",
      description: "Cutting-edge quantum computing solution for portfolio optimization and risk assessment.",
      price: "$1,999/month",
      rating: 4.8,
      reviews: 89,
      views: 1956,
      likes: 134,
      duration: "Immediate",
      team: "Quantum Experts",
      tags: ["Quantum Computing", "Finance", "Risk Management", "Portfolio Optimization"],
      highlights: [
        "Quantum algorithm optimization",
        "Portfolio risk assessment",
        "Real-time market analysis",
        "Compliance monitoring"
      ],
      technologies: ["Qiskit", "Python", "React", "Financial APIs", "Quantum Hardware"],
      link: "/services/quantum-financial-modeling",
      featured: true
    },
    {
      id: 3,
      title: "AI-Powered Cybersecurity Platform",
      category: "Cybersecurity",
      description: "Comprehensive security platform using AI to detect and prevent cyber threats in real-time.",
      price: "$399/month",
      rating: 4.9,
      reviews: 203,
      views: 3421,
      likes: 189,
      duration: "Immediate",
      team: "Security Experts",
      tags: ["Cybersecurity", "AI", "Threat Detection", "Compliance"],
      highlights: [
        "AI threat detection",
        "Behavioral analytics",
        "Automated response",
        "24/7 monitoring"
      ],
      technologies: ["Python", "TensorFlow", "React", "Kubernetes", "Security APIs"],
      link: "/services/ai-cybersecurity",
      featured: true
    },
    {
      id: 4,
      title: "Autonomous Robotics Management Platform",
      category: "Autonomous Systems",
      description: "Intelligent platform for managing fleets of autonomous robots in warehouses and manufacturing.",
      price: "$599/month",
      rating: 4.7,
      reviews: 45,
      views: 1234,
      likes: 89,
      duration: "Immediate",
      team: "Robotics Experts",
      tags: ["Robotics", "AI", "Automation", "Manufacturing"],
      highlights: [
        "Multi-robot fleet management",
        "AI pathfinding algorithms",
        "Task optimization",
        "Real-time monitoring"
      ],
      technologies: ["Python", "ROS", "Computer Vision", "IoT", "Cloud"],
      link: "/services/autonomous-robotics",
      featured: true
    },
    {
      id: 5,
      title: "Digital Twin Enterprise Platform",
      category: "Digital Twin",
      description: "Create virtual replicas of physical assets for real-time monitoring and predictive maintenance.",
      price: "$799/month",
      rating: 4.8,
      reviews: 67,
      views: 1890,
      likes: 112,
      duration: "Immediate",
      team: "IoT Experts",
      tags: ["Digital Twin", "IoT", "Predictive Analytics", "3D Modeling"],
      highlights: [
        "3D asset modeling",
        "Real-time data sync",
        "Predictive analytics",
        "AR/VR visualization"
      ],
      technologies: ["Unity", "IoT", "3D Graphics", "Machine Learning", "Cloud"],
      link: "/services/digital-twin",
      featured: true
    },
    {
      id: 6,
      title: "Edge AI Computing Platform",
      category: "Edge Computing",
      description: "Deploy AI models directly on edge devices for real-time processing and offline capabilities.",
      price: "$299/month",
      rating: 4.6,
      reviews: 34,
      views: 890,
      likes: 67,
      duration: "Immediate",
      team: "Edge Computing Experts",
      tags: ["Edge Computing", "AI", "IoT", "Real-time"],
      highlights: [
        "Edge AI deployment",
        "Real-time inference",
        "Offline processing",
        "Device management"
      ],
      technologies: ["TensorFlow Lite", "IoT", "Edge Devices", "Python", "Cloud"],
      link: "/services/edge-ai",
      featured: true
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
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/20 backdrop-blur-sm rounded-full border border-zion-cyan/30 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Rocket className="h-5 w-5 text-zion-cyan" />
            <span className="text-zion-cyan text-sm font-medium">Featured Services</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Cutting-Edge Micro SAAS Solutions
          </motion.h2>
          
          <motion.p 
            className="text-xl text-zion-slate-light max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover our most innovative and in-demand services that are transforming industries 
            and driving digital transformation across the globe.
          </motion.p>
        </motion.div>

        {/* Featured Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredListings.map((listing, index) => (
            <motion.div
              key={listing.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredListing(listing.id)}
              onHoverEnd={() => setHoveredListing(null)}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full transition-all duration-300 hover:bg-white/10 hover:border-zion-cyan/30 hover:transform hover:scale-105">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                        {listing.category}
                      </Badge>
                      {listing.featured && (
                        <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                      {listing.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zion-slate-light mb-4 line-clamp-2">
                  {listing.description}
                </p>

                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {listing.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                        <Zap className="h-3 w-3 text-zion-cyan mr-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {listing.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-zion-blue/20 text-zion-blue-light text-xs rounded-md border border-zion-blue/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      {renderStars(listing.rating)}
                    </div>
                    <div className="text-xs text-zion-slate-light">
                      {listing.rating} ({listing.reviews})
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Eye className="h-4 w-4 text-zion-cyan" />
                    </div>
                    <div className="text-xs text-zion-slate-light">
                      {listing.views}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Heart className="h-4 w-4 text-zion-purple" />
                    </div>
                    <div className="text-xs text-zion-slate-light">
                      {listing.likes}
                    </div>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-zion-cyan">
                      {listing.price}
                    </div>
                    <div className="text-sm text-zion-slate-light">
                      {listing.duration} • {listing.team}
                    </div>
                  </div>
                  <Button 
                    className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-dark hover:to-zion-blue-dark text-white"
                    size="sm"
                    asChild
                  >
                    <Link to={listing.link}>
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-zion-slate-light mb-6 text-lg">
            Ready to explore our complete portfolio of 100+ micro SAAS services?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8"
              size="lg"
              asChild
            >
              <Link to="/all-services-2027">
                <span>View All Services</span>
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white text-lg py-6 px-8"
              size="lg"
              asChild
            >
              <Link to="/contact">
                <span>Contact Sales</span>
                <Phone className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
