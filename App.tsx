import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './src/Header';
import Footer from './src/Footer';
import ScrollToTop from './src/ScrollToTop';
import EnhancedHeroSection from './src/components/EnhancedHeroSection';
import ComprehensiveServicesShowcase from './src/components/ComprehensiveServicesShowcase';
import InteractiveFeaturesSection from './src/components/InteractiveFeaturesSection';

export default function App(): JSX.Element {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        
        <main>
          {/* Enhanced Hero Section */}
          <EnhancedHeroSection />
          
          {/* Comprehensive Services Showcase */}
          <ComprehensiveServicesShowcase />
          
          {/* Interactive Features Section */}
          <InteractiveFeaturesSection />
          
          {/* Additional Content Sections */}
          <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join hundreds of companies that have accelerated their growth with our cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Project Today
                </a>
                <a
                  href="/case-studies"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
                >
                  View Success Stories
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}