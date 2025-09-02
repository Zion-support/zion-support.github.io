import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FileText, Scale, Shield, AlertTriangle, Mail, Phone, Calendar } from 'lucide-react';

export default function Terms() {
  const lastUpdated = 'January 1, 2025';

  return (
    <>
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read Zion Tech Group's terms of service and understand your rights and responsibilities when using our services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/terms" />
      </Head>
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                These terms govern your use of our services and website. Please read them carefully.
              </p>
              <div className="flex items-center justify-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                Last updated: {lastUpdated}
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Scale className="w-6 h-6 mr-3 text-blue-600" />
                  Acceptance of Terms
                </h2>
                <p className="text-gray-600 mb-4">
                  By accessing and using Zion Tech Group's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Description of Service</h2>
                <p className="text-gray-600 mb-4">
                  Zion Tech Group provides technology consulting, AI services, IT solutions, and software development services. Our services include but are not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Artificial Intelligence and Machine Learning solutions</li>
                  <li>Information Technology consulting and implementation</li>
                  <li>Micro SaaS development and deployment</li>
                  <li>Cloud infrastructure and migration services</li>
                  <li>Digital transformation consulting</li>
                  <li>Custom software development</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">User Responsibilities</h2>
                <p className="text-gray-600 mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Provide accurate and complete information when requested</li>
                  <li>Use our services in compliance with applicable laws and regulations</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Not use our services for illegal or harmful purposes</li>
                  <li>Maintain the confidentiality of any credentials provided</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-blue-600" />
                  Intellectual Property
                </h2>
                <p className="text-gray-600 mb-4">
                  All content, trademarks, service marks, trade names, logos, and other intellectual property displayed on our website are the property of Zion Tech Group or their respective owners. You may not use, reproduce, or distribute any content without our prior written permission.
                </p>
                <p className="text-gray-600 mb-4">
                  Any work product, deliverables, or custom solutions created specifically for you will be governed by the terms of our service agreement.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Availability</h2>
                <p className="text-gray-600 mb-4">
                  We strive to maintain high availability of our services, but we do not guarantee uninterrupted access. We may temporarily suspend services for maintenance, updates, or other operational reasons.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Terms</h2>
                <p className="text-gray-600 mb-4">
                  Payment terms will be specified in individual service agreements. Generally:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Invoices are due within 30 days of receipt</li>
                  <li>Late payments may incur additional charges</li>
                  <li>We reserve the right to suspend services for non-payment</li>
                  <li>All prices are subject to change with notice</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3 text-blue-600" />
                  Limitation of Liability
                </h2>
                <p className="text-gray-600 mb-4">
                  To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
                </p>
                <p className="text-gray-600 mb-4">
                  Our total liability for any claims arising from our services shall not exceed the amount paid by you for the specific service giving rise to the claim.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy and Data Protection</h2>
                <p className="text-gray-600 mb-4">
                  Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these terms by reference.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
                <p className="text-gray-600 mb-4">
                  Either party may terminate service agreements with appropriate notice as specified in the individual agreement. We reserve the right to terminate services immediately for breach of these terms.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h2>
                <p className="text-gray-600 mb-4">
                  These terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
                <p className="text-gray-600 mb-4">
                  We reserve the right to modify these terms at any time. We will notify users of material changes by posting the updated terms on our website. Continued use of our services after changes constitutes acceptance of the new terms.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these terms, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Mail className="w-5 h-5 mr-3 text-blue-600" />
                    <span className="text-gray-700">legal@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <Phone className="w-5 h-5 mr-3 text-blue-600" />
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="text-gray-700">
                    <strong>Zion Tech Group</strong><br />
                    123 Technology Drive<br />
                    San Francisco, CA 94105<br />
                    United States
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}