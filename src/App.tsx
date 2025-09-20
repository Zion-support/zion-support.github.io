import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import ErrorBoundary from './components/ErrorBoundary';

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

const App = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <WhitelabelProvider>
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
            
        </WhitelabelProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;