import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, Shield, Users, Mail, Phone } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read Zion Tech Group's terms of service and user agreement." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FileText className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-blue-100">
              Please read these terms carefully before using our services.
            </p>
            <p className="text-sm text-blue-200 mt-4">
              Last updated: January 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Acceptance of Terms
              </h2>
              
              <p className="text-gray-600 mb-6">
                These Terms of Service ("Terms") govern your use of Zion Tech Group's services, including our website, 
                applications, and any related services (collectively, the "Services"). By accessing or using our Services, 
                you agree to be bound by these Terms.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Description of Services
              </h2>
              
              <p className="text-gray-600 mb-6">
                Zion Tech Group provides technology consulting, AI solutions, cloud services, and software development 
                services to businesses and organizations.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                User Responsibilities
              </h2>
              
              <p className="text-gray-600 mb-6">
                You are responsible for maintaining the confidentiality of your account information and for all activities 
                that occur under your account.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Intellectual Property
              </h2>
              
              <p className="text-gray-600 mb-6">
                All content, trademarks, and other intellectual property rights in our Services are owned by Zion Tech Group 
                or our licensors.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Limitation of Liability
              </h2>
              
              <p className="text-gray-600 mb-6">
                To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              
              <p className="text-gray-600 mb-6">
                If you have any questions about these Terms, please contact us at:
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-800">
                  <strong>Email:</strong> kleber@ziontechgroup.com<br />
                  <strong>Phone:</strong> +1 302 464 0950<br />
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}