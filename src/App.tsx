import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// Enhanced Components
import PerformanceOptimizer from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
// Lazy load pages for better performance - only import existing pages
const SolutionsPage = lazy(() => import('./pages/Solutions').then(module => ({ default: module.default })));
// Service Pages
  return (
    <ThemeProvider>
      <NotificationProvider>
        <Router>
          <AppLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AppLayout>
        </Router>
      </NotificationProvider>
    </ThemeProvider>
  )
}
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705
