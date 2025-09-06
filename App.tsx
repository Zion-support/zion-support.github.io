
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './src/components/ErrorBoundary';
import { Header } from './src/components/Header';
import Sidebar from './src/components/layout/Sidebar';
<<<<<<< HEAD
import Footer from './src/components/Footer';
=======
import { Footer } from './src/components/Footer';
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import HomePage from './src/pages/Home';
import AboutPage from './src/pages/About';
import ContactPage from './src/pages/Contact';
import ServicesPage from './src/pages/Services';
import PricingPage from './src/pages/Pricing';

export default function App() {
<<<<<<< HEAD
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header onMenuClick={handleMenuClick} />
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          <main className="flex-1 lg:ml-80">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}
