import React from 'react';
import MainLayout from '../components/layout/MainLayout';

export default function TermsPage() {
  return (
    <MainLayout 
      title="Terms of Service - Zion Tech Group"
      description="Terms and conditions for using Zion Tech Group's services and website."
      keywords="terms of service, terms and conditions, legal terms, service agreement"
    >
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Terms of Service
            </h1>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-600 mb-6">
                <strong>Last &quot;updated&quot;: </strong> January 15, 2024
              </p>
              
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 mb-6">
                  By accessing and using Zion Tech Group&apos;s services, you accept and agree to be bound by 
                  the terms and provision of this agreement.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                <p className="text-gray-600 mb-4">
                  Zion Tech Group provides technology consulting, AI services, IT solutions, and software 
                  development services. We reserve the right to modify or discontinue the service at any time.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
                <p className="text-gray-600 mb-4">
                  Users are responsible "for": </p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  <li>Providing accurate and complete information</li>
                  <li>Maintaining the confidentiality of account credentials</li>
                  <li>Complying with all applicable laws and regulations</li>
                  <li>Not using the service for illegal or unauthorized purposes</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
                <p className="text-gray-600 mb-6">
                  All content, trademarks, and intellectual property on this website are owned by Zion Tech Group 
                  or our licensors. You may not use, reproduce, or distribute any content without our written permission.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
                <p className="text-gray-600 mb-6">
                  In no event shall Zion Tech Group be liable for any indirect, incidental, special, consequential, 
                  or punitive damages arising out of or relating to your use of our services.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privacy Policy</h2>
                <p className="text-gray-600 mb-6">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use 
                  of the service.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
                <p className="text-gray-600 mb-6">
                  We may terminate or suspend your account and access to our services immediately, without prior 
                  notice, for any reason whatsoever, including breach of these Terms.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
                <p className="text-gray-600 mb-6">
                  These Terms shall be interpreted and governed by the laws of the State of Delaware, without 
                  regard to its conflict of law provisions.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms of Service, please contact "us": </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600">
                    <strong>Email:</strong> legal@ziontechgroup.com<br />
                    <strong>Phone:</strong> +1 (302) 464-0950<br />
                    <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}