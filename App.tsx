import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './src/components/ErrorBoundary';
import Header from './src/components/Header';
import Sidebar from './src/components/layout/Sidebar';
import Footer from './src/components/Footer';
import LandingPage from './src/pages/LandingPage';
import AboutPage from './src/pages/About';
import ContactPage from './src/pages/Contact';
import ServicesPage from './src/pages/Services';
import PricingPage from './src/pages/Pricing';

export default function App() {
  return (
    <main>
      <h1>Zion Tech Group - AI, Micro SaaS & IT Services</h1>
      <p>Building the future with innovative technology solutions</p>
    </main>
  );
}