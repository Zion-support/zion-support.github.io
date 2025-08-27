import React from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
interface AppWrapperProps {
  children: React.ReactNode;
}
export function AppWrapper({ children }: AppWrapperProps) {
  return (
    <ErrorBoundary>
      <PerformanceOptimizer>
        <AccessibilityEnhancer>
          {children}
        </AccessibilityEnhancer>
      </PerformanceOptimizer>
    </ErrorBoundary>
  );
}