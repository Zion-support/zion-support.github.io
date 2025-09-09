import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface HeroFeature {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

interface HeroFeaturesProps {
  features: HeroFeature[];
}

const HeroFeatures: React.FC<HeroFeaturesProps> = ({ features }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {features.map((feature, index) => (
        <motion.div 
          key={feature.title}
          className="group relative"
          variants={itemVariants}
          whileHover={{ 
            y: -8,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Animated background glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>
          
          {/* Feature card */}
          <div className="relative bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 text-center hover:border-zion-cyan/40 hover:bg-zion-slate-dark/70 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 overflow-hidden">
            {/* Icon container with enhanced hover effects */}
            <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <feature.icon className="w-8 h-8 text-white" aria-hidden="true" />
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Animated border on hover */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
            </div>
            
            {/* Title with gradient text effect */}
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
              {feature.title}
            </h3>
            
            {/* Description with enhanced readability */}
            <p className="text-zion-slate-light text-sm group-hover:text-zion-slate-light/80 transition-colors duration-300 leading-relaxed">
              {feature.description}
            </p>
            
            {/* Decorative line that expands on hover */}
            <div className={`w-8 h-0.5 bg-gradient-to-r ${feature.gradient} rounded-full mx-auto mt-4 group-hover:w-16 transition-all duration-300`}></div>
            
            {/* Subtle corner accent */}
            <div className={`absolute top-2 right-2 w-3 h-3 bg-gradient-to-br ${feature.gradient} rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300`}></div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroFeatures;