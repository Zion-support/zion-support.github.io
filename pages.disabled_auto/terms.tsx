import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Scale, FileText, AlertTriangle, Shield, Users, Gavel } from 'lucide-react';

const Terms: NextPage = () => {
  return (
    <MainLayout
      title="Terms of Service - Zion Tech Group"
      description="Read Zion Tech Group's Terms of Service to understand the terms and conditions for using our website and services."
      keywords="terms of service, terms and conditions, legal terms, Zion Tech Group, service agreement"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6">
              <Scale className="w-16 h-16 mx-auto text-blue-400 mb-4" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Please read these terms carefully before using our website and services.
            </p>
            <div className="text-sm text-gray-300">
              Last updated: January 27, 2025
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="w-8 h-8 mr-3 text-blue-600" />
                  Agreement to Terms
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms of Service ("Terms") govern your use of the Zion Tech Group website located at 
                  ziontechgroup.com and our services. By accessing or using our website and services, you agree 
                  to be bound by these Terms.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you do not agree to these Terms, please do not use our website or services.
                </p>
              </div>

              {/* Services Description */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Users className="w-8 h-8 mr-3 text-blue-600" />
                  Description of Services
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Zion Tech Group provides technology solutions and services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>AI development and implementation services</li>
                  <li>Cloud architecture and migration services</li>
                  <li>Micro SaaS development</li>
                  <li>IT consulting and support</li>
                  <li>Software development and customization</li>
                  <li>Digital transformation consulting</li>
                </ul>
              </div>

              {/* User Responsibilities */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-8 h-8 mr-3 text-blue-600" />
                  User Responsibilities
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When using our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Use our services in compliance with applicable laws</li>
                  <li>Not engage in any illegal or unauthorized activities</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Not interfere with the proper functioning of our services</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All content, trademarks, and intellectual property on our website and in our services are 
                  owned by Zion Tech Group or our licensors. You may not:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Copy, modify, or distribute our content without permission</li>
                  <li>Use our trademarks or logos without authorization</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                  <li>Create derivative works based on our services</li>
                </ul>
              </div>

              {/* Payment Terms */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Payment Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For paid services:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Payment is due according to the agreed schedule</li>
                  <li>All fees are non-refundable unless otherwise specified</li>
                  <li>We reserve the right to change pricing with notice</li>
                  <li>Late payments may result in service suspension</li>
                </ul>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <AlertTriangle className="w-8 h-8 mr-3 text-blue-600" />
                  Limitation of Liability
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including but not limited to loss of 
                  profits, data, or business opportunities.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our total liability shall not exceed the amount paid by you for the services in the 12 months 
                  preceding the claim.
                </p>
              </div>

              {/* Disclaimers */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Disclaimers</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our services are provided "as is" without warranties of any kind. We disclaim all warranties, 
                  express or implied, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Warranties of merchantability and fitness for a particular purpose</li>
                  <li>Warranties regarding accuracy, reliability, or completeness</li>
                  <li>Warranties that our services will be uninterrupted or error-free</li>
                </ul>
              </div>

              {/* Termination */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may terminate or suspend your access to our services at any time, with or without notice, 
                  for any reason, including breach of these Terms.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Upon termination, your right to use our services will cease immediately.
                </p>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Gavel className="w-8 h-8 mr-3 text-blue-600" />
                  Governing Law
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, 
                  United States, without regard to conflict of law principles.
                </p>
              </div>

              {/* Contact */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@ziontechgroup.com</p>
                  <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 302 464 0950</p>
                  <p className="text-gray-700">
                    <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
                  </p>
                </div>
              </div>

              {/* Updates */}
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of any material 
                  changes by posting the new Terms on our website. Your continued use of our services after 
                  such modifications constitutes acceptance of the updated Terms.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Terms;