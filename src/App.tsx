
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ErrorBoundary from './utils/errorBoundary';
import './index.css';
import ServicesPage from './pages/ServicesPage.tsx';
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/index'));
const Services = React.lazy(() => import('./pages/services'));
const Contact = React.lazy(() => import('./pages/contact'));

export default function App() {
  return (

    <HelmetProvider>
      <ErrorBoundary>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </Layout>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
