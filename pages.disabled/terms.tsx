import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FileText, Shield, Users, Lock, CheckCircle, 
  AlertTriangle, ArrowRight, Calendar
} from 'lucide-react';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group. Read our service terms, conditions, and policies for using our technology solutions." />
        <meta name="keywords" content="terms of service, legal, policies, conditions, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/terms" />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 via-slate-500/5 to-gray-500/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(100,116,139,0.1),transparent_50%)]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center space-x-2 mb-6">
                <FileText className="w-12 h-12 text-gray-400" />
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-400 via-slate-400 to-gray-400 bg-clip-text text-transparent">
                  Terms of Service
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                Please read these terms of service carefully before using our services. 
                By using our services, you agree to be bound by these terms.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-gray-500 to-slate-600 text-white rounded-xl font-semibold hover:from-gray-600 hover:to-slate-700 transition-all duration-200 hover:scale-105"
                >
                  Contact Us
                </Link>
                <Link
                  href="/privacy"
                  className="px-8 py-4 border border-gray-500/40 text-gray-300 rounded-xl font-semibold hover:bg-gray-500/10 transition-all duration-200"
                >
                  Privacy Policy
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="prose prose-invert prose-lg max-w-none"
            >
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
                <p className="text-gray-300 mb-4">
                  By accessing and using the services provided by Zion Tech Group ("we," "us," or "our"), 
                  you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p className="text-gray-300 mb-4">
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">2. Description of Service</h2>
                <p className="text-gray-300 mb-4">
                  Zion Tech Group provides technology solutions including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>AI and consciousness development services</li>
                  <li>Quantum computing and emerging technology solutions</li>
                  <li>Enterprise IT infrastructure and security services</li>
                  <li>Micro SAAS business solutions</li>
                  <li>Consulting and professional services</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">3. Use License</h2>
                <p className="text-gray-300 mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) 
                  on Zion Tech Group's website for personal, non-commercial transitory viewing only.
                </p>
                <p className="text-gray-300 mb-4">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on Zion Tech Group's website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">4. User Responsibilities</h2>
                <p className="text-gray-300 mb-4">As a user of our services, you agree to:</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Provide accurate and complete information when required</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use the services in compliance with applicable laws and regulations</li>
                  <li>Not engage in any activity that could harm our systems or other users</li>
                  <li>Respect intellectual property rights and proprietary information</li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">5. Privacy and Data Protection</h2>
                <p className="text-gray-300 mb-4">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, 
                  to understand our practices regarding the collection and use of your information.
                </p>
                <p className="text-gray-300 mb-4">
                  We are committed to protecting your data and maintaining the confidentiality of your information 
                  in accordance with applicable data protection laws and regulations.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">6. Intellectual Property Rights</h2>
                <p className="text-gray-300 mb-4">
                  The Service and its original content, features, and functionality are and will remain the exclusive property 
                  of Zion Tech Group and its licensors. The Service is protected by copyright, trademark, and other laws.
                </p>
                <p className="text-gray-300 mb-4">
                  Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">7. Limitation of Liability</h2>
                <p className="text-gray-300 mb-4">
                  In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                  be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
                  loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">8. Termination</h2>
                <p className="text-gray-300 mb-4">
                  We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, 
                  under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                </p>
                <p className="text-gray-300 mb-4">
                  If you wish to terminate your account, you may simply discontinue using the Service.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">9. Governing Law</h2>
                <p className="text-gray-300 mb-4">
                  These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, 
                  without regard to its conflict of law provisions.
                </p>
                <p className="text-gray-300 mb-4">
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">10. Changes to Terms</h2>
                <p className="text-gray-300 mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                  If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <p className="text-gray-300 mb-4">
                  What constitutes a material change will be determined at our sole discretion.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">11. Contact Information</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
                  <p className="text-gray-300 mb-2">
                    <strong>Zion Tech Group</strong><br />
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709<br />
                    United States
                  </p>
                  <p className="text-gray-300 mb-2">
                    <strong>Email:</strong> kleber@ziontechgroup.com<br />
                    <strong>Phone:</strong> +1 302 464 0950
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">12. Effective Date</h2>
                <p className="text-gray-300 mb-4">
                  These Terms of Service are effective as of January 1, 2025, and will remain in effect except with respect 
                  to any changes in their provisions in the future, which will be in effect immediately after being posted on this page.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative bg-gradient-to-br from-gray-900/30 to-gray-800/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Questions About Our Terms?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                If you have any questions about these terms or need clarification on any section, 
                please don't hesitate to contact our legal team.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-gray-500 to-slate-600 text-white rounded-xl font-semibold hover:from-gray-600 hover:to-slate-700 transition-all duration-200 hover:scale-105"
                >
                  Contact Legal Team
                </Link>
                <Link
                  href="/privacy"
                  className="px-8 py-4 border border-gray-500/40 text-gray-300 rounded-xl font-semibold hover:bg-gray-500/10 transition-all duration-200"
                >
                  View Privacy Policy
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}