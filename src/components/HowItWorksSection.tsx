import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Target, Rocket, Zap, Shield, Users } from 'lucide-react';

export function HowItWorksSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a comprehensive project roadmap",
      duration: "1-2 weeks",
      success: "95% Success Rate",
      icon: "🎯",
      details: ["Requirements gathering", "Technical analysis", "Project planning", "Resource allocation"]
    },
    {
      title: "Design & Architecture",
      description: "Our experts design scalable solutions with modern best practices",
      duration: "2-3 weeks",
      success: "98% Client Satisfaction",
      icon: "🏗️",
      details: ["System architecture", "UI/UX design", "Database design", "Security planning"]
    },
    {
      title: "Development & Testing",
      description: "Agile development with continuous testing and quality assurance",
      duration: "4-8 weeks",
      success: "99% Quality Score",
      icon: "⚡",
      details: ["Agile development", "Continuous testing", "Code review", "Performance optimization"]
    },
    {
      title: "Deployment & Launch",
      description: "Smooth deployment with monitoring and post-launch support",
      duration: "1-2 weeks",
      success: "100% Uptime",
      icon: "🚀",
      details: ["Production deployment", "Performance monitoring", "User training", "Ongoing support"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How We <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Our proven methodology ensures successful project delivery with transparency and quality at every step
          </p>
        </motion.div>

        {/* Steps grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              onHoverStart={() => setHoveredStep(index)}
              onHoverEnd={() => setHoveredStep(null)}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative text-center"
            >
              {/* Step number */}
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-zion-cyan to-zion-purple flex items-center justify-center text-2xl font-bold text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  {index + 1}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-zion-cyan-light flex items-center justify-center text-sm font-bold text-white">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative">
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
            </motion.div>
          ))}
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
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-purple/25">
                Get Started Today
                <Rocket className="w-5 h-5"/>
              </button>
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
