import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Users, FileText, Rocket, CheckCircle, Clock, Target, TrendingUp, Award, Zap, Shield } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Discover",
    description: "Browse our comprehensive catalog of services, talent, and solutions",
    color: "from-zion-cyan to-zion-cyan-dark",
    bgColor: "from-zion-cyan/20 to-zion-cyan-dark/20",
    details: [
      "AI-powered search and filtering",
      "Curated service categories",
      "Expert talent matching",
      "Real-time availability"
    ],
    duration: "1-2 hours",
    success: "95% match rate"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Connect",
    description: "Get matched with the perfect team or service for your project",
    color: "from-zion-purple to-zion-purple-dark",
    bgColor: "from-zion-purple/20 to-zion-purple-dark/20",
    details: [
      "Smart matching algorithm",
      "Profile verification",
      "Portfolio review",
      "Direct communication"
    ],
    duration: "2-4 hours",
    success: "98% satisfaction"
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Plan",
    description: "Collaborate on project requirements, timeline, and deliverables",
    color: "from-zion-blue to-zion-blue-dark",
    bgColor: "from-zion-blue/20 to-zion-blue-dark/20",
    details: [
      "Interactive project planning",
      "Timeline optimization",
      "Resource allocation",
      "Risk assessment"
    ],
    duration: "4-8 hours",
    success: "90% on-time delivery"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Execute",
    description: "Watch your vision come to life with our expert execution",
    color: "from-zion-cyan-light to-zion-cyan",
    bgColor: "from-zion-cyan-light/20 to-zion-cyan/20",
    details: [
      "Agile development process",
      "Regular progress updates",
      "Quality assurance",
      "Performance monitoring"
    ],
    duration: "1-4 weeks",
    success: "99% quality score"
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "Deliver",
    description: "Receive your completed project with ongoing support and maintenance",
    color: "from-zion-purple-light to-zion-purple",
    bgColor: "from-zion-purple-light/20 to-zion-purple/20",
    details: [
      "Comprehensive testing",
      "Documentation delivery",
      "Training and handover",
      "Post-launch support"
    ],
    duration: "Ongoing",
    success: "100% client retention"
  }
];

const stats = [
  { icon: <Clock className="w-6 h-6" />, value: "3x Faster", label: "Project Delivery" },
  { icon: <Target className="w-6 h-6" />, value: "99.9%", label: "Success Rate" },
  { icon: <TrendingUp className="w-6 h-6" />, value: "50%", label: "Cost Reduction" },
  { icon: <Award className="w-6 h-6" />, value: "1000+", label: "Projects Completed" }
];

export function HowItWorksSection() {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 right-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30" 
          animate={{ rotate: 360 }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-24 h-24 border border-zion-purple/20 rounded-full opacity-30" 
          animate={{ rotate: -360 }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/2 w-16 h-16 border border-zion-cyan-light/20 rounded-full opacity-20" 
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
            How It <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Our streamlined process ensures your project moves from concept to completion 
            with maximum efficiency and minimum hassle.
          </p>
        </motion.div>

        {/* Stats section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto" 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
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
        
        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
            variants={containerVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                onHoverStart={() => setHoveredStep(index)} 
                onHoverEnd={() => setHoveredStep(null)} 
                whileHover={{ y: -8 }} 
                transition={{ type: "spring", stiffness: 300 }}
                className="group"
              >
                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 h-full">
                  {/* Step number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-bold text-lg mb-4">
                    {index + 1}
                  </div>

                  {/* Icon with enhanced background */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-zion-slate-light leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Stats badge */}
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${step.bgColor} border border-zion-cyan/30 mb-4`}>
                    <span className="text-zion-cyan font-bold text-sm">{step.success}</span>
                  </div>

                  {/* Duration */}
                  <div className="text-zion-slate-light/80 text-sm mb-4">
                    Duration: {step.duration}
                  </div>

                  {/* Features list */}
                  <AnimatePresence>
                    {hoveredStep === index && (
                      <motion.div 
                        className="space-y-2" 
                        initial={{ opacity: 0, height: 0 }} 
                        animate={{ opacity: 1, height: "auto" }} 
                        exit={{ opacity: 0, height: 0 }} 
                        transition={{ duration: 0.3 }}
                      >
                        {step.details.map((detail, idx) => (
                          <motion.div 
                            key={idx} 
                            className="flex items-center gap-2 text-zion-slate-light/80 text-sm" 
                            initial={{ opacity: 0, x: -10 }} 
                            animate={{ opacity: 1, x: 0 }} 
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                            <span>{detail}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Hover indicator */}
                  <div className="mt-4 text-zion-cyan/60 text-xs">
                    {hoveredStep === index ? "Hover to see details" : "Hover for details"}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced bottom CTA */}
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
                Ready to get started with your project?
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                Start Your Project
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
