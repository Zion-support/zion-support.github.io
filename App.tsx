import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './app/components/Header';
import Footer from './app/components/Footer';
import Hero from './app/components/Hero';
import Services from './app/components/Services';
import About from './app/components/About';
import Contact from './app/components/Contact';
import LoadingSpinner from './app/components/LoadingSpinner';

// Lazy load pages for better performance
const MicroSaasPage = React.lazy(() => import('./app/micro-saas/page'));
const AiServicesPage = React.lazy(() => import('./app/ai-services/page'));
const ItServicesPage = React.lazy(() => import('./app/it-services/page'));
const PricingPage = React.lazy(() => import('./app/pricing/page'));
const PortfolioPage = React.lazy(() => import('./app/portfolio/page'));
const NewsPage = React.lazy(() => import('./app/news/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));

const App: React.FC = () => {
  return (
    <Router>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered micro SAAS solutions, IT services, and innovative technology solutions. Contact us at +1 302 464 0950 or kleber@ziontechgroup.com" />
        <meta name="keywords" content="AI solutions, micro SAAS, IT services, software development, cloud computing, cybersecurity, data analytics, automation, 5G solutions, Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI-powered micro SAAS solutions, IT services, and innovative technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of AI-powered micro SAAS solutions, IT services, and innovative technology solutions." />
        <meta name="twitter:image" content="https://ziontechgroup.com/og-image.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
        <meta name="twitter:creator" content="@ziontechgroup" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "description": "Leading provider of AI-powered micro SAAS solutions, IT services, and innovative technology solutions",
            "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-302-464-0950",
              "contactType": "customer service",
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "364 E Main St STE 1008",
              "addressLocality": "Middletown",
              "addressRegion": "DE",
              "postalCode": "19709",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://www.linkedin.com/company/zion-tech-group",
              "https://twitter.com/ziontechgroup"
            ],
            "foundingDate": "2020",
            "numberOfEmployees": "10-50",
            "industry": "Technology"
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        <main id="main-content" role="main">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <Services />
                </>
              } />
              <Route path="/about" element={<About />} />
              <Route path="/micro-saas" element={<MicroSaasPage />} />
              <Route path="/ai-services" element={<AiServicesPage />} />
              <Route path="/it-services" element={<ItServicesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={
                <div className="container mx-auto px-4 py-16 text-center">
                  <h1 className="text-4xl font-bold text-white mb-8">404 - Page Not Found</h1>
                  <p className="text-gray-300 mb-8">The page you're looking for doesn't exist.</p>
                  <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Go Home
                  </a>
                </div>
              } />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;