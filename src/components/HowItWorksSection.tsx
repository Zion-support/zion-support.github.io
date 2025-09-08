import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Users, FileText, Rocket, CheckCircle, ArrowRight, Clock, Target, TrendingUp, Award, Zap, Shield } from 'lucide-react';

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
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  ];

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
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-slate-dark to-zion-blue-dark relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
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
            How It <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Our streamlined process ensures your project success from concept to completion. 
            Experience the Zion difference with our proven methodology.
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
        
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Enhanced connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue transform -translate-y-1/2 hidden lg:block">
            <motion.div 
              className="h-full bg-gradient-to-r from-zion-cyan to-zion-purple"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                className="relative"
                onHoverStart={() => setHoveredStep(index)}
                onHoverEnd={() => setHoveredStep(null)}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center h-full">
                  {/* Step number with enhanced styling */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark border-2 border-zion-cyan text-white font-bold text-xl mb-6 relative z-10 shadow-lg group-hover:shadow-zion-cyan/25 transition-all duration-300">
                    {index + 1}
                  </div>
                  
                  {/* Icon with enhanced background */}
                  <div className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Title and description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-zion-slate-light leading-relaxed text-sm mb-4">
                    {step.description}
                  </p>

                  {/* Duration and success rate */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center gap-2 text-zion-cyan/80 text-xs">
                      <Clock className="w-3 h-3" />
                      <span>{step.duration}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-zion-purple/80 text-xs">
                      <Target className="w-3 h-3" />
                      <span>{step.success}</span>
                    </div>
                  </div>

                  {/* Interactive details on hover */}
                  <AnimatePresence>
                    {hoveredStep === index && (
                      <motion.div 
                        className="mt-4 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30"
                        initial={{ opacity: 0, height: 0, y: 10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="text-zion-cyan font-semibold text-sm mb-3">Key Features:</h4>
                        <div className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <motion.div 
                              key={idx} 
                              className="flex items-center gap-2 text-zion-slate-light/80 text-xs"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                              <span>{detail}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Hover indicator */}
                  <div className="mt-4 text-zion-cyan/60 text-xs">
                    {hoveredStep === index ? "Hover to see details" : "Hover for details"}
import React from 'react';

export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Assessment',
      description: 'We begin by understanding your business needs, current infrastructure, and goals for transformation.',
      icon: '🔍',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'Our experts develop a comprehensive roadmap tailored to your specific requirements and timeline.',
      icon: '📋',
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We execute the plan with precision, ensuring minimal disruption to your ongoing operations.',
      icon: '⚙️',
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '04',
      title: 'Testing & Optimization',
      description: 'Rigorous testing and performance optimization to ensure everything works flawlessly.',
      icon: '🧪',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      number: '05',
      title: 'Launch & Support',
      description: 'Go-live with confidence, backed by our ongoing support and maintenance services.',
      icon: '🚀',
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven methodology ensures successful project delivery and maximum value for your business
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  {/* Step number background */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4 shadow-md border-2 border-gray-200">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team is ready to guide you through every step of your digital transformation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Schedule Consultation
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}