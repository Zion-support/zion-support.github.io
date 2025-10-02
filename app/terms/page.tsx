import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service - Zion Tech Group',
  description: 'Zion Tech Group\'s terms of service outlining the terms and conditions for using our website and services.',
  keywords: 'terms of service, terms and conditions, legal terms, service agreement',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Terms of Service
        </h1>
        <p className="text-lg text-gray-600">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Introduction */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
        <p className="text-gray-700 mb-4">
          These Terms of Service ("Terms") govern your use of Zion Tech Group's website 
          (https://ziontechgroup.com) and services. By accessing or using our website and 
          services, you agree to be bound by these Terms.
        </p>
        <p className="text-gray-700">
          If you do not agree to these Terms, please do not use our website or services.
        </p>
      </div>

      {/* Services Description */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Services</h2>
        <p className="text-gray-700 mb-4">
          Zion Tech Group provides the following services:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>Artificial Intelligence and Machine Learning Solutions</li>
          <li>Micro SaaS Platform Development</li>
          <li>IT Services and Consulting</li>
          <li>Cloud Migration and Infrastructure Management</li>
          <li>Cybersecurity Solutions</li>
          <li>Business Intelligence and Analytics</li>
          <li>Autonomous Business Process Automation</li>
        </ul>
      </div>

      {/* User Responsibilities */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
        <p className="text-gray-700 mb-4">
          When using our services, you agree to:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>Provide accurate and complete information</li>
          <li>Use our services in compliance with applicable laws and regulations</li>
          <li>Not engage in any illegal or unauthorized activities</li>
          <li>Respect intellectual property rights</li>
          <li>Maintain the confidentiality of any login credentials</li>
          <li>Not attempt to gain unauthorized access to our systems</li>
          <li>Report any security vulnerabilities or breaches</li>
        </ul>
      </div>

      {/* Prohibited Uses */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Prohibited Uses</h2>
        <p className="text-gray-700 mb-4">
          You may not use our services for any of the following purposes:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>Any unlawful purpose or to solicit others to perform unlawful acts</li>
          <li>Violating any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
          <li>Infringing upon or violating our intellectual property rights or the intellectual property rights of others</li>
          <li>Harassing, abusing, insulting, harming, defaming, slandering, disparaging, intimidating, or discriminating</li>
          <li>Submitting false or misleading information</li>
          <li>Uploading or transmitting viruses or any other type of malicious code</li>
          <li>Collecting or tracking personal information of others</li>
          <li>Spamming, phishing, pharming, pretexting, spidering, crawling, or scraping</li>
        </ul>
      </div>

      {/* Intellectual Property */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
        <p className="text-gray-700 mb-4">
          The content, features, and functionality of our website and services are owned by 
          Zion Tech Group and are protected by international copyright, trademark, patent, 
          trade secret, and other intellectual property laws.
        </p>
        <p className="text-gray-700 mb-4">
          You may not reproduce, distribute, modify, create derivative works of, publicly display, 
          publicly perform, republish, download, store, or transmit any of our material without 
          our prior written consent.
        </p>
      </div>

      {/* Service Availability */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Service Availability</h2>
        <p className="text-gray-700 mb-4">
          We strive to maintain high service availability, but we do not guarantee that our 
          services will be uninterrupted or error-free. We reserve the right to:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>Modify or discontinue services with reasonable notice</li>
          <li>Perform maintenance and updates</li>
          <li>Suspend services for security or technical reasons</li>
          <li>Limit access to services if necessary</li>
        </ul>
      </div>

      {/* Payment Terms */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Payment Terms</h2>
        <p className="text-gray-700 mb-4">
          For paid services, the following terms apply:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>Payment is due according to the agreed schedule</li>
          <li>Late payments may incur additional fees</li>
          <li>Refunds are subject to our refund policy</li>
          <li>Prices may change with reasonable notice</li>
          <li>All fees are non-refundable unless otherwise specified</li>
        </ul>
      </div>

      {/* Limitation of Liability */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          To the fullest extent permitted by law, Zion Tech Group shall not be liable for any 
          indirect, incidental, special, consequential, or punitive damages, including without 
          limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting 
          from your use of our services.
        </p>
        <p className="text-gray-700">
          Our total liability to you for all damages shall not exceed the amount paid by you 
          for the services in the 12 months preceding the claim.
        </p>
      </div>

      {/* Indemnification */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Indemnification</h2>
        <p className="text-gray-700 mb-4">
          You agree to defend, indemnify, and hold harmless Zion Tech Group and its officers, 
          directors, employees, and agents from and against any claims, damages, obligations, 
          losses, liabilities, costs, or debt, and expenses (including attorney's fees) arising from:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>Your use of our services</li>
          <li>Your violation of these Terms</li>
          <li>Your violation of any third-party rights</li>
          <li>Any content you submit or transmit through our services</li>
        </ul>
      </div>

      {/* Termination */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Termination</h2>
        <p className="text-gray-700 mb-4">
          We may terminate or suspend your access to our services immediately, without prior 
          notice or liability, for any reason whatsoever, including without limitation if you 
          breach these Terms.
        </p>
        <p className="text-gray-700">
          Upon termination, your right to use the services will cease immediately, and we may 
          delete your account and data in accordance with our data retention policies.
        </p>
      </div>

      {/* Governing Law */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
        <p className="text-gray-700 mb-4">
          These Terms shall be interpreted and governed by the laws of the State of Delaware, 
          United States, without regard to its conflict of law provisions.
        </p>
        <p className="text-gray-700">
          Any disputes arising from these Terms or your use of our services shall be resolved 
          in the courts of Delaware.
        </p>
      </div>

      {/* Changes to Terms */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to Terms</h2>
        <p className="text-gray-700 mb-4">
          We reserve the right to modify these Terms at any time. We will notify users of any 
          material changes by posting the new Terms on this page and updating the "Last updated" 
          date.
        </p>
        <p className="text-gray-700">
          Your continued use of our services after any modifications constitutes acceptance of 
          the updated Terms.
        </p>
      </div>

      {/* Severability */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Severability</h2>
        <p className="text-gray-700 mb-4">
          If any provision of these Terms is held to be invalid or unenforceable, the remaining 
          provisions will remain in full force and effect.
        </p>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact Information</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about these Terms of Service, please contact us:
        </p>
        <div className="space-y-2 text-gray-700">
          <p><strong>Email:</strong> legal@ziontechgroup.com</p>
          <p><strong>Phone:</strong> +1 302 464 0950</p>
          <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
        <div className="mt-4">
          <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
            Contact Form →
          </Link>
        </div>
      </div>
    </div>
  );
}