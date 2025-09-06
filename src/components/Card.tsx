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
<<<<<<< HEAD
    <div
      className={`bg-white rounded-lg shadow-md p-6 ${className}`}
=======
    <motion.div 
      className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer ${className}`}
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
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
      {children}
    </motion.div>
  );
};

export default Card;
<<<<<<< HEAD
=======
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {children}
    </motion.div>
  );
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-54a3
=======
>>>>>>> 90212cbddaba7c9a204f99fe028e1da1f0847a0f
