import React, { useEffect, useState } from "react";
import "./app/styles/futuristic.css";
import "./app/styles/futuristic-enhanced.css";
import "./app/styles/accessibility-enhanced.css";
import Navigation from "./app/components/Navigation";
import Footer from "./app/components/Footer";
import Sidebar from "./app/components/Sidebar";
import HomePage from "./app/page";

// Error Boundary Components
const GlobalErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="error-boundary">
      {children}
    </div>
  );
};

const EnhancedErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="enhanced-error-boundary">
      {children}
    </div>
  );
};

// Loading Component
const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

// Main App Component
interface App_cleanProps {
  className?: string;
  children?: React.ReactNode;
}

export default function App_clean({ className = '', children }: App_cleanProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <GlobalErrorBoundary>
      <EnhancedErrorBoundary>
        <div className={`app-container ${className}`}>
          <Navigation />
          <main className="main-content">
            {children || <HomePage />}
          </main>
          <Footer />
          <Sidebar />
        </div>
      </EnhancedErrorBoundary>
    </GlobalErrorBoundary>
  );
}