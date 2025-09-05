import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react';
import Layout from '../components/Layout';

export default function TermsPage() {
  return (
    <Layout
      title="Terms of Service - Zion Tech Group"
      description="Read our terms of service to understand the rules and guidelines for using Zion Tech Group's services."
      keywords="terms of service, terms and conditions, user agreement, service terms"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Please read these terms carefully before using our services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none"
              >
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
                  <p className="text-yellow-800">
                    <strong>Last updated:</strong> January 1, 2024
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
                <p className="text-gray-600 mb-6">
                  By accessing and using Zion Tech Group's services, you accept and agree to be bound by 
                  the terms and provision of this agreement.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Description of Service</h2>
                <p className="text-gray-600 mb-6">
                  Zion Tech Group provides technology solutions including AI services, IT services, 
                  cloud infrastructure, and micro SaaS applications.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use our services in compliance with applicable laws</li>
                  <li>Respect the intellectual property rights of others</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Prohibited Uses</h2>
                <p className="text-gray-600 mb-4">You may not use our services:</p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
                <p className="text-gray-600 mb-6">
                  The service and its original content, features, and functionality are and will remain 
                  the exclusive property of Zion Tech Group and its licensors.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                <p className="text-gray-600 mb-6">
                  We may terminate or suspend your account and bar access to the service immediately, 
                  without prior notice or liability, under our sole discretion, for any reason whatsoever.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
                <p className="text-gray-600 mb-6">
                  The information on this service is provided on an "as is" basis. To the fullest extent 
                  permitted by law, this Company excludes all representations, warranties, conditions 
                  and terms relating to our service.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-600 mb-6">
                  In no event shall Zion Tech Group, nor its directors, employees, partners, agents, 
                  suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, 
                  or punitive damages.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                <p className="text-gray-600 mb-6">
                  These Terms shall be interpreted and governed by the laws of the State of Delaware, 
                  without regard to its conflict of law provisions.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <p className="text-gray-600 mb-6">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                  If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> legal@ziontechgroup.com<br />
                    <strong>Phone:</strong> +1 302 464 0950<br />
                    <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8">
                  <p className="text-yellow-800">
                    <strong>Note:</strong> These Terms of Service are effective as of the date listed above and will 
                    remain in effect until modified or terminated in accordance with the provisions herein.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}