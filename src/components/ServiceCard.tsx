import React from 'react';
<<<<<<< HEAD
=======
import { motion } from 'framer-motion';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

interface ServiceCardProps {
  title: string;
  description: string;
<<<<<<< HEAD
  icon: string;
  features: string[];
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  features, 
  className = '' 
}) => {
  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 ${className}`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-400 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
=======
  icon?: string;
  features?: string[];
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  features = [],
  className = ''
}) => {
  return (
    <motion.div 
      className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 ${className}`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {icon && (
        <div className="text-4xl mb-4 text-center">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3 text-white text-center">{title}</h3>
      <p className="text-gray-300 mb-4 text-center">{description}</p>
      {features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-300">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  );
};

export default ServiceCard;