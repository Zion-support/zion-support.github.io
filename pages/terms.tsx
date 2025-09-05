import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react';
import Layout from '../components/Layout';

export default function TermsPage() {
  return (
    <Layout
      title="Terms of Service - Zion Tech Group"
      description="Read our terms of service to understand the rules and guidelines for using Zion Tech Group's services and website."
      keywords="terms of service, terms and conditions, user agreement, legal terms"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <FileText className="w-16 h-16 mx-auto mb-6" />
              <h1 className="text-5xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-indigo-100">
                Please read these terms carefully before using our services.
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
                    Welcome to Zion Tech Group. By accessing and using our services, you agree to be bound by these Terms of Service.
                  </p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Acceptance of Terms
                    </h2>
                    <p className="text-gray-600">
                      By accessing and using Zion Tech Group's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Use License
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Modify or copy the materials</li>
                      <li>Use the materials for any commercial purpose or for any public display</li>
                      <li>Attempt to reverse engineer any software contained on the website</li>
                      <li>Remove any copyright or other proprietary notations from the materials</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Service Description
                    </h2>
                    <p className="text-gray-600">
                      Zion Tech Group provides AI services, IT solutions, and micro SaaS applications. We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      User Accounts
                    </h2>
                    <p className="text-gray-600 mb-4">
                      When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Maintaining the confidentiality of your account and password</li>
                      <li>All activities that occur under your account</li>
                      <li>Notifying us immediately of any unauthorized use of your account</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Prohibited Uses
                    </h2>
                    <p className="text-gray-600 mb-4">
                      You may not use our services:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                      <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                      <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                      <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                      <li>To submit false or misleading information</li>
                      <li>To upload or transmit viruses or any other type of malicious code</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Payment Terms
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Payment for our services is due as specified in your service agreement. We reserve the right to change our prices at any time, but we will provide notice of any price changes before they take effect.
                    </p>
                    <p className="text-gray-600">
                      All fees are non-refundable unless otherwise specified in writing. If you fail to pay fees when due, we may suspend or terminate your access to our services.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Intellectual Property Rights
                    </h2>
                    <p className="text-gray-600">
                      The service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors. The service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Privacy Policy
                    </h2>
                    <p className="text-gray-600">
                      Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Limitation of Liability
                    </h2>
                    <p className="text-gray-600">
                      In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Disclaimer
                    </h2>
                    <p className="text-gray-600">
                      The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, Zion Tech Group excludes all representations, warranties, conditions and terms relating to our website and the use of this website.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Governing Law
                    </h2>
                    <p className="text-gray-600">
                      These Terms shall be interpreted and governed by the laws of the State of Delaware, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Changes to Terms
                    </h2>
                    <p className="text-gray-600">
                      We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      Contact Information
                    </h2>
                    <p className="text-gray-600 mb-4">
                      If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-600">
                        <strong>Email:</strong> legal@ziontechgroup.com<br />
                        <strong>Phone:</strong> +1 302 464 0950<br />
                        <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                    <p className="text-yellow-800">
                      <strong>Note:</strong> These Terms of Service are effective as of the date listed above and will 
                      remain in effect until modified or terminated in accordance with the provisions herein.
                    </p>
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