import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  details: string[];
  duration: string;
  success: string;
}

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const steps: Step[] = [
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

export function HowItWorksSection() {
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

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            How We <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Our proven methodology ensures successful project delivery and maximum value for your business. 
            We follow a systematic approach that guarantees results.
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
            <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue opacity-20 blur-sm"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
                onClick={() => setActiveStep(index)}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  {/* Step icon with gradient background */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 border border-zion-blue-light/30 backdrop-blur-sm`}>
                    <div className={`text-zion-cyan group-hover:text-white transition-colors duration-300`}>
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-zion-slate-light text-sm leading-relaxed mb-4">
                  {step.description}
                </p>
                
                {/* Step details on hover */}
                <AnimatePresence>
                  {hoveredStep === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 right-0 z-50 mt-4 p-4 bg-zion-blue-dark/95 backdrop-blur-sm rounded-xl border border-zion-blue-light/30 shadow-2xl"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs text-zion-cyan">
                          <span>Duration: {step.duration}</span>
                          <span>Success: {step.success}</span>
                        </div>
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center text-sm text-zion-slate-light">
                              <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-zion-blue-dark/80 to-zion-purple-dark/80 backdrop-blur-sm rounded-3xl p-12 border border-zion-blue-light/30 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of successful companies that have revolutionized their operations with Zion Tech Group
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-bold rounded-xl hover:from-zion-cyan-dark hover:to-zion-blue-dark transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan font-bold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                View Case Studies
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}