import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';

const TermsPage = () => {
  return (
    <div className="min-h-screen">
      <EnhancedSEO 
        title="Terms of Service - Zion Tech Group"
        description="Terms of service for Zion Tech Group. Learn about the terms and conditions for using our services."
        keywords="terms of service, terms and conditions, Zion Tech Group terms, service agreement"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">
            Last updated: January 1, 2024
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
          <p className="text-gray-300 mb-6">
            By accessing and using our services, you accept and agree to be bound by the terms 
            and provision of this agreement.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>
          <p className="text-gray-300 mb-6">
            Permission is granted to temporarily download one copy of our materials for personal, 
            non-commercial transitory viewing only.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
          <p className="text-gray-300 mb-6">
            The materials on our website are provided on an 'as is' basis. Zion Tech Group makes 
            no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Limitations</h2>
          <p className="text-gray-300 mb-6">
            In no event shall Zion Tech Group or its suppliers be liable for any damages arising 
            out of the use or inability to use the materials on our website.
          </p>
          
          <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
          <p className="text-gray-300 mb-6">
            If you have any questions about these Terms of Service, please contact us at 
            legal@ziontechgroup.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
