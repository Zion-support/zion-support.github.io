'use client';
import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SolutionsPage from './pages/SolutionsPage';
import NotFoundPage from './pages/NotFoundPage';

  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<SolutionsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
};

// 404 Page Component
const NotFoundPage: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-cyan-400 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-white mb-4">Page Not Found</h2>
      <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
      <a
        href="/"
        className="cyber-button inline-flex items-center px-6 py-3 text-lg font-semibold"
      >
        Go Home
      </a>
    </div>
  </div>
);

export default App;
