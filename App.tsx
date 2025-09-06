import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Home from './src/pages/Home';
import About from './src/pages/About';
import Services from './src/pages/Services';
import Contact from './src/pages/Contact';
import Pricing from './src/pages/Pricing';
import RequestQuote from './src/pages/RequestQuote';
import Dashboard from './src/pages/Dashboard';
import Login from './src/pages/Login';
import News from './src/pages/News';
import Help from './src/pages/Help';
import ComprehensivePricing from './src/pages/ComprehensivePricing';
import AIServices from './src/pages/AIServices';
import ITServices from './src/pages/ITServices';
import MicroSaaS from './src/pages/MicroSaaS';
import LoadingSpinner from './src/components/LoadingSpinner';
import ErrorBoundary from './src/components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/request-quote" element={<RequestQuote />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/news" element={<News />} />
              <Route path="/help" element={<Help />} />
              <Route path="/comprehensive-pricing" element={<ComprehensivePricing />} />
              <Route path="/ai-services" element={<AIServices />} />
              <Route path="/it-services" element={<ITServices />} />
              <Route path="/micro-saas" element={<MicroSaaS />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
