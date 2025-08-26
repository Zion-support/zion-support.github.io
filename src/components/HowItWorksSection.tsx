import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
import { Search, Users, FileText, Rocket, CheckCircle, Clock, Target, TrendingUp, Award } from 'lucide-react';
=======
import { Search, Users, FileText, Rocket, CheckCircle, Clock, Target, TrendingUp, Award, Zap, Shield } from 'lucide-react';
>>>>>>> cursor/website-audit-and-enhancement-1eed

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
<<<<<<< HEAD
    <section className="py-20 bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
=======
    <section className="py-20 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-dark relative overflow-hidden">
              {/* Background elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
>>>>>>> cursor/website-audit-and-enhancement-1eed
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
<<<<<<< HEAD
            How We Work
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            Our proven methodology ensures successful project delivery and maximum value for your business
          </p>
        </motion.div>

=======
            How It <span className="text-zion-cyan">Works</span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Our streamlined process ensures your project success from concept to completion
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue/80 backdrop-blur-sm border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/20">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
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
>>>>>>> cursor/website-audit-and-enhancement-1eed
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
<<<<<<< HEAD
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
=======
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
>>>>>>> cursor/website-audit-and-enhancement-1eed
      </div>
    </section>
  );
}
