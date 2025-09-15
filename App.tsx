import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './src/Header';
import Footer from './src/Footer';
import EnhancedHeroSection from './src/components/EnhancedHeroSection';
import EnhancedServicesShowcase from './src/components/EnhancedServicesShowcase';
import EnhancedTestimonialsSection from './src/components/EnhancedTestimonialsSection';

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <EnhancedHeroSection />
                <EnhancedServicesShowcase />
                <EnhancedTestimonialsSection />
              </>
            } />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}