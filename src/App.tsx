import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import { EnhancedAccessibilityEnhancer } from './components/EnhancedAccessibilityEnhancer';
import { ModernUIEnhancer } from './components/ModernUIEnhancer';
import { SEO } from './components/SEO';
import { ChatAssistant } from './components/ChatAssistant';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Create a helper function for lazy loading
const createLazyComponent = (importFunc: () => Promise<any>) => {
  return lazy(importFunc);
};

// Core pages - only include the ones we know work
const Home = createLazyComponent(() => import('./pages/Home'));
const Contact = createLazyComponent(() => import('./pages/Contact'));
const ServicesPricingPage = createLazyComponent(() => import('./pages/ServicesPricingPage'));

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <LoadingSpinner />
  </div>
);

function App() {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Leading Technology Solutions</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge AI, cybersecurity, cloud infrastructure, and digital transformation services to help businesses thrive in the digital age." />
        <meta name="keywords" content="AI, cybersecurity, cloud infrastructure, digital transformation, technology solutions, Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - Leading Technology Solutions" />
        <meta property="og:description" content="Transform your business with our comprehensive technology solutions and services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Leading Technology Solutions" />
        <meta name="twitter:description" content="Transform your business with our comprehensive technology solutions and services." />
      </Helmet>

      <PerformanceOptimizer 
        enabled={true}
        showMetrics={true}
        optimizeImages={true}
        lazyLoadThreshold={0.1}
      />

      <EnhancedAccessibilityEnhancer 
        enabled={true}
        showAccessibilityPanel={true}
        enableHighContrast={true}
        enableLargeText={true}
        enableReducedMotion={true}
        enableFocusIndicators={true}
        enableScreenReaderOptimization={true}
        enableVoiceNavigation={true}
      />

      <ModernUIEnhancer 
        enableDarkMode={true}
        enableThemeSystem={true}
        enableGlassmorphism={true}
        enableGradients={true}
        enableAnimations={true}
        enableCustomCursor={true}
        enableLoadingStates={true}
        enableScrollProgress={true}
        enableMicroInteractions={true}
      />

      <SEO 
        title="Zion Tech Group - Leading Technology Solutions"
        description="Transform your business with our comprehensive technology solutions and services."
        keywords="AI, cybersecurity, cloud infrastructure, digital transformation, technology solutions"
        canonicalUrl="https://ziontechgroup.com"
        ogImage="https://ziontechgroup.com/og-image.jpg"
        twitterCard="summary_large_image"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "description": "Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-0123",
            "contactType": "customer service"
          }
        }}
      />

      <ChatAssistant />

      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Core Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services-pricing" element={<ServicesPricingPage />} />

          {/* Catch-all route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;