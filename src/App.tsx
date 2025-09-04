import React from 'react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Home from './pages/Home';
import Services from './pages/Services';
import AIServices from './pages/AIServices';
import ITServices from './pages/ITServices';
import MicroSaaS from './pages/MicroSaaS';
import Contact from './pages/Contact';

function Nav() {
  return (
    <nav style={{ display: 'flex', gap: 16, padding: 16, borderBottom: '1px solid #e5e7eb' }}>
      <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
      <Link to="/services" style={{ textDecoration: 'none' }}>Services</Link>
      <Link to="/ai-services" style={{ textDecoration: 'none' }}>AI Services</Link>
      <Link to="/it-services" style={{ textDecoration: 'none' }}>IT Services</Link>
      <Link to="/micro-saas" style={{ textDecoration: 'none' }}>Micro SaaS</Link>
      <Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link>
    </nav>
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