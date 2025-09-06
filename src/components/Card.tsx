import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, className = '' }) => {
  return (
    <motion.div
      className={`bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors ${className}`}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default Card;