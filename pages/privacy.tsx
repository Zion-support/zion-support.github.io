import React from 'react';
import Link from 'next/link';
import { Shield, Lock, Eye, Database, Users, Mail, Phone, Globe } from 'lucide-react';
import SEOHead from '../src/components/seo/SEOHead';

const Privacy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Zion Tech Group",
    "url": "https://ziontechgroup.com/privacy",
    "description": "Privacy policy for Zion Tech Group. Learn how we collect, use, and protect your personal information.",
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  return (
    <>
      <SEOHead
        title="Privacy Policy - Zion Tech Group"
        description="Privacy policy for Zion Tech Group. Learn how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, GDPR, privacy rights, data security"
        structuredData={structuredData}
      />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Shield className="w-12 h-12 text-blue-600" />
                </div>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Privacy <span className="text-blue-600">Policy</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Lock className="w-8 h-8 text-blue-600 mr-3" />
                  Information We Collect
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                  <p className="text-gray-700 mb-4">
                    We collect information you provide directly to us, such as when you:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Create an account or contact us</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Request a quote or consultation</li>
                    <li>Use our services</li>
                    <li>Participate in surveys or promotions</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Automatically Collected Information</h3>
                  <p className="text-gray-700 mb-4">
                    We automatically collect certain information when you visit our website:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Pages visited and time spent on site</li>
                    <li>Referring website information</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Eye className="w-8 h-8 text-blue-600 mr-3" />
                  How We Use Your Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Delivery</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Provide and maintain our services</li>
                      <li>• Process transactions</li>
                      <li>• Send service-related communications</li>
                      <li>• Provide customer support</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Operations</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Improve our services</li>
                      <li>• Analyze usage patterns</li>
                      <li>• Conduct research and development</li>
                      <li>• Prevent fraud and abuse</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Database className="w-8 h-8 text-blue-600 mr-3" />
                  Information Sharing
                </h2>
                <p className="text-gray-700 mb-6">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                </p>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <ul className="text-gray-700 space-y-3">
                    <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in operating our website and services</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    <li><strong>Consent:</strong> When you have given us explicit consent to share your information</li>
                  </ul>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-8 h-8 text-blue-600 mr-3" />
                  Data Security
                </h2>
                <p className="text-gray-700 mb-6">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lock className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Encryption</h3>
                    <p className="text-gray-600 text-sm">All data is encrypted in transit and at rest</p>
                  </div>
                  
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Access Controls</h3>
                    <p className="text-gray-600 text-sm">Strict access controls and authentication</p>
                  </div>
                  
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Database className="w-8 h-8 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Regular Audits</h3>
                    <p className="text-gray-600 text-sm">Regular security audits and monitoring</p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <Users className="w-8 h-8 text-blue-600 mr-3" />
                  Your Rights
                </h2>
                <p className="text-gray-700 mb-6">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="text-gray-700 space-y-3">
                    <li><strong>Access:</strong> Request access to your personal information</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                    <li><strong>Objection:</strong> Object to certain processing of your information</li>
                    <li><strong>Withdrawal:</strong> Withdraw consent where processing is based on consent</li>
                  </ul>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
                <p className="text-gray-700 mb-6">
                  We use cookies and similar technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Types of Cookies We Use</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                    <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                  </ul>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
                <p className="text-gray-700">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg text-white">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Mail className="w-6 h-6 mr-3" />
                  Contact Us
                </h2>
                <p className="mb-6">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <a href="mailto:privacy@ziontechgroup.com" className="text-blue-200 hover:text-white">
                      privacy@ziontechgroup.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <a href="tel:+13024640950" className="text-blue-200 hover:text-white">
                      +1 302 464 0950
                    </a>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Website</h3>
                  <a href="https://ziontechgroup.com" className="text-blue-200 hover:text-white">
                    ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Privacy;