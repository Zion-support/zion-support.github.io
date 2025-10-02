import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - Zion Tech Group',
  description: 'Zion Tech Group\'s privacy policy outlining how we collect, use, and protect your personal information.',
  keywords: 'privacy policy, data protection, GDPR, privacy rights, data security',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-600">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Introduction */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
        <p className="text-gray-700 mb-4">
          Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. 
          This Privacy Policy explains how we collect, use, disclose, and safeguard your 
          information when you visit our website https://ziontechgroup.com or use our services.
        </p>
        <p className="text-gray-700">
          By using our website and services, you consent to the data practices described in this policy.
        </p>
      </div>

      {/* Information We Collect */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
        <p className="text-gray-700 mb-4">
          We may collect personal information that you voluntarily provide to us, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>Name and contact information (email address, phone number, mailing address)</li>
          <li>Company information and job title</li>
          <li>Information provided in contact forms, surveys, or consultations</li>
          <li>Payment information for service purchases</li>
          <li>Communication preferences</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
        <p className="text-gray-700 mb-4">
          When you visit our website, we may automatically collect certain information, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>IP address and location data</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Pages visited and time spent on our website</li>
          <li>Referring website information</li>
          <li>Device information</li>
        </ul>
      </div>

      {/* How We Use Information */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">
          We use the collected information for various purposes, including:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>Providing and improving our services</li>
          <li>Responding to your inquiries and requests</li>
          <li>Processing transactions and payments</li>
          <li>Sending important updates about our services</li>
          <li>Conducting market research and analytics</li>
          <li>Ensuring website security and preventing fraud</li>
          <li>Complying with legal obligations</li>
          <li>Marketing communications (with your consent)</li>
        </ul>
      </div>

      {/* Information Sharing */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
        <p className="text-gray-700 mb-4">
          We do not sell, trade, or otherwise transfer your personal information to third parties, 
          except in the following circumstances:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>With your explicit consent</li>
          <li>To trusted service providers who assist us in operating our website and conducting business</li>
          <li>When required by law or to protect our rights and safety</li>
          <li>In connection with a business transfer or acquisition</li>
          <li>To prevent fraud or security threats</li>
        </ul>
      </div>

      {/* Data Security */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
        <p className="text-gray-700 mb-4">
          We implement appropriate technical and organizational security measures to protect 
          your personal information against unauthorized access, alteration, disclosure, or destruction. 
          These measures include:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>Encryption of data in transit and at rest</li>
          <li>Regular security assessments and updates</li>
          <li>Access controls and authentication protocols</li>
          <li>Employee training on data protection</li>
          <li>Incident response procedures</li>
        </ul>
      </div>

      {/* Cookies and Tracking */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
        <p className="text-gray-700 mb-4">
          Our website uses cookies and similar tracking technologies to enhance your experience. 
          You can control cookie settings through your browser preferences. We use cookies for:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>Website functionality and performance</li>
          <li>Analytics and user behavior tracking</li>
          <li>Personalized content delivery</li>
          <li>Marketing and advertising (with consent)</li>
        </ul>
      </div>

      {/* Your Rights */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Privacy Rights</h2>
        <p className="text-gray-700 mb-4">
          Depending on your location, you may have the following rights regarding your personal information:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>Access to your personal information</li>
          <li>Correction of inaccurate information</li>
          <li>Deletion of your personal information</li>
          <li>Restriction of processing</li>
          <li>Data portability</li>
          <li>Objection to processing</li>
          <li>Withdrawal of consent</li>
        </ul>
        <p className="text-gray-700">
          To exercise these rights, please contact us at privacy@ziontechgroup.com.
        </p>
      </div>

      {/* Data Retention */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
        <p className="text-gray-700 mb-4">
          We retain your personal information only for as long as necessary to fulfill the 
          purposes outlined in this Privacy Policy, unless a longer retention period is 
          required or permitted by law. We will securely delete or anonymize your information 
          when it is no longer needed.
        </p>
      </div>

      {/* International Transfers */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Data Transfers</h2>
        <p className="text-gray-700 mb-4">
          Your information may be transferred to and processed in countries other than your 
          country of residence. We ensure that such transfers comply with applicable data 
          protection laws and implement appropriate safeguards to protect your information.
        </p>
      </div>

      {/* Children's Privacy */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
        <p className="text-gray-700 mb-4">
          Our services are not intended for children under 13 years of age. We do not 
          knowingly collect personal information from children under 13. If we become aware 
          that we have collected personal information from a child under 13, we will take 
          steps to delete such information.
        </p>
      </div>

      {/* Changes to Policy */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
        <p className="text-gray-700 mb-4">
          We may update this Privacy Policy from time to time. We will notify you of any 
          changes by posting the new Privacy Policy on this page and updating the "Last updated" 
          date. We encourage you to review this Privacy Policy periodically for any changes.
        </p>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about this Privacy Policy or our data practices, please contact us:
        </p>
        <div className="space-y-2 text-gray-700">
          <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
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