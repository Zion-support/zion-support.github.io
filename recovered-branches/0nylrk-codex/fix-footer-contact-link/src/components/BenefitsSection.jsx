import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Users, 
  Globe, 
  Clock, 
  TrendingUp, 
  Award, 
  Rocket 
} from 'lucide-react';

const BenefitsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const benefits = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Lightning Fast Performance",
      description: "Optimized systems that deliver exceptional speed and responsiveness.",
      stats: "10x Faster",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/20 to-cyan-500/20",
      features: ["Advanced caching", "CDN optimization", "Database tuning"]
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Enterprise Security",
      description: "Bank-level security protocols protecting your data and applications.",
      stats: "99.99% Uptime",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/20 to-emerald-500/20",
      features: ["SSL encryption", "DDoS protection", "Regular audits"]
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "24/7 Expert Support",
      description: "Round-the-clock assistance from certified technology professionals.",
      stats: "24/7 Support",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/20 to-pink-500/20",
      features: ["Live chat", "Phone support", "Knowledge base"]
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Global Infrastructure",
      description: "Worldwide network ensuring fast access from anywhere on the planet.",
      stats: "50+ Locations",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/20 to-red-500/20",
      features: ["Edge computing", "Load balancing", "Geographic distribution"]
    }
  ];

  const additionalStats = [
    { icon: <Clock className="w-6 h-6" />, value: "99.9%", label: "Uptime" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "500+", label: "Clients" },
    { icon: <Award className="w-6 h-6" />, value: "50+", label: "Awards" },
    { icon: <Rocket className="w-6 h-6" />, value: "24/7", label: "Support" }
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

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

const BenefitsSection: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">BenefitsSection</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default BenefitsSection;
