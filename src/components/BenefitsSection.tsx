import React, { useState } from 'react';
import { motion, AnimatePresence    } from 'framer-motion';
import { Bot, Clock, Globe, TrendingDown, CheckCircle    } from 'lucide-react';
import { GradientHeading    } from './GradientHeading';

interface Benefit {



  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  stats: string;
  features: string[];



}

const BenefitsSection: React.FC = () => {
  const benefits: Benefit[] = [
    {
      title: 'Proven Results',
      description: 'We deliver measurable results with a 98% client satisfaction rate and proven ROI.',
      icon: <CheckCircle className="w-8 h-8 text-green-500" />,
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and advanced threat protection.',
      icon: <Shield className="w-8 h-8 text-blue-500" />,
    },
    {
<<<<<<< HEAD
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Lightning Fast",
      description: "Rapid deployment and implementation with minimal downtime for your business."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Expert Team",
      description: "Certified professionals with years of experience in cutting-edge technologies."
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-500" />,
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your systems run smoothly at all times."
    },
    {
      icon: <Award className="w-8 h-8 text-red-500" />,
      title: "Industry Recognition",
      description: "Award-winning solutions recognized by leading industry organizations."
    }
  };

  const stats = [
    { value: "500+", label: "Projects Delivered", icon: Rocket },
    { value: "50+", label: "Expert Team Members", icon: Users },
    { value: "99.9%", label: "Client Satisfaction", icon: Star },
    { value: "24/7", label: "Support Availability", icon: Clock }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Zion Tech Group?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
=======
      title: 'AI-Powered Solutions',
      description: 'Our advanced AI algorithms provide cutting-edge solutions tailored to your specific needs.',
      icon: <Bot className="w-8 h-8 text-purple-500" />,
    },
    {
      title: 'Global Reach',
      description: 'Access a worldwide network of skilled professionals and cutting-edge services.',
      icon: <Globe className="w-8 h-8 text-indigo-500" />,
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance from our dedicated team to ensure your success.',
      icon: <Clock className="w-8 h-8 text-orange-500" />,
    },
    {
      title: 'Cost Reduction',
      description: 'Save up to 40% on your projects through direct connections and competitive pricing.',
      icon: <TrendingDown className="w-8 h-8 text-red-500" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Zion Tech?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
>>>>>>> origin/main
            We combine cutting-edge technology with exceptional service to deliver 
            solutions that drive real business value and growth.
          </p>
        </motion.div>

<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-zion-cyan mb-2 flex justify-center">
                {React.createElement(stat.icon, { className: "w-6 h-6" })}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
=======
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center">
>>>>>>> origin/main
                {benefit.description}
              </p>
            </div>
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

          {/* Benefits */}
          <div className="grid grid-cols-1 md: anygrid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index)    => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group h-full">
                  {/* Icon with enhanced background */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.color} mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>

                  {/* Stats badge */}
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${benefit.bgColor} border border-zion-cyan/30 mb-4`}>
                    <span className="text-zion-cyan font-bold text-sm">{benefit.stats}</span>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-zion-slate-light leading-relaxed mb-6">
                    {benefit.description}
                  </p>

                  {/* Features list */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div 
                        className="space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {benefit.features.map((feature, idx)    => (
                          <motion.div 
                            key={idx} 
                            className="flex items-center gap-2 text-zion-slate-light/80 text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Hover indicator */}
                  <div className="mt-4 text-zion-cyan/60 text-xs">
                    {hoveredIndex === index ? "Hover to see details" : "Hover for details"}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-slate-700 to-slate-600 rounded-3xl p-12 border border-slate-500"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Our Impact in Numbers</h3>
            <p className="text-gray-300 text-lg">Real results that speak for themselves</p>
          </div>
          
          <div className="grid grid-cols-2 md: anygrid-cols-4 gap-8">
            {stats.map((stat, index)    => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-white"     />
                </div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have already experienced the Zion Tech Group difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300">
                Schedule a Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

<<<<<<< HEAD
export default BenefitsSection;
=======
export default BenefitsSection;
>>>>>>> origin/main
