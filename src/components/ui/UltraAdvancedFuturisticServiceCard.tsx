import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EnhancedService } from '../../data/enhancedServices';

interface UltraAdvancedFuturisticServiceCardProps {
  service: EnhancedService;
  onClick?: () => void;
  className?: string;
}

export const UltraAdvancedFuturisticServiceCard: React.FC<UltraAdvancedFuturisticServiceCardProps> = ({
  service,
  onClick,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    initial: {
      scale: 1,
      rotateY: 0,
      boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)"
    },
    hover: {
      scale: 1.02,
      rotateY: 5,
      boxShadow: "0 0 40px rgba(0, 255, 255, 0.6)"
    },
    expanded: {
      scale: 1.05,
      rotateY: 0,
      boxShadow: "0 0 60px rgba(0, 255, 255, 0.8)"
    }
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const neonGlow = {
    boxShadow: `
      0 0 5px ${service.featured ? 'rgba(255, 215, 0, 0.8)' : 'rgba(0, 255, 255, 0.8)'},
      0 0 10px ${service.featured ? 'rgba(255, 215, 0, 0.6)' : 'rgba(0, 255, 255, 0.6)'},
      0 0 15px ${service.featured ? 'rgba(255, 215, 0, 0.4)' : 'rgba(0, 255, 255, 0.4)'},
      0 0 20px ${service.featured ? 'rgba(255, 215, 0, 0.2)' : 'rgba(0, 255, 255, 0.2)'}
    `
  };

  return (
    <motion.div
      className={`relative group cursor-pointer ${className}`}
      variants={cardVariants}
      initial="initial"
      animate={isExpanded ? "expanded" : isHovered ? "hover" : "initial"}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => {
        if (onClick) onClick();
        setIsExpanded(!isExpanded);
      }}
    >
      {/* Quantum Field Background */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-black via-gray-900 to-blue-900 opacity-90" />
      
      {/* Holographic Border */}
      <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-border opacity-60" />
      
      {/* Main Card Content */}
      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 via-blue-900/60 to-black/80 backdrop-blur-sm border border-gray-700/50">
        
        {/* Featured Badge */}
        {service.featured && (
          <motion.div
            className="absolute -top-3 -right-3 z-20"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full shadow-lg">
              ⭐ FEATURED
            </div>
          </motion.div>
        )}

        {/* New Service Badge */}
        {service.isNew && (
          <motion.div
            className="absolute -top-3 -left-3 z-20"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <div className="px-3 py-1 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-bold rounded-full shadow-lg">
              🆕 NEW
            </div>
          </motion.div>
        )}

        {/* Header Section */}
        <motion.div
          className="mb-4"
          variants={contentVariants}
          initial="initial"
          animate="animate"
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-white mb-2 leading-tight">
              {service.title}
            </h3>
          </div>
          
          <p className="text-gray-300 text-sm leading-relaxed">
            {service.description}
          </p>
        </motion.div>

        {/* Category and Price */}
        <motion.div
          className="flex items-center justify-between mb-4"
          variants={contentVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.1 }}
        >
          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30">
            {service.category}
          </span>
          <div className="text-right">
            <div className="text-2xl font-bold text-white">
              {service.currency}{service.price.toLocaleString()}
            </div>
            <div className="text-xs text-gray-400">
              per {service.pricingModel}
            </div>
          </div>
        </motion.div>

        {/* Features Preview */}
        <motion.div
          className="mb-4"
          variants={contentVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
        >
          <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
          <div className="grid grid-cols-1 gap-2">
            {service.features.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center text-gray-300 text-xs"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0" />
                {feature}
              </motion.div>
            ))}
            {service.features.length > 3 && (
              <div className="text-xs text-gray-500 italic">
                +{service.features.length - 3} more features
              </div>
            )}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="mb-4"
          variants={contentVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-sm font-semibold text-green-400 mb-2">Benefits</h4>
          <div className="space-y-1">
            {service.benefits.slice(0, 2).map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center text-gray-300 text-xs"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 flex-shrink-0" />
                {benefit}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          className="mb-4"
          variants={contentVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-wrap gap-2">
            {service.tags.slice(0, 4).map((tag, index) => (
              <motion.span
                key={index}
                className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="border-t border-gray-700/50 pt-4"
          variants={contentVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between text-xs text-gray-400">
            <div>
              <div className="flex items-center mb-1">
                <span className="mr-2">📞</span>
                {service.contactInfo.phone}
              </div>
              <div className="flex items-center">
                <span className="mr-2">✉️</span>
                {service.contactInfo.email}
              </div>
            </div>
            <div className="text-right">
              <div className="text-cyan-400 font-medium">Market Price</div>
              <div className="text-white">{service.marketPrice}</div>
            </div>
          </div>
        </motion.div>

        {/* Hover Effects */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-cyan-500/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>

        {/* Quantum Particles Effect */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${30 + (i * 10)}%`
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Neon Glow Effect */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={neonGlow}
      />
    </motion.div>
  );
};

export default UltraAdvancedFuturisticServiceCard;