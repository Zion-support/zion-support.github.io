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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
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
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
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
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            ⭐ Most Popular
          </div>
        </div>
      )}

      {/* New Badge */}
      {isNew && (
        <div className="absolute -top-3 right-4 z-10">
          <div className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            🆕 New
          </div>
        </div>
      )}

      <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-zion-cyan/40 transition-all duration-300 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,221,210,0.03)_25%,rgba(34,221,210,0.03)_50%,transparent_50%,transparent_75%,rgba(34,221,210,0.03)_75%)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Icon */}
        <motion.div 
          className="relative z-10 text-5xl mb-4 text-center"
          variants={iconVariants}
          whileHover="hover"
        >
          {icon}
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          {/* Category */}
          <div className="text-center mb-3">
            <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-medium rounded-full border border-zion-cyan/30">
              {category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-zion-cyan transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-zion-slate-light text-sm leading-relaxed mb-4 text-center">
            {description}
          </p>

          {/* Features */}
          {features.length > 0 && (
            <div className="mb-4">
              <ul className="space-y-2">
                {features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                    <span className="w-1.5 h-1.5 bg-zion-cyan rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Price */}
          <div className="text-center mb-4">
            <div className="text-2xl font-bold text-zion-cyan mb-1">{price}</div>
            <div className="text-xs text-zion-slate-light">Starting Price</div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              to={href}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 text-zion-cyan border border-zion-cyan/30 rounded-lg text-sm font-medium hover:from-zion-cyan/30 hover:to-zion-blue/30 hover:border-zion-cyan/50 transition-all duration-300 group-hover:shadow-zion-glow"
            >
              Learn More
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </motion.div>
  );
};

export default ServiceCard;