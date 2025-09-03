import React from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from 'lucide-react';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's Privacy Policy - Learn how we collect, use, and protect your personal information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Navigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                  <Shield className="w-12 h-12 text-white" />
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-blue-600" />
                  Information We Collect
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Company information and job title</li>
                    <li>Communication preferences</li>
                    <li>Payment and billing information</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold mb-4 mt-6">Technical Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Website usage data and analytics</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Database className="w-6 h-6 mr-3 text-blue-600" />
                  How We Use Your Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-blue-900">Service Delivery</h3>
                    <ul className="text-blue-800 space-y-2">
                      <li>• Provide and maintain our services</li>
                      <li>• Process transactions and payments</li>
                      <li>• Deliver customer support</li>
                      <li>• Send service-related communications</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-green-900">Business Operations</h3>
                    <ul className="text-green-800 space-y-2">
                      <li>• Improve our services and products</li>
                      <li>• Conduct analytics and research</li>
                      <li>• Marketing and promotional activities</li>
                      <li>• Legal compliance and security</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-blue-600" />
                  Data Protection & Security
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    We implement industry-standard security measures to protect your personal information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security audits and assessments</li>
                    <li>Access controls and authentication systems</li>
                    <li>Employee training on data protection</li>
                    <li>Incident response and breach notification procedures</li>
                  </ul>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <UserCheck className="w-6 h-6 mr-3 text-blue-600" />
                  Your Rights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <h4 className="font-semibold">Access & Portability</h4>
                        <p className="text-gray-600 text-sm">Request access to your data and receive it in a portable format</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <h4 className="font-semibold">Correction</h4>
                        <p className="text-gray-600 text-sm">Update or correct inaccurate personal information</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <h4 className="font-semibold">Deletion</h4>
                        <p className="text-gray-600 text-sm">Request deletion of your personal information</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <div>
                        <h4 className="font-semibold">Opt-out</h4>
                        <p className="text-gray-600 text-sm">Unsubscribe from marketing communications</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3 text-blue-600" />
                  Cookies & Tracking
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    We use cookies and similar technologies to enhance your experience:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-blue-600 font-bold">E</span>
                      </div>
                      <h4 className="font-semibold mb-2">Essential</h4>
                      <p className="text-sm text-gray-600">Required for website functionality</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-green-600 font-bold">A</span>
                      </div>
                      <h4 className="font-semibold mb-2">Analytics</h4>
                      <p className="text-sm text-gray-600">Help us understand website usage</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-purple-600 font-bold">M</span>
                      </div>
                      <h4 className="font-semibold mb-2">Marketing</h4>
                      <p className="text-sm text-gray-600">Personalize content and ads</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                    <p><strong>Phone:</strong> +1 (302) 464-0950</p>
                    <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}