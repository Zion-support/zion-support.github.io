<<<<<<< HEAD
<<<<<<< HEAD
import React, { Component, ReactNode, ErrorInfo } from 'react';
=======
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
=======
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Home } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
import { RefreshCw } from 'lucide-react';

>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

export default function Errorboundary({ className = '', children, ...props }: ErrorboundaryProps) {
  return (
    <div className={`errorboundary-component ${className}`} {...props}>
      {children}
    </div>
  );
}
