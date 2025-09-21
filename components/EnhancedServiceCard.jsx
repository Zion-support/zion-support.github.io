import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const EnhancedServiceCard = ({ 
  service, 
  index, 
  isVisible, 
  onHover 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cardRef, setCardRef] = useState(null);

  useEffect(() => {
    if (cardRef) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            onHover?.(index);
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(cardRef);
      return () => observer.disconnect();
    }
  }, [cardRef, index, onHover]);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    rest: { 
      scale: 1,
      rotate: 0
    },
    hover: { 
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    rest: { 
      y: 0,
      opacity: 1
    },
    hover: { 
      y: -5,
      opacity: 0.9,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      ref={setCardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
      
      {/* Floating particles effect */}
      {isHovered && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              initial={{ 
                x: Math.random() * 100 + '%', 
                y: '100%',
                opacity: 0
              }}
              animate={{ 
                y: '-20%',
                opacity: [0, 1, 0],
                x: Math.random() * 100 + '%'
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10">
        {/* Icon with enhanced animation */}
        <motion.div 
          variants={iconVariants}
          className="text-4xl mb-4 inline-block"
        >
          {service.icon}
        </motion.div>

        {/* Title with staggered animation */}
        <motion.h3 
          variants={textVariants}
          className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300"
        >
          {service.title}
        </motion.h3>

        {/* Description with enhanced typography */}
        <motion.p 
          variants={textVariants}
          className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
        >
          {service.description}
        </motion.p>

        {/* Enhanced CTA with icon animation */}
        <motion.a 
          href="/services" 
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group/cta"
          whileHover={{ x: 5 }}
        >
          <span className="mr-2">Learn More</span>
          <motion.svg 
            className="w-4 h-4" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </motion.svg>
        </motion.a>

        {/* Progress indicator */}
        <motion.div 
          className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? '100%' : '0%' }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EnhancedServiceCard;