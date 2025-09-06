import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <motion.div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {children}
    </motion.div>
  );
}
