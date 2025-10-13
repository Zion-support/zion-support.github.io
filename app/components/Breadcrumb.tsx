import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-ba4f

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
