import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Home } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';import React from 'react';
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