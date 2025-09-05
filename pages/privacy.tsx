import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, User, Mail, Phone } from 'lucide-react';
import Layout from '../components/Layout';

export default function PrivacyPage() {
  return (
    <Layout
      title="Privacy Policy - Zion Tech Group"
      description="Learn how Zion Tech Group protects your privacy and handles your personal information."
      keywords="privacy policy, data protection, GDPR, personal information, privacy rights"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Shield className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-5xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-blue-100">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="mb-8">
                  <p className="text-gray-600 mb-6">
                    <strong>Last updated:</strong> January 15, 2025
                  </p>
                  <p className="text-gray-600 mb-6">
                    At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Information We Collect
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Personal Information
                        </h3>
                        <p className="text-gray-600">
                          We may collect personal information that you voluntarily provide to us when you:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                          <li>Register for an account</li>
                          <li>Subscribe to our newsletter</li>
                          <li>Contact us through our website</li>
                          <li>Use our services</li>
                          <li>Participate in surveys or promotions</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Automatically Collected Information
                        </h3>
                        <p className="text-gray-600">
                          We may automatically collect certain information about your device and usage patterns, including:
                        </p>
                        <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                          <li>IP address and location data</li>
                          <li>Browser type and version</li>
                          <li>Operating system</li>
                          <li>Pages visited and time spent on our website</li>
                          <li>Referring website</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      How We Use Your Information
                    </h2>
                    <p className="text-gray-600 mb-4">
                      We use the information we collect for various purposes, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Providing and maintaining our services</li>
                      <li>Processing transactions and payments</li>
                      <li>Communicating with you about our services</li>
                      <li>Improving our website and services</li>
                      <li>Personalizing your experience</li>
                      <li>Complying with legal obligations</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Information Sharing and Disclosure
                    </h2>
                    <p className="text-gray-600 mb-4">
                      We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>With your explicit consent</li>
                      <li>To comply with legal obligations</li>
                      <li>To protect our rights and property</li>
                      <li>With trusted service providers who assist us in operating our website</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Data Security
                    </h2>
                    <p className="text-gray-600">
                      We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Your Rights
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Depending on your location, you may have certain rights regarding your personal information, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>The right to access your personal information</li>
                      <li>The right to correct inaccurate information</li>
                      <li>The right to delete your personal information</li>
                      <li>The right to restrict processing of your information</li>
                      <li>The right to data portability</li>
                      <li>The right to object to processing</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Cookies and Tracking Technologies
                    </h2>
                    <p className="text-gray-600">
                      We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. For more information, please see our Cookie Policy.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Changes to This Privacy Policy
                    </h2>
                    <p className="text-gray-600">
                      We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Contact Us
                    </h2>
                    <p className="text-gray-600 mb-4">
                      If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-600">
                        <strong>Email:</strong> privacy@ziontechgroup.com<br />
                        <strong>Phone:</strong> +1 302 464 0950<br />
                        <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}