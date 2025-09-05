import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Users, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';

const termsFeatures = [
  {
    icon: Scale,
    title: 'Fair Terms',
    description: 'Our terms are designed to be fair and transparent for all parties involved.',
    features: ['Clear Language', 'Balanced Rights', 'Reasonable Limits', 'Easy to Understand']
  },
  {
    icon: Shield,
    title: 'Legal Protection',
    description: 'We provide appropriate legal protection while respecting your rights.',
    features: ['Liability Limits', 'Intellectual Property', 'Data Protection', 'Dispute Resolution']
  },
  {
    icon: AlertTriangle,
    title: 'User Responsibilities',
    description: 'Clear guidelines on what we expect from our users and customers.',
    features: ['Acceptable Use', 'Account Security', 'Compliance', 'Reporting Issues']
  },
  {
    icon: CheckCircle,
    title: 'Service Guarantees',
    description: 'We stand behind our services with clear guarantees and commitments.',
    features: ['Service Level Agreements', 'Uptime Guarantees', 'Support Commitments', 'Quality Standards']
  }
];

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'legal@ziontechgroup.com',
    description: 'For legal inquiries and questions'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 302 464 0950',
    description: 'For urgent legal matters'
  },
  {
    icon: MapPin,
    title: 'Address',
    value: '364 E Main St STE 1008\nMiddletown DE 19709',
    description: 'Our registered office'
  }
];

export default function Terms() {
  return (
    <Layout>
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read our terms of service to understand the rules and guidelines for using Zion Tech Group's technology solutions and services." />
        <meta name="keywords" content="terms of service, user agreement, legal terms, Zion Tech Group, service conditions" />
        <link rel="canonical" href="https://ziontechgroup.com/terms" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
              <p className="text-xl text-blue-100 mb-8">
                Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
              </p>
              <div className="flex items-center justify-center text-blue-200">
                <FileText className="w-6 h-6 mr-2" />
                <span>Last updated: {new Date().toLocaleDateString()}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Terms Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Service Terms</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe in fair, transparent terms that protect both our users and our business.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {termsFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="prose prose-lg max-w-none"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">1. Acceptance of Terms</h2>
                <p className="text-gray-600 mb-6">
                  By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-8">2. Description of Service</h2>
                <p className="text-gray-600 mb-6">
                  Zion Tech Group provides technology solutions including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                  <li>AI and machine learning solutions</li>
                  <li>Cloud computing and infrastructure services</li>
                  <li>Cybersecurity and data protection services</li>
                  <li>Digital transformation consulting</li>
                  <li>Custom software development</li>
                  <li>IT support and maintenance</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-8">3. User Accounts</h2>
                <p className="text-gray-600 mb-6">
                  To access certain features of our services, you may be required to create an account. You are responsible for:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Providing accurate and complete information</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-8">4. Acceptable Use</h2>
                <p className="text-gray-600 mb-6">
                  You agree not to use our services for any unlawful purpose or any purpose prohibited under this clause. You may not use our services in any manner that:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                  <li>Violates any applicable laws or regulations</li>
                  <li>Infringes on the rights of others</li>
                  <li>Transmits harmful or malicious code</li>
                  <li>Attempts to gain unauthorized access to our systems</li>
                  <li>Interferes with the proper functioning of our services</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-8">5. Intellectual Property</h2>
                <p className="text-gray-600 mb-6">
                  The service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors. The service is protected by copyright, trademark, and other laws.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-8">6. Payment Terms</h2>
                <p className="text-gray-600 mb-6">
                  Payment terms for our services are as follows:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                  <li>Fees are due according to the billing cycle specified in your service agreement</li>
                  <li>Late payments may result in service suspension</li>
                  <li>All fees are non-refundable unless otherwise specified</li>
                  <li>We reserve the right to change our pricing with 30 days notice</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-8">7. Service Level Agreement</h2>
                <p className="text-gray-600 mb-6">
                  We strive to provide reliable services with the following commitments:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-8 space-y-2">
                  <li>99.9% uptime guarantee for critical services</li>
                  <li>24/7 technical support availability</li>
                  <li>Regular security updates and patches</li>
                  <li>Data backup and recovery procedures</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-8">8. Limitation of Liability</h2>
                <p className="text-gray-600 mb-6">
                  In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-8">9. Termination</h2>
                <p className="text-gray-600 mb-6">
                  We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-8">10. Changes to Terms</h2>
                <p className="text-gray-600 mb-6">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-8">11. Governing Law</h2>
                <p className="text-gray-600 mb-6">
                  These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-8">12. Contact Information</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about these Terms of Service, please contact us using the information provided below.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Questions About Our Terms?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                If you have any questions about these terms of service, please don't hesitate to contact us.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-lg text-center"
                >
                  <contact.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{contact.title}</h3>
                  <p className="text-gray-600 mb-2 whitespace-pre-line">{contact.value}</p>
                  <p className="text-sm text-gray-500">{contact.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}