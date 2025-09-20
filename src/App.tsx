import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
// Sidebar is optional in this build; component may be disabled
// import Sidebar from './components/Sidebar';
import { AccessibilityControls } from './components/AccessibilityControls';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import ErrorBoundary from './components/ErrorBoundary';
import { SidebarProvider } from './context/SidebarContext';

// Core pages - minimal set for working build
const Home = lazy(() => import('./pages/Home'));
const ServicesPage = lazy(() => import('./pages/Services'));
const ContactPage = lazy(() => import('./pages/Contact'));
const AboutPage = lazy(() => import('./pages/About'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
  </div>
);

// Theme toggle is now handled by the context

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <WhitelabelProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
              <Header />
              
              <main className="flex-1">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    {/* Core Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    
                    
                    {/* 404 Route */}
                    <Route path="*" element={<div className="min-h-screen flex items-center justify-center text-white">Page not found</div>} />
                  </Routes>
                </Suspense>
              </main>
              
              <Footer />
              <SonnerToaster />
            </div>
            
            {/* Sidebar (disabled) */}
            {/* <Sidebar /> */}
          </Router>
        </WhitelabelProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;