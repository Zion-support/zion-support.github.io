import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Zap, Shield, Users, Clock, TrendingUp, Star, Award, Globe, Lock } from 'lucide-react';

const benefits = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Get your projects delivered in record time with our efficient development process",
    color: "from-zion-cyan to-zion-blue",
    bgColor: "from-zion-cyan/20 to-zion-blue/20",
    stats: "3x Faster",
    features: ["Rapid Prototyping", "Quick Deployment", "Fast Iteration"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise Security",
    description: "Bank-grade security measures to protect your data and applications",
    color: "from-zion-purple to-zion-purple-dark",
    bgColor: "from-zion-purple/20 to-zion-purple-dark/20",
    stats: "99.99% Uptime",
    features: ["SOC 2 Compliant", "GDPR Ready", "End-to-End Encryption"]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Team",
    description: "Work with certified professionals with years of industry experience",
    color: "from-zion-cyan-light to-zion-cyan",
    bgColor: "from-zion-cyan-light/20 to-zion-cyan/20",
    stats: "500+ Experts",
    features: ["Certified Professionals", "Global Network", "Industry Veterans"]
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "24/7 Support",
    description: "Round-the-clock assistance whenever you need help or have questions",
    color: "from-zion-purple-light to-zion-purple",
    bgColor: "from-zion-purple-light/20 to-zion-purple/20",
    stats: "24/7",
    features: ["Live Chat", "Phone Support", "Email Response"]
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Scalable Solutions",
    description: "Built to grow with your business, from startup to enterprise",
    color: "from-zion-cyan to-zion-purple",
    bgColor: "from-zion-cyan/20 to-zion-purple/20",
    stats: "10x Growth",
    features: ["Auto-scaling", "Load Balancing", "Performance Monitoring"]
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Quality Guaranteed",
    description: "100% satisfaction guarantee with our comprehensive testing process",
    color: "from-zion-purple to-zion-cyan",
    bgColor: "from-zion-purple/20 to-zion-cyan/20",
    stats: "100% Success",
    features: ["Comprehensive Testing", "Quality Assurance", "Satisfaction Guarantee"]
  }
];

const additionalStats = [
  { icon: <Star className="w-6 h-6" />, value: "4.9/5", label: "Customer Rating" },
  { icon: <Award className="w-6 h-6" />, value: "50+", label: "Industry Awards" },
  { icon: <Globe className="w-6 h-6" />, value: "100+", label: "Countries Served" },
  { icon: <Lock className="w-6 h-6" />, value: "1000+", label: "Projects Completed" }
];

export function BenefitsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-zion-blue-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Experience the next generation of tech solutions with features designed to maximize efficiency and value
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${benefit.bgColor} border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 h-full`}>
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{benefit.description}</p>

                {/* Stats */}
                <div className={`text-3xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent mb-4`}>
                  {benefit.stats}
                </div>

                {/* Features */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-2">
                        {benefit.features.map((feature, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-center gap-2 text-zion-slate-light/80 text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hover indicator */}
                <div className="mt-4 text-zion-cyan/60 text-xs">
                  {hoveredIndex === index ? "Hover to see details" : "Hover for details"}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {additionalStats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={statsVariants}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-2 text-white">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
            <div className="px-8 py-4 bg-zion-blue-dark rounded-xl">
              <p className="text-white text-lg mb-4">
                Ready to experience the Zion difference?
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                Get Started Today
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
