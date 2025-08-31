import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Users, FileText, Rocket, CheckCircle, Clock, Target, TrendingUp, Award, Zap, Shield } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-8 h-8"/>,
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
    icon: <Users className="w-8 h-8"/>,
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
    icon: <FileText className="w-8 h-8"/>,
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
    icon: <Rocket className="w-8 h-8"/>,
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
    icon: <CheckCircle className="w-8 h-8"/>,
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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const statVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our streamlined process ensures your project moves from concept to completion 
            with maximum efficiency and quality.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredStep(index)}
              onHoverEnd={() => setHoveredStep(null)}
              onClick={() => setActiveStep(index)}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${step.bgColor} border border-slate-700/50 rounded-2xl p-6 h-full transition-all duration-300 hover:border-slate-600/50 hover:shadow-2xl hover:shadow-purple-500/10 group-hover:scale-105`}>
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {step.description}
                </p>
                <div className="space-y-2 mb-4">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center text-xs text-gray-400">
                      <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                      {detail}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-zion-cyan font-medium">
                    {step.duration}
                  </span>
                  <span className="text-green-400 font-medium">
                    {step.success}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-8">
            Proven Results
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-zion-cyan">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}