'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const CompliancePage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Compliance & Certifications - Zion Tech Group"
        description="Our compliance with industry standards including SOC 2, ISO 27001, GDPR, HIPAA, and PCI DSS."
        keywords={['compliance', 'certifications', 'SOC 2', 'ISO 27001', 'GDPR', 'HIPAA', 'PCI DSS']}
        canonicalUrl="https://ziontechgroup.com/compliance"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Compliance & Certifications</h1>
            <p className="text-gray-300">Compliance information coming soon...</p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CompliancePage;
