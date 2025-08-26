import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import { PerformanceMonitor } from './components/PerformanceMonitor';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const Login = React.lazy(() => import('./pages/Login'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ServicesAdvertising = React.lazy(() => import('./pages/ServicesAdvertising'));
const Solutions = React.lazy(() => import('./pages/Solutions'));
const ResearchDevelopment = React.lazy(() => import('./pages/ResearchDevelopment'));
const News = React.lazy(() => import('./pages/News'));
const RequestQuote = React.lazy(() => import('./pages/RequestQuote'));

// Enhanced loading component with better UX
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
    <div className="relative">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 rounded-full blur-xl animate-pulse"></div>
      
      {/* Main spinner */}
      <div className="relative w-32 h-32 border-4 border-zion-cyan/20 rounded-full">
        <div className="absolute top-0 left-0 w-32 h-32 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin"></div>
      </div>
      
      {/* Zion logo overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-zion-cyan font-bold text-2xl">
        ZION
      </div>
      
      {/* Loading text */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-zion-cyan text-lg font-medium">
        Loading...
      </div>
      
      {/* Animated dots */}
      <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-1">
        <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-futuristic">
        {/* Global SEO Meta Tags */}
        <Helmet>
          <title>Zion Tech Group - AI-Powered Business Solutions & IT Services</title>
          <meta name="description" content="Transform your business with Zion Tech Group's cutting-edge AI solutions, cybersecurity services, cloud infrastructure, and digital transformation expertise. Serving businesses worldwide with innovative technology solutions." />
          <meta name="keywords" content="AI solutions, cybersecurity, cloud services, digital transformation, quantum computing, blockchain, IT consulting, business intelligence" />
          <meta name="author" content="Zion Tech Group" />
          <meta name="robots" content="index, follow" />
          
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="Zion Tech Group - AI-Powered Business Solutions" />
          <meta property="og:description" content="Transform your business with cutting-edge AI solutions, cybersecurity services, and digital transformation expertise." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ziontechgroup.com" />
          <meta property="og:image" content="https://ziontechgroup.com/images/og-image.jpg" />
          <meta property="og:site_name" content="Zion Tech Group" />
          
          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Zion Tech Group - AI-Powered Business Solutions" />
          <meta name="twitter:description" content="Transform your business with cutting-edge AI solutions and IT services." />
          <meta name="twitter:image" content="https://ziontechgroup.com/images/twitter-card.jpg" />
          
          {/* Additional Meta Tags */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#22ddd2" />
          <meta name="msapplication-TileColor" content="#22ddd2" />
          
          {/* Canonical URL */}
          <link rel="canonical" href="https://ziontechgroup.com" />
          
          {/* Favicon and App Icons */}
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          
          {/* Preconnect to external domains for performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          
          {/* Structured Data for SEO */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/images/logo.png",
              "description": "Leading technology solutions provider offering comprehensive AI, cybersecurity, cloud, and digital transformation services.",
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
                "https://linkedin.com/company/ziontechgroup",
                "https://twitter.com/ziontechgroup"
              ]
            })}
          </script>
        </Helmet>
        
        <AppHeader />
        
        <main className="flex-1">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/green-it" element={<GreenIT />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services-advertising" element={<ServicesAdvertising />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/research-development" element={<ResearchDevelopment />} />
              <Route path="/news" element={<News />} />
              <Route path="/request-quote" element={<RequestQuote />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
        <ChatAssistant />
        
        {/* Performance Monitor - Only show in development or when explicitly enabled */}
        <PerformanceMonitor 
          enabled={process.env.NODE_ENV === 'development' || process.env.REACT_APP_SHOW_PERFORMANCE === 'true'}
          showMetrics={true}
          onMetricsUpdate={(metrics) => {
            // Log performance metrics to console in development
            if (process.env.NODE_ENV === 'development') {
              console.log('Performance Metrics Updated:', metrics);
            }
          }}
        />
      </div>
    </Router>
  );
}

export default App;