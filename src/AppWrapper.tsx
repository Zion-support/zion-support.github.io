import React from "
import { ErrorBoundary } from "
import { PerformanceOptimizer } from "
import { AccessibilityEnhancer } from "

interface AppWrapperProps {
children: React.ReactNode,
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
)
}<//ErrorBoundary><///ErrorBoundary>