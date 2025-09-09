import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CTASection({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  background = 'gradient',
  backgroundImage,
  className = "",
  showArrow = true
}) {
  const backgroundClasses = {
    gradient: 'bg-gradient-to-r from-zion-cyan to-zion-purple',
    solid: 'bg-zion-blue-dark',
    image: `bg-cover bg-center bg-no-repeat ${backgroundImage ? '' : 'bg-gradient-to-r from-zion-cyan to-zion-purple'}`
  };

  const backgroundStyle = background === 'image' && backgroundImage ? {
    backgroundImage: `linear-gradient(to right, rgba(34, 221, 210, 0.9), rgba(140, 21, 233, 0.9)), url(${backgroundImage})`
  } : {};

  return (
    <section 
      className={`py-16 ${backgroundClasses[background]} ${className}`}
      style={backgroundStyle}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              className="px-8 py-4 bg-white text-zion-blue rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg flex items-center gap-2 mx-auto sm:mx-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={primaryButton.action}
            >
              {primaryButton.icon && <primaryButton.icon className="w-5 h-5" />}
              {primaryButton.text}
              {showArrow && <ArrowRight className="w-4 h-4" />}
            </motion.button>
            
            {secondaryButton && (
              <motion.button 
                className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-zion-blue transition-colors flex items-center gap-2 mx-auto sm:mx-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={secondaryButton.action}
              >
                {secondaryButton.text}
                {secondaryButton.icon && <secondaryButton.icon className="w-4 h-4" />}
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}