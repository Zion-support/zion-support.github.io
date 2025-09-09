import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Users, 
  FileText, 
  Rocket, 
  CheckCircle, 
  Clock, 
  Target, 
  TrendingUp, 
  Award, 
  Zap, 
  Shield 
} from 'lucide-react';

const steps = [
  {
    icon: <Search className="w - 8 h - 8"       />,
    title: 'Discover',
    description:
      'Browse our comprehensive catalog of 100 + micro SAAS services and solutions',
    color: 'from - zion - cyan to - zion - cyan - dark',
    bgColor: 'from - zion - cyan / 20 to - zion - cyan - dark / 20',
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
    icon: <Users className="w - 8 h - 8"       />,
    title: 'Connect',
    description:
      'Get matched with the perfect service or solution for your business needs',
    color: 'from - zion - purple to - zion - purple - dark',
    bgColor: 'from - zion - purple / 20 to - zion - purple - dark / 20',
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
    icon: <FileText className="w - 8 h - 8"       />,
    title: 'Plan',
    description:
      'Collaborate on requirements, timeline, and implementation strategy',
    color: 'from - zion - blue to - zion - blue - dark',
    bgColor: 'from - zion - blue / 20 to - zion - blue - dark / 20',
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
    icon: <Rocket className="w - 8 h - 8"       />,
    title: 'Execute',
    description:
      'Watch your vision come to life with our expert implementation',
    color: 'from - zion - cyan - light to - zion - cyan',
    bgColor: 'from - zion - cyan - light / 20 to - zion - cyan / 20',
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
    icon: <CheckCircle className="w - 8 h - 8"       />,
    title: 'Deliver',
    description:
      'Receive your completed solution with ongoing support and maintenance',
    color: 'from - zion - purple - light to - zion - purple',
    bgColor: 'from - zion - purple - light / 20 to - zion - purple / 20',
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
  {
    icon: <Clock className="w - 6 h - 6"       />,
    value: '3x Faster',
    label: 'Implementation',
  },
  {
    icon: <Target className="w - 6 h - 6"       />,
    value: '99.9%',
    label: 'Success Rate',
  },
  {
    icon: <TrendingUp className="w - 6 h - 6"       />,
    value: '50%',
    label: 'Cost Reduction',
  },
  {
    icon: <Award className="w - 6 h - 6"       />,
    value: '1000+',
    label: 'Services Delivered',
  },
];

export default function HowItWorksSection() {
  const [hoveredStep, setHoveredStep] = useState(null);

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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
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
          <motion.div
            className="inline - flex items - center gap - 2 px - 4 py - 2 bg - zion - cyan / 20 backdrop - blur - sm rounded - full border border - zion - cyan / 30 mb - 6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Rocket className="h - 5 w - 5 text - zion - cyan"       />
            <span className="text - zion - cyan text - sm font - medium">
              How It Works
            </span>
          </motion.div>

          <motion.h2
            className="text - 4xl md:text - 5xl font - bold text - white mb - 6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Simple 5 - Step Process
          </motion.h2>

          <motion.p
            className="text - xl text - zion - slate - light max - w-3xl mx - auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            From discovery to delivery, our streamlined process ensures you get
            the right micro SAAS solution quickly and efficiently.
          </motion.p>
        </motion.div>

        {/* Stats section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto" 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredStep(index)}
              onHoverEnd={() => setHoveredStep(null)}
              className="group relative"
            >
              <div className="text-zion-cyan mb-2 flex justify-center">
                {stat.icon}
              </div>

              {/* Step Card */}
              <div
                className={`bg - gradient - to - br ${step.bgColor} backdrop - blur - sm border border - white / 10 rounded - 2xl p - 6 h - full transition - all duration - 300 hover:border - zion - cyan / 30 hover:transform hover:scale - 105 cursor - pointer`}
              >
                {/* Icon */}
                <div
                  className={`w - 16 h - 16 bg - gradient - to - r ${step.color} rounded - 2xl flex items - center justify - center text - white mb - 4 mx - auto`}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text - xl font - bold text - white text - center mb - 3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text - zion - slate - light text - center mb - 4 text - sm">
                  {step.description}
                </p>

                {/* Details on Hover */}
                <AnimatePresence>
                  {hoveredStep === index && (<motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow - hidden"
                    >
                      <div className="border - t border - white / 20 pt - 4 mt - 4">
                        <h4 className="text - zion - cyan font - semibold text - sm mb - 3">
                          Key Features:
                        </h4>
                        <ul className="space - y-2 mb - 4">
                          {step.details.map ( (detail, idx) => (<li
                              key={idx}
                              className="flex items - center gap - 2 text - zion - slate - light text - xs"
                            >
                              <Zap className="h - 3 w - 3 text - zion - cyan flex - shrink - 0"       />
                              {detail}
                            </li>) ) }
                        </ul>

                        <div className="grid grid - cols - 2 gap - 4 text - xs">
                          <div className="text - center">
                            <div className="text - zion - cyan font - semibold">
                              Duration
                            </div>
                            <div className="text - zion - slate - light">
                              {step.duration}
                            </div>
                          </div>
                          <div className="text - center">
                            <div className="text - zion - cyan font - semibold">
                              Success Rate
                            </div>
                            <div className="text - zion - slate - light">
                              {step.success}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>) }
                </AnimatePresence>
              </div>
            </motion.div>) ) }
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={statsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zion Tech</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
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
                      <Clock className="w-3 h-3"/>
                      <span>{step.duration}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-zion-purple/80 text-xs">
                      <Target className="w-3 h-3"/>
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
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2 text-white">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Enhanced bottom CTA */}
        <motion.div 
          className="text-center mt-20" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
            <div className="px-8 py-4 bg-zion-blue-dark rounded-xl">
              <p className="text-white text-lg mb-4">
                Ready to start your project journey?
              </p>
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">
                <button className="inline - flex items - center gap - 3 bg - gradient - to - r from - zion - cyan to - zion - purple hover:from - zion - cyan - dark hover:to - zion - purple - dark text - white px - 8 py - 3 rounded - xl font - semibold transition - all duration - 300 transform hover:scale - 105 hover:shadow - lg hover:shadow - zion - cyan / 25">
                  <Shield className="w - 5 h - 5"       />
                  Get Started Today
                </button>
                <button className="inline - flex items - center gap - 3 border - 2 border - zion - cyan text - zion - cyan hover:bg - zion - cyan hover:text - white px - 8 py - 3 rounded - xl font - semibold transition - all duration - 300">
                  <Users className="w - 5 h - 5"       />
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional features */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center p-6 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-zion-cyan to-zion-purple mb-4">
              <Zap className="w-8 h-8 text-white"/>
            </div>
            <h4 className="text-white font-semibold mb-2">Fast Setup</h4>
            <p className="text-zion-slate-light text-sm">Get started in minutes, not days</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-zion-purple to-zion-cyan mb-4">
              <Shield className="w-8 h-8 text-white"/>
            </div>
            <h4 className="text-white font-semibold mb-2">Secure & Reliable</h4>
            <p className="text-zion-slate-light text-sm">Enterprise-grade security and uptime</p>
          </div>
          
          <div className="text-center p-6 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-zion-cyan-light to-zion-blue mb-4">
              <Users className="w-8 h-8 text-white"/>
            </div>
            <h4 className="text-white font-semibold mb-2">Expert Support</h4>
            <p className="text-zion-slate-light text-sm">24/7 support from our team</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
