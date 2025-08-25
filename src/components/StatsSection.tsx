import React from 'react';
import { motion } from 'framer-motion';

export function StatsSection() {
  const stats = [
    {
      number: "500+",
      label: "Projects Delivered",
      description: "Successfully completed projects across industries"
    },
    {
      number: "50+",
      label: "Enterprise Clients",
      description: "Trusted by leading companies worldwide"
    },
    {
      number: "99.9%",
      label: "Uptime SLA",
      description: "Reliable infrastructure and support"
    },
    {
      number: "24/7",
      label: "Support",
      description: "Round-the-clock technical assistance"
    },
    {
      number: "200+",
      label: "AI Models",
      description: "Custom AI solutions deployed"
    },
    {
      number: "15+",
      label: "Years Experience",
      description: "Deep expertise in technology"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-quantum-mesh opacity-30"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-zion-cyan/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Our track record speaks for itself. We've helped hundreds of companies 
            transform their business with cutting-edge technology solutions.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105">
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2 group-hover:text-zion-cyan-light transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base font-semibold text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-xs text-zion-slate-light">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
            <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
            <span className="text-zion-slate-light text-sm">
              Continuously growing and innovating
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}