import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Zion Tech Group',
  description: 'Learn how Zion Tech Group protects your privacy and handles your personal information with the highest standards of security.',
  keywords: 'privacy policy, data protection, privacy, zion tech group, information security',
  openGraph: {
    title: 'Privacy Policy | Zion Tech Group',
    description: 'Learn how Zion Tech Group protects your privacy and handles your personal information with the highest standards of security.',
    url: 'https://ziontechgroup.com/privacy',
    type: 'website',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Learn how Zion Tech Group protects your privacy and handles your personal information with the highest standards of security.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: December 2025
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
                <p className="text-gray-600 mb-6">
                  At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                  or use our services.
                </p>
                <p className="text-gray-600 mb-6">
                  By using our website or services, you consent to the data practices described in this Privacy Policy. If you do not 
                  agree with the practices described in this policy, please do not use our website or services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                <p className="text-gray-600 mb-4">
                  We may collect personal information that you voluntarily provide to us, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Company information and job title</li>
                  <li>Information provided in forms, surveys, or communications</li>
                  <li>Payment information for services (processed securely through third-party providers)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Automatically Collected Information</h3>
                <p className="text-gray-600 mb-4">
                  We may automatically collect certain information about your device and usage, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website information</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Providing and improving our services</li>
                  <li>Communicating with you about our services and updates</li>
                  <li>Processing payments and transactions</li>
                  <li>Analyzing website usage and improving user experience</li>
                  <li>Complying with legal obligations</li>
                  <li>Protecting against fraud and security threats</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Information Sharing and Disclosure</h2>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To service providers who assist us in operating our business</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
                <p className="text-gray-600 mb-6">
                  We implement appropriate technical and organizational security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, 
                  and regular security audits.
                </p>
                <p className="text-gray-600 mb-6">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use 
                  commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights and Choices</h2>
                <p className="text-gray-600 mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>The right to access your personal information</li>
                  <li>The right to correct inaccurate information</li>
                  <li>The right to delete your personal information</li>
                  <li>The right to restrict processing of your information</li>
                  <li>The right to data portability</li>
                  <li>The right to object to processing</li>
                </ul>
                <p className="text-gray-600 mb-6">
                  To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies and Tracking Technologies</h2>
                <p className="text-gray-600 mb-6">
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie 
                  settings through your browser preferences. Please note that disabling cookies may affect the functionality of our website.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Links</h2>
                <p className="text-gray-600 mb-6">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content 
                  of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to This Privacy Policy</h2>
                <p className="text-gray-600 mb-6">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
                  Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically 
                  for any changes.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-900 font-semibold mb-2">Zion Tech Group</p>
                  <p className="text-gray-600">Email: privacy@ziontechgroup.com</p>
                  <p className="text-gray-600">Phone: +1 302 464 0950</p>
                  <p className="text-gray-600">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}