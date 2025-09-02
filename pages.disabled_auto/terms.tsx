import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { FileText, Scale, AlertTriangle, Shield, Mail, Phone } from 'lucide-react';

const Terms: NextPage = () => {
  const lastUpdated = 'January 1, 2024';

  return (
    <MainLayout
      title="Terms of Service - Zion Tech Group"
      description="Read the terms and conditions governing the use of Zion Tech Group's services and website."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Service</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Please read these terms carefully before using our services.
          </p>
          <p className="text-gray-300">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Scale className="w-8 h-8 text-blue-600 mr-3" />
                Acceptance of Terms
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  By accessing and using Zion Tech Group's website and services, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
                <p className="text-gray-700">
                  These Terms of Service ("Terms") govern your use of our website located at ziontechgroup.com and our services 
                  (collectively, the "Service") operated by Zion Tech Group ("us", "we", or "our").
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Use License</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, 
                  non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Terms</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Service Availability</h3>
                <p className="text-gray-700 mb-4">
                  We strive to maintain high service availability, but we do not guarantee uninterrupted access to our services. 
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">User Responsibilities</h3>
                <p className="text-gray-700 mb-4">When using our services, you agree to:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use our services in compliance with applicable laws</li>
                  <li>Not engage in any illegal or unauthorized activities</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="w-8 h-8 text-blue-600 mr-3" />
                Prohibited Uses
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">You may not use our services:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                  <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                  <li>For any obscene or immoral purpose</li>
                  <li>To interfere with or circumvent the security features of our services</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Payment Terms</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Billing and Payment</h3>
                <p className="text-gray-700 mb-4">
                  For paid services, you agree to pay all fees and charges associated with your account. 
                  Payment terms will be specified in your service agreement or invoice.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Refunds and Cancellations</h3>
                <p className="text-gray-700 mb-4">
                  Refund and cancellation policies vary by service. Please refer to your specific service agreement 
                  or contact us for details about our refund policy.
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Late Payments</h3>
                <p className="text-gray-700">
                  Late payments may result in service suspension or termination. We reserve the right to charge 
                  late fees and interest on overdue amounts as permitted by law.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                Limitation of Liability
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                  be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
                  loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                </p>
                <p className="text-gray-700">
                  Our total liability to you for any damages arising from or related to these terms or our services 
                  shall not exceed the amount you paid us for the services in the twelve (12) months preceding the claim.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  The Service and its original content, features, and functionality are and will remain the exclusive property of 
                  Zion Tech Group and its licensors. The Service is protected by copyright, trademark, and other laws.
                </p>
                <p className="text-gray-700">
                  Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, 
                  under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                </p>
                <p className="text-gray-700">
                  If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, 
                  without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms 
                  will not be considered a waiver of those rights.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                  If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. 
                  What constitutes a material change will be determined at our sole discretion.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Mail className="w-8 h-8 text-blue-600 mr-3" />
                Contact Information
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-2" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-2" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="mt-4">
                    <strong>Zion Tech Group</strong><br />
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709<br />
                    United States
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Terms;