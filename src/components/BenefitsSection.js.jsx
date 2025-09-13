import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Clock, 
  Target, 
  Rocket,
  Star,
  Award,
  TrendingUp,
  Globe
} from 'lucide-react';

export default function BenefitsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const benefits = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: 'AI-Powered Intelligence',
      description: 'Advanced artificial intelligence that learns, adapts, and optimizes your business processes automatically.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/20 to-cyan-500/20',
      stats: '40-60% Cost Reduction',
      features: ['Machine Learning', 'Predictive Analytics', 'Process Automation']
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Quantum-Secure Protection',
      description: 'Unbreakable security with quantum-resistant encryption and AI-powered threat detection.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-500/20 to-emerald-500/20',
      stats: '99.9% Uptime',
      features: ['Zero-Trust Security', 'Threat Detection', 'Compliance Ready']
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Autonomous Operations',
      description: 'Self-managing systems that run your business operations with minimal human intervention.',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'from-purple-500/20 to-indigo-500/20',
      stats: '300% Productivity',
      features: ['Auto-scaling', 'Self-healing', 'Smart Routing']
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: 'Predictive Analytics',
      description: 'Forecast trends, identify opportunities, and make data-driven decisions with confidence.',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-500/20 to-red-500/20',
      stats: '200% ROI Boost',
      features: ['Real-time Insights', 'Trend Forecasting', 'Performance Metrics']
    }
  ];

  const additionalStats = [
    { icon: <Users className="w-6 h-6" />, value: '500+', label: 'Happy Clients' },
    { icon: <Clock className="w-6 h-6" />, value: '24/7', label: 'Support' },
    { icon: <Target className="w-6 h-6" />, value: '99.9%', label: 'Success Rate' },
    { icon: <Rocket className="w-6 h-6" />, value: '15+', label: 'Years Experience' }
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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
        duration: 0.5
      }
    }
  };

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
        <motion.div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}/>
        <motion.div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple/20 rounded-full opacity-30" animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}/>
        <motion.div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light/20 rounded-full opacity-20" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}/>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Zion Tech Group</span>?
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            We combine cutting-edge technology with proven methodologies to deliver exceptional results. 
            Our commitment to excellence drives every project to success.
          </p>
        </motion.div>

        {/* Additional stats section */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {additionalStats.map((stat, index) => (
            <motion.div key={index} variants={statsVariants} className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
              <div className="text-zion-cyan mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-zion-slate-light text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {benefits.map((benefit, index) => (<motion.div key={index} variants={itemVariants} onHoverStart={() => setHoveredIndex(index)} onHoverEnd={() => setHoveredIndex(null)} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
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
        </motion.div>

        {/* Call to action */}
        <motion.div className="text-center mt-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}>
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
