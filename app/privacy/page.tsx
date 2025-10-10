'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Eye, Lock, Database, User, Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection and Privacy</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal data in compliance with GDPR and other privacy regulations." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal data, privacy rights, data security" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 space-y-8">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-cyan-400" />
                  1. Introduction
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Database className="w-6 h-6 text-blue-400" />
                  2. Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Personal Information</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      <li>Name and contact information (email, phone, address)</li>
                      <li>Company information and job title</li>
                      <li>Account credentials and preferences</li>
                      <li>Payment and billing information</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Usage Information</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      <li>Website usage and interaction data</li>
                      <li>Service usage patterns and preferences</li>
                      <li>Device information and IP addresses</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-green-400" />
                  3. How We Use Your Information
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Providing and maintaining our services</li>
                  <li>Processing transactions and payments</li>
                  <li>Communicating with you about our services</li>
                  <li>Improving our services and user experience</li>
                  <li>Complying with legal obligations</li>
                  <li>Protecting against fraud and security threats</li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-red-400" />
                  4. Information Sharing and Disclosure
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To trusted service providers who assist us in operating our services</li>
                  <li>To comply with legal obligations or court orders</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>In connection with a business transfer or acquisition</li>
                </ul>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-yellow-400" />
                  5. Data Security
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response procedures</li>
                </ul>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <User className="w-6 h-6 text-purple-400" />
                  6. Your Privacy Rights
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Right to access your personal information</li>
                  <li>Right to correct inaccurate information</li>
                  <li>Right to delete your personal information</li>
                  <li>Right to restrict processing of your information</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                  <li>Right to withdraw consent</li>
                </ul>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking Technologies</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website. 
                  You can control cookie settings through your browser preferences.
                </p>
                <div className="bg-slate-700/30 rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">Types of Cookies We Use:</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand website usage</li>
                    <li><strong>Marketing Cookies:</strong> Used for targeted advertising</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  </ul>
                </div>
              </div>

              {/* Third-Party Services */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Services</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our services may contain links to third-party websites or integrate with third-party services. 
                  We are not responsible for the privacy practices of these third parties. We encourage you to 
                  review their privacy policies before providing any personal information.
                </p>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">9. Data Retention</h2>
                <p className="text-gray-300 leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this 
                  Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need 
                  your information, we will securely delete or anonymize it.
                </p>
              </div>

              {/* International Transfers */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">10. International Data Transfers</h2>
                <p className="text-gray-300 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure that 
                  such transfers comply with applicable data protection laws and implement appropriate safeguards to protect 
                  your information.
                </p>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">11. Children's Privacy</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal 
                  information from children under 13. If we become aware that we have collected personal information from 
                  a child under 13, we will take steps to delete such information.
                </p>
              </div>

              {/* Changes to Privacy Policy */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">12. Changes to This Privacy Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
                  new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this 
                  Privacy Policy periodically for any changes.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-slate-700/30 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  13. Contact Us
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span><strong>Email:</strong> privacy@ziontechgroup.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span><strong>Phone:</strong> +1 302 464 0950</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPage;