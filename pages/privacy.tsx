import React from 'react';
import Head from 'next/head';
import { Shield, Eye, Lock, Database } from 'lucide-react';
import PageTransition from '../src/components/PageTransition';

export default function Privacy() {
  return (
    <PageTransition>
      <Head>
        <title>Privacy Policy — Zion Tech Group</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/privacy" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-base font-semibold leading-7 text-blue-600">Privacy Policy</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Your Privacy Matters
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy explains how we collect, use, and safeguard your data.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Last updated: January 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <Eye className="h-5 w-5 mr-2 text-blue-600" />
                Information We Collect
              </h2>
              <p className="text-gray-700">
                We collect information you provide directly to us, such as when you create an account, 
                contact us, or use our services. This may include your name, email address, phone number, 
                company information, and any other information you choose to provide.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <Database className="h-5 w-5 mr-2 text-green-600" />
                How We Use Your Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>• Provide, maintain, and improve our services</li>
                <li>• Process transactions and send related information</li>
                <li>• Send technical notices, updates, and support messages</li>
                <li>• Respond to your comments and questions</li>
                <li>• Communicate with you about products, services, and events</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <Lock className="h-5 w-5 mr-2 text-purple-600" />
                Information Security
              </h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction. 
                However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar tracking technologies to collect and use personal information about you. 
                  You can control cookies through your browser settings, but disabling cookies may affect the 
                  functionality of our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may use third-party services to help us provide and improve our services. These services 
                  may have their own privacy policies, and we encourage you to review them. We are not 
                  responsible for the privacy practices of these third parties.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
                <p className="text-gray-700 leading-relaxed">
                  We retain your personal information for as long as necessary to provide our services and 
                  fulfill the purposes outlined in this privacy policy, unless a longer retention period is 
                  required or permitted by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Access to your personal information</li>
                  <li>• Correction of inaccurate information</li>
                  <li>• Deletion of your personal information</li>
                  <li>• Restriction of processing</li>
                  <li>• Data portability</li>
                  <li>• Objection to processing</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are not intended for children under 13 years of age. We do not knowingly 
                  collect personal information from children under 13. If you are a parent or guardian and 
                  believe your child has provided us with personal information, please contact us.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes by 
                  posting the new privacy policy on this page and updating the "Last updated" date. We 
                  encourage you to review this privacy policy periodically.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this privacy policy or our privacy practices, please 
                  contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@ziontechgroup.com<br />
                    <strong>Phone:</strong> +1 (302) 464-0950<br />
                    <strong>Address:</strong> San Francisco, CA, United States
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}