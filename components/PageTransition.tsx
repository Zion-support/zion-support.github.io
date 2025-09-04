import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: Reac t.ReactNode;
}

const PageTransition: Reac t.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 2 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
