import React, { Suspense, memo, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import LoadingSpinner from './src/components/LoadingSpinner';
import PerformanceMonitor from './src/components/PerformanceMonitor';
import AccessibilityEnhancer from './src/components/AccessibilityEnhancer';
import './src/styles/futuristic.css';

// Lazy load heavy components for better performance
const UnifiedContentPromotion = React.lazy(() => import('./src/components/UnifiedContentPromotion'));
const InteractiveAIROICalculator = React.lazy(() => import('./src/components/InteractiveAIROICalculator'));
const ContentShowcase = React.lazy(() => import('./src/components/ContentShowcase'));
const InteractiveContentShowcase2026 = React.lazy(() => import('./src/components/InteractiveContentShowcase2026'));

// Lazy load pages
const HomePage = React.lazy(() => import('./app/page'));
const AboutPage = React.lazy(() => import('./app/about/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const AIServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ITServicesPage = React.lazy(() => import('./app/it-services/page'));
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const BlogPage = React.lazy(() => import('./app/blog/page'));
const CaseStudiesPage = React.lazy(() => import('./app/case-studies/page'));
const TeamPage = React.lazy(() => import('./app/team/page'));
const CareersPage = React.lazy(() => import('./app/careers/page'));
const PrivacyPage = React.lazy(() => import('./app/privacy/page'));
const TermsPage = React.lazy(() => import('./app/terms/page'));
const CookiesPage = React.lazy(() => import('./app/cookies/page'));
const DocsPage = React.lazy(() => import('./app/docs/page'));
const ApiDocsPage = React.lazy(() => import('./app/api-docs/page'));
const SupportPage = React.lazy(() => import('./app/support/page'));
const StatusPage = React.lazy(() => import('./app/status/page'));
const DemoPage = React.lazy(() => import('./app/demo/page'));

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zion Tech Group",
  "url": "https://ziontechgroup.com",
  "logo": "https://ziontechgroup.com/logo.png",
  "description": "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with our advanced AI capabilities, micro SAAS tools, and comprehensive IT solutions. Contact us at +1 302 464 0950 or kleber@ziontechgroup.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "364 E Main St STE 1008",
    "addressLocality": "Middletown",
    "addressRegion": "DE",
    "postalCode": "19709",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-302-464-0950",
    "contactType": "customer service",
    "email": "kleber@ziontechgroup.com"
  },
  "sameAs": [
    "https://linkedin.com/company/zion-tech-group",
    "https://twitter.com/ziontechgroup",
    "https://github.com/zion-tech-group"
  ],
  "foundingDate": "2020",
  "numberOfEmployees": "50-100",
  "industry": "Information Technology",
  "services": [
    "AI Solutions",
    "Machine Learning",
    "Quantum Computing",
    "Digital Transformation",
    "IT Services",
    "Cybersecurity",
    "Cloud Computing",
    "Automation",
    "Micro SAAS Solutions",
    "Autonomous Systems",
    "Blockchain Technology",
    "IoT Solutions",
    "Edge Computing",
    "5G Implementation",
    "AR/VR Development",
    "Smart City Solutions",
    "Digital Twin Development",
    "Enterprise Integration",
    "Business Intelligence",
    "Robotic Process Automation"
  ]
};

// Performance monitoring hook
const AppWithPerformanceMonitoring: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }
  }, []);
  
  return <>{children}</>;
};

const App: React.FC = memo(() => {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Helmet>
          <title>Zion Tech Group - AI & IT Solutions | Enterprise AI Services</title>
          <meta
            name="description"
            content="Leading provider of AI-powered enterprise solutions and digital transformation services. Achieve 300% ROI with our cutting-edge AI technology. Quantum computing, automation, and micro SAAS solutions."
          />
          <meta
            name="keywords"
            content="AI, artificial intelligence, enterprise solutions, digital transformation, IT services, quantum computing, automation, micro SAAS, machine learning, business intelligence"
          />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#0f172a" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Zion Tech Group - AI & IT Solutions | Enterprise AI Services" />
          <meta
            property="og:description"
            content="Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains. Quantum computing, automation, and micro SAAS solutions."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Zion Tech Group" />
          <meta property="og:locale" content="en_US" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Zion Tech Group - AI & IT Solutions" />
          <meta
            name="twitter:description"
            content="Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains"
          />
          <meta name="twitter:image" content="https://ziontechgroup.com/twitter-image.jpg" />
          <meta name="twitter:site" content="@ziontechgroup" />
          <meta name="twitter:creator" content="@ziontechgroup" />
          
          {/* Additional SEO */}
          <link rel="canonical" href="https://ziontechgroup.com" />
          <link rel="alternate" hrefLang="en" href="https://ziontechgroup.com" />
          <meta name="geo.region" content="US-DE" />
          <meta name="geo.placename" content="Middletown" />
          <meta name="geo.position" content="39.4496;-75.7163" />
          <meta name="ICBM" content="39.4496, -75.7163" />
          
          {/* Structured Data */}
          <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        </Helmet>
        <Router>
          <div className="min-h-screen bg-white overflow-x-hidden">
            <a 
              href="#main-content" 
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg z-50"
            >
              Skip to main content
            </a>
            <Navigation />
            <main id="main-content" role="main" aria-label="Main content">
              <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-white text-lg">Loading Zion Tech Group...</p>
                  </div>
                </div>
              }>
                <Routes>
                  <Route path="/" element={
                    <div className="w-full">
                      <UnifiedContentPromotion />
                      <InteractiveAIROICalculator />
                      <ContentShowcase />
                      <InteractiveContentShowcase2026 />
                    </div>
                  } />
                  
                  {/* Main Pages */}
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/pricing" element={<PricingPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/case-studies" element={<CaseStudiesPage />} />
                  <Route path="/team" element={<TeamPage />} />
                  <Route path="/careers" element={<CareersPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/cookies" element={<CookiesPage />} />
                  <Route path="/docs" element={<DocsPage />} />
                  <Route path="/api-docs" element={<ApiDocsPage />} />
                  <Route path="/support" element={<SupportPage />} />
                  <Route path="/status" element={<StatusPage />} />
                  <Route path="/demo" element={<DemoPage />} />
                  <Route path="/consultation" element={<ConsultationPage />} />

                  {/* Service Category Pages */}
                  <Route path="/ai-services" element={<AIServicesPage />} />
                  <Route path="/it-services" element={<ITServicesPage />} />
                  <Route path="/micro-saas" element={<MicroSaasPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
});

App.displayName = 'App';

export default App;