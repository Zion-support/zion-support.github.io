import React from "react";
import { ErrorBoundary } from "./components/ErrorHandling/EnhancedErrorBoundary";
import { PerformanceOptimizer } from "./components/Performance/PerformanceOptimizer";
import { AccessibilityEnhancer } from "./components/Accessibility/AccessibilityEnhancer";

interface AppWrapperProps {
  children: React.ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  return (
    <ErrorBoundary>
      <PerformanceOptimizer>
        <AccessibilityEnhancer>
          {children}
        </AccessibilityEnhancer>
      </PerformanceOptimizer>
    </ErrorBoundary>
  );
};

export default AppWrapper;
