import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ErrorBoundary from './utils/errorBoundary';
import './App.css';
import ServicesPage from './components/ServicesPage';

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Layout>
          <header className="App-header">
            <nav style={{ marginTop: 12 }}>
              <Link to="/" style={{ marginRight: 12 }}>Home</Link>
              <Link to="/services">Services</Link>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </Layout>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default function App() {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group</title>
        <meta name="description" content="AI, Micro SaaS and IT services by Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>
      <Nav />
      <div style={{ minHeight: 'calc(100vh - 140px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ai-services" element={<AIServices />} />
          <Route path="/it-services" element={<ITServices />} />
          <Route path="/micro-saas" element={<MicroSaaS />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <footer style={{ padding: 24, borderTop: '1px solid #e5e7eb', textAlign: 'center', fontSize: 14 }}>
        © {new Date().getFullYear()} Zion Tech Group — 364 E Main St STE 1008 Middletown DE 19709 — +1 302 464 0950 — kleber@ziontechgroup.com
      </footer>
    </>
  );
}