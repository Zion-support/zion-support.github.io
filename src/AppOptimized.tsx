import React, { Suspense, lazy } from "react",
import { BrowserRouter, Routes, Route } from "react-router-dom",
import { HelmetProvider } from "react-helmet-async",
import { QueryClient, QueryClientProvider } from "@tanstack/react-query",
import { Provider } from "react-redux",
import { store } from "./store",
import { ErrorBoundary } from "./components/ErrorHandling/EnhancedErrorBoundary",
import { PerformanceOptimizer } from "./components/Performance/PerformanceOptimizer",
import { AccessibilityEnhancer } from "./components/Accessibility/AccessibilityEnhancer",
const queryClient = new QueryClient();

const AppOptimized = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <BrowserRouter>
              <PerformanceOptimizer>
                <AccessibilityEnhancer>
                  <Routes>
                    <Route path="/" element={<div>App Optimized</div>} />
                  </Routes>
                </AccessibilityEnhancer>
              </PerformanceOptimizer>
            </BrowserRouter>
          </HelmetProvider>
        </QueryClientProvider>
      </Provider>
    </ErrorBoundary>
  );;

export default AppOptimized;
