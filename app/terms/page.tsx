'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, ArrowRight, Globe, User, Mail, Phone, Calendar, Lock, Database, Cloud, Brain } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Read our terms of service and understand the terms and conditions for using Zion Tech Group's AI and IT solutions." />
        <meta name="keywords" content="terms of service, terms and conditions, legal, user agreement" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Terms of Service
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Please read these terms carefully before using our services. By accessing or using our platform, you agree to be bound by these terms.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Last updated: January 15, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4" />
                  <span>Version 2.1</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terms Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700">
            <div className="prose prose-invert max-w-none">
              {/* Introduction */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <FileText className="w-6 h-6 text-cyan-400" />
                  1. Introduction
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Welcome to Zion Tech Group ("we," "our," or "us"). These Terms of Service ("Terms") govern your use of our website, services, and products (collectively, the "Services") operated by Zion Tech Group, a Delaware corporation.
                  </p>
                  <p>
                    By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Services.
                  </p>
                </div>
              </section>

              {/* Acceptance of Terms */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  2. Acceptance of Terms
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    By accessing and using our Services, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using our Services, you shall be subject to any posted guidelines or rules applicable to such Services.
                  </p>
                  <p>
                    We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last updated" date.
                  </p>
                </div>
              </section>

              {/* Services Description */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Brain className="w-6 h-6 text-purple-400" />
                  3. Services Description
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Zion Tech Group provides AI-powered solutions, IT services, cloud computing, cybersecurity, and digital transformation services. Our Services include but are not limited to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Artificial Intelligence development and implementation</li>
                    <li>Cloud infrastructure and migration services</li>
                    <li>Cybersecurity solutions and consulting</li>
                    <li>Custom software development</li>
                    <li>Data analytics and business intelligence</li>
                    <li>Micro SaaS solutions and platforms</li>
                  </ul>
                </div>
              </section>

              {/* User Responsibilities */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <User className="w-6 h-6 text-blue-400" />
                  4. User Responsibilities
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>As a user of our Services, you agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate and complete information when required</li>
                    <li>Maintain the confidentiality of your account credentials</li>
                    <li>Use our Services only for lawful purposes</li>
                    <li>Not attempt to gain unauthorized access to our systems</li>
                    <li>Not use our Services to transmit harmful or malicious code</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                </div>
              </section>

              {/* Privacy and Data Protection */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-400" />
                  5. Privacy and Data Protection
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our Services. By using our Services, you agree to the collection and use of information in accordance with our Privacy Policy.
                  </p>
                  <p>
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                  </p>
                </div>
              </section>

              {/* Intellectual Property */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Lock className="w-6 h-6 text-orange-400" />
                  6. Intellectual Property
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    The Services and their original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors. The Services are protected by copyright, trademark, and other laws.
                  </p>
                  <p>
                    You may not modify, distribute, or create derivative works based on our Services without our express written permission. Any unauthorized use of our Services may violate copyright, trademark, and other laws.
                  </p>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-400" />
                  7. Limitation of Liability
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Services.
                  </p>
                  <p>
                    Our total liability to you for all damages shall not exceed the amount you paid us for the Services in the 12 months preceding the claim.
                  </p>
                </div>
              </section>

              {/* Termination */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Database className="w-6 h-6 text-red-400" />
                  8. Termination
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    We may terminate or suspend your account and bar access to the Services immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                  </p>
                  <p>
                    If you wish to terminate your account, you may simply discontinue using the Services or contact us to request account deletion.
                  </p>
                </div>
              </section>

              {/* Governing Law */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-cyan-400" />
                  9. Governing Law
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
                  </p>
                  <p>
                    Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  10. Contact Information
                </h2>
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-slate-700/50 rounded-lg p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-cyan-400" />
                      <span>Email: legal@ziontechgroup.com</span>
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

export default TermsPage;