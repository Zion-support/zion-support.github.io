import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Footer } from './components/Footer';
import Sidebar from './components/Sidebar';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { EnhancedErrorBoundary } from './components/EnhancedErrorBoundary';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const AISolutions = lazy(() => import('./pages/AISolutions'));
const CloudDevOps = lazy(() => import('./pages/CloudDevOps'));
const Cybersecurity = lazy(() => import('./pages/services/Cybersecurity'));
const QuantumTechnology = lazy(() => import('./pages/services/QuantumTechnology'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
  </div>
);

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useScrollToTop();

  return (
    <EnhancedErrorBoundary>
      <ThemeProvider>
        <WhitelabelProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
              <Header />
              <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
              
              <main className="pt-20">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    {/* Main Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/ai-solutions" element={<AISolutions />} />
                    <Route path="/cloud-devops" element={<CloudDevOps />} />
                    
                    {/* Service Routes */}
                    <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                    <Route path="/services/quantum-technology" element={<QuantumTechnology />} />
                    
                    {/* Company Routes */}
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                </Suspense>
              </main>
              
              <Footer />
              <SonnerToaster />
            </div>
          </Router>
        </WhitelabelProvider>
      </ThemeProvider>
    </EnhancedErrorBoundary>
  );
};

export default App;