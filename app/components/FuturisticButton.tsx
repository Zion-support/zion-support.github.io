import React from 'react';
<<<<<<< HEAD

=======
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-fbfa
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