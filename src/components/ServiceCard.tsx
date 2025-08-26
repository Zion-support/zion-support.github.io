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
  rating?: number;
  customers?: number;
  setupTime?: string;
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
  href = "/services",
  rating = 4.8,
  customers = 1000,
  setupTime = "2-3 days"
}) => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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
      y: -12,
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

  const featureVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
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
      {/* Enhanced Popular Badge */}
      {isPopular && (
        <motion.div 
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <div className="bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple text-white text-xs font-bold px-4 py-2 rounded-full shadow-2xl border border-white/20">
            <span className="flex items-center gap-2">
              <span className="text-yellow-300 text-sm">⭐</span>
              Most Popular
              <span className="text-yellow-300 text-sm">⭐</span>
            </span>
          </div>
        </motion.div>
      )}

      {/* Enhanced New Badge */}
      {isNew && (
        <motion.div 
          className="absolute -top-4 right-4 z-10"
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
        >
          <div className="bg-gradient-to-r from-zion-purple via-zion-cyan to-zion-blue text-white text-xs font-bold px-4 py-2 rounded-full shadow-2xl border border-white/20">
            <span className="flex items-center gap-2">
              <span className="text-pink-300 text-sm">🆕</span>
              New Service
              <span className="text-pink-300 text-sm">🆕</span>
            </span>
          </div>
        </motion.div>
      )}

      <div className="relative h-full bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/25 hover:border-zion-cyan/50 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,221,210,0.05)_25%,rgba(34,221,210,0.05)_50%,transparent_50%,transparent_75%,rgba(34,221,210,0.05)_75%)] bg-[size:30px_30px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Floating Particles */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-zion-cyan/40 rounded-full animate-float" />
        <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-zion-purple/30 rounded-full animate-float floating-delay-1" />
        
        {/* Enhanced Icon */}
        <motion.div 
          className="relative z-10 text-6xl mb-6 text-center"
          variants={iconVariants}
          whileHover="hover"
        >
          <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 p-4 rounded-3xl border border-zion-cyan/30 group-hover:border-zion-cyan/50 transition-all duration-300">
            {icon}
          </div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          {/* Enhanced Category */}
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-zion-cyan/25 to-zion-blue/25 text-zion-cyan text-sm font-semibold rounded-full border border-zion-cyan/40 backdrop-blur-sm">
              {category}
            </span>
          </div>

          {/* Enhanced Title */}
          <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-zion-cyan transition-colors duration-300 leading-tight">
            {title}
          </h3>

          {/* Enhanced Description */}
          <p className="text-zion-slate-light text-base leading-relaxed mb-6 text-center">
            {description}
          </p>

          {/* Enhanced Features */}
          {features.length > 0 && (
            <motion.div 
              className="mb-6"
              variants={featureVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="text-sm font-semibold text-zion-cyan mb-3 text-center">Key Features</h4>
              <ul className="space-y-3">
                {features.slice(0, 3).map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-center gap-3 text-sm text-zion-slate-light"
                    variants={featureVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex-shrink-0" />
                    <span className="group-hover:text-white transition-colors duration-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Enhanced Stats Row */}
          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
            <div className="bg-white/5 rounded-lg p-3 border border-white/10">
              <div className="text-lg font-bold text-zion-cyan">{rating}</div>
              <div className="text-xs text-zion-slate-light">Rating</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 border border-white/10">
              <div className="text-lg font-bold text-zion-cyan">{customers}+</div>
              <div className="text-xs text-zion-slate-light">Customers</div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 border border-white/10">
              <div className="text-lg font-bold text-zion-cyan">{setupTime}</div>
              <div className="text-xs text-zion-slate-light">Setup</div>
            </div>
          </div>

          {/* Enhanced Price */}
          <div className="text-center mb-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent mb-2">{price}</div>
            <div className="text-sm text-zion-slate-light">Starting Price</div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="text-center">
            <Link
              to={href}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-zion-cyan/25 to-zion-blue/25 text-zion-cyan border border-zion-cyan/40 rounded-xl text-sm font-semibold hover:from-zion-cyan/35 hover:to-zion-blue/35 hover:border-zion-cyan/60 hover:scale-105 transition-all duration-300 group-hover:shadow-zion-glow backdrop-blur-sm"
            >
              <span>Learn More</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300 text-lg">→</span>
            </Link>
          </div>
        </div>

        {/* Enhanced Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/8 to-zion-blue/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
      </div>

      {/* Enhanced Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/25 to-zion-blue/25 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
    </motion.div>
  );
};

export default ServiceCard;