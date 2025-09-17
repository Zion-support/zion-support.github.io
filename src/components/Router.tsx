import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Import basic pages
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import NotFound from '../pages/NotFound';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* Main Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />

      {/* 404 Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;