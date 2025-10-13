<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Home } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
import { RefreshCw } from 'lucide-react';
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-ba4f

interface ErrorboundaryProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Errorboundary({ className = '', children, ...props }: ErrorboundaryProps) {
  return (
    <div className={`errorboundary-component ${className}`} {...props}>
      {children}
    </div>
  );
}
