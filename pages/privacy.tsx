import React from 'react';
import Head from 'next/head';
import { ModernHeader } from '../src/components/header/ModernHeader';
import { SimpleFooter } from '../src/components/layout/SimpleFooter';
import { Shield, Lock, Eye, Database, Users, Mail, Phone } from 'lucide-react';

export default function Privacy() {
  const privacyPrinciples = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We implement industry-standard security measures to protect your personal information.'
    },
    {
      icon: Lock,
      title: 'Secure Storage',
      description: 'Your data is encrypted and stored securely in compliance with international standards.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We are transparent about how we collect, use, and share your information.'
    },
    {
      icon: Database,
      title: 'Data Control',
      description: 'You have control over your data and can request access, correction, or deletion.'
    }
  ];

  return (
    <>
      <Head>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn how Zion Tech Group collects, uses, and protects your personal information. Our commitment to privacy and data protection." />
        <meta name="keywords" content="privacy policy, data protection, privacy, GDPR, data security" />
      </Head>

      <ModernHeader />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Your privacy is important to us. Learn how we protect and handle your personal information.
              </p>
              <p className="text-blue-200">Last updated: January 1, 2024</p>
            </div>
          </div>
        </section>

        {/* Privacy Principles */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Privacy Principles
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are committed to protecting your privacy and being transparent about our practices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {privacyPrinciples.map((principle, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <div className="p-3 bg-blue-100 rounded-lg mx-auto mb-4 w-fit">
                    <principle.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{principle.title}</h3>
                  <p className="text-gray-600">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Information We Collect</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Personal Information</h3>
              <p className="text-gray-600 mb-6">
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support. This may include:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company information and job title</li>
                <li>Payment and billing information</li>
                <li>Communications with us</li>
                <li>Account preferences and settings</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Usage Information</h3>
              <p className="text-gray-600 mb-6">
                We automatically collect certain information about your use of our services, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                <li>Device information and IP address</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-8">How We Use Your Information</h2>
              <p className="text-gray-600 mb-6">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Develop new products and services</li>
                <li>Monitor and analyze trends and usage</li>
                <li>Detect, investigate, and prevent security incidents</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-8">Information Sharing</h2>
              <p className="text-gray-600 mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With service providers who assist in our operations</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-8">Data Security</h2>
              <p className="text-gray-600 mb-6">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. These 
                measures include:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Rights</h2>
              <p className="text-gray-600 mb-6">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
                <li>Withdrawal of consent</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-8">Cookies and Tracking</h2>
              <p className="text-gray-600 mb-6">
                We use cookies and similar technologies to enhance your experience on our website. 
                You can control cookie settings through your browser preferences.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-8">Changes to This Policy</h2>
              <p className="text-gray-600 mb-6">
                We may update this privacy policy from time to time. We will notify you of any 
                material changes by posting the new policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about this privacy policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-2">
                  <Mail className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-900">Email: privacy@ziontechgroup.com</span>
                </div>
                <div className="flex items-center mb-2">
                  <Phone className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-900">Phone: +1 302 464 0950</span>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <div>
                    <span className="text-gray-900">Address:</span>
                    <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
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