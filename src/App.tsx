import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Footer } from './components/Footer';
import Sidebar from './components/layout/Sidebar';
import ErrorBoundary from './components/ErrorBoundary';

// Import pages
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/Contact';
import NotFoundPage from './pages/NotFound';

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Header />
          <div className="main-content">
            <Sidebar />
            <main className="content">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}