import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Users, FileText, Rocket, CheckCircle, Clock, Target, TrendingUp, Award } from 'lucide-react';

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
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How We Work
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Our proven methodology ensures successful project delivery and maximum value for your business
          </p>
        </motion.div>

        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-zion-cyan/30 via-zion-purple/30 to-zion-blue/30 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                variants={itemVariants}
                onHoverStart={() => setHoveredStep(index)}
                onHoverEnd={() => setHoveredStep(null)}
              >
                <div className="relative">
                  {/* Step number background */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-zion-cyan/25`}>
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.bgColor} rounded-full flex items-center justify-center text-3xl mx-auto mb-6 shadow-lg border-2 border-zion-cyan/20 group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-zion-slate-light text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Hover details */}
                <AnimatePresence>
                  {hoveredStep === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-zion-slate-dark/80 backdrop-blur-sm rounded-xl p-4 border border-zion-cyan/20">
                        <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                        <ul className="space-y-1 text-xs text-zion-slate-light">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-3 pt-3 border-t border-zion-cyan/20">
                          <div className="flex justify-between text-xs">
                            <span className="text-zion-cyan">Duration: {step.duration}</span>
                            <span className="text-zion-cyan">Success: {step.success}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-zion-cyan/30">
                  <div className="text-zion-cyan">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zion-slate-light text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-blue/10 rounded-3xl p-8 border border-zion-cyan/20 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto text-lg">
              Our team is ready to guide you through every step of your digital transformation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
                <Rocket className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-transparent text-zion-cyan font-semibold rounded-xl border-2 border-zion-cyan hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}