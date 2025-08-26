import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  price: string;
  category: string;
  features?: string[];
  isPopular?: boolean;
  isNew?: boolean;
  href?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  price,
  category,
  features = [],
  isPopular = false,
  isNew = false,
  href = "/services"
}) => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconVariants: Variants = {
    hover: {
      scale: 1.15,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const badgeVariants: Variants = {
    hover: {
      scale: 1.1,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const featureVariants: Variants = {
    hover: {
      x: 5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className={`relative group cursor-pointer ${isPopular ? 'ring-2 ring-zion-cyan ring-opacity-50' : ''}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Popular Badge */}
      {isPopular && (
        <motion.div 
          className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10"
          variants={badgeVariants}
          whileHover="hover"
        >
          <div className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-zion-cyan/30">
            <span className="flex items-center gap-1">
              <span className="animate-pulse">⭐</span>
              Most Popular
            </span>
          </div>
        </motion.div>
      )}

      {/* New Badge */}
      {isNew && (
        <motion.div 
          className="absolute -top-3 right-4 z-10"
          variants={badgeVariants}
          whileHover="hover"
        >
          <div className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-zion-purple/30">
            <span className="flex items-center gap-1">
              <span className="animate-pulse">🆕</span>
              New
            </span>
          </div>
        </motion.div>
      )}

      <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-zion-cyan/40 transition-all duration-300 overflow-hidden group-hover:shadow-2xl group-hover:shadow-zion-cyan/25">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,221,210,0.05)_25%,rgba(34,221,210,0.05)_50%,transparent_50%,transparent_75%,rgba(34,221,210,0.05)_75%)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Animated Background Elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-zion-cyan/30 rounded-full animate-pulse" />
        <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-zion-blue/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Icon with Enhanced Animation */}
        <motion.div 
          className="relative z-10 text-6xl mb-6 text-center group-hover:drop-shadow-lg group-hover:drop-shadow-zion-cyan/50"
          variants={iconVariants}
          whileHover="hover"
        >
          {icon}
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          {/* Category with Enhanced Styling */}
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 text-zion-cyan text-xs font-semibold rounded-full border border-zion-cyan/30 hover:border-zion-cyan/50 transition-all duration-300">
              {category}
            </span>
          </div>

          {/* Title with Enhanced Typography */}
          <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-zion-cyan transition-colors duration-300 leading-tight">
            {title}
          </h3>

          {/* Description with Better Readability */}
          <p className="text-zion-slate-light text-sm leading-relaxed mb-6 text-center">
            {description}
          </p>

          {/* Enhanced Features List */}
          {features.length > 0 && (
            <div className="mb-6">
              <ul className="space-y-3">
                {features.slice(0, 3).map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center gap-3 text-sm text-zion-slate-light group-hover:text-zion-slate-light/80 transition-colors duration-300"
                    variants={featureVariants}
                    whileHover="hover"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex-shrink-0 animate-pulse" style={{ animationDelay: `${index * 0.2}s` }} />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Enhanced Price Display */}
          <div className="text-center mb-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent mb-1">
              {price}
            </div>
            <div className="text-xs text-zion-slate-light opacity-80">Starting Price</div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={href}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 text-zion-cyan border border-zion-cyan/30 rounded-xl text-sm font-semibold hover:from-zion-cyan/30 hover:to-zion-blue/30 hover:border-zion-cyan/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-zion-cyan/25 hover:bg-gradient-to-r hover:from-zion-cyan/30 hover:to-zion-blue/30"
              >
                <span>Learn More</span>
                <motion.span 
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  animate={{ x: [0, 2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 via-zion-blue/5 to-zion-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        
        {/* Corner Accents */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-zion-cyan/10 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-zion-blue/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Enhanced Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-blue/20 to-zion-purple/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      
      {/* Additional Glow Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 to-zion-blue/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-20" />
    </motion.div>
  );
};

export default ServiceCard;