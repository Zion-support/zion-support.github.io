import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import CaseStudies from './pages/CaseStudies';
import CaseStudy from './pages/CaseStudy';
import Blog from './pages/Blog';
import { SEO } from './components/SEO';
import { AnalyticsProvider, trackPerformance } from './components/Analytics';

export default function App() {
  // Initialize performance tracking
  React.useEffect(() => {
    trackPerformance();
  }, []);

  return (
    <Router>
      <AnalyticsProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <SEO />
          <Navigation />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudy />} />
          </Routes>
        </div>
      </AnalyticsProvider>
    </Router>
  );
}