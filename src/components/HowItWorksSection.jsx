import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Target, Zap, Shield, Users, Rocket } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Discovery & Planning",
    description: "We start by understanding your business needs, goals, and technical requirements through comprehensive consultation.",
    duration: "1-2 weeks",
    success: "98%",
    details: [
      "Business requirements analysis",
      "Technical architecture planning",
      "Project timeline estimation",
      "Resource allocation strategy"
    ]
  },
  {
    id: 2,
    title: "Design & Prototyping",
    description: "Our design team creates intuitive user interfaces and prototypes that align with your brand and user experience goals.",
    duration: "2-3 weeks",
    success: "95%",
    details: [
      "UI/UX design creation",
      "Interactive prototypes",
      "User feedback integration",
      "Design system development"
    ]
  },
  {
    id: 3,
    title: "Development & Testing",
    description: "Expert developers build your solution using cutting-edge technologies with continuous testing and quality assurance.",
    duration: "4-8 weeks",
    success: "97%",
    details: [
      "Agile development process",
      "Continuous integration",
      "Comprehensive testing",
      "Performance optimization"
    ]
  },
  {
    id: 4,
    title: "Deployment & Launch",
    description: "We ensure smooth deployment, launch, and provide ongoing support to guarantee your success.",
    duration: "1-2 weeks",
    success: "99%",
    details: [
      "Production deployment",
      "Launch coordination",
      "Performance monitoring",
      "Post-launch support"
    ]
  }
];

export function HowItWorksSection() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 75%, currentColor 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 right-20 w-40 h-40 border border-zion-purple/20 rounded-full opacity-30" 
          animate={{ rotate: 360 }} 
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-32 h-32 border border-zion-cyan/20 rounded-full opacity-30" 
          animate={{ rotate: -360 }} 
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/3 w-20 h-20 border border-zion-cyan-light/20 rounded-full opacity-20" 
          animate={{ scale: [1, 1.3, 1] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
            How We <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Our proven process ensures successful project delivery through systematic planning, 
            expert execution, and continuous collaboration. We transform your vision into reality.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20" 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="group relative"
              onHoverStart={() => setHoveredStep(index)}
              onHoverEnd={() => setHoveredStep(null)}
            >
              <div className="bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 rounded-2xl p-8 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 h-full text-center">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-zion-cyan to-zion-purple mb-6 shadow-lg">
                  <span className="text-2xl font-bold text-white">{step.id}</span>
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
