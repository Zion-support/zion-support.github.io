import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Shield, Lock, Eye, Database, UserCheck, AlertTriangle } from 'lucide-react';

const Privacy: NextPage = () => {
  return (
    <MainLayout
      title="Privacy Policy - Zion Tech Group"
      description="Learn how Zion Tech Group protects your privacy and handles your personal information in accordance with applicable laws and regulations."
      keywords="privacy policy, data protection, GDPR, personal information, privacy rights"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-200">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-300 mt-4">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="bg-blue-50 p-8 rounded-lg mb-8">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Commitment to Privacy</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard 
                your information when you visit our website or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Database className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Personal Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Name and contact information</li>
                    <li>• Email address and phone number</li>
                    <li>• Company information</li>
                    <li>• Payment and billing information</li>
                    <li>• Communication preferences</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Technical Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• IP address and device information</li>
                    <li>• Browser type and version</li>
                    <li>• Website usage data</li>
                    <li>• Cookies and tracking technologies</li>
                    <li>• Log files and analytics data</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Service Delivery</h3>
                  <p className="text-gray-700">To provide, maintain, and improve our services and customer support.</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Communication</h3>
                  <p className="text-gray-700">To send you updates, newsletters, and respond to your inquiries.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Business Operations</h3>
                  <p className="text-gray-700">To process payments, manage accounts, and conduct business analytics.</p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Legal Compliance</h3>
                  <p className="text-gray-700">To comply with legal obligations and protect our rights and interests.</p>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <UserCheck className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Information Sharing</h2>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <div className="flex items-center mb-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 mr-2" />
                  <h3 className="text-lg font-semibold text-gray-900">We Do Not Sell Your Data</h3>
                </div>
                <p className="text-gray-700">
                  We do not sell, trade, or rent your personal information to third parties. We may share your 
                  information only in the following limited circumstances:
                </p>
              </div>
              
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>With your explicit consent</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>With trusted service providers who assist in our operations</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>When required by law or to protect our rights</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>In connection with a business transfer or merger</span>
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Lock className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Data Security</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">SSL/TLS encryption</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Secure data centers</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Regular security audits</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Access controls</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Employee training</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Incident response plans</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Access & Portability</h3>
                  <p className="text-gray-700 mb-4">You have the right to access and receive a copy of your personal data.</p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Correction</h3>
                  <p className="text-gray-700 mb-4">You can request correction of inaccurate or incomplete information.</p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Deletion</h3>
                  <p className="text-gray-700 mb-4">You may request deletion of your personal information under certain circumstances.</p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Opt-out</h3>
                  <p className="text-gray-700 mb-4">You can opt-out of marketing communications at any time.</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> privacy@ziontechgroup.com</p>
                <p><strong>Phone:</strong> +1 302 464 0950</p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Privacy;