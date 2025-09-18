import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './src/ScrollToTop';
import Header from './src/Header';
import Footer from './src/Footer';

// Import key pages
import HomePage from './src/pages/HomePage';
import AboutPage from './src/pages/About';
import ServicesPage from './src/pages/ServicesPage';
import ContactPage from './src/pages/ContactPage';
import NotFoundPage from './src/pages/404';

export default function App(): React.JSX.Element {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
