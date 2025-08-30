import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Users, FileText, Rocket, CheckCircle, Clock, Target, TrendingUp, Award, Zap, Shield } from 'lucide-react';

<<<<<<< HEAD
const steps = [
  {
    icon: <Search className="w-8 h-8"/>,
    title: "Discover",
    description: "Browse our comprehensive catalog of services, talent, and solutions",
    color: "from-zion-cyan to-zion-cyan-dark",
    bgColor: "from-zion-cyan/20 to-zion-cyan-dark/20",
    details[
      "AI-powered search and filtering",
      "Curated service categories",
      "Expert talent matching",
      "Real-time availability"
    ],
    duration: "1-2 hours",
    success: "95% match rate"
  },
  {
    icon: <Users className="w-8 h-8"/>,
    title: "Connect",
    description: "Get matched with the perfect team or service for your project",
    color: "from-zion-purple to-zion-purple-dark",
    bgColor: "from-zion-purple/20 to-zion-purple-dark/20",
    details[
      "Smart matching algorithm",
      "Profile verification",
      "Portfolio review",
      "Direct communication"
    ],
    duration: "2-4 hours",
    success: "98% satisfaction"
  },
  {
    icon: <FileText className="w-8 h-8"/>,
    title: "Plan",
    description: "Collaborate on project requirements, timeline, and deliverables",
    color: "from-zion-blue to-zion-blue-dark",
    bgColor: "from-zion-blue/20 to-zion-blue-dark/20",
    details[
      "Interactive project planning",
      "Timeline optimization",
      "Resource allocation",
      "Risk assessment"
    ],
    duration: "4-8 hours",
    success: "90% on-time delivery"
  },
  {
    icon: <Rocket className="w-8 h-8"/>,
    title: "Execute",
    description: "Watch your vision come to life with our expert execution",
    color: "from-zion-cyan-light to-zion-cyan",
    bgColor: "from-zion-cyan-light/20 to-zion-cyan/20",
    details[
      "Agile development process",
      "Regular progress updates",
      "Quality assurance",
      "Performance monitoring"
    ],
    duration: "1-4 weeks",
    success: "99% quality score"
  },
  {
    icon: <CheckCircle className="w-8 h-8"/>,
    title: "Deliver",
    description: "Receive your completed project with ongoing support and maintenance",
    color: "from-zion-purple-light to-zion-purple",
    bgColor: "from-zion-purple-light/20 to-zion-purple/20",
    details[
      "Comprehensive testing",
      "Documentation delivery",
      "Training and handover",
      "Post-launch support"
    ],
    duration: "Ongoing",
    success: "100% client retention"
  }
];

