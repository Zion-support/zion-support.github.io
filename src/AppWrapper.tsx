<<<<<<< HEAD
import React from "react;";
import { ErrorBoundary } from "./components/ErrorBoundary, ";
import { PerformanceOptimizer } from "./components/PerformanceOptimizer, ";
import { AccessibilityEnhancer } from "./components/AccessibilityEnhancer, ";

interface AppWrapperProps {children: React.ReactNode};
=======
import React from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { PerformanceOptimizer } from "./components/PerformanceOptimizer";
import { AccessibilityEnhancer } from "./components/AccessibilityEnhancer";

interface AppWrapperProps {children: React.ReactNode};
interface AppWrapperProps {
children: React.ReactNode;
}

>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
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
<<<<<<< HEAD
}<//ErrorBoundary><///ErrorBoundary>
=======
}
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
