import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';

const TermsOfService: NextPage = () => {
  return (
    <MainLayout
      title="Terms of Service - Zion Tech Group"
      description="Zion Tech Group's terms of service outlining the terms and conditions for using our services."
      keywords="terms of service, terms and conditions, Zion Tech Group, legal terms"
    >
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Last updated:</strong> January 27, 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing and using Zion Tech Group's website and services, you accept and agree to be bound 
                  by the terms and provision of this agreement. If you do not agree to abide by the above, please 
                  do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
                <p className="text-gray-700 mb-4">
                  Zion Tech Group provides technology solutions including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>AI development and implementation services</li>
                  <li>Cloud architecture and migration services</li>
                  <li>Micro SaaS application development</li>
                  <li>IT infrastructure and cybersecurity services</li>
                  <li>Custom software development</li>
                  <li>Consulting and advisory services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
                <p className="text-gray-700 mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Provide accurate and complete information</li>
                  <li>Use our services in compliance with applicable laws</li>
                  <li>Not engage in any illegal or unauthorized activities</li>
                  <li>Respect intellectual property rights</li>
                  <li>Maintain the confidentiality of any access credentials</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
                <p className="text-gray-700 mb-4">
                  Payment terms for our services are as follows:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Payment schedules will be outlined in individual service agreements</li>
                  <li>Late payments may incur additional fees</li>
                  <li>All prices are subject to change with 30 days notice</li>
                  <li>Refunds are subject to our refund policy outlined in service agreements</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  All content, trademarks, and intellectual property on our website and in our services are owned 
                  by Zion Tech Group or our licensors. You may not use, reproduce, or distribute any content without 
                  our express written permission.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive 
                  damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, 
                  resulting from your use of our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Service Availability</h2>
                <p className="text-gray-700 mb-4">
                  We strive to maintain high service availability but do not guarantee uninterrupted access to our 
                  services. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
                <p className="text-gray-700 mb-4">
                  We may terminate or suspend your access to our services immediately, without prior notice, for any 
                  reason, including breach of these terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Governing Law</h2>
                <p className="text-gray-700 mb-4">
                  These terms shall be governed by and construed in accordance with the laws of the State of Delaware, 
                  without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Zion Tech Group</strong><br />
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709<br />
                    Email: kleber@ziontechgroup.com<br />
                    Phone: +1 302 464 0950
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

export default TermsOfService;