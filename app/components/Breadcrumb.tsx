import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
=======
import { Home } from 'lucide-react';
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8
=======
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9

interface BreadcrumbProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Breadcrumb({ className = '', children, ...props }: BreadcrumbProps) {
  return (
    <div className={`breadcrumb-component ${className}`} {...props}>
      {children}
    </div>
  );
}
