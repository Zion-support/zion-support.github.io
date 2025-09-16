import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './Header';
import Footer from './Footer';
import LazyComponent from './components/LazyComponent';
import PerformanceMonitorComponent from './components/PerformanceMonitor';
import './index.css';

// Lazy load homepage sections
const HomePageSections = lazy(() => import('./components/HomePageSections'));
const AppRoutes = lazy(() => import('./routes/AppRoutes'));

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <PerformanceMonitorComponent />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <Header />
        
        <Routes>
          <Route path="/" element={
            <LazyComponent>
              <HomePageSections />
            </LazyComponent>
          } />
          
          {/* All other routes are handled by AppRoutes */}
          <Route path="/*" element={
            <LazyComponent>
              <AppRoutes />
            </LazyComponent>
          } />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;