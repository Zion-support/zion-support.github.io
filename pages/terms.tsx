import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { FileText, Scale, Shield, AlertTriangle, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Terms: NextPage = () => {
  const keySections = [
    {
      icon: FileText,
      title: 'Service Terms',
      description: 'Terms and conditions governing the use of our technology services and solutions.'
    },
    {
      icon: Scale,
      title: 'Legal Compliance',
      description: 'Our commitment to legal compliance and adherence to applicable laws and regulations.'
    },
    {
      icon: Shield,
      title: 'Intellectual Property',
      description: 'Protection of intellectual property rights and proper usage of our proprietary technologies.'
    },
    {
      icon: AlertTriangle,
      title: 'Limitations',
      description: 'Important limitations and disclaimers regarding our services and liability.'
    }
  ];

  return (
    <MainLayout
      title="Terms of Service - Zion Tech Group"
      description="Read the terms and conditions governing the use of Zion Tech Group's services and website."
      keywords="terms of service, legal terms, service agreement, user agreement, terms and conditions"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Terms of Service
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Please read these terms carefully before using our services. 
            By accessing or using our website and services, you agree to be bound by these terms.
          </motion.p>
          <motion.div
            className="text-sm text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Last updated: January 15, 2025
          </motion.div>
        </div>
      </section>

      {/* Key Sections */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keySections.map((section, index) => (
              <motion.div
                key={section.title}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{section.title}</h3>
                <p className="text-gray-600 text-sm">{section.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">1. Acceptance of Terms</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  By accessing and using the Zion Tech Group website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
                <p className="text-gray-600">
                  These Terms of Service ("Terms") govern your use of our website located at ziontechgroup.com and our services. By using our services, you agree to these terms.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">2. Description of Service</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  Zion Tech Group provides technology solutions and services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Artificial Intelligence and Machine Learning solutions</li>
                  <li>Quantum Computing services</li>
                  <li>Blockchain infrastructure and development</li>
                  <li>Cloud computing and migration services</li>
                  <li>Micro SaaS application development</li>
                  <li>Cybersecurity solutions</li>
                  <li>IT consulting and support services</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">3. User Responsibilities</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Provide accurate and complete information when required</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Not interfere with or disrupt our services</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Respect intellectual property rights</li>
                  <li>Maintain the confidentiality of any login credentials</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">4. Intellectual Property Rights</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  All content, trademarks, service marks, trade names, logos, and other intellectual property displayed on our website or used in connection with our services are the property of Zion Tech Group or our licensors.
                </p>
                <p className="text-gray-600 mb-4">
                  You may not use, reproduce, distribute, or create derivative works from our intellectual property without our express written permission.
                </p>
                <p className="text-gray-600">
                  Any feedback, suggestions, or ideas you provide regarding our services may be used by us without compensation or attribution.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">5. Payment Terms</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  Payment terms for our services are as follows:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Fees are due according to the payment schedule specified in your service agreement</li>
                  <li>Late payments may incur additional charges</li>
                  <li>All prices are subject to change with 30 days' notice</li>
                  <li>Refunds are subject to our refund policy as outlined in your service agreement</li>
                  <li>You are responsible for any applicable taxes</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">6. Privacy and Data Protection</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                </p>
                <p className="text-gray-600">
                  We implement appropriate security measures to protect your data and comply with applicable data protection laws.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">7. Service Availability</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  While we strive to provide reliable services, we cannot guarantee that our services will be available at all times. We may experience:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Scheduled maintenance windows</li>
                  <li>Unplanned outages due to technical issues</li>
                  <li>Service interruptions due to third-party dependencies</li>
                  <li>Changes or discontinuation of services with reasonable notice</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">8. Limitation of Liability</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Service interruptions or delays</li>
                  <li>Third-party actions or content</li>
                  <li>Security breaches or data loss</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Our total liability shall not exceed the amount paid by you for the services in the 12 months preceding the claim.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">9. Indemnification</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600">
                  You agree to indemnify and hold harmless Zion Tech Group, its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of our services or violation of these Terms.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">10. Termination</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  Either party may terminate these Terms at any time with written notice. Upon termination:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Your right to use our services will cease immediately</li>
                  <li>We may delete your account and data</li>
                  <li>You remain liable for any outstanding payments</li>
                  <li>Provisions that by their nature should survive termination will remain in effect</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">11. Governing Law</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Delaware.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">12. Changes to Terms</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website. Your continued use of our services after such changes constitutes acceptance of the new Terms.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-800">13. Contact Information</h2>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-600">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-600">+1 302 464 0950</span>
                  </div>
                  <div className="text-gray-600">
                    <strong>Address:</strong><br />
                    Zion Tech Group<br />
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Terms;