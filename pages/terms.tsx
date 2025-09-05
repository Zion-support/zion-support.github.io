import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, Shield, Users, DollarSign } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

export default function TermsOfService() {
  return (
    <MainLayout
      title="Terms of Service - Zion Tech Group"
      description="Read our terms of service and understand the conditions for using our technology solutions."
      keywords="terms of service, legal terms, service agreement, conditions"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Terms of{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Service
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Please read these terms carefully before using our services.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-blue-200">
                <span>Last updated: {new Date().toLocaleDateString()}</span>
                <span>•</span>
                <span>Effective immediately</span>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-blue-600" />
                  Acceptance of Terms
                </h2>
                
                <div className="mb-8">
                  <p className="text-gray-600 mb-4">
                    By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Scale className="w-6 h-6 mr-3 text-blue-600" />
                  Service Description
                </h2>
                
                <div className="mb-8">
                  <p className="text-gray-600 mb-4">
                    Zion Tech Group provides technology consulting, software development, AI solutions, and related services. Our services include but are not limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                    <li>AI and machine learning solutions</li>
                    <li>Cloud infrastructure management</li>
                    <li>Custom software development</li>
                    <li>IT consulting and support</li>
                    <li>Micro SaaS applications</li>
                    <li>Digital transformation services</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-blue-600" />
                  User Responsibilities
                </h2>
                
                <div className="mb-8">
                  <p className="text-gray-600 mb-4">
                    As a user of our services, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                    <li>Provide accurate and complete information</li>
                    <li>Use our services only for lawful purposes</li>
                    <li>Not interfere with or disrupt our services</li>
                    <li>Respect intellectual property rights</li>
                    <li>Maintain the confidentiality of your account</li>
                    <li>Notify us of any security breaches</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <DollarSign className="w-6 h-6 mr-3 text-blue-600" />
                  Payment Terms
                </h2>
                
                <div className="mb-8">
                  <p className="text-gray-600 mb-4">
                    Payment terms vary by service and are specified in individual service agreements. General terms include:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                    <li>Payment is due according to the agreed schedule</li>
                    <li>Late payments may incur additional charges</li>
                    <li>Refunds are subject to our refund policy</li>
                    <li>Prices may change with 30 days notice</li>
                    <li>All fees are non-refundable unless otherwise specified</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-blue-600" />
                  Limitation of Liability
                </h2>
                
                <div className="mb-8">
                  <p className="text-gray-600 mb-4">
                    To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3 text-blue-600" />
                  Termination
                </h2>
                
                <div className="mb-8">
                  <p className="text-gray-600 mb-4">
                    We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
                
                <div className="mb-8">
                  <p className="text-gray-600 mb-4">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-gray-600 mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Email:</strong> legal@ziontechgroup.com</p>
                    <p><strong>Phone:</strong> +1 302 464 0950</p>
                    <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}