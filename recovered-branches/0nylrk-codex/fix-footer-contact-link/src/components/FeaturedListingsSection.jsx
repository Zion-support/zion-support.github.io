<<<<<<< HEAD
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Eye, Heart, ArrowRight, Clock, Users, Award } from 'lucide-react';

const FeaturedListingsSection = () => {
  const [hoveredListing, setHoveredListing] = useState(null);

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
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2eee

const FeaturedListingsSection: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">FeaturedListingsSection</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default FeaturedListingsSection;
