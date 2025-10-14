import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Import pages
import HomePage from './page';
import AboutPage from './about/page';
import ServicesPage from './services/page';
import ContactPage from './contact/page';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Zion Tech Group - AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for businesses worldwide." />
      </Helmet>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
