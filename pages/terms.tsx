import React from 'react';
import Layout from '../components/Layout';

const TermsPage: React.FC = () => {
  return (
    <Layout title="Terms of Service - Zion Tech Group" description="Terms and conditions for using Zion Tech Group services.">
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-gray-700 mb-6">Last updated: 2025-09-03</p>

          <div className="prose max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using Zion Tech Group services, you accept and agree to be bound by the terms and provision of this agreement.</p>

            <h2>2. Services Description</h2>
            <p>Zion Tech Group provides technology consulting, development, and implementation services including but not limited to:</p>
            <ul>
              <li>AI and machine learning solutions</li>
              <li>Cloud architecture and migration services</li>
              <li>Cybersecurity and compliance services</li>
              <li>Software development and customization</li>
              <li>Data analytics and business intelligence</li>
            </ul>

            <h2>3. Client Responsibilities</h2>
            <p>Clients are responsible for:</p>
            <ul>
              <li>Providing accurate and complete information</li>
              <li>Timely payment of invoices</li>
              <li>Cooperation during project implementation</li>
              <li>Compliance with applicable laws and regulations</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>All intellectual property rights in work products created specifically for the client shall belong to the client upon full payment. Zion Tech Group retains rights to general methodologies, tools, and frameworks.</p>

            <h2>5. Confidentiality</h2>
            <p>Both parties agree to maintain confidentiality of sensitive information shared during the course of business relationship.</p>

            <h2>6. Limitation of Liability</h2>
            <p>Zion Tech Group&apos;s liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages.</p>

            <h2>7. Payment Terms</h2>
            <p>Payment terms are as specified in individual service agreements. Late payments may incur additional charges.</p>

            <h2>8. Termination</h2>
            <p>Either party may terminate services with appropriate notice as specified in the service agreement.</p>

            <h2>9. Governing Law</h2>
            <p>These terms are governed by the laws of Delaware, United States.</p>

            <h2>10. Contact Information</h2>
            <p>For questions about these terms, contact us at:</p>
            <ul>
              <li>Email: kleber@ziontechgroup.com</li>
              <li>Phone: +1 302 464 0950</li>
              <li>Address: 364 E Main St STE 1008, Middletown DE 19709</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsPage;