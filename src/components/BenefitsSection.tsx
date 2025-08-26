import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Clock, Globe, TrendingDown } from 'lucide-react';

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const benefits: Benefit[] = [
  {
    title: "AI-Powered Matchmaking",
    description: "Our advanced algorithms match your needs with the perfect service providers or products, saving you time and ensuring optimal results.",
    icon: <Bot className="w-8 h-8" />,
    features: ["Smart Recommendations", "Precision Matching", "Time Optimization", "Quality Assurance"]
  },
  {
    title: "Global Availability",
    description: "Access a worldwide network of tech talents, products, and services to find the best solutions regardless of geographic limitations.",
    icon: <Globe className="w-8 h-8" />,
    features: ["Worldwide Network", "24/7 Access", "Local Expertise", "Global Standards"]
  },
  {
    title: "24/7 Support",
    description: "Our dedicated team is available around the clock to assist with any questions or issues you might encounter during your journey.",
    icon: <Clock className="w-8 h-8" />,
    features: ["Round-the-clock Help", "Expert Assistance", "Quick Response", "Proactive Support"]
  },
  {
    title: "Cost Reduction",
    description: "Eliminate middlemen and reduce costs by up to 40% through direct connections with service providers and product vendors.",
    icon: <TrendingDown className="w-8 h-8" />,
    features: ["Direct Connections", "No Middlemen", "Bulk Discounts", "Transparent Pricing"]
  }
];

export default function BenefitsSection() {
  return (
<<<<<<< HEAD
    <section className="py-20 bg-gradient-to-br from-zion-blue-light to-zion-blue">
      <div className="container mx-auto px-4">
=======
    <section className="py-20 bg-zion-blue-light">
      <div className="container mx-auto px-4">
        {/* Header */}
>>>>>>> main
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
<<<<<<< HEAD
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple bg-clip-text text-transparent">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto">
            Experience the next generation of tech marketplace with features designed to maximize efficiency and value
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
=======
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Experience the next generation of tech solutions with features designed to maximize efficiency and value
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
>>>>>>> main
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
<<<<<<< HEAD
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center text-white">
                  {benefit.icon}
=======
              className="relative group cursor-pointer"
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${benefit.bgColor} border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 h-full`}>
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{benefit.description}</p>

                {/* Stats */}
                <div className={`text-3xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent mb-4`}>
                  {benefit.stats}
                </div>

                {/* Features */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-2">
                        {benefit.features.map((feature, idx) => (
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
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Hover indicator */}
                <div className="mt-4 text-zion-cyan/60 text-xs">
                  {hoveredIndex === index ? "Hover to see details" : "Hover for details"}
>>>>>>> main
                </div>
                <h3 className="text-2xl font-bold text-white">{benefit.title}</h3>
              </div>
              
              <p className="text-zion-slate-light mb-6 leading-relaxed">
                {benefit.description}
              </p>
              
              <div className="space-y-3">
                {benefit.features.map((feature, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex items-center gap-3 text-zion-slate-light/80 text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {additionalStats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={statsVariants}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-2 text-white">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
            <div className="px-8 py-4 bg-zion-blue-dark rounded-xl">
              <p className="text-white text-lg mb-4">
                Ready to experience the Zion difference?
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                Get Started Today
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
