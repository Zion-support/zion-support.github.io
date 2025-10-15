import React from 'react';
import { Helmet } from 'react-helmet-async';

const AccessibilityPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Accessibility - Zion Tech Group | Inclusive Technology</title>
        <meta name="description" content="Learn about our commitment to accessibility and inclusive technology solutions. Making technology accessible to everyone." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Accessibility</h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
                We are committed to making technology accessible to everyone. Our solutions are designed 
                with accessibility in mind to ensure inclusive user experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Accessibility Commitment</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe technology should be accessible to everyone
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">WCAG Compliance</h3>
                <p className="text-gray-600 mb-6">Our solutions meet WCAG 2.1 AA standards for web accessibility</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Screen Reader Support</h3>
                <p className="text-gray-600 mb-6">Full compatibility with screen readers and assistive technologies</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Keyboard Navigation</h3>
                <p className="text-gray-600 mb-6">Complete keyboard navigation support for all interactive elements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessibilityPage;