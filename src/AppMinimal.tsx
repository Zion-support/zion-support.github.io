import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import { NotificationProvider } from './contexts/NotificationContext';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import ThemeToggle from './components/ThemeToggle';
import PerformanceMonitor from './components/PerformanceMonitor';
import ProgressBar from './components/ProgressBar';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// Lazy load components for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const BlogIndex = lazy(() => import('./pages/BlogIndex'));
const BlogGenerativeAISecurity = lazy(() => import('./pages/blog/GenerativeAISecurityBestPractices'));
const BlogEdgePersonalization = lazy(() => import('./pages/blog/EdgePersonalizationPatterns2025'));
const BlogLLMCostOptimization = lazy(() => import('./pages/blog/LLMCostOptimizationPlaybook'));
const BlogAIGovernanceChecklist = lazy(() => import('./pages/blog/AIGovernanceChecklist2025'));

export default function AppMinimal() {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <ErrorBoundary>
        <Helmet>
          <title>Zion Tech Group - Advanced Technology Solutions</title>
          <meta 
            name="description" 
            content="Leading provider of AI, blockchain, cloud computing, and cybersecurity solutions for modern businesses." 
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="Zion Tech Group" />
          <meta property="og:description" content="Advanced Technology Solutions" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://zion.app" />
        </Helmet>
        
        <div className="app">
          <ProgressBar />
          
          <header className="app-header">
            <nav className="main-navigation">
              <div className="nav-brand">
                <h1>Zion Tech Group</h1>
              </div>
              <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
              <div className="nav-actions">
                <ThemeToggle />
              </div>
            </nav>
          </header>

          <main className="app-main">
            <Suspense fallback={<LoadingSpinner text="Loading page..." />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog" element={<BlogIndex />} />
                <Route path="/blog/generative-ai-security-best-practices" element={<BlogGenerativeAISecurity />} />
                <Route path="/blog/edge-personalization-patterns-2025" element={<BlogEdgePersonalization />} />
                <Route path="/blog/llm-cost-optimization-playbook" element={<BlogLLMCostOptimization />} />
                <Route path="/blog/ai-governance-checklist-2025" element={<BlogAIGovernanceChecklist />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>

          <footer className="app-footer">
            <div className="footer-content">
              <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
              <div className="footer-links">
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms of Service</a>
              </div>
            </div>
          </footer>
          
          <ScrollToTop />
        </div>
        
        {/* Performance Monitor - Development Only */}
        <PerformanceMonitor />
        </ErrorBoundary>
      </NotificationProvider>
    </ThemeProvider>
  );
}
