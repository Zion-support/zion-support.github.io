'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Database, User, Mail, Phone, Calendar, CheckCircle, ArrowRight, Globe, Server, Key, FileText, Settings, AlertTriangle } from 'lucide-react';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn how Zion Tech Group collects, uses, and protects your personal information. Our privacy policy explains our data practices and your rights." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal information, data security" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Privacy Policy
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information when you use our services.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Last updated: January 15, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>GDPR Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700">
            <div className="prose prose-invert max-w-none">
              {/* Introduction */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-cyan-400" />
                  1. Introduction
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                  <p>
                    Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
                  </p>
                </div>
              </section>

              {/* Information We Collect */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Database className="w-6 h-6 text-purple-400" />
                  2. Information We Collect
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
                    <p className="mb-4">We may collect personal information that you provide directly to us, including:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Name and contact information (email, phone number, address)</li>
                      <li>Company information and job title</li>
                      <li>Account credentials and preferences</li>
                      <li>Payment and billing information</li>
                      <li>Communications with us (emails, chat messages, support tickets)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Usage Information</h3>
                    <p className="mb-4">We automatically collect certain information about your use of our services:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Device information (IP address, browser type, operating system)</li>
                      <li>Usage patterns and preferences</li>
                      <li>Log files and analytics data</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Information */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Settings className="w-6 h-6 text-green-400" />
                  3. How We Use Your Information
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>We use the information we collect for various purposes, including:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Providing and maintaining our services</li>
                    <li>Processing transactions and managing your account</li>
                    <li>Communicating with you about our services</li>
                    <li>Improving our services and developing new features</li>
                    <li>Personalizing your experience</li>
                    <li>Complying with legal obligations</li>
                    <li>Protecting against fraud and security threats</li>
                  </ul>
                </div>
              </section>

              {/* Information Sharing */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-orange-400" />
                  4. Information Sharing and Disclosure
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>With your explicit consent</li>
                    <li>To trusted service providers who assist us in operating our services</li>
                    <li>To comply with legal obligations or court orders</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>In connection with a business transfer or acquisition</li>
                  </ul>
                </div>
              </section>

              {/* Data Security */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Lock className="w-6 h-6 text-red-400" />
                  5. Data Security
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Employee training on data protection</li>
                    <li>Incident response procedures</li>
                  </ul>
                  <p>
                    However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
                  </p>
                </div>
              </section>

              {/* Your Rights */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <User className="w-6 h-6 text-blue-400" />
                  6. Your Rights and Choices
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>Depending on your location, you may have certain rights regarding your personal information:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Right to access your personal information</li>
                    <li>Right to correct inaccurate information</li>
                    <li>Right to delete your personal information</li>
                    <li>Right to restrict processing of your information</li>
                    <li>Right to data portability</li>
                    <li>Right to object to processing</li>
                    <li>Right to withdraw consent</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
                  </p>
                </div>
              </section>

              {/* Cookies and Tracking */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Eye className="w-6 h-6 text-yellow-400" />
                  7. Cookies and Tracking Technologies
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small text files that are stored on your device when you visit our website.
                  </p>
                  <p>We use cookies for:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Remembering your preferences and settings</li>
                    <li>Analyzing website traffic and usage patterns</li>
                    <li>Providing personalized content and advertisements</li>
                    <li>Improving our website functionality</li>
                  </ul>
                  <p>
                    You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.
                  </p>
                </div>
              </section>

              {/* Data Retention */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Server className="w-6 h-6 text-indigo-400" />
                  8. Data Retention
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                  </p>
                  <p>
                    When we no longer need your personal information, we will securely delete or anonymize it. Some information may be retained for longer periods for legal, regulatory, or business purposes.
                  </p>
                </div>
              </section>

              {/* International Transfers */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-cyan-400" />
                  9. International Data Transfers
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws than your country.
                  </p>
                  <p>
                    When we transfer your information internationally, we ensure appropriate safeguards are in place to protect your personal information in accordance with applicable data protection laws.
                  </p>
                </div>
              </section>

              {/* Children's Privacy */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-400" />
                  10. Children's Privacy
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                  </p>
                  <p>
                    If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we discover that we have collected personal information from a child under 13, we will take steps to delete such information.
                  </p>
                </div>
              </section>

              {/* Changes to Privacy Policy */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-pink-400" />
                  11. Changes to This Privacy Policy
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                  <p>
                    We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  12. Contact Us
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-slate-700/50 rounded-lg p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-cyan-400" />
                      <span>Email: privacy@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-cyan-400" />
                      <span>Phone: (302) 464-0950</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Database className="w-5 h-5 text-cyan-400 mt-1" />
                      <div>
                        <div>Address:</div>
                        <div>364 E Main St STE 1008</div>
                        <div>Middletown, DE 19709</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPage;