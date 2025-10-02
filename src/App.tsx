import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Core Components
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import BannerManager from './components/BannerManager';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import NotificationSystem from './components/NotificationSystem';
import PerformanceMonitor from './components/PerformanceMonitor';
import EnhancedSEOHead from './components/EnhancedSEOHead';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import CaseStudiesPage from './pages/CaseStudiesPage';

// Performance Optimizer
import PerformanceOptimizer from './components/PerformanceOptimizer';

// Types
interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
}

const App: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize app
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Simulate initialization
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading(false);
      } catch (error) {
        console.error('App initialization error:', error);
        setIsLoading(false);
      }
    };

    initializeApp();
  }, []);

  // Notification handlers
  const handleRemoveNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  }, []);

  const addNotification = useCallback((notification: Omit<Notification, 'id'>) => {
    const id = Date.now().toString();
    setNotifications(prev => [...prev, { ...notification, id }]);
    
    // Auto-remove after duration
    if (notification.duration) {
      setTimeout(() => {
        handleRemoveNotification(id);
      }, notification.duration);
    }
  }, [handleRemoveNotification]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Zion Tech Group...</p>
        </div>
      </div>
    );
  }

  return (
    <HelmetProvider>
      <Router>
        <EnhancedErrorBoundary>
          <AccessibilityEnhancer>
            <EnhancedSEOHead />
            <PerformanceOptimizer />
            
            <div className="min-h-screen bg-white">
              <Header />
              
              <div className="flex">
                <Sidebar />
                
                <main className="flex-1 ml-64">
                  <BannerManager />
                  
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/case-studies" element={<CaseStudiesPage />} />
                  </Routes>
                </main>
              </div>
              
              <Footer />
            </div>
            
            <NotificationSystem 
              notifications={notifications} 
              onRemove={handleRemoveNotification} 
            />
            <PerformanceMonitor />
          </AccessibilityEnhancer>
        </EnhancedErrorBoundary>
      </Router>
    </HelmetProvider>
  );
}

export default App;