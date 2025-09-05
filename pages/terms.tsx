import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, Shield, Users, AlertCircle, Mail, Phone } from 'lucide-react';
import Layout from '../components/Layout';

const termsSections = [
  {
    title: 'Acceptance of Terms',
    icon: FileText,
    content: 'By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.'
  },
  {
    title: 'Use License',
    icon: Shield,
    content: 'Permission is granted to temporarily download one copy of our materials for personal, non-commercial transitory viewing only.'
  },
  {
    title: 'User Accounts',
    icon: Users,
    content: 'You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.'
  },
  {
    title: 'Limitation of Liability',
    icon: AlertCircle,
    content: 'In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use our services.'
  }
];

export default function TermsOfService() {
  return (
    <Layout
      title="Terms of Service - Zion Tech Group"
      description="Read our terms of service and user agreement"
      keywords="terms of service, user agreement, legal terms, service conditions"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Read our terms of service and user agreement
              </p>
              <p className="text-sm text-gray-300">
                Last updated: January 15, 2024
              </p>
            </motion.div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {termsSections.map((section, index) => {
                  const IconComponent = section.icon;
                  return (
                    <motion.div
                      key={index}
                      className="bg-white rounded-lg shadow-lg p-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="flex items-center mb-4">
                        <IconComponent className="w-8 h-8 text-blue-600 mr-4" />
                        <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{section.content}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="bg-blue-50 rounded-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-6">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center">
                    <FileText className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}