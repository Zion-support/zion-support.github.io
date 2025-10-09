'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const TermsOfServicePage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Terms of Service - Zion Tech Group"
        description="Terms of service for Zion Tech Group. Read our terms and conditions for using our AI and IT services."
        keywords={['terms of service', 'terms and conditions', 'user agreement', 'Zion Tech Group']}
        canonicalUrl="https://ziontechgroup.com/terms"
      />
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 neon-text">
              Terms of Service
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Last updated: January 2024
            </p>

            <div className="cyber-card p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-300 mb-4">
                  By accessing and using Zion Tech Group's services, you accept and agree to be bound by 
                  the terms and provision of this agreement.
                </p>
                <p className="text-gray-300 mb-4">
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">2. Description of Service</h2>
                <p className="text-gray-300 mb-4">
                  Zion Tech Group provides AI-powered solutions, IT services, and digital transformation 
                  services to businesses and organizations.
                </p>
                <p className="text-gray-300 mb-4">
                  Our services include but are not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>AI and machine learning solutions</li>
                  <li>IT consulting and infrastructure services</li>
                  <li>Cloud migration and management</li>
                  <li>Cybersecurity solutions</li>
                  <li>Custom software development</li>
                  <li>Data analytics and business intelligence</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">3. User Responsibilities</h2>
                <p className="text-gray-300 mb-4">
                  Users are responsible for:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Providing accurate and complete information</li>
                  <li>Maintaining the confidentiality of account credentials</li>
                  <li>Using services in compliance with applicable laws</li>
                  <li>Not interfering with the proper functioning of our services</li>
                  <li>Respecting intellectual property rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">4. Payment Terms</h2>
                <p className="text-gray-300 mb-4">
                  Payment terms are as follows:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Fees are due in advance for subscription services</li>
                  <li>Payment is due within 30 days for project-based work</li>
                  <li>Late payments may incur additional charges</li>
                  <li>Refunds are subject to our refund policy</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">5. Intellectual Property</h2>
                <p className="text-gray-300 mb-4">
                  All content, trademarks, and intellectual property rights in our services are owned by 
                  Zion Tech Group or our licensors.
                </p>
                <p className="text-gray-300 mb-4">
                  Users may not copy, modify, or distribute our proprietary content without written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-300 mb-4">
                  To the maximum extent permitted by law, Zion Tech Group shall not be liable for any 
                  indirect, incidental, special, or consequential damages arising from the use of our services.
                </p>
                <p className="text-gray-300 mb-4">
                  Our total liability shall not exceed the amount paid by you for the services in the 
                  twelve months preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">7. Service Availability</h2>
                <p className="text-gray-300 mb-4">
                  We strive to maintain high service availability but do not guarantee uninterrupted access. 
                  We may temporarily suspend services for maintenance or updates.
                </p>
                <p className="text-gray-300 mb-4">
                  We will provide reasonable notice of planned maintenance when possible.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">8. Termination</h2>
                <p className="text-gray-300 mb-4">
                  Either party may terminate this agreement with 30 days written notice.
                </p>
                <p className="text-gray-300 mb-4">
                  We may immediately terminate services for breach of these terms or non-payment.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">9. Governing Law</h2>
                <p className="text-gray-300 mb-4">
                  These terms shall be governed by and construed in accordance with the laws of Delaware, 
                  United States.
                </p>
                <p className="text-gray-300 mb-4">
                  Any disputes shall be resolved in the courts of Delaware.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">10. Contact Information</h2>
                <p className="text-gray-300 mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="text-gray-300 space-y-2">
                  <p>Email: legal@ziontechgroup.com</p>
                  <p>Phone: +1 302 464 0950</p>
                  <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsOfServicePage;