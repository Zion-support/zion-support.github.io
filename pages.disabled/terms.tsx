import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, Shield, AlertCircle, Scale, Mail, Phone, MapPin } from 'lucide-react';
import MainLayout from '../src/components/layout/MainLayout';

export default function TermsPage() {
  return (
    <MainLayout
      title="Terms of Service - Zion Tech Group"
      description="Zion Tech Group's terms of service outlining the rules and regulations for using our services."
      keywords="terms of service, user agreement, service terms, legal terms"
      canonical="https://ziontechgroup.com/terms"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms of Service</h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Please read these terms carefully before using our services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 mb-6">
                  By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>

                <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
                <p className="text-gray-600 mb-6">
                  Permission is granted to temporarily download one copy of our materials for personal, non-commercial transitory viewing only.
                </p>

                <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
                <p className="text-gray-600 mb-6">
                  The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied.
                </p>

                <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
                <p className="text-gray-600 mb-6">
                  In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use our services.
                </p>

                <h2 className="text-2xl font-bold mb-4">5. Accuracy of Materials</h2>
                <p className="text-gray-600 mb-6">
                  The materials appearing on our website could include technical, typographical, or photographic errors.
                </p>

                <h2 className="text-2xl font-bold mb-4">6. Links</h2>
                <p className="text-gray-600 mb-6">
                  We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site.
                </p>

                <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
                <p className="text-gray-600 mb-6">
                  We may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the current version.
                </p>

                <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
                <p className="text-gray-600 mb-6">
                  These terms and conditions are governed by and construed in accordance with the laws of Delaware.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Questions About Our Terms?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Contact us if you have any questions about our terms of service.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
                >
                  Email Us
                </a>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-3 border-2 border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-colors font-semibold"
                >
                  Call Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )}
  );
};