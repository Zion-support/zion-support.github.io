import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Eye, Lock, Database, Mail, Phone, User } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal data. Our comprehensive privacy policy outlines our data protection practices." />
        <meta name="keywords" content="privacy policy, data protection, GDPR compliance, privacy rights, data security" />
        <link rel="canonical" href="https://ziontechgroup.com/privacy" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Your privacy is important to us. Learn how we collect, use, and protect your personal information.
              </p>
              <p className="text-blue-200">
                Last updated: January 15, 2025
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              {/* Introduction */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-600 mb-4">
                  Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://ziontechgroup.com or use our services.
                </p>
                <p className="text-gray-600">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <User className="w-6 h-6 text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                    </div>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Name and contact information</li>
                      <li>• Email address</li>
                      <li>• Phone number</li>
                      <li>• Company information</li>
                      <li>• Job title and role</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Database className="w-6 h-6 text-green-600" />
                      <h3 className="text-lg font-semibold text-gray-900">Usage Information</h3>
                    </div>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Website usage data</li>
                      <li>• IP address and location</li>
                      <li>• Browser type and version</li>
                      <li>• Pages visited and time spent</li>
                      <li>• Referring website</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Information */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Service Delivery</h3>
                    <p className="text-gray-600 text-sm">Provide and maintain our services, process transactions, and communicate with you.</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <Eye className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Analytics</h3>
                    <p className="text-gray-600 text-sm">Analyze website usage to improve our services and user experience.</p>
                  </div>
                  
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900 mb-2">Communication</h3>
                    <p className="text-gray-600 text-sm">Send updates, newsletters, and respond to your inquiries.</p>
                  </div>
                </div>
              </section>

              {/* Data Protection */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Protection & Security</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Security Measures</h3>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• SSL encryption for data transmission</li>
                    <li>• Secure data storage and processing</li>
                    <li>• Regular security audits and updates</li>
                    <li>• Access controls and authentication</li>
                    <li>• Employee training on data protection</li>
                  </ul>
                </div>
              </section>

              {/* Your Rights */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 text-sm font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Access</h3>
                        <p className="text-gray-600 text-sm">Request access to your personal data</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 text-sm font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Correction</h3>
                        <p className="text-gray-600 text-sm">Request correction of inaccurate data</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 text-sm font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Deletion</h3>
                        <p className="text-gray-600 text-sm">Request deletion of your data</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 text-sm font-bold">4</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Portability</h3>
                        <p className="text-gray-600 text-sm">Request data portability</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 text-sm font-bold">5</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Objection</h3>
                        <p className="text-gray-600 text-sm">Object to data processing</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-blue-600 text-sm font-bold">6</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Restriction</h3>
                        <p className="text-gray-600 text-sm">Request processing restriction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">+1 302 464 0950</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 text-blue-600 mt-1">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Updates */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;