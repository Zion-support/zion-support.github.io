import React from 'react';
import { Home } from 'lucide-react';
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fbfa
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