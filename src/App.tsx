import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import PerformanceWrapper from './components/PerformanceWrapper';
import AdvancedPerformanceMonitor from './components/AdvancedPerformanceMonitor';
import EnhancedSEO from './components/EnhancedSEO';
import AccessibilityEnhancements from './components/AccessibilityEnhancements';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/ServicesPage';
import NotFound from './pages/NotFound';
import './App.css';
import './components/AccessibilityEnhancements.css';

function App() {
  const [showPerformanceMonitor, setShowPerformanceMonitor] = useState(false);

  // Register service worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }
  }, []);

  // Add keyboard shortcut for performance monitor
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setShowPerformanceMonitor(!showPerformanceMonitor);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showPerformanceMonitor]);

  return (
    <EnhancedErrorBoundary>
      <ThemeProvider>
        <PerformanceWrapper>
          <AccessibilityEnhancements>
            <EnhancedSEO 
              title="Zion Tech Group - AI & IT Solutions"
              description="Leading provider of AI-powered solutions, quantum computing, and micro SAAS services for modern businesses."
              keywords="AI solutions, quantum computing, micro SAAS, IT services, technology consulting, digital transformation, cloud infrastructure, cybersecurity"
              image="/og-image.png"
              type="website"
              author="Zion Tech Group"
              structuredData={{
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Zion Tech Group",
                "description": "Leading provider of AI-powered solutions, quantum computing, and micro SAAS services for modern businesses.",
                "url": "https://zion.app",
                "logo": "https://zion.app/logo.png",
                "sameAs": [
                  "https://twitter.com/ZionTechGroup",
                  "https://linkedin.com/company/zion-tech-group"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-555-ZION-TECH",
                  "contactType": "customer service",
                  "availableLanguage": "English"
                }
              }}
            />
            <Router>
              <div className="App">
                <Header />
                <main className="main-content">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
                
                {/* Performance Monitor */}
                <AdvancedPerformanceMonitor 
                  isVisible={showPerformanceMonitor}
                  onToggle={() => setShowPerformanceMonitor(!showPerformanceMonitor)}
                />
              </div>
            </Router>
          </AccessibilityEnhancements>
        </PerformanceWrapper>
      </ThemeProvider>
    </EnhancedErrorBoundary>
  );
}

export default App;