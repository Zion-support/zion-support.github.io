
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AccessibilityPage() {
  return (
    <>
      <Helmet>
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's commitment to web accessibility and inclusive design." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Accessibility</h1>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              At Zion Tech Group, we are committed to ensuring our website and digital solutions are accessible to everyone, 
              including people with disabilities. We strive to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 AA standards.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Accessibility Features</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              <li>Keyboard navigation support</li>
              <li>Screen reader compatibility</li>
              <li>High contrast mode support</li>
              <li>Alternative text for images</li>
              <li>Semantic HTML structure</li>
              <li>Focus indicators for interactive elements</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you encounter any accessibility barriers or have suggestions for improvement, 
              please contact us at accessibility@ziontechgroup.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

