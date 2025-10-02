import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../app/page';
import AboutPage from '../app/about/page';
import ContactPage from '../app/contact/page';
import ServicesPage from '../app/services/page';
import AIServicesPage from '../app/ai-services/page';
import CaseStudiesPage from '../app/case-studies/page';
import BlogPage from '../app/blog/page';
import '../app/globals.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white text-gray-900">
          <Header />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/ai-services" element={<AIServicesPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/blog" element={<BlogPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;