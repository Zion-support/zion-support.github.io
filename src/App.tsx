<<<<<<< HEAD
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/layout/Sidebar'
import ErrorBoundary from './components/ErrorBoundary'
// Import pages
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import ServicesPage from './pages/Services'
import PricingPage from './pages/Pricing'
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/layout/Sidebar';
import ErrorBoundary from './components/ErrorBoundary';

// Import pages
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/Contact';
import NotFoundPage from './pages/NotFound';

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
export default function App() {
  return (
    <ErrorBoundary>
      <Router>
<<<<<<< HEAD
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Sidebar />
          <main className="flex-1 lg:ml-80">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
            </Routes>
          </main>
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
