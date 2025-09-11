import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './src/components/ErrorBoundary';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import ServiceCard from './src/components/ServiceCard';
import TestimonialCarousel from './src/components/TestimonialCarousel';
import ContactSection from './src/components/ContactSection';
import BenefitsSection from './src/components/BenefitsSection';
import HowItWorksSection from './src/components/HowItWorksSection';
import FaqSection from './src/components/FaqSection';
import ChatAssistant from './src/components/ChatAssistant';
import ScrollToTop from './src/components/ScrollToTop';
import ParticleBackground from './src/components/ParticleBackground';

export default function App(): React.JSX.Element {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <ParticleBackground />
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/services' element={<ServicesPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <ChatAssistant />
      </Router>
    </ErrorBoundary>
  );
}

// Placeholder components - replace with actual implementations
function HomePage() {
  return (
    <div>
      <h1>Welcome to Zion Tech</h1>
      <p>Your trusted technology partner</p>
    </div>
  );
}

function ServicesPage() {
  return (
    <div>
      <h1>Our Services</h1>
      <p>Comprehensive technology solutions</p>
    </div>
  );
}

function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Learn more about our company</p>
    </div>
  );
}

function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Get in touch with our team</p>
    </div>
  );
}
