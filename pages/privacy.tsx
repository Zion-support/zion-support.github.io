import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Shield, Lock, Eye, Database, Mail, Phone, Calendar } from 'lucide-react';

export default function Privacy() {
  const lastUpdated = 'January 1, 2025';

  return (
    <>
      <Head>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/privacy" />
      </Head>
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
                  <Lock className="w-6 h-6 mr-3 text-blue-600" />
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
                    <p className="text-gray-600 mb-4">
                      We may collect personal information that you provide directly to us, such as:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                      <li>Name and contact information (email address, phone number)</li>
                      <li>Company information and job title</li>
                      <li>Communication preferences</li>
                      <li>Information you provide when contacting us or requesting services</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Usage Information</h3>
                    <p className="text-gray-600 mb-4">
                      We automatically collect certain information when you visit our website:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                      <li>IP address and browser information</li>
                      <li>Pages visited and time spent on our site</li>
                      <li>Referring website information</li>
                      <li>Device and operating system information</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-blue-600" />
                  How We Use Your Information
                </h2>
                <p className="text-gray-600 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Provide and improve our services</li>
                  <li>Respond to your inquiries and requests</li>
                  <li>Send you important updates about our services</li>
                  <li>Analyze website usage to improve user experience</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect against fraud and security threats</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Database className="w-6 h-6 mr-3 text-blue-600" />
                  Information Sharing
                </h2>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements or court orders</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>With trusted service providers who assist in our operations</li>
                  <li>In connection with a business transfer or acquisition</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
                <p className="text-gray-600 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection practices</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
                <p className="text-gray-600 mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Objection to processing</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
                <p className="text-gray-600 mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
                <p className="text-gray-600 mb-4">
                  We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-3">
                    <Mail className="w-5 h-5 mr-3 text-blue-600" />
                    <span className="text-gray-700">privacy@ziontechgroup.com</span>
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