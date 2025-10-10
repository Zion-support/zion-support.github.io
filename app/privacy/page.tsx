'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Database, Mail, Phone, Calendar } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal data. Our comprehensive privacy policy outlines our data protection practices." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, privacy rights, data security, personal information" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-gray-400 mt-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Lock className="w-6 h-6 text-cyan-400 mr-3" />
                  Information We Collect
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Personal Information</h3>
                    <p className="text-gray-300 mb-4">
                      We collect information you provide directly to us, such as when you:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>Create an account or profile</li>
                      <li>Contact us for support or inquiries</li>
                      <li>Subscribe to our newsletter or updates</li>
                      <li>Use our services or products</li>
                      <li>Participate in surveys or promotions</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Information We Collect Automatically</h3>
                    <p className="text-gray-300 mb-4">
                      When you visit our website or use our services, we may automatically collect:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>Log information (IP address, browser type, pages visited)</li>
                      <li>Device information (device type, operating system)</li>
                      <li>Usage data (how you interact with our services)</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Eye className="w-6 h-6 text-cyan-400 mr-3" />
                  How We Use Your Information
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-300 mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices, updates, and support messages</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Monitor and analyze trends, usage, and activities</li>
                    <li>Personalize and improve your experience</li>
                    <li>Detect, investigate, and prevent security incidents</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Database className="w-6 h-6 text-cyan-400 mr-3" />
                  Information Sharing and Disclosure
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-300 mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations or court orders</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>With trusted service providers who assist us in operating our business</li>
                    <li>In connection with a business transfer or acquisition</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Shield className="w-6 h-6 text-cyan-400 mr-3" />
                  Data Security
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-300 mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information against:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Unauthorized access, use, or disclosure</li>
                    <li>Accidental loss or destruction</li>
                    <li>Malicious attacks and data breaches</li>
                    <li>Improper alteration or modification</li>
                  </ul>
                  <p className="text-gray-300 mt-4">
                    However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Your Rights and Choices</h2>
                <div className="space-y-4">
                  <p className="text-gray-300 mb-4">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate or incomplete information</li>
                    <li>Deletion of your personal information</li>
                    <li>Restriction of processing of your information</li>
                    <li>Data portability</li>
                    <li>Objection to processing</li>
                    <li>Withdrawal of consent</li>
                  </ul>
                  <p className="text-gray-300 mt-4">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Cookies and Tracking Technologies</h2>
                <div className="space-y-4">
                  <p className="text-gray-300 mb-4">
                    We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
                  </p>
                  <p className="text-gray-300">
                    For more information about our use of cookies, please refer to our Cookie Policy.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Changes to This Policy</h2>
                <p className="text-gray-300">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically for any changes.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Mail className="w-6 h-6 text-cyan-400 mr-3" />
                  Contact Us
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-300 mb-4">
                    If you have any questions about this privacy policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-cyan-400 mr-3" />
                      <span>Email: privacy@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-cyan-400 mr-3" />
                      <span>Phone: +1 (302) 464-0950</span>
                    </div>
                    <div className="flex items-start">
                      <Database className="w-4 h-4 text-cyan-400 mr-3 mt-1" />
                      <div>
                        <div>Address:</div>
                        <div>364 E Main St STE 1008</div>
                        <div>Middletown, DE 19709</div>
                      </div>
                    </div>
                  </div>
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