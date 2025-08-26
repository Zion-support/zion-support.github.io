import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap, Users, TrendingUp, CheckCircle, Star, Award, Rocket } from 'lucide-react';

const benefits = [
  {
    title: "Advanced Security",
    description: "Enterprise-grade security protocols and compliance standards ensure your data and systems remain protected.",
    icon: <Shield className="w-10 h-10" />,
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-500/20 to-blue-600/20",
    stats: "99.9% Uptime",
    features: ["SOC 2 Type II Certified", "GDPR Compliant", "Real-time Threat Detection", "24/7 Security Monitoring"]
  },
  {
    title: "Lightning Fast Performance",
    description: "Optimized infrastructure and cutting-edge technologies deliver exceptional speed and reliability.",
    icon: <Zap className="w-10 h-10" />,
    color: "from-yellow-500 to-orange-500",
    bgColor: "from-yellow-500/20 to-orange-500/20",
    stats: "< 100ms Response",
    features: ["CDN Optimization", "Load Balancing", "Auto-scaling", "Performance Monitoring"]
  },
  {
    title: "Expert Team",
    description: "Certified professionals with deep expertise in modern technologies and industry best practices.",
    icon: <Users className="w-10 h-10" />,
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-500/20 to-emerald-500/20",
    stats: "15+ Years Exp",
    features: ["AWS Certified", "Microsoft Certified", "Google Cloud Certified", "Agile Methodology"]
  },
  {
    title: "Proven Results",
    description: "Track record of successful implementations and measurable business outcomes for clients.",
    icon: <TrendingUp className="w-10 h-10" />,
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-500/20 to-pink-500/20",
    stats: "95% Success Rate",
    features: ["ROI Tracking", "Performance Metrics", "Client Satisfaction", "Continuous Improvement"]
  }
];

const additionalStats = [
  { value: "500+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
  { value: "50+", label: "Enterprise Clients", icon: <Star className="w-6 h-6" /> },
  { value: "15+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
  { value: "24/7", label: "Support Available", icon: <Rocket className="w-6 h-6" /> }
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

const statsVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function BenefitsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 75% 75%, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}/>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30" 
          animate={{ rotate: 360 }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full opacity-30" 
          animate={{ rotate: -360 }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light/20 rounded-full opacity-20" 
          animate={{ scale: [1, 1.2, 1] }} 
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Zion Tech Group</span>?
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            We combine cutting-edge technology with proven methodologies to deliver exceptional results. 
            Our commitment to excellence drives every project to success.
          </p>
        </motion.div>

        {/* Additional stats section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto" 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
        >
          {additionalStats.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={statsVariants} 
              className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20"
            >
              <div className="text-zion-cyan mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-zion-slate-light text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        
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
