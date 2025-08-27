import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Award, Globe, Lock, Zap, Shield, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const benefits = [
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Lightning-Fast Performance",
    description: "Our optimized solutions deliver exceptional speed and responsiveness, ensuring your applications run smoothly under any load.",
    stats: "99.9% Uptime",
    color: "from-yellow-500 to-orange-600",
    bgColor: "from-yellow-500/20 to-orange-600/20",
    features: [
      "Advanced caching mechanisms",
      "CDN optimization",
      "Database query optimization",
      "Real-time performance monitoring"
    ]
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Enterprise-Grade Security",
    description: "Bank-level security protocols protect your data with multiple layers of encryption and advanced threat detection.",
    stats: "256-bit Encryption",
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-500/20 to-emerald-600/20",
    features: [
      "End-to-end encryption",
      "Multi-factor authentication",
      "Regular security audits",
      "Compliance certifications"
    ]
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "24/7 Expert Support",
    description: "Our dedicated team of technology experts is available around the clock to ensure your success.",
    stats: "15min Response",
    color: "from-blue-500 to-cyan-600",
    bgColor: "from-blue-500/20 to-cyan-600/20",
    features: [
      "Live chat support",
      "Phone and email support",
      "Knowledge base access",
      "Video tutorials and guides"
    ]
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: "Scalable Solutions",
    description: "Grow with confidence knowing our solutions scale seamlessly with your business needs.",
    stats: "10x Growth Ready",
    color: "from-purple-500 to-pink-600",
    bgColor: "from-purple-500/20 to-pink-600/20",
    features: [
      "Auto-scaling infrastructure",
      "Load balancing",
      "Performance optimization",
      "Capacity planning"
    ]
  }
];

const additionalStats = [
  { icon: <Star className="w-6 h-6"/>, value: "4.9/5", label: "Customer Rating" },
  { icon: <Award className="w-6 h-6"/>, value: "50+", label: "Industry Awards" },
  { icon: <Globe className="w-6 h-6"/>, value: "100+", label: "Countries Served" },
  { icon: <Lock className="w-6 h-6"/>, value: "1000+", label: "Projects Completed" }
];

export function BenefitsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
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

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark/20 to-zion-purple-dark/20"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-zion-purple rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-zion-blue rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-1 h-1 bg-zion-green rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            The <span className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">Zion Advantage</span>
          </h2>
          
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of cutting-edge technology, expert craftsmanship, and unwavering commitment to your success.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {additionalStats.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-zion-slate/50 to-zion-slate-dark/50 backdrop-blur-sm border border-zion-slate-light/30 hover:border-zion-cyan/50 transition-all duration-300"
            >
              <div className="text-zion-cyan mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-zion-slate-light text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants} 
              onHoverStart={() => setHoveredIndex(index)} 
              onHoverEnd={() => setHoveredIndex(null)} 
              whileHover={{ y: -8 }} 
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group h-full">
                {/* Icon with enhanced background */}
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.color} mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>

                {/* Stats badge */}
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${benefit.bgColor} border border-zion-cyan/30 mb-4`}>
                  <span className="text-zion-cyan font-bold text-sm">{benefit.stats}</span>
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-zion-slate-light leading-relaxed mb-6">
                  {benefit.description}
                </p>

                {/* Features list */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div 
                      className="space-y-2" 
                      initial={{ opacity: 0, height: 0 }} 
                      animate={{ opacity: 1, height: "auto" }} 
                      exit={{ opacity: 0, height: 0 }} 
                      transition={{ duration: 0.3 }}
                    >
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
        </div>

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
                Ready to experience the Zion advantage?
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 group">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
