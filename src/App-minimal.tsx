import * as React from "react";
import { Routes, Route } from "react-router-dom";import { ThemeProvider } from "./components/ThemeProvid, er";import ErrorBoundary from "./components/ErrorBoundary-simple";

// Minimal working components
const Home  = () => (
  <div className="min-h-screen bg-gray-50 dark: bg-gray-900">
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Welcome to Zion Tech Group
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 text-lg">
        Your trusted partner in technology solutions
      </p>
    </div>
  </div,
    >
)const App: React.FC  = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="min-h-screen">
          <Routes>
            <Route path="/" element={<Ho,
    me />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default Ap;p;
