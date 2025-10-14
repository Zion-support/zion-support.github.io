import React, { useEffect, Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Lazy load pages
const HomePage = lazy(() => import("./app/page"));
const AISolutionsPage = lazy(() => import("./app/ai-solutions/page"));
const ITSolutionsPage = lazy(() => import("./app/it-solutions/page"));
const MicroSaaSSolutionsPage = lazy(() => import("./app/micro-saas-solutions/page"));
const AIBusinessIntelligenceProPage = lazy(() => import("./app/ai-business-intelligence-pro/page"));
const AICybersecuritySuiteProPage = lazy(() => import("./app/ai-cybersecurity-suite-pro/page"));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-500 mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
);

// Error boundary component
interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (process.env.NODE_ENV === "development") {
      console.error("Error caught by boundary:", error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-8">We are working to fix this issue. Please try again later.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("web-vitals").then(({ onCLS, onFCP, onLCP, onTTFB }) => {
        onCLS((metric) => {
          if (process.env.NODE_ENV === "development") {
            console.warn("CLS:", metric);
          }
        });
        onFCP((metric) => {
          if (process.env.NODE_ENV === "development") {
            console.warn("FCP:", metric);
          }
        });
        onLCP((metric) => {
          if (process.env.NODE_ENV === "development") {
            console.warn("LCP:", metric);
          }
        });
        onTTFB((metric) => {
          if (process.env.NODE_ENV === "development") {
            console.warn("TTFB:", metric);
          }
        });
      });

      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "navigation") {
            if (process.env.NODE_ENV === "development") {
              console.warn("Page load time:", (entry as PerformanceNavigationTiming).loadEventEnd - (entry as PerformanceNavigationTiming).loadEventStart, "ms");
            }
          }
        }
      });

      observer.observe({ entryTypes: ["navigation"] });

      if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
        console.warn("Zion Tech Group App initialized");
      }
    }
  }, []);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/ai-solutions" element={<AISolutionsPage />} />
                <Route path="/it-solutions" element={<ITSolutionsPage />} />
                <Route path="/micro-saas-solutions" element={<MicroSaaSSolutionsPage />} />
                <Route path="/ai-business-intelligence-pro" element={<AIBusinessIntelligenceProPage />} />
                <Route path="/ai-cybersecurity-suite-pro" element={<AICybersecuritySuiteProPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;
