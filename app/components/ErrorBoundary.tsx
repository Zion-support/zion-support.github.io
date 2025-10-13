<<<<<<< HEAD
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
=======
import React from 'react';

interface ErrorboundaryProps {
  className?: string;
  children?: React.ReactNode;
>>>>>>> cursor/fix-errors-and-merge-to-main-b119
}

export default function Errorboundary({ className = '', children, ...props }: ErrorboundaryProps) {
  return (
    <div className={`errorboundary-component ${className}`} {...props}>
      {children}
    </div>
  );
}
