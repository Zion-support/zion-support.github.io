import React from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { FileText, Scale, AlertCircle, Shield, Users, Gavel } from 'lucide-react';

export default function Terms() {
  return (
<<<<<<< HEAD
    <Layout
      title="Terms of Service - Zion Tech Group"
      description="Read Zion Tech Group's Terms of Service to understand the terms and conditions for using our website and services."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md: text-6xl font-bold mb-6">
            Terms of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Service</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Please read these terms carefully before using our website and services.
          </p>
          <p className="text-sm text-gray-300">
            Last updated: January 15, 2024
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-8 h-8 mr-3 text-blue-600" />
                Agreement to Terms
              </h2>
              <p className="text-gray-600 mb-4">
                These Terms of Service ("Terms") govern your use of the Zion Tech Group website located at ziontechgroup.com and our services. By accessing or using our website and services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-600">
                If you do not agree to these Terms, please do not use our website or services.
              </p>
            </div>

            {/* Services Description */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
              <p className="text-gray-600 mb-4">
                Zion Tech Group provides technology consulting and development services, including but not limited to: </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>AI and Machine Learning Development</li>
                <li>Cloud Services and Architecture</li>
                <li>Web and Mobile Application Development</li>
                <li>Blockchain Solutions</li>
                <li>IoT Platform Development</li>
                <li>Cybersecurity Services</li>
                <li>Technology Consulting</li>
              </ul>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-8 h-8 mr-3 text-blue-600" />
                User Responsibilities
              </h2>
              <p className="text-gray-600 mb-4">
                When using our services, you agree to: </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Respect intellectual property rights</li>
                <li>Not engage in any illegal or harmful activities</li>
                <li>Maintain the confidentiality of any credentials provided</li>
                <li>Notify us of any security breaches or unauthorized access</li>
              </ul>
            </div>

            {/* Prohibited Uses */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <XCircle className="w-8 h-8 mr-3 text-red-600" />
                Prohibited Uses
              </h2>
              <p className="text-gray-600 mb-4">
                You may not use our services for any of the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Violating any applicable laws or regulations</li>
                <li>Transmitting malicious code or viruses</li>
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Interfering with the proper functioning of our services</li>
                <li>Collecting user information without consent</li>
                <li>Engaging in fraudulent or deceptive practices</li>
                <li>Infringing on intellectual property rights</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property Rights</h2>
              <p className="text-gray-600 mb-4">
                All content, trademarks, and intellectual property on our website and in our services are owned by Zion Tech Group or our licensors. You may not: </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Copy, modify, or distribute our content without permission</li>
                <li>Use our trademarks or logos without authorization</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Create derivative works based on our intellectual property</li>
              </ul>
            </div>

            {/* Service Availability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Availability</h2>
              <p className="text-gray-600 mb-4">
                We strive to maintain high availability of our services, but we cannot guarantee uninterrupted access. We reserve the right to: </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Modify or discontinue services with reasonable notice</li>
                <li>Perform maintenance that may temporarily affect availability</li>
                <li>Suspend services for security or legal reasons</li>
                <li>Update or upgrade our systems</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Payment Terms</h2>
              <p className="text-gray-600 mb-4">
                For paid services, the following terms apply: </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Payment is due according to the agreed schedule</li>
                <li>Late payments may incur additional fees</li>
                <li>Refunds are subject to our refund policy</li>
                <li>Prices may change with reasonable notice</li>
                <li>You are responsible for any applicable taxes</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="w-8 h-8 mr-3 text-yellow-600" />
                Limitation of Liability
              </h2>
              <p className="text-gray-600 mb-4">
                To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to: </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Loss of profits or revenue</li>
                <li>Loss of data or information</li>
                <li>Business interruption</li>
                <li>Cost of substitute services</li>
                <li>Personal injury or property damage</li>
              </ul>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Indemnification</h2>
              <p className="text-gray-600 mb-4">
                You agree to indemnify and hold harmless Zion Tech Group from any claims, damages, or expenses arising from: </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Your use of our services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Any content you submit or transmit</li>
              </ul>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Termination</h2>
              <p className="text-gray-600 mb-4">
                We may terminate or suspend your access to our services at any time, with or without cause, with or without notice. Upon termination: </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Your right to use our services will cease immediately</li>
                <li>We may delete your account and data</li>
                <li>You remain liable for any outstanding obligations</li>
                <li>Provisions that should survive termination will remain in effect</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Scale className="w-8 h-8 mr-3 text-blue-600" />
                Governing Law
              </h2>
              <p className="text-gray-600 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to conflict of law principles.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by: </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Posting the updated Terms on our website</li>
                <li>Sending email notifications to registered users</li>
                <li>Providing notice through our services</li>
              </ul>
              <p className="text-gray-600">
                Continued use of our services after changes constitutes acceptance of the new Terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us: </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> kleber@ziontechgroup.com</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +1 (302) 464-0950</p>
                <p className="text-gray-700 mb-2"><strong>Address: </strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
=======
    <>
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's Terms of Service - Read our terms and conditions for using our services." />
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
                  <FileText className="w-12 h-12 text-white" />
                </div>
>>>>>>> main
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Questions About Our Terms?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We&apos;re here to help clarify any questions you may have about our Terms of Service.'
          </p>
          <div className="flex flex-col sm: flex-row justify-center gap-4">
            <a href="mailto:kleber@ziontechgroup.com" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Contact Us
            </a>
            <a href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Get in Touch
            </a>
=======
        {/* Content Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Scale className="w-6 h-6 mr-3 text-blue-600" />
                  Acceptance of Terms
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      <strong>Important:</strong> These terms constitute a legally binding agreement between you and Zion Tech Group. Please read them carefully.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-blue-600" />
                  Service Description
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-blue-900">Our Services</h3>
                    <ul className="text-blue-800 space-y-2">
                      <li>• AI-powered technology solutions</li>
                      <li>• IT consulting and implementation</li>
                      <li>• Micro SaaS development</li>
                      <li>• Cloud infrastructure services</li>
                      <li>• Data analytics and insights</li>
                      <li>• Custom software development</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-green-900">Service Availability</h3>
                    <ul className="text-green-800 space-y-2">
                      <li>• 99.9% uptime guarantee</li>
                      <li>• 24/7 technical support</li>
                      <li>• Regular maintenance windows</li>
                      <li>• Continuous monitoring</li>
                      <li>• Disaster recovery protocols</li>
                      <li>• Security updates</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-blue-600" />
                  User Responsibilities
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-lg font-semibold mb-2">Account Security</h3>
                    <p className="text-gray-700">You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-lg font-semibold mb-2">Compliance</h3>
                    <p className="text-gray-700">You agree to use our services in compliance with all applicable laws, regulations, and industry standards.</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-lg font-semibold mb-2">Prohibited Uses</h3>
                    <p className="text-gray-700">You may not use our services for illegal activities, to transmit harmful code, or to violate any third-party rights.</p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Gavel className="w-6 h-6 mr-3 text-blue-600" />
                  Intellectual Property
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Our Rights</h3>
                      <ul className="text-gray-700 space-y-2">
                        <li>• All service content and technology</li>
                        <li>• Trademarks and brand assets</li>
                        <li>• Proprietary algorithms and methods</li>
                        <li>• Documentation and materials</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Your Rights</h3>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Data you provide to us</li>
                        <li>• Custom solutions we develop for you</li>
                        <li>• Your business processes and content</li>
                        <li>• Your intellectual property</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <AlertCircle className="w-6 h-6 mr-3 text-blue-600" />
                  Limitation of Liability
                </h2>
                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h3 className="text-lg font-semibold mb-3 text-yellow-800">Important Notice</h3>
                  <p className="text-yellow-700 mb-4">
                    To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities.
                  </p>
                  <div className="bg-white p-4 rounded border">
                    <p className="text-gray-700 text-sm">
                      <strong>Maximum Liability:</strong> Our total liability to you for any claims arising from or related to our services shall not exceed the amount you paid us in the 12 months preceding the claim.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Terms</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-blue-900">Billing</h3>
                    <ul className="text-blue-800 space-y-2">
                      <li>• Monthly or annual billing cycles</li>
                      <li>• Automatic renewal unless cancelled</li>
                      <li>• Payment due within 30 days</li>
                      <li>• Late fees may apply</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-green-900">Refunds</h3>
                    <ul className="text-green-800 space-y-2">
                      <li>• 30-day money-back guarantee</li>
                      <li>• Pro-rated refunds for unused time</li>
                      <li>• No refunds for custom development</li>
                      <li>• Processing time: 5-10 business days</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">By You</h3>
                      <p className="text-gray-700 mb-3">You may terminate your account at any time by providing 30 days written notice.</p>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Access to services ends on termination date</li>
                        <li>• Data export available for 30 days</li>
                        <li>• Outstanding payments remain due</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-3">By Us</h3>
                      <p className="text-gray-700 mb-3">We may terminate your account for breach of terms or non-payment.</p>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• 30-day notice for non-payment</li>
                        <li>• Immediate termination for violations</li>
                        <li>• Data retention per privacy policy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h2>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    These terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
                  </p>
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold mb-2">Dispute Resolution</h4>
                    <p className="text-gray-700 text-sm">
                      Any disputes arising from these terms or our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> legal@ziontechgroup.com</p>
                    <p><strong>Phone:</strong> +1 (302) 464-0950</p>
                    <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                  </div>
                </div>
              </div>

            </div>
>>>>>>> main
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}