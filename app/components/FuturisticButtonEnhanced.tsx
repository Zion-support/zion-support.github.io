import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { Icon, Icon } from 'lucide-react';
=======
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8
=======
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9

interface FuturisticbuttonenhancedProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Futuristicbuttonenhanced({ className = '', children, ...props }: FuturisticbuttonenhancedProps) {
  return (
    <div className={`futuristicbuttonenhanced-component ${className}`} {...props}>
      {children}
    </div>
  );
}
