import React from 'react';
import { Helmet } from 'react-helmet-async';
import EnhancedHeader from '../components/EnhancedHeader';
import ServicesShowcase from '../components/ServicesShowcase';
import EnhancedFooter from '../components/EnhancedFooter';

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group | AI, Cybersecurity & IT Solutions</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS services including AI solutions, cybersecurity, cloud computing, data analytics, and mobile development." />
        <meta name="keywords" content="AI services, cybersecurity services, cloud solutions, data analytics, mobile development, micro SAAS, IT consulting" />
      </Helmet>
      
      <div className="min-h-screen">
        <EnhancedHeader />
        <ServicesShowcase />
        <EnhancedFooter />
      </div>
    </>
  );
}