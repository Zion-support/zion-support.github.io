import React from 'react';

interface EnhancedErrorBoundaryProps {
  children: React.ReactNode;

export function EnhancedErrorBoundary({ children }: EnhancedErrorBoundaryProps) {
  return <>{children}</>;
