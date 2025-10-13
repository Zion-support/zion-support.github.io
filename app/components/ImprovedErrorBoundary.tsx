<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
interface Props {
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
=======
import React from 'react';

interface ImprovedErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
}

export default function ImprovedErrorBoundary({ className = '', children, ...props }: ImprovedErrorBoundaryProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
<<<<<<< HEAD
// Higher-order component for easier usage
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<Props, 'children'>
) => {
  const WrappedComponent = (props: P) => (
    <ImprovedErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ImprovedErrorBoundary>
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
// Hook for functional components to handle errors
export const useErrorHandler = () => {
  return (error: Error, errorInfo?: ErrorInfo) => {
    // In production, you might want to send this to an error reporting service
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Hand } from 'lucide-react';
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6

<<<<<<< HEAD
interface ImprovedErrorBoundaryProps {
=======
interface ImprovederrorboundaryProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
  className?: string;
  children?: React.ReactNode;
}

export default function ImprovedErrorBoundary({ className = '', children }: ImprovedErrorBoundaryProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ef50
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
