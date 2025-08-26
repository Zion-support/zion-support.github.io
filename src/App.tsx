import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>Zion Tech Group - Leading Technology Solutions & AI Services</title>
          <meta name="description" content="Zion Tech Group provides cutting-edge technology solutions, AI-powered services, cloud infrastructure, cybersecurity, and digital transformation expertise. Transform your business with our innovative tech solutions." />
          <meta name="keywords" content="AI solutions, cloud computing, cybersecurity, digital transformation, technology consulting, IT services, machine learning, DevOps, enterprise software" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Zion Tech Group - Leading Technology Solutions & AI Services" />
          <meta property="og:description" content="Transform your business with cutting-edge technology solutions, AI-powered services, and digital transformation expertise." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:site_name" content="Zion Tech Group" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Zion Tech Group - Leading Technology Solutions & AI Services" />
          <meta name="twitter:description" content="Transform your business with cutting-edge technology solutions, AI-powered services, and digital transformation expertise." />
          <link rel="canonical" href="https://ziontechgroup.com" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Helmet>
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;