=======
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
const stats = [
  { icon: <Clock className="w-6 h-6"/>, value: "3x Faster", label: "Project Delivery" },
  { icon: <Target className="w-6 h-6"/>, value: "99.9%", label: "Success Rate" },
  { icon: <TrendingUp className="w-6 h-6"/>, value: "50%", label: "Cost Reduction" },
  { icon: <Award className="w-6 h-6"/>, value: "1000+", label: "Projects Completed" }
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

<<<<<<< HEAD
  const itemVariants = {
  hidden: { y: 30,
  opacity: 0 

},
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
  hidden: { scale: 0.95,
  opacity: 0 

},
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };
=======
    const itemVariants = {
  hidden: { y: 30,
  opacity: 0 






},
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const statsVariants = {
  hidden: { opacity: 0,
  scale: 0.8 






},
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style = {
  {
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%,
  transparent 50%)`
          

}}
        />
      </div>

<<<<<<< HEAD
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial = {
  { opacity: 0,
  y: 30 

}}
          whileInView = {
  { opacity: 1,
  y: 0 

}}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Our streamlined process ensures your project success from discovery to delivery
          </p>
        </motion.div>
=======
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16" 
                    initial = {
  { opacity: 0,
  y: 20 






}} 
                    whileInView = {
  { opacity: 1,
  y: 0 






}} 
                    viewport={{ once: true }} 
                    transition={{ duration: 0.6 }}
                >
                    <motion.div 
                        className="inline-flex items-center gap-2 px-4 py-2 bg-zion-cyan/20 backdrop-blur-sm rounded-full border border-zion-cyan/30 mb-6"
                        initial = {
  { opacity: 0,
  scale: 0.8 






}}
                        whileInView = {
  { opacity: 1,
  scale: 1 






}}
                        viewport={{ once: true }}
                        transition = {
  { duration: 0.6,
  delay: 0.2 






}}
                    >
                        <Rocket className="h-5 w-5 text-zion-cyan" />
                        <span className="text-zion-cyan text-sm font-medium">How It Works</span>
                    </motion.div>
                    
                    <motion.h2 
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                        initial = {
  { opacity: 0,
  y: 20 






}}
                        whileInView = {
  { opacity: 1,
  y: 0 






}}
                        viewport={{ once: true }}
                        transition = {
  { duration: 0.6,
  delay: 0.3 






}}
                    >
                        Simple 5-Step Process
                    </motion.h2>
                    
                    <motion.p 
                        className="text-xl text-zion-slate-light max-w-3xl mx-auto"
                        initial = {
  { opacity: 0,
  y: 20 






}}
                        whileInView = {
  { opacity: 1,
  y: 0 






}}
                        viewport={{ once: true }}
                        transition = {
  { duration: 0.6,
  delay: 0.4 






}}
                    >
                        From discovery to delivery, our streamlined process ensures you get the right 
                        micro SAAS solution quickly and efficiently.
                    </motion.p>
                </motion.div>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative"
              variants={itemVariants}
              onHoverStart={() => setHoveredStep(index)}
              onHoverEnd={() => setHoveredStep(null)}
              onClick={() => setActiveStep(index)}
            >
              {/* Step Card */}
              <motion.div
                className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  activeStep === index 
                    ? 'border-zion-cyan bg-gradient-to-br from-zion-cyan/20 to-zion-cyan-dark/20' 
                    : 'border-zion-slate/30 bg-gradient-to-br from-zion-slate/10 to-zion-slate/20 hover:border-zion-cyan/50'
                }`}
                variants={cardVariants}
                whileHover = {
  { y: -5,
  scale: 1.02 

}}
                style = {
  {
                  background: hoveredStep === index 
                    ? `linear-gradient(135deg,
  ${step.bgColor

})` 
                    : null
                }}
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white mb-4 mx-auto`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 text-center">{step.title}</h3>
                <p className="text-zion-slate-light text-center mb-4">{step.description}</p>

                {/* Stats */}
                <div className="text-center space-y-2">
                  <div className="text-zion-cyan text-sm font-medium">{step.duration}</div>
                  <div className="text-zion-purple text-sm font-medium">{step.success}</div>
                </div>

<<<<<<< HEAD
                {/* Hover Details */}
                {hoveredStep === index && (
                  <motion.div
                    className="absolute top-full left-0 right-0 mt-4 p-4 bg-zion-slate-dark border border-zion-cyan/30 rounded-lg shadow-2xl z-20"
                    initial = {
  { opacity: 0,
  y: 10 

}}
                    animate = {
  { opacity: 1,
  y: 0 

}}
                    transition={{ duration: 0.2 }}
                  >
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="text-zion-slate-light text-sm flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-zion-cyan" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial = {
  { opacity: 0,
  y: 30 

}}
          whileInView = {
  { opacity: 1,
  y: 0 

}}
          transition = {
  { duration: 0.8,
  delay: 0.4 

}}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-gradient-to-br from-zion-slate/20 to-zion-slate/10 rounded-2xl border border-zion-slate/30"
              initial = {
  { opacity: 0,
  scale: 0.9 

}}
              whileInView = {
  { opacity: 1,
  scale: 1 

}}
              transition = {
  { duration: 0.5,
  delay: index * 0.1 

}}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-zion-slate-light">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial = {
  { opacity: 0,
  y: 30 

}}
          whileInView = {
  { opacity: 1,
  y: 0 

}}
          transition = {
  { duration: 0.8,
  delay: 0.6 

}}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have transformed their operations with our innovative solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300">
              Start Your Project
            </button>
            <button className="px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )}
=======
                                {/* Details on Hover */}
                                <AnimatePresence>
                                    {hoveredStep === index && (
                                        <motion.div
                                            initial = {
  { opacity: 0,
  height: 0 






}}
                                            animate = {
  { opacity: 1,
  height: "auto" 






}}
                                            exit = {
  { opacity: 0,
  height: 0 






}}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="border-t border-white/20 pt-4 mt-4">
                                                <h4 className="text-zion-cyan font-semibold text-sm mb-3">Key Features:</h4>
                                                <ul className="space-y-2 mb-4">
                                                    {step.details.map((detail, idx) => (
                                                        <li key={idx} className="flex items-center gap-2 text-zion-slate-light text-xs">
                                                            <Zap className="h-3 w-3 text-zion-cyan flex-shrink-0" />
                                                            {detail}
                                                        </li>
                                                    ))}
                                                </ul>
                                                
                                                <div className="grid grid-cols-2 gap-4 text-xs">
                                                    <div className="text-center">
                                                        <div className="text-zion-cyan font-semibold">Duration</div>
                                                        <div className="text-zion-slate-light">{step.duration}</div>
                                                    </div>
                                                    <div className="text-center">
                                                        <div className="text-zion-cyan font-semibold">Success Rate</div>
                                                        <div className="text-zion-slate-light">{step.success}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Section */}
                <motion.div 
                    className="text-center mb-16"
                    initial = {
  { opacity: 0,
  y: 20 






}}
                    whileInView = {
  { opacity: 1,
  y: 0 






}}
                    viewport={{ once: true }}
                    transition = {
  { duration: 0.6,
  delay: 0.5 






}}
                >
                    <h3 className="text-2xl font-bold text-white mb-8">
                        Why Choose Zion Tech Group?
                    </h3>
                    
                    <motion.div 
                        className="grid grid-cols-2 md:grid-cols-4 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={statsVariants}
                                className="text-center group"
                                whileHover={{ scale: 1.05 }}
                                transition = {
  { type: "spring",
  stiffness: 400 






}}
                            >
                                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center text-white mb-4 mx-auto group-hover:shadow-lg group-hover:shadow-zion-cyan/25 transition-all duration-300">
                                    {stat.icon}
                                </div>
                                <div className="text-2xl font-bold text-zion-cyan mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-zion-slate-light text-sm">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* CTA Section */}
                <motion.div 
                    className="text-center"
                    initial = {
  { opacity: 0,
  y: 20 






}}
                    whileInView = {
  { opacity: 1,
  y: 0 






}}
                    viewport={{ once: true }}
                    transition = {
  { duration: 0.6,
  delay: 0.6 






}}
                >
                    <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
                        <div className="px-8 py-6 bg-zion-blue-dark rounded-xl">
                            <p className="text-white text-lg mb-4">
                                Ready to get started with your micro SAAS solution?
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                                    <Shield className="w-5 h-5" />
                                    Get Started Today
                                </button>
                                <button className="inline-flex items-center gap-3 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                                    <Users className="w-5 h-5" />
                                    Schedule Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
