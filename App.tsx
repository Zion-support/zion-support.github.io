import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './src/components/ErrorBoundary';
import { Header } from './src/components/Header';
import Sidebar from './src/components/layout/Sidebar';
import Footer from './src/components/Footer';
import HomePage from './src/pages/Home';
import AboutPage from './src/pages/About';
import ContactPage from './src/pages/Contact';
import ServicesPage from './src/pages/Services';
import PricingPage from './src/pages/Pricing';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
    <main>
      <h1>Zion Tech Group - AI, Micro SaaS & IT Services</h1>
      <p>Building the future with innovative technology solutions</p>
    </main>
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-5c86
  );
}