import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { 
  Shield, 
  Eye, 
  Lock, 
  Database, 
  Mail, 
  Phone,
  ArrowRight,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

const Privacy: React.FC = () => {
  const lastUpdated = "December 15, 2024";

  return (
    <>
      <Head>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6">
                <Shield className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-gray-500">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Overview */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Eye className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Transparency</h3>
                  <p className="text-gray-600 text-sm">We're transparent about what data we collect and how we use it.</p>
                </div>
                <div className="text-center">
                  <Lock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Security</h3>
                  <p className="text-gray-600 text-sm">Your data is protected with industry-standard security measures.</p>
                </div>
                <div className="text-center">
                  <Database className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Control</h3>
                  <p className="text-gray-600 text-sm">You have control over your personal information and can request changes.</p>
                </div>
              </div>
            </Card>

            {/* Information We Collect */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
                
                <div className="space-y-8">
                  <Card className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Information</h3>
                    <p className="text-gray-600 mb-4">
                      We collect information you provide directly to us, such as when you:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Create an account or contact us through our website</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Subscribe to our newsletter or marketing communications</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Use our services or participate in surveys</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Apply for a job or join our team</span>
                      </li>
                    </ul>
                    <p className="text-gray-600 mt-4">
                      This may include your name, email address, phone number, company information, and any other information you choose to provide.
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Usage Information</h3>
                    <p className="text-gray-600 mb-4">
                      We automatically collect certain information about your use of our website and services:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Log information (IP address, browser type, pages visited)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Device information (device type, operating system)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>Cookies and similar tracking technologies</span>
                      </li>
                    </ul>
                  </Card>
                </div>
              </div>

              {/* How We Use Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
                <Card className="p-6">
                  <p className="text-gray-600 mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Provide, maintain, and improve our services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Process transactions and send related information</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Send technical notices, updates, and support messages</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Respond to your comments and questions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Send marketing communications (with your consent)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Monitor and analyze trends and usage</span>
                    </li>
                  </ul>
                </Card>
              </div>

              {/* Information Sharing */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Information Sharing</h2>
                <Card className="p-6">
                  <p className="text-gray-600 mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>With your explicit consent</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>To trusted service providers who assist us in operating our website and conducting our business</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>When required by law or to protect our rights and safety</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>In connection with a merger, acquisition, or sale of assets</span>
                    </li>
                  </ul>
                </Card>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
                <Card className="p-6">
                  <p className="text-gray-600 mb-4">
                    We implement appropriate security measures to protect your personal information:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>SSL encryption for data transmission</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Secure data storage and access controls</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Regular security audits and updates</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Employee training on data protection</span>
                    </li>
                  </ul>
                </Card>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights</h2>
                <Card className="p-6">
                  <p className="text-gray-600 mb-4">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Access and review your personal information</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Request correction of inaccurate information</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Request deletion of your personal information</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Opt-out of marketing communications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Data portability (where applicable)</span>
                    </li>
                  </ul>
                </Card>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
                <Card className="p-6">
                  <p className="text-gray-600 mb-4">
                    We use cookies and similar technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-yellow-800">Cookie Notice</h4>
                        <p className="text-yellow-700 text-sm">
                          By continuing to use our website, you consent to our use of cookies as described in this policy.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <Card className="p-6">
                  <p className="text-gray-600 mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-600">privacy@ziontechgroup.com</span>
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
              Questions About Your Privacy?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We're here to help. Contact us if you have any questions or concerns about how we handle your data.
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

export default Privacy;