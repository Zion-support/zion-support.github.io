import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Stat {
  number: string;
  label: string;
  icon: LucideIcon;
  color: string;
}

interface StatsSectionProps {
  stats: Stat[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark/50 to-zion-slate/50 backdrop-blur-xl" role="region" aria-label="Statistics">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            <span className="text-gradient-primary">Impressive</span> Numbers
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Our track record speaks for itself. Discover why leading companies choose Zion Tech Group for their digital transformation.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group text-center"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                {/* Animated background circle */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                {/* Icon container */}
                <div className={`relative w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-10 h-10 text-white" aria-hidden="true" />
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>

              {/* Number with animated counter effect */}
              <motion.div 
                className="text-4xl md:text-5xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {stat.number}
              </motion.div>

              {/* Label */}
              <p className="text-lg text-zion-slate-light group-hover:text-zion-slate-light/80 transition-colors duration-300">
                {stat.label}
              </p>

              {/* Decorative line */}
              <div className={`w-16 h-1 bg-gradient-to-r ${stat.color} rounded-full mx-auto mt-4 group-hover:w-20 transition-all duration-300`}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional trust indicators */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-full">
            <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
            <span className="text-zion-cyan text-sm font-medium">Trusted by Fortune 500 Companies</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;