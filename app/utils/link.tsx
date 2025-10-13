<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-ba4f

interface LinkProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Link({ className = '', children, ...props }: LinkProps) {
  return (
    <div className={`link-component ${className}`} {...props}>
      {children}
    </div>
  );
}
