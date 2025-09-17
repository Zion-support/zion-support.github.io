import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './src/ScrollToTop';
import Header from './src/Header';
import Footer from './src/Footer';
import EnhancedHeroSection from './src/components/EnhancedHeroSection';
import FeaturedContentSection from './src/components/FeaturedContentSection';
import './src/index.css';
import './src/styles/optimizations.css';
import './src/styles/accessibility.css';

// Import only existing components
import Home from './src/pages/Home';
import About from './About';
import Blog from './src/pages/Blog';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        
        <Routes>
          <Route path="/" element={
            <div>
              <EnhancedHeroSection />
              <FeaturedContentSection />
            </div>
          } />
          
          {/* Legacy Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          
          {/* Catch-all route for SPA */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
                <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
                <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Go Home
                </a>
              </div>
            </div>
          } />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;