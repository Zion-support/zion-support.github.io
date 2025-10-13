import React from 'react';
import { Helmet } from 'react-helmet-async';
import EnhancedHeader from '../components/EnhancedHeader';
import FuturisticHero from '../components/FuturisticHero';
import ServicesShowcase from '../components/ServicesShowcase';
import EnhancedFooter from '../components/EnhancedFooter';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Micro SAAS Services</title>
        <meta name="description" content="Leading provider of advanced AI, cybersecurity, and IT solutions. Discover our comprehensive suite of micro SAAS services designed to accelerate your digital transformation." />
        <meta name="keywords" content="AI services, cybersecurity, cloud solutions, micro SAAS, digital transformation, IT consulting, data analytics, mobile development" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI and IT solutions. Expert services in cybersecurity, cloud computing, and digital innovation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta name="twitter:description" content="Leading provider of advanced AI and IT solutions for businesses worldwide." />
      </Helmet>
      
      <div className="min-h-screen">
        <EnhancedHeader />
        <FuturisticHero />
        <ServicesShowcase />
        <EnhancedFooter />
      </div>
    </>
  );
}