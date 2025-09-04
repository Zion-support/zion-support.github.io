<<<<<<< HEAD
<<<<<<< HEAD
import React, { Suspense } from 'react';
=======
import React, { Suspense, lazy } from 'react';
>>>>>>> merge-all-prs-20250904-105408
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppHeader } from './layout/AppHeader';
import { EnhancedFuturisticFooter as Footer } from './components/EnhancedFuturisticFooter';
import { SEO } from './components/SEO';
import { ErrorBoundary } from './components/ErrorBoundary';

// Lazy load pages - only import existing ones
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Services = React.lazy(() => import('./pages/Services'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const WhitePapers = React.lazy(() => import('./pages/WhitePapers'));
const Webinars = React.lazy(() => import('./pages/Webinars'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Partners = React.lazy(() => import('./pages/Partners'));
const Pricing = React.lazy(() => import('./pages/Pricing'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const EnhancedContact = React.lazy(() => import('./components/EnhancedContact'));

// Enhanced components
const Community = React.lazy(() => import('./pages/Community'));
const Demo = React.lazy(() => import('./pages/Demo'));

// Import real pages
const Careers = React.lazy(() => import('./pages/Careers'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const ComprehensiveServicesShowcase2026 = React.lazy(() => import('./pages/ComprehensiveServicesShowcase2026'));
const ComprehensivePricingGuide2026 = React.lazy(() => import('./pages/ComprehensivePricingGuide2026'));
const ComprehensivePricingGuide2030 = React.lazy(() => import('./pages/ComprehensivePricingGuide2030'));
const RevolutionaryServices2030 = React.lazy(() => import('./pages/RevolutionaryServices2030'));
=======
import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';
import Layout from './components/Layout';
import LoadingSpinner from './components/ui/loading-spinner';
import '../styles/globals.css';
>>>>>>> origin/main

function App({ Component, pageProps }: AppProps) {
  return (
<<<<<<< HEAD
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-futuristic">
          <AppHeader />
          
          <main className="flex-1">
            <Suspense fallback={
              <div className="flex items-center justify-center py-20">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto mb-4"></div>
                  <p className="text-gray-400">Loading...</p>
                </div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<EnhancedContact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/docs" element={<Documentation />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/services" element={<Services />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/white-papers" element={<WhitePapers />} />
                <Route path="/webinars" element={<Webinars />} />
                <Route path="/request-quote" element={<RequestQuote />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/community" element={<Community />} />
                <Route path="/demo" element={<Demo />} />
                
                {/* New comprehensive services showcase 2026 */}
                <Route path="/comprehensive-services-showcase-2026" element={<ComprehensiveServicesShowcase2026 />} />
                
                {/* New comprehensive pricing guide 2026 */}
                <Route path="/comprehensive-pricing-guide-2026" element={<ComprehensivePricingGuide2026 />} />
                
                {/* New comprehensive pricing guide 2030 */}
                <Route path="/comprehensive-pricing-guide-2030" element={<ComprehensivePricingGuide2030 />} />
                
                {/* New revolutionary services 2030 */}
                <Route path="/revolutionary-services-2030" element={<RevolutionaryServices2030 />} />

                {/* Catch all route */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
=======
    <HelmetProvider>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Head>
          <title>Zion Tech Group - Advanced Technology Solutions</title>
          <meta name="description" content="Leading provider of AI-powered solutions, cloud infrastructure, and digital transformation services." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ErrorBoundary>
    </HelmetProvider>
<<<<<<< HEAD
>>>>>>> origin/main
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
=======
  );
};

export default App;
>>>>>>> merge-all-prs-20250904-105408
