import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Home } from 'lucide-react';
<<<<<<< HEAD
import { AlertTriangle } from 'lucide-react';
=======
import React from 'react';

=======
import { AlertTriangle } from 'lucide-react';import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-fbfa
interface EnhancederrorboundaryProps {
  className?: string;
  children?: React.ReactNode;
}
export default function Enhancederrorboundary({ className = '', children, ...props }: EnhancederrorboundaryProps) {
  return (
    <div className={`enhancederrorboundary-component ${className}`} {...props}>
      {children}
    </div>
  );
}