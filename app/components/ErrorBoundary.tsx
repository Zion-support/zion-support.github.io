'use client';
import React, { Component, ReactNode, ErrorInfo } from 'react';
334a97c43c32bf9e815481016c5bf31caa46a580

interface ErrorBoundaryProps {
  className?: string;
  children?: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ className = '', children }) => {
  return (
    <div className={`errorboundary-component ${className}`}>
      {children}
    </div>
  );
};

ErrorBoundary.displayName = 'ErrorBoundary';

export default ErrorBoundary;