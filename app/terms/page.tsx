import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms</title>
        <meta name="description" content="Read our terms of service to understand the terms and conditions for using our services." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                These terms and conditions govern your use of our services. Please read them carefully.
              </p>
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing and using our services, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Use License</h2>
              <p className="text-gray-600 mb-6">
                Permission is granted to temporarily download one copy of our services for personal, 
                non-commercial transitory viewing only.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
              <p className="text-gray-600 mb-6">
                The materials on our website are provided on an 'as is' basis. Zion Tech Group makes 
                no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about these Terms of Service, please contact us at 
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-800"> kleber@ziontechgroup.com</a> 
                or call us at <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800">+1 302 464 0950</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;