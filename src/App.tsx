
import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Footer } from './components/Footer';
import Sidebar from './components/layout/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import PerformanceMonitor from './components/PerformanceMonitor';
import { ThemeProvider } from './context/ThemeContext';
import { initAnalytics } from './utils/analytics';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Initialize analytics
  React.useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <ThemeProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 dark:from-black dark:via-gray-900 dark:to-blue-900 light:from-gray-50 light:via-blue-50 light:to-purple-50">
            <Header />
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            
            <main className="pt-20">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            
            <Footer />
            <PerformanceMonitor />
          </div>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
