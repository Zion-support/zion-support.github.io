import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { FileText, Scale, AlertTriangle, Shield, Users, Gavel } from 'lucide-react';

const Terms: NextPage = () => {
  return (
    <MainLayout
      title="Terms of Service - Zion Tech Group"
      description="Read our terms of service to understand the terms and conditions for using Zion Tech Group's services and website."
      keywords="terms of service, terms and conditions, legal terms, Zion Tech Group"
    >
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Scale className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Please read these terms carefully before using our services. By using our website and services, you agree to be bound by these terms.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 27, 2025
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              {/* Agreement */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-blue-600" />
                  Agreement to Terms
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and Zion Tech Group 
                  ("Company," "we," "our," or "us") regarding your use of our website https://ziontechgroup.com and our 
                  services. By accessing or using our services, you agree to be bound by these Terms.
                </p>
              </section>

              {/* Services Description */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-blue-600" />
                  Description of Services
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Zion Tech Group provides technology solutions including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>AI development and implementation services</li>
                  <li>Cloud architecture and migration services</li>
                  <li>Micro SaaS development and deployment</li>
                  <li>IT consulting and support services</li>
                  <li>Custom software development</li>
                  <li>Digital transformation consulting</li>
                </ul>
              </section>

              {/* User Responsibilities */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3 text-blue-600" />
                  User Responsibilities
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Not interfere with the proper functioning of our services</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Maintain the confidentiality of any account credentials</li>
                </ul>
              </section>

              {/* Prohibited Uses */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Prohibited Uses</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may not use our services for any of the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Violating any applicable laws or regulations</li>
                  <li>Transmitting harmful or malicious code</li>
                  <li>Attempting to breach security measures</li>
                  <li>Harassing, threatening, or intimidating others</li>
                  <li>Distributing spam or unsolicited communications</li>
                  <li>Infringing on intellectual property rights</li>
                  <li>Engaging in fraudulent or deceptive practices</li>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-blue-600" />
                  Intellectual Property Rights
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All content, trademarks, and intellectual property on our website and services are owned by Zion Tech Group 
                  or our licensors. You may not:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Copy, modify, or distribute our content without permission</li>
                  <li>Use our trademarks or logos without authorization</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                  <li>Create derivative works based on our services</li>
                </ul>
              </section>

              {/* Payment Terms */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Fees and Billing</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Service fees are as specified in your service agreement. All fees are non-refundable unless 
                      otherwise specified in writing.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Payment Methods</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We accept various payment methods including credit cards, bank transfers, and other approved 
                      payment methods as specified in your agreement.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Late Payments</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Late payments may result in service suspension and additional fees as specified in your 
                      service agreement.
                    </p>
                  </div>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including but not limited to loss of 
                  profits, data, or business opportunities, arising from your use of our services.
                </p>
              </section>

              {/* Service Availability */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Availability</h2>
                <p className="text-gray-700 leading-relaxed">
                  While we strive to maintain high service availability, we do not guarantee uninterrupted access 
                  to our services. We reserve the right to modify, suspend, or discontinue any part of our services 
                  at any time with or without notice.
                </p>
              </section>

              {/* Termination */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                <p className="text-gray-700 leading-relaxed">
                  Either party may terminate this agreement at any time with written notice. Upon termination, 
                  your right to use our services will cease immediately, and we may delete your account and data 
                  in accordance with our data retention policies.
                </p>
              </section>

              {/* Governing Law */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Gavel className="w-6 h-6 mr-3 text-blue-600" />
                  Governing Law
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, 
                  United States, without regard to conflict of law principles. Any disputes arising from these Terms 
                  shall be subject to the exclusive jurisdiction of the courts in Delaware.
                </p>
              </section>

              {/* Changes to Terms */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of any material 
                  changes by posting the updated Terms on our website. Your continued use of our services after 
                  such changes constitutes acceptance of the new Terms.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Zion Tech Group</strong><br />
                    Email: <a href="mailto:legal@ziontechgroup.com" className="text-blue-600 hover:underline">legal@ziontechgroup.com</a><br />
                    Phone: <a href="tel:+13024640950" className="text-blue-600 hover:underline">+1 302 464 0950</a><br />
                    Address: 364 E Main St STE 1008, Middletown DE 19709
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Terms;