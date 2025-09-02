import React from 'react';
import Head from 'next/head';
import { Shield, Eye, Lock, Database, Users, Mail } from 'lucide-react';
import SimpleNavigation from '../src/components/SimpleNavigation';
import { SimpleFooter } from '../src/components/SimpleFooter';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's privacy policy explaining how we collect, use, and protect your personal information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <SimpleNavigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-blue-600 mr-3" />
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
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Overview */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mb-12">
              <div className="text-center">
                <div className="p-3 bg-blue-100 rounded-lg w-fit mx-auto mb-4">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparency</h3>
                <p className="text-gray-600 text-sm">We clearly explain what data we collect and why</p>
              </div>
              <div className="text-center">
                <div className="p-3 bg-green-100 rounded-lg w-fit mx-auto mb-4">
                  <Lock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Security</h3>
                <p className="text-gray-600 text-sm">Your data is protected with industry-standard security</p>
              </div>
              <div className="text-center">
                <div className="p-3 bg-purple-100 rounded-lg w-fit mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Control</h3>
                <p className="text-gray-600 text-sm">You have control over your personal information</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
              <p className="text-gray-600 mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Company information and job title</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automatically Collected Information</h3>
              <p className="text-gray-600 mb-4">
                When you visit our website or use our services, we may automatically collect:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
              <p className="text-gray-600 mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Providing and improving our services</li>
                <li>Processing transactions and payments</li>
                <li>Communicating with you about our services</li>
                <li>Responding to your inquiries and support requests</li>
                <li>Personalizing your experience</li>
                <li>Analyzing usage patterns and trends</li>
                <li>Complying with legal obligations</li>
                <li>Protecting against fraud and security threats</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information Sharing and Disclosure</h2>
              <p className="text-gray-600 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>With your explicit consent</li>
                <li>With service providers who assist us in operating our business</li>
                <li>To comply with legal requirements or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
              <p className="text-gray-600 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights and Choices</h2>
              <p className="text-gray-600 mb-4">
                You have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
                <li>Withdrawal of consent</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 mb-4">
                We use cookies and similar technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Links</h2>
              <p className="text-gray-600 mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
              <p className="text-gray-600 mb-4">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
              <p className="text-gray-600 mb-4">
                We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about this privacy policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-900">Email:</span>
                  <a href="mailto:privacy@ziontechgroup.com" className="text-blue-600 hover:text-blue-500">
                    privacy@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <Database className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-900">Address:</span>
                  <span className="text-gray-600">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SimpleFooter />
    </>
  );
}