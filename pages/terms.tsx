import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { FileText, Scale, AlertCircle, Shield, Users, CreditCard } from 'lucide-react';

const Terms: NextPage = () => {
  return (
    <MainLayout
      title="Terms of Service - Zion Tech Group"
      description="Read the terms and conditions for using Zion Tech Group's services and website."
      keywords="terms of service, terms and conditions, user agreement, legal terms"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-200">
            Please read these terms carefully before using our services.
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
                <FileText className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Agreement to Terms</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service ("Terms") govern your use of Zion Tech Group's website and services. 
                By accessing or using our services, you agree to be bound by these Terms. If you do not agree 
                to these Terms, please do not use our services.
              </p>
            </div>

            {/* Service Description */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                Zion Tech Group provides technology solutions including but not limited to:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">AI and machine learning solutions</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Cloud architecture and migration</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Software development services</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">IT consulting and support</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Micro SaaS applications</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Data analytics and insights</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Digital transformation</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Technical training and support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">User Responsibilities</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Lawful Use</h3>
                  <p className="text-gray-700">You agree to use our services only for lawful purposes and in accordance with these Terms.</p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Account Security</h3>
                  <p className="text-gray-700">You are responsible for maintaining the confidentiality of your account credentials.</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Prohibited Activities</h3>
                  <p className="text-gray-700">You may not use our services to violate any laws, infringe on rights, or harm others.</p>
                </div>
                
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Content Responsibility</h3>
                  <p className="text-gray-700">You are responsible for any content you provide and must have the right to use it.</p>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <CreditCard className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Payment Terms</h2>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Billing and Payment</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Payment is due according to the terms specified in your service agreement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>We accept major credit cards and other payment methods as specified</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Late payments may result in service suspension or termination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>All fees are non-refundable unless otherwise specified</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Scale className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Intellectual Property</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Rights</h3>
                  <p className="text-gray-700 mb-4">
                    All content, trademarks, and intellectual property on our website and services 
                    are owned by Zion Tech Group or our licensors.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Your Rights</h3>
                  <p className="text-gray-700 mb-4">
                    You retain ownership of any content you provide to us, but grant us a license 
                    to use it for service delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <AlertCircle className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Limitation of Liability</h2>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  To the maximum extent permitted by law, Zion Tech Group shall not be liable for any 
                  indirect, incidental, special, consequential, or punitive damages, including but not 
                  limited to loss of profits, data, or business opportunities.
                </p>
                <p className="text-gray-700">
                  Our total liability for any claims arising from these Terms or our services shall not 
                  exceed the amount paid by you for the services in the 12 months preceding the claim.
                </p>
              </div>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Either party may terminate these Terms at any time with written notice. Upon termination:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>• Your right to use our services will cease immediately</li>
                  <li>• We may delete your account and data after a reasonable period</li>
                  <li>• Provisions that by their nature should survive termination will remain in effect</li>
                </ul>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
              
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms at any time. We will notify you of any 
                material changes by posting the new Terms on our website and updating the "Last updated" date.
              </p>
              <p className="text-gray-700">
                Your continued use of our services after such modifications constitutes acceptance of the updated Terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> legal@ziontechgroup.com</p>
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

export default Terms;