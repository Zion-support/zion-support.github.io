import React from 'react';

export const metadata = {
  title: 'Terms of Service | Zion Tech Group',
  description: 'Terms of service for Zion Tech Group - our terms and conditions for using our services.',
  keywords: 'terms of service, terms and conditions, legal terms',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use License</h2>
            <p className="text-gray-600 mb-4">
              Permission is granted to temporarily use our services for personal, non-commercial transitory viewing only.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Service Availability</h2>
            <p className="text-gray-600 mb-4">
              We strive to maintain high service availability but do not guarantee uninterrupted access to our services.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use our services.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <ul className="text-gray-600 mb-4">
              <li>Email: kleber@ziontechgroup.com</li>
              <li>Phone: +1 302 464 0950</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}