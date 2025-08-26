import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

export function HeroSection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  background = 'gradient',
  backgroundImage,
  showBackgroundElements = true,
  className = ""
}) {
  const backgroundClasses = {
    gradient: 'bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue',
    solid: 'bg-zion-blue-dark',
    image: `bg-cover bg-center bg-no-repeat ${backgroundImage ? '' : 'bg-gradient-to-br from-zion-slate-dark/90 via-zion-blue-dark/90 to-zion-blue/90'}`
  };

  const backgroundStyle = background === 'image' && backgroundImage ? {
    backgroundImage: `linear-gradient(to bottom right, rgba(23, 45, 103, 0.9), rgba(30, 58, 138, 0.9), rgba(46, 115, 234, 0.9)), url(${backgroundImage})`
  } : {};

  return (
    <section 
      className={`relative py-20 ${backgroundClasses[background]} overflow-hidden ${className}`}
      style={backgroundStyle}
    >
      {/* Background Elements */}
      {showBackgroundElements && (
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.8, 0.5, 0.8]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      )}
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title.includes('Zion Tech Group') ? (
              <>
                {title.split('Zion Tech Group').map((part, index) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < title.split('Zion Tech Group').length - 1 && (
                      <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                        Zion Tech Group
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </>
            ) : (
              title
            )}
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
          
          {/* Call to Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {primaryCTA && (
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-zion-cyan/25 flex items-center gap-2 mx-auto sm:mx-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={primaryCTA.action}
              >
                {primaryCTA.icon && <primaryCTA.icon className="w-5 h-5" />}
                {primaryCTA.text}
              </motion.button>
            )}
            
            {secondaryCTA && (
              <motion.button 
                className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg font-semibold hover:bg-zion-cyan hover:text-white transition-colors flex items-center gap-2 mx-auto sm:mx-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={secondaryCTA.action}
              >
                {secondaryCTA.icon === Play ? (
                  <>
                    <Play className="w-5 h-5" />
                    {secondaryCTA.text}
                  </>
                ) : (
                  <>
                    {secondaryCTA.text}
                    {secondaryCTA.icon && <secondaryCTA.icon className="w-5 h-5" />}
                  </>
                )}
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-zion-cyan rounded-full flex justify-center"
          animate={{ 
            y: [0, 10, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="w-1 h-3 bg-zion-cyan rounded-full mt-2"
            animate={{ 
              y: [0, 12, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
