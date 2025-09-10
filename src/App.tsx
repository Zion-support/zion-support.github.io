import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader.jsx';
import { Footer } from './components/Footer.jsx';
import { ChatAssistant } from './components/ChatAssistant.tsx';

// Lazy load components for better performance
const HomePage = lazy(() => import('./pages/home.tsx'));
const ServicesPage = lazy(() => import('./pages/services.tsx'));
const AboutPage = lazy(() => import('./pages/about.tsx'));
const ContactPage = lazy(() => import('./pages/contact.tsx'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zion-blue-dark">
        <AppHeader />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
        <Footer />
        <ChatAssistant />
      </div>
    </Router>
  );
}

export default App;
