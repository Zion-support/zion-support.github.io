import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileText, Shield, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing and using Zion Tech Group services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
  },
  {
    title: '2. Use License',
    content: 'Permission is granted to temporarily download one copy of the materials on Zion Tech Group\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to reverse engineer any software contained on the website; or remove any copyright or other proprietary notations from the materials.'
  },
  {
    title: '3. Service Availability',
    content: 'We strive to maintain high service availability, but we do not guarantee that our services will be uninterrupted or error-free. We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.'
  },
  {
    title: '4. User Accounts',
    content: 'When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.'
  },
  {
    title: '5. Privacy Policy',
    content: 'Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.'
  },
  {
    title: '6. Prohibited Uses',
    content: 'You may not use our service: for any unlawful purpose or to solicit others to perform unlawful acts; to violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances; to infringe upon or violate our intellectual property rights or the intellectual property rights of others; to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate; to submit false or misleading information; to upload or transmit viruses or any other type of malicious code.'
  },
  {
    title: '7. Content',
    content: 'Our service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post to the service, including its legality, reliability, and appropriateness.'
  },
  {
    title: '8. Intellectual Property Rights',
    content: 'The service and its original content, features and functionality are and will remain the exclusive property of Zion Tech Group and its licensors. The service is protected by copyright, trademark, and other laws.'
  },
  {
    title: '9. Termination',
    content: 'We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.'
  },
  {
    title: '10. Disclaimer',
    content: 'The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this Company excludes all representations, warranties, conditions and terms relating to our website and the use of this website.'
  },
  {
    title: '11. Limitation of Liability',
    content: 'In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.'
  },
  {
    title: '12. Governing Law',
    content: 'These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions.'
  },
  {
    title: '13. Changes to Terms',
    content: 'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.'
  },
  {
    title: '14. Contact Information',
    content: 'If you have any questions about these Terms of Service, please contact us at kleber@ziontechgroup.com or call us at +1 302 464 0950. Our address is 364 E Main St STE 1008, Middletown, DE 19709.'
  }
];

export default function TermsPage() {
  return (
    <Layout
      title="Terms of Service - Zion Tech Group"
      description="Read our terms of service and understand the conditions for using our technology solutions."
      keywords="terms of service, legal terms, service agreement, conditions"
    >
      <div className="min-h-screen bg-gray-50">
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
                Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Service</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Please read these terms of service carefully before using our services. 
                By using our services, you agree to be bound by these terms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8 mb-8"
              >
                <div className="flex items-center mb-6">
                  <FileText className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Last Updated: December 2024</h2>
                </div>
                <p className="text-gray-600">
                  These terms of service govern your use of our website and services. 
                  By using our services, you agree to these terms in full.
                </p>
              </motion.div>

              <div className="space-y-8">
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-8"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      {section.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-16 bg-yellow-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-r-lg"
              >
                <div className="flex items-center mb-4">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-3" />
                  <h3 className="text-lg font-bold text-yellow-800">Important Notice</h3>
                </div>
                <p className="text-yellow-700">
                  These terms may be updated from time to time. We will notify you of any material changes 
                  by posting the new terms on this page. Your continued use of our services after any 
                  modifications constitutes acceptance of the updated terms.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Questions About These Terms?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  If you have any questions about these terms of service, please don't hesitate to contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center justify-center"
                  >
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Email Us
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold inline-flex items-center justify-center"
                  >
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Call Us
                  </a>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  364 E Main St STE 1008, Middletown, DE 19709
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}