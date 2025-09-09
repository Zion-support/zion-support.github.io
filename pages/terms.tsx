import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';

const Terms: NextPage = () => {
  return (
    <MainLayout
      title="Terms of Service - Zion Tech Group"
      description="Read our terms of service and understand the terms and conditions for using Zion Tech Group's services and website."
      keywords="terms of service, terms and conditions, legal terms, service agreement"
    >
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600">
                  By accessing and using Zion Tech Group's website and services, you accept and agree to be bound 
                  by the terms and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
                <p className="text-gray-600 mb-4">
                  Permission is granted to temporarily download one copy of the materials on Zion Tech Group's 
                  website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                  not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Service Description</h2>
                <p className="text-gray-600">
                  Zion Tech Group provides technology consulting, software development, and digital transformation 
                  services. We reserve the right to modify, suspend, or discontinue any aspect of our services 
                  at any time without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Responsibilities</h2>
                <p className="text-gray-600 mb-4">As a user of our services, you agree to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our services in compliance with applicable laws</li>
                  <li>Not engage in any illegal or unauthorized activities</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Payment Terms</h2>
                <p className="text-gray-600 mb-4">
                  Payment terms for our services are as agreed upon in individual service agreements. 
                  Generally:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Payment is due according to the agreed schedule</li>
                  <li>Late payments may incur additional charges</li>
                  <li>Refunds are subject to our refund policy</li>
                  <li>All prices are subject to change with notice</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
                <p className="text-gray-600">
                  All content, trademarks, and intellectual property on this website are owned by Zion Tech Group 
                  or our licensors. You may not use, reproduce, or distribute any content without our written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-600">
                  In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without 
                  limitation, damages for loss of data or profit, or due to business interruption) arising out of 
                  the use or inability to use the materials on our website, even if we have been notified orally 
                  or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Disclaimer</h2>
                <p className="text-gray-600">
                  The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group 
                  makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                  including without limitation, implied warranties or conditions of merchantability, fitness for 
                  a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Governing Law</h2>
                <p className="text-gray-600">
                  These terms and conditions are governed by and construed in accordance with the laws of Delaware, 
                  United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that state.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to Terms</h2>
                <p className="text-gray-600">
                  Zion Tech Group reserves the right to revise these terms of service at any time without notice. 
                  By using this website, you are agreeing to be bound by the then current version of these terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
                <p className="text-gray-600">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">
                    <strong>Zion Tech Group</strong><br />
                    Email: kleber@ziontechgroup.com<br />
                    Phone: +1 302 464 0950<br />
                    Address: 364 E Main St STE 1008, Middletown DE 19709
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Terms;