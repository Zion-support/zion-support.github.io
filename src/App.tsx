import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Solutions from './pages/Solutions';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Zion Tech Group — AI, Security, Cloud, Micro SaaS</title>
        <meta name="description" content="AI, cybersecurity, cloud, DevOps, and data solutions with enterprise-grade compliance and measurable outcomes." />
        <link rel="canonical" href="https://ziontechgroup.com/" />
      </Helmet>
      <Header />
      <main>
        <div className="layout">
          <Sidebar />
          <div className="min-w-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;