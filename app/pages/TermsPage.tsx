import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group. Please read our terms and conditions before using our services." />
        <meta name="keywords" content="terms of service, terms and conditions, legal, Zion Tech Group" />
        <meta property="og:title" content="Terms of Service - Zion Tech Group" />
        <meta property="og:description" content="Terms of Service for Zion Tech Group. Please read our terms and conditions before using our services." />
        <meta property="og:url" content="https://ziontechgroup.com/terms" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Terms of Service
          </h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-8">
              Last updated: January 1, 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing and using the services provided by Zion Tech Group ("Company", "we", "us", or "our"), 
                you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
              <p className="text-gray-300 mb-4">
                Zion Tech Group provides AI solutions, IT services, cloud infrastructure, cybersecurity, 
                and micro SAAS development services. Our services include but are not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4">
                <li>Artificial Intelligence solutions and consulting</li>
                <li>IT infrastructure management and support</li>
                <li>Cloud migration and management services</li>
                <li>Cybersecurity solutions and monitoring</li>
                <li>Micro SAAS development and deployment</li>
                <li>Data analytics and business intelligence</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
              <p className="text-gray-300 mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4">
                <li>Provide accurate and complete information when required</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not interfere with or disrupt our services</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
              <p className="text-gray-300 mb-4">
                Payment terms for our services are as follows:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4">
                <li>All fees are due in advance unless otherwise agreed</li>
                <li>Payment is due within 30 days of invoice date</li>
                <li>Late payments may incur additional charges</li>
                <li>Refunds are subject to our refund policy</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                All content, trademarks, and intellectual property rights in our services are owned by 
                Zion Tech Group or our licensors. You may not use our intellectual property without 
                our written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                To the maximum extent permitted by law, Zion Tech Group shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages, including but not 
                limited to loss of profits, data, or business opportunities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Termination</h2>
              <p className="text-gray-300 mb-4">
                We may terminate or suspend your access to our services immediately, without prior 
                notice or liability, for any reason whatsoever, including without limitation if you 
                breach the Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
              <p className="text-gray-300 mb-4">
                These Terms shall be interpreted and governed by the laws of the State of Delaware, 
                United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-slate-800 p-6 rounded-lg">
                <p className="text-gray-300 mb-2">
                  <strong>Email:</strong> kleber@ziontechgroup.com
                </p>
                <p className="text-gray-300 mb-2">
                  <strong>Phone:</strong> +1 302 464 0950
                </p>
                <p className="text-gray-300">
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;