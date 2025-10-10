'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Shield, FileText, AlertCircle } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms and Conditions</title>
        <meta name="description" content="Read our terms of service and legal conditions for using Zion Tech Group's AI and IT solutions and services." />
        <meta name="keywords" content="terms of service, legal terms, conditions, user agreement, service terms" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 space-y-8">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-cyan-400" />
                  1. Introduction
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Welcome to Zion Tech Group. These Terms of Service ("Terms") govern your use of our website, 
                  services, and products. By accessing or using our services, you agree to be bound by these Terms.
                </p>
              </div>

              {/* Acceptance of Terms */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  2. Acceptance of Terms
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  By accessing and using our services, you accept and agree to be bound by the terms and provision 
                  of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>You must be at least 18 years old to use our services</li>
                  <li>You must provide accurate and complete information when creating an account</li>
                  <li>You are responsible for maintaining the confidentiality of your account</li>
                  <li>You agree to notify us immediately of any unauthorized use of your account</li>
                </ul>
              </div>

              {/* Services Description */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-blue-400" />
                  3. Services Description
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Zion Tech Group provides AI and IT solutions including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Artificial Intelligence development and implementation</li>
                  <li>Cloud computing and infrastructure services</li>
                  <li>Cybersecurity solutions and monitoring</li>
                  <li>Custom software development</li>
                  <li>Data analytics and business intelligence</li>
                  <li>Micro SaaS solutions and tools</li>
                </ul>
              </div>

              {/* User Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-yellow-400" />
                  4. User Responsibilities
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Use our services only for lawful purposes</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Not interfere with or disrupt our services</li>
                  <li>Not use our services to transmit harmful or malicious code</li>
                  <li>Respect intellectual property rights</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>

              {/* Payment Terms */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Payment Terms</h2>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Payment for our services is due according to the terms specified in your service agreement. 
                    We accept various payment methods including credit cards, bank transfers, and other approved methods.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>All prices are in USD unless otherwise specified</li>
                    <li>Payment is due within 30 days of invoice date</li>
                    <li>Late payments may incur additional fees</li>
                    <li>Refunds are subject to our refund policy</li>
                  </ul>
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  All content, trademarks, and intellectual property on our website and in our services are 
                  owned by Zion Tech Group or our licensors. You may not use, reproduce, or distribute any 
                  content without our written permission.
                </p>
              </div>

              {/* Privacy Policy */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Privacy Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your 
                  use of our services, to understand our practices.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed">
                  In no event shall Zion Tech Group be liable for any indirect, incidental, special, 
                  consequential, or punitive damages, including without limitation, loss of profits, 
                  data, use, goodwill, or other intangible losses, resulting from your use of our services.
                </p>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">9. Termination</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may terminate or suspend your account and access to our services immediately, 
                  without prior notice or liability, for any reason whatsoever, including without 
                  limitation if you breach the Terms.
                </p>
              </div>

              {/* Changes to Terms */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">10. Changes to Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                  If a revision is material, we will try to provide at least 30 days notice prior to any new 
                  terms taking effect.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-slate-700/30 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4">11. Contact Information</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Email:</strong> legal@ziontechgroup.com</p>
                  <p><strong>Phone:</strong> +1 302 464 0950</p>
                  <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsPage;