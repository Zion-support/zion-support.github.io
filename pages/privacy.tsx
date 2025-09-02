import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Shield, Eye, Lock, Database, UserCheck, Globe } from 'lucide-react';

const PrivacyPage: NextPage = () => {
  const privacyPrinciples = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Data Protection',
      description: 'We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Transparency',
      description: 'We are transparent about what data we collect, how we use it, and with whom we share it. You have the right to know and control your data.'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Minimal Collection',
      description: 'We only collect the data that is necessary for providing our services and improving your experience. We do not collect unnecessary personal information.'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Secure Storage',
      description: 'Your data is stored securely using encryption and other security measures. We regularly review and update our security practices.'
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: 'Your Rights',
      description: 'You have the right to access, update, delete, or port your data. You can also opt out of certain data processing activities.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Compliance',
      description: 'We comply with applicable data protection laws including GDPR, CCPA, and other regional privacy regulations.'
    }
  ];

  return (
    <MainLayout
      title="Privacy Policy - Zion Tech Group"
      description="Learn how Zion Tech Group protects your privacy and handles your personal data. Our comprehensive privacy policy covers data collection, usage, and your rights."
      keywords="privacy policy, data protection, GDPR, CCPA, personal data, privacy rights"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <p className="text-sm text-gray-300">
            Last updated: January 27, 2025
          </p>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Privacy Principles</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to protecting your privacy and being transparent about our data practices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 mb-4">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Information We Collect</h2>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h3>
            <p className="text-gray-600 mb-6">
              We may collect personal information that you provide directly to us, such as:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Company information and job title</li>
              <li>Payment and billing information</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Automatically Collected Information</h3>
            <p className="text-gray-600 mb-6">
              We may automatically collect certain information when you visit our website or use our services:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>IP address and location information</li>
              <li>Browser type and version</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website information</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">How We Use Your Information</h2>
            <p className="text-gray-600 mb-6">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Providing and improving our services</li>
              <li>Processing transactions and payments</li>
              <li>Communicating with you about our services</li>
              <li>Responding to your inquiries and support requests</li>
              <li>Analyzing website usage and performance</li>
              <li>Marketing and promotional activities (with your consent)</li>
              <li>Complying with legal obligations</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Information Sharing</h2>
            <p className="text-gray-600 mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>With your explicit consent</li>
              <li>With service providers who assist us in operating our business</li>
              <li>To comply with legal obligations or court orders</li>
              <li>To protect our rights, property, or safety</li>
              <li>In connection with a business transfer or acquisition</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Data Security</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Employee training on data protection</li>
              <li>Incident response procedures</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Rights</h2>
            <p className="text-gray-600 mb-6">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
              <li><strong>Objection:</strong> Object to certain types of processing</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Cookies and Tracking</h2>
            <p className="text-gray-600 mb-6">
              We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Data Retention</h2>
            <p className="text-gray-600 mb-6">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">International Transfers</h2>
            <p className="text-gray-600 mb-6">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Children's Privacy</h2>
            <p className="text-gray-600 mb-6">
              Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Changes to This Policy</h2>
            <p className="text-gray-600 mb-6">
              We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2"><strong>Email:</strong> privacy@ziontechgroup.com</p>
              <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1 302 464 0950</p>
              <p className="text-gray-600"><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PrivacyPage;