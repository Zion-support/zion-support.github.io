import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  price: string;
  category: string;
  features: string[];
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
  features,
  isPopular = false,
  isNew = false,
  href = '/services'
}) => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const iconVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "backOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <Link to={href} className="block h-full">
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-500 hover:shadow-2xl hover:shadow-zion-cyan/25 h-full">
          {/* Popular/New Badge */}
          {(isPopular || isNew) && (
            <motion.div
              variants={badgeVariants}
              className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-xs font-bold text-white shadow-lg ${
                isPopular 
                  ? 'bg-gradient-to-r from-zion-orange to-zion-yellow' 
                  : 'bg-gradient-to-r from-zion-purple to-zion-cyan'
              }`}
            >
              {isPopular ? '🔥 Popular' : '✨ New'}
            </motion.div>
          )}

          {/* Service Icon */}
          <motion.div
            variants={iconVariants}
            className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-zion-cyan/25"
          >
            <span className="text-3xl">{icon}</span>
          </motion.div>

          {/* Service Content */}
          <div className="text-center h-full flex flex-col">
            {/* Category Tag */}
            <div className="inline-flex items-center px-3 py-1 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan text-xs font-medium mb-4 self-center">
              {category}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors duration-300 line-clamp-2">
              {title}
            </h3>

            {/* Description */}
            <p className="text-zion-slate-light text-sm mb-6 leading-relaxed flex-grow line-clamp-3">
              {description}
            </p>
            
            {/* Price */}
            <div className="text-zion-cyan font-bold text-lg mb-6">
              {price}
            </div>

            {/* Features */}
            <div className="space-y-2 mb-6">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-zion-slate-light text-xs">
                  <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full flex-shrink-0" />
                  <span className="line-clamp-1">{feature}</span>
                </div>
              ))}
              {features.length > 3 && (
                <div className="text-zion-cyan/60 text-xs text-center">
                  +{features.length - 3} more features
                </div>
              )}
            </div>

            {/* CTA Button */}
            <div className="mt-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 border border-zion-cyan/40 rounded-xl text-zion-cyan text-sm font-semibold group-hover:from-zion-cyan/30 group-hover:to-zion-blue/30 transition-all duration-300">
                Learn More
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>
          </div>

          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-blue/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Corner Accent */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-zion-cyan/60 rounded-full group-hover:bg-zion-cyan transition-colors duration-300" />
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;