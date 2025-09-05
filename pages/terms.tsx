import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, Shield, AlertCircle, Scale, Mail, Phone, MapPin } from 'lucide-react';
import Layout from '../components/Layout';

export default function TermsPage() {
  return (
    <Layout title="Terms of Service - Zion Tech Group">
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read our terms of service and understand the conditions for using our services." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Please read these terms carefully before using our services
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 mb-6">
                  By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
                <p className="text-gray-600 mb-4">
                  Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Disclaimer</h2>
                <p className="text-gray-600 mb-6">
                  The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitations</h2>
                <p className="text-gray-600 mb-6">
                  In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group's website, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Accuracy of Materials</h2>
                <p className="text-gray-600 mb-6">
                  The materials appearing on Zion Tech Group's website could include technical, typographical, or photographic errors. Zion Tech Group does not warrant that any of the materials on its website are accurate, complete, or current. Zion Tech Group may make changes to the materials contained on its website at any time without notice. However, Zion Tech Group does not make any commitment to update the materials.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Links</h2>
                <p className="text-gray-600 mb-6">
                  Zion Tech Group has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Zion Tech Group of the site. Use of any such linked website is at the user's own risk.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modifications</h2>
                <p className="text-gray-600 mb-6">
                  Zion Tech Group may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
                <p className="text-gray-600 mb-6">
                  These terms and conditions are governed by and construed in accordance with the laws of the State of California and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">legal@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">123 Innovation Drive, Tech City, TC 12345</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Questions About Our Terms?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Our legal team is here to help clarify any questions you may have.
            </p>
            <Link href="/contact" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}