import React from 'react';
import Layout from '../components/Layout';
import { Shield, Lock, Eye, Database, User, CheckCircle } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <Layout
      title="Privacy Policy - Zion Tech Group"
      description="Zion Tech Group's privacy policy outlining how we collect, use, and protect your personal information."
      keywords="privacy policy, data protection, GDPR, personal information, Zion Tech Group"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-blue-600" />
                  Information We Collect
                </h2>
                
                <p className="mb-6">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support.
                </p>

                <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Name and contact information (email, phone number, address)</li>
                  <li>Business information (company name, job title, industry)</li>
                  <li>Account credentials and preferences</li>
                  <li>Payment and billing information</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">Usage Information</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Service usage data and analytics</li>
                  <li>Device information and IP addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Communication records and support interactions</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 flex items-center mt-12">
                  <Eye className="w-6 h-6 mr-3 text-blue-600" />
                  How We Use Your Information
                </h2>

                <p className="mb-6">
                  We use the information we collect to provide, maintain, and improve our services:
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Deliver and maintain our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Improve our services and develop new features</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 flex items-center mt-12">
                  <Database className="w-6 h-6 mr-3 text-blue-600" />
                  Information Sharing
                </h2>

                <p className="mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy.
                </p>

                <h3 className="text-xl font-semibold mb-4">We may share information with:</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Service providers who assist us in operating our business</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners with your explicit consent</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 flex items-center mt-12">
                  <Lock className="w-6 h-6 mr-3 text-blue-600" />
                  Data Security
                </h2>

                <p className="mb-6">
                  We implement appropriate technical and organizational measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 flex items-center mt-12">
                  <User className="w-6 h-6 mr-3 text-blue-600" />
                  Your Rights
                </h2>

                <p className="mb-6">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Portability of your data</li>
                  <li>Objection to processing</li>
                  <li>Withdrawal of consent</li>
                </ul>

                <h2 className="text-2xl font-bold mb-6 flex items-center mt-12">
                  <CheckCircle className="w-6 h-6 mr-3 text-blue-600" />
                  Contact Us
                </h2>

                <p className="mb-6">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us:
                </p>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-2"><strong>Email:</strong> kleber@ziontechgroup.com</p>
                  <p className="mb-2"><strong>Phone:</strong> +1 302 464 0950</p>
                  <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Last Updated:</strong> January 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}