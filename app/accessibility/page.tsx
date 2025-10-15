import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

export default function AccessibilityPage() {
  return (
    <>
      <SEOHead
        title="Accessibility - Zion Tech Group"
        description="Learn about Zion Tech Group's commitment to digital accessibility and our accessibility services for inclusive technology solutions."
        keywords="digital accessibility, WCAG compliance, inclusive design, accessibility services, web accessibility"
        canonicalUrl="https://ziontechgroup.com/accessibility"
      />
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Accessibility</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Committed to making technology accessible to everyone through inclusive design and development practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Commitment</h2>
              <p className="text-gray-600 mb-6">
                At Zion Tech Group, we believe that technology should be accessible to everyone. We are committed to 
                creating inclusive digital experiences that work for people of all abilities.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">WCAG 2.1 AA Compliance</h3>
                    <p className="text-gray-600">All our solutions meet or exceed WCAG 2.1 AA standards</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Inclusive Design</h3>
                    <p className="text-gray-600">Designing with accessibility in mind from the start</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Regular Testing</h3>
                    <p className="text-gray-600">Continuous testing with assistive technologies and real users</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Accessibility Services</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Accessibility Audits</h3>
                  <p className="text-gray-600">
                    Comprehensive accessibility audits of your digital products to identify and fix accessibility issues.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Inclusive Design Consulting</h3>
                  <p className="text-gray-600">
                    Expert guidance on creating inclusive user experiences that work for everyone.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Accessibility Training</h3>
                  <p className="text-gray-600">
                    Training your team on accessibility best practices and inclusive design principles.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help with Accessibility?</h2>
            <p className="text-gray-600 mb-6">Let us help you create more inclusive digital experiences for your users.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Us
              </Link>
              <Link to="/services" className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
