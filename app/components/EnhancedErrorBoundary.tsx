<<<<<<< HEAD
<<<<<<< HEAD
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Home } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8
=======
import React from 'react';
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9

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
