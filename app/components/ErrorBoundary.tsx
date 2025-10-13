import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Home } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
import { RefreshCw } from 'lucide-react';

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
