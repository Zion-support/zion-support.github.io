

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Hand } from 'lucide-react';

interface Props {,
    children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

export default function Improvederrorboundary({ className = '', children, ...props }: ImprovederrorboundaryProps) {
  return (
    <div className={`improvederrorboundary-component ${className}`} {...props}>
      {children}
    </div>
  );

}

