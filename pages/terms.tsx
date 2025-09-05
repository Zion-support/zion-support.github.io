import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, Shield, AlertTriangle, Scale, Mail, Phone } from 'lucide-react';
import Layout from './components/Layout';

export default function Terms() {
  return (
    <Layout 
      title="Terms of Service | Zion Tech Group"
      description="Our terms of service outline the rules and regulations for using our website and services."
      keywords="terms of service, terms and conditions, user agreement, legal terms"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8">
              Please read these terms and conditions carefully before using our services.
            </p>
            <p className="text-sm text-blue-300">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="w-8 h-8 text-blue-600 mr-3" />
              Acceptance of Terms
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                By accessing and using this website and our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="w-8 h-8 text-blue-600 mr-3" />
              Use License
            </h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertTriangle className="w-8 h-8 text-blue-600 mr-3" />
              Disclaimer
            </h2>
            
            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Scale className="w-8 h-8 text-blue-600 mr-3" />
              Limitations
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Liability Limitations</h3>
                <p className="text-gray-700 text-sm">
                  In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group's website, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Accuracy of Materials</h3>
                <p className="text-gray-700 text-sm">
                  The materials appearing on Zion Tech Group's website could include technical, typographical, or photographic errors. Zion Tech Group does not warrant that any of the materials on its website are accurate, complete, or current.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Terms</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Availability</h3>
                <p className="text-gray-700">
                  We strive to maintain high service availability but do not guarantee uninterrupted access to our services. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">User Responsibilities</h3>
                <p className="text-gray-700 mb-3">
                  Users are responsible for:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Providing accurate and complete information</li>
                  <li>Maintaining the security of their account credentials</li>
                  <li>Complying with all applicable laws and regulations</li>
                  <li>Not using our services for illegal or unauthorized purposes</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                All content, trademarks, service marks, trade names, logos, and other intellectual property on this website are the property of Zion Tech Group or its licensors. You may not use, reproduce, or distribute any content from this website without our prior written permission.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Governing Law</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700">
                These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Mail className="w-8 h-8 text-blue-600 mr-3" />
              Contact Information
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">+1 302 464 0950</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Changes to Terms</h3>
              <p className="text-gray-700">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page and updating the "Last updated" date. Your continued use of our services after any such changes constitutes your acceptance of the new terms.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}