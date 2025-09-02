import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react';

const Privacy: NextPage = () => {
  return (
    <MainLayout
      title="Privacy Policy - Zion Tech Group"
      description="Learn how Zion Tech Group protects your privacy and handles your personal data. Our comprehensive privacy policy outlines our data collection, usage, and protection practices."
      keywords="privacy policy, data protection, GDPR, personal data, privacy rights, Zion Tech Group"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6">
              <Shield className="w-16 h-16 mx-auto text-blue-400 mb-4" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Your privacy is our priority. Learn how we collect, use, and protect your personal information.
            </p>
            <div className="text-sm text-gray-300">
              Last updated: January 27, 2025
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="w-8 h-8 mr-3 text-blue-600" />
                  Introduction
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                  our website ziontechgroup.com or use our services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By using our website and services, you consent to the data practices described in this policy.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Database className="w-8 h-8 mr-3 text-blue-600" />
                  Information We Collect
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Name and contact information (email, phone number, address)</li>
                      <li>Company information and job title</li>
                      <li>Payment and billing information</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Information</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>IP address and device information</li>
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Website usage data and analytics</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Eye className="w-8 h-8 mr-3 text-blue-600" />
                  How We Use Your Information
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  <li>Provide and improve our services</li>
                  <li>Process transactions and payments</li>
                  <li>Communicate with you about our services</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Analyze website usage and performance</li>
                  <li>Ensure security and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              {/* Data Protection */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Lock className="w-8 h-8 mr-3 text-blue-600" />
                  Data Protection and Security
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response procedures</li>
                </ul>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <UserCheck className="w-8 h-8 mr-3 text-blue-600" />
                  Your Privacy Rights
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Objection to processing</li>
                  <li>Withdrawal of consent</li>
                </ul>
              </div>

              {/* Cookies */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use cookies and similar technologies to enhance your experience on our website. 
                  You can control cookie settings through your browser preferences.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For more detailed information about our cookie practices, please see our 
                  <a href="/cookies" className="text-blue-600 hover:text-blue-700 underline"> Cookie Policy</a>.
                </p>
              </div>

              {/* Third Parties */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may share your information with trusted third-party service providers who assist us in 
                  operating our website and providing our services. These parties are bound by confidentiality 
                  agreements and are prohibited from using your information for any other purpose.
                </p>
              </div>

              {/* Contact */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@ziontechgroup.com</p>
                  <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 302 464 0950</p>
                  <p className="text-gray-700">
                    <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
                  </p>
                </div>
              </div>

              {/* Updates */}
              <div className="border-t border-gray-200 pt-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by 
                  posting the new Privacy Policy on this page and updating the "Last updated" date. 
                  We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Privacy;