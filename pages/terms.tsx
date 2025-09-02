import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { 
  FileText, 
  Scale, 
  Shield, 
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone
} from 'lucide-react';

const Terms: React.FC = () => {
  const lastUpdated = "December 15, 2024";

  return (
    <>
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read Zion Tech Group's Terms of Service to understand the terms and conditions for using our services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6">
                <FileText className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                These terms govern your use of our website and services. Please read them carefully.
              </p>
              <p className="text-sm text-gray-500">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* Terms Overview */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Terms Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Scale className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Legal Agreement</h3>
                  <p className="text-gray-600 text-sm">These terms form a legal agreement between you and Zion Tech Group.</p>
                </div>
                <div className="text-center">
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Protection</h3>
                  <p className="text-gray-600 text-sm">We protect both your rights and our intellectual property.</p>
                </div>
                <div className="text-center">
                  <FileText className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Transparency</h3>
                  <p className="text-gray-600 text-sm">Clear terms help ensure a positive experience for everyone.</p>
                </div>
              </div>
            </Card>

            {/* Terms Content */}
            <div className="space-y-12">
              {/* Acceptance of Terms */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
                <Card className="p-6">
                  <p className="text-gray-600 mb-4">
                    By accessing and using Zion Tech Group's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-blue-800">Important Notice</h4>
                        <p className="text-blue-700 text-sm">
                          These terms may be updated from time to time. Continued use of our services after changes constitutes acceptance of the new terms.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Use License */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Use License</h2>
                <Card className="p-6">
                  <p className="text-gray-600 mb-4">
                    Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Modify or copy the materials</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Use the materials for any commercial purpose or for any public display</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Attempt to reverse engineer any software contained on the website</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Remove any copyright or other proprietary notations from the materials</span>
                    </li>
                  </ul>
                </Card>
              </div>

              {/* Service Description */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Service Description</h2>
                <Card className="p-6">
                  <p className="text-gray-600 mb-4">
                    Zion Tech Group provides technology consulting, development, and related services including but not limited to:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>AI and machine learning solutions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Cloud computing and infrastructure services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Web and mobile application development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Cybersecurity and data protection services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Technology consulting and strategy</span>
                    </li>
                  </ul>
                </Card>
              </div>

              {/* User Responsibilities */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">4. User Responsibilities</h2>
                <Card className="p-6">
                  <p className="text-gray-600 mb-4">
                    When using our services, you agree to:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Provide accurate and complete information</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Use our services in compliance with applicable laws</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Respect intellectual property rights</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Not engage in any harmful or illegal activities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Maintain the confidentiality of any login credentials</span>
                    </li>
                  </ul>
                </Card>
              </div>

              {/* Payment Terms */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Payment Terms</h2>
                <Card className="p-6">
                  <p className="text-gray-600 mb-4">
                    For paid services, the following terms apply:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Payment is due according to the terms specified in your service agreement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Late payments may incur additional fees</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Refunds are subject to our refund policy as outlined in your service agreement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Prices are subject to change with 30 days notice</span>
                    </li>
                  </ul>
                </Card>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Intellectual Property</h2>
                <Card className="p-6">
                  <p className="text-gray-600 mb-4">
                    All content, trademarks, and intellectual property on this website are owned by Zion Tech Group or our licensors. You may not:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Reproduce, distribute, or display our content without permission</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Use our trademarks or logos without written consent</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Create derivative works based on our content</span>
                    </li>
                  </ul>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-green-800">Your Content</h4>
                        <p className="text-green-700 text-sm">
                          You retain ownership of any content you provide to us, but grant us a license to use it for providing our services.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Limitation of Liability</h2>
                <Card className="p-6">
                  <p className="text-gray-600 mb-4">
                    In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group's website, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified orally or in writing of the possibility of such damage.
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-yellow-800">Disclaimer</h4>
                        <p className="text-yellow-700 text-sm">
                          Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Termination</h2>
                <Card className="p-6">
                  <p className="text-gray-600 mb-4">
                    We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                  </p>
                  <p className="text-gray-600">
                    Upon termination, your right to use the service will cease immediately. All provisions of the Terms which by their nature should survive termination shall survive termination.
                  </p>
                </Card>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Governing Law</h2>
                <Card className="p-6">
                  <p className="text-gray-600">
                    These Terms shall be interpreted and governed by the laws of the State of California, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                  </p>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Contact Information</h2>
                <Card className="p-6">
                  <p className="text-gray-600 mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-600">legal@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-600">+1 (555) 123-4567</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Questions About Our Terms?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We're here to help clarify any questions you may have about our terms of service.
            </p>
            <Link href="/contact">
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                Contact Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Terms;