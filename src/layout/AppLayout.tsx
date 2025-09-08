import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import ContactPage from '../pages/ContactPage';
import NotFound from '../pages/NotFound';
import { AppConfig } from '../types/app';

interface AppLayoutProps {
  children?: React.ReactNode;
  config?: AppConfig;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children, config }) => {
  return (
    <div className="min-h-screen bg-zion-blue text-white">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {children}
      </main>
      <Footer />
    </div>
  );
};