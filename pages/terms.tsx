import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms & Conditions</title>
        <meta name="description" content="Read Zion Tech Group's Terms of Service. Our legal terms and conditions outline the rules and regulations for using our website and services." />
        <meta name="keywords" content="terms of service, legal terms, conditions, user agreement, website terms" />
        <link rel="canonical" href="https://ziontechgroup.com/terms" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Please read these terms and conditions carefully before using our website and services.
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
                <p className="text-gray-600 mb-4">
                  These Terms of Service ("Terms") govern your use of the Zion Tech Group website located at https://ziontechgroup.com (the "Service") operated by Zion Tech Group ("us," "we," or "our").
                </p>
                <p className="text-gray-600">
                  By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
                </p>
              </section>

              {/* Service Description */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Description</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Our Services</h3>
                  </div>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Technology consulting and advisory services</li>
                    <li>• AI and machine learning solutions</li>
                    <li>• Cloud migration and infrastructure services</li>
                    <li>• Cybersecurity assessments and implementations</li>
                    <li>• SaaS development and customization</li>
                    <li>• Data analytics and business intelligence</li>
                    <li>• DevOps automation and optimization</li>
                  </ul>
                </div>
              </section>

              {/* User Responsibilities */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">User Responsibilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">What You Can Do</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Use our services for lawful purposes only</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Provide accurate and complete information</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Respect intellectual property rights</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Maintain confidentiality of sensitive information</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">What You Cannot Do</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Violate any applicable laws or regulations</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Attempt to gain unauthorized access to systems</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Interfere with service operations</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Share false or misleading information</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Intellectual Property */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property Rights</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Scale className="w-6 h-6 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Ownership and Usage</h3>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      The Service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors. The Service is protected by copyright, trademark, and other laws.
                    </p>
                    <p>
                      Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                    </p>
                    <p>
                      You retain ownership of any content you provide to us, but grant us a license to use, modify, and distribute such content as necessary to provide our services.
                    </p>
                  </div>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-yellow-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Important Notice</h3>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
                    </p>
                    <p>
                      Our total liability to you for all damages shall not exceed the amount you paid us for the services in the 12 months preceding the claim.
                    </p>
                  </div>
                </div>
              </section>

              {/* Privacy and Data Protection */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy and Data Protection</h2>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Data Protection Commitment</h3>
                  </div>
                  <div className="space-y-4 text-gray-600">
                    <p>
                      Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our Service.
                    </p>
                    <p>
                      By using our Service, you agree to the collection and use of information in accordance with our Privacy Policy.
                    </p>
                    <p>
                      We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                  </div>
                </div>
              </section>

              {/* Service Availability */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Availability</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We strive to provide continuous service availability, but we do not guarantee that the Service will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Service.
                  </p>
                  <p>
                    We reserve the right to change, suspend, or discontinue the Service (or any part thereof) at any time with or without notice.
                  </p>
                  <p>
                    We shall not be liable to you or to any third party for any modification, price change, suspension, or discontinuance of the Service.
                  </p>
                </div>
              </section>

              {/* Termination */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                  </p>
                  <p>
                    Upon termination, your right to use the Service will cease immediately. If you wish to terminate your account, you may simply discontinue using the Service.
                  </p>
                  <p>
                    All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                  </p>
                </div>
              </section>

              {/* Governing Law */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
                  </p>
                  <p>
                    Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                  </p>
                  <p>
                    If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-700 font-medium">Email:</span>
                      <span className="text-gray-700">kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-700 font-medium">Phone:</span>
                      <span className="text-gray-700">+1 302 464 0950</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-gray-700 font-medium">Address:</span>
                      <span className="text-gray-700">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfServicePage;