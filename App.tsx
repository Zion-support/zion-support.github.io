import React, { Suspense, memo, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navigation from './app/components/Navigation';
import Footer from './app/components/Footer';
import LoadingSpinner from './src/components/LoadingSpinner';
import './src/styles/futuristic.css';

// Lazy load pages
const HomePage = React.lazy(() => import('./app/page'));
const AboutPage = React.lazy(() => import('./app/about/page'));
const ServicesPage = React.lazy(() => import('./app/services/page'));
const ContactPage = React.lazy(() => import('./app/contact/page'));
const ConsultationPage = React.lazy(() => import('./app/consultation/page'));

// New Micro SAAS Services
const AIExpenseTrackerPro = React.lazy(() => import('./app/ai-expense-tracker-pro/page'));
const AIInvoiceGeneratorPro = React.lazy(() => import('./app/ai-invoice-generator-pro/page'));
const AIPasswordManagerPro = React.lazy(() => import('./app/ai-password-manager-pro/page'));
const AIVoiceCloningStudio = React.lazy(() => import('./app/ai-voice-cloning-studio/page'));

// AI Services
const AIFinancialAnalyzerPro = React.lazy(() => import('./app/ai-financial-analyzer-pro/page'));

// IT Services
const CloudMigrationPro = React.lazy(() => import('./app/cloud-migration-pro/page'));

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

const App: React.FC = memo(() => {
  return (
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
          <Navigation />
          <main id="main-content" className="w-full">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                
                {/* Main Pages */}
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/consultation" element={<ConsultationPage />} />
                
                {/* New Micro SAAS Services */}
                <Route path="/ai-expense-tracker-pro" element={<AIExpenseTrackerPro />} />
                <Route path="/ai-invoice-generator-pro" element={<AIInvoiceGeneratorPro />} />
                <Route path="/ai-password-manager-pro" element={<AIPasswordManagerPro />} />
                <Route path="/ai-voice-cloning-studio" element={<AIVoiceCloningStudio />} />
                
                {/* AI Services */}
                <Route path="/ai-financial-analyzer-pro" element={<AIFinancialAnalyzerPro />} />
                
                {/* IT Services */}
                <Route path="/cloud-migration-pro" element={<CloudMigrationPro />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
});

App.displayName = 'App';

export default App;