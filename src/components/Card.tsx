import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
<<<<<<< HEAD
  title?: string;
  description?: string;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  title, 
  description, 
  className = '', 
  onClick 
}) => {
  return (
    <motion.div 
      className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer ${className}`}
      onClick={onClick}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {title && (
        <h3 className="text-xl font-semibold mb-3 text-white text-center">{title}</h3>
      )}
      {description && (
        <p className="text-gray-300 mb-4 text-center">{description}</p>
      )}
=======
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      {children}
    </motion.div>
  );
<<<<<<< HEAD
};

export default Card;
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
