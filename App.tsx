import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './src/Header';
import Footer from './src/Footer';
import EnhancedHomePage from './src/components/enhanced-home';
import AboutPage from './src/pages/About';
import ServicesPage from './src/pages/ComprehensiveServices2025';
import ContactPage from './src/pages/Contact';
import ErrorBoundary from './src/components/ErrorBoundary';
import SEO from './src/components/SEO';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <SEO 
          title="Zion Tech Group - AI & Technology Solutions"
          description="Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services."
          keywords="AI automation, cloud computing, micro SaaS, technology consulting, enterprise solutions, digital transformation"
          url="https://zion.app"
        />
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<EnhancedHomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;