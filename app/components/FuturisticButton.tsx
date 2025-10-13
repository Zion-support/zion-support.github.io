import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
=======
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9

interface FuturisticbuttonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Futuristicbutton({ className = '', children, ...props }: FuturisticbuttonProps) {
  return (
    <div className={`futuristicbutton-component ${className}`} {...props}>
      {children}
    </div>
  );
}
