import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Zion Tech Group',
  description: 'Privacy Policy for Zion Tech Group - How we collect, use, and protect your personal information.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We collect information you provide directly to us, such as when you create an account, 
            use our services, or contact us for support.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Contact information (name, email address, phone number)</li>
            <li>Business information (company name, job title)</li>
            <li>Service usage data and preferences</li>
            <li>Communication records and support interactions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect to provide, maintain, and improve our services:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Deliver and maintain our AI and IT services</li>
            <li>Process transactions and provide customer support</li>
            <li>Send important updates about our services</li>
            <li>Improve our products and develop new features</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
          <p className="text-gray-700 mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties 
            without your consent, except in the following circumstances:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>With service providers who assist in our operations</li>
            <li>When required by law or to protect our rights</li>
            <li>In connection with a business transfer or acquisition</li>
            <li>With your explicit consent</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
          <p className="text-gray-700 mb-4">
            We implement appropriate security measures to protect your personal information against 
            unauthorized access, alteration, disclosure, or destruction. This includes:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments and updates</li>
            <li>Access controls and authentication protocols</li>
            <li>Employee training on data protection practices</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
          <p className="text-gray-700 mb-4">
            You have certain rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Access and review your personal data</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal data</li>
            <li>Object to processing of your data</li>
            <li>Data portability rights</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookies and Tracking</h2>
          <p className="text-gray-700 mb-4">
            We use cookies and similar technologies to enhance your experience on our website, 
            analyze usage patterns, and provide personalized content. You can control cookie 
            preferences through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Third-Party Services</h2>
          <p className="text-gray-700 mb-4">
            Our services may contain links to third-party websites or integrate with third-party 
            services. We are not responsible for the privacy practices of these external sites. 
            We encourage you to review their privacy policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Data Retention</h2>
          <p className="text-gray-700 mb-4">
            We retain your personal information for as long as necessary to provide our services, 
            comply with legal obligations, resolve disputes, and enforce our agreements. When 
            personal information is no longer needed, we securely delete or anonymize it.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. International Transfers</h2>
          <p className="text-gray-700 mb-4">
            Your information may be transferred to and processed in countries other than your own. 
            We ensure appropriate safeguards are in place to protect your personal information 
            in accordance with applicable data protection laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any 
            material changes by posting the new Privacy Policy on this page and updating the 
            "Last updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-2">
              <strong>Zion Tech Group</strong><br />
              364 E Main St STE 1008<br />
              Middletown, DE 19709
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Email:</strong> kleber@ziontechgroup.com<br />
              <strong>Phone:</strong> +1 302 464 0950
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}