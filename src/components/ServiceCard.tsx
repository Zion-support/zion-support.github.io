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
  isNew?: boolean;
  isPopular?: boolean;
  href?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  price,
  category,
  features,
  isNew = false,
  isPopular = false,
  href = '#'
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
    hidden: { scale: 0.8, rotate: -10 },
    visible: {
      scale: 1,
      rotate: 0,
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
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="group relative h-full"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      <Link to={href} className="block h-full">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 h-full relative overflow-hidden group-hover:shadow-zion-glow">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Floating Elements */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-zion-cyan/30 rounded-full animate-float" />
          <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-zion-purple/20 rounded-full animate-float floating-delay-1" />
          
          {/* Service Icon */}
          <motion.div 
            className="relative z-10 w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg shadow-zion-cyan/25"
            variants={iconVariants}
          >
            <span className="text-3xl">{icon}</span>
          </motion.div>

          {/* Badges */}
          <div className="relative z-10 flex justify-center gap-2 mb-4">
            {isNew && (
              <motion.span 
                className="inline-flex items-center px-3 py-1 rounded-full bg-zion-green/20 text-zion-green text-sm font-medium border border-zion-green/30"
                variants={badgeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <span className="w-2 h-2 bg-zion-green rounded-full mr-2 animate-pulse" />
                New
              </motion.span>
            )}
            {isPopular && (
              <motion.span 
                className="inline-flex items-center px-3 py-1 rounded-full bg-zion-yellow/20 text-zion-yellow text-sm font-medium border border-zion-yellow/30"
                variants={badgeVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <span className="w-2 h-2 bg-zion-yellow rounded-full mr-2 animate-pulse" />
                Popular
              </motion.span>
            )}
          </div>

          {/* Service Content */}
          <div className="relative z-10">
            {/* Category */}
            <div className="text-center mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-zion-blue/20 text-zion-cyan text-xs font-medium border border-zion-blue/30">
                {category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-zion-cyan transition-colors duration-300 line-clamp-2">
              {title}
            </h3>

            {/* Description */}
            <p className="text-zion-slate-light text-center mb-6 line-clamp-3 leading-relaxed">
              {description}
            </p>

            {/* Features */}
            <div className="mb-6">
              <div className="text-zion-cyan text-sm font-medium mb-3 text-center">Key Features</div>
              <ul className="space-y-2">
                {features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="text-zion-slate-light text-sm flex items-center gap-3">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full flex-shrink-0" />
                    <span className="line-clamp-2">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price and CTA */}
            <div className="text-center">
              <div className="text-zion-cyan font-bold text-lg mb-4">{price}</div>
              <div className="inline-flex items-center gap-2 text-zion-cyan group-hover:text-white transition-colors duration-300 font-medium">
                <span>Learn More</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>
          </div>

          {/* Hover Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/10 to-zion-purple/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-zion-cyan/0 via-zion-cyan/5 to-zion-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;