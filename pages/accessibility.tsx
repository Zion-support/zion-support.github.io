import React from 'react';
import Head from 'next/head';

const AccessibilityPage = () => {
  return (
    <>
      <Head>
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Our commitment to web accessibility and inclusive design" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Web Accessibility
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to making our website accessible to everyone, including people with disabilities.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Accessibility Commitment
            </h2>
            <p className="text-gray-700 mb-6">
              Zion Tech Group is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone and applying the relevant 
              accessibility standards.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Conformance Status
            </h3>
            <p className="text-gray-700 mb-6">
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 level AA standards.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Contact Us
            </h3>
            <p className="text-gray-700">
              If you encounter any accessibility barriers, please contact us at{' '}
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:underline">
                kleber@ziontechgroup.com
              </a>{' '}
              or call us at{' '}
              <a href="tel:+13024640950" className="text-blue-600 hover:underline">
                +1 302 464 0950
              </a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessibilityPage;