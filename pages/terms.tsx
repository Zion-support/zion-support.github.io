import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  FileText, 
  Scale, 
  Shield, 
  AlertTriangle,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read the terms of service for Zion Tech Group's products and services." />
        <meta name="keywords" content="terms of service, terms, legal, agreement, conditions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Navigation */}
        <nav className="relative z-10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-white text-xl font-bold">Zion Tech Group</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Terms of
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Service
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
              </p>
              <p className="text-sm text-gray-400">Last updated: January 15, 2024</p>
=======
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
>>>>>>> 0e13c194c61ccef8858e979cacd4e65279eacdf6
            </motion.div>
          </div>
        </section>

        {/* Terms Content */}
<<<<<<< HEAD
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <FileText className="h-6 w-6 text-blue-400 mr-3" />
                    Acceptance of Terms
                  </h2>
                  <p className="text-gray-300 mb-4">
                    By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms 
                    and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Scale className="h-6 w-6 text-blue-400 mr-3" />
                    Description of Service
                  </h2>
                  <p className="text-gray-300 mb-4">
                    Zion Tech Group provides technology consulting, software development, AI services, IT services, 
                    and micro SaaS products. Our services include but are not limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Artificial Intelligence and Machine Learning solutions</li>
                    <li>IT infrastructure management and support</li>
                    <li>Micro SaaS product development and hosting</li>
                    <li>Technology consulting and advisory services</li>
                    <li>Custom software development</li>
                    <li>Cloud migration and management</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Shield className="h-6 w-6 text-blue-400 mr-3" />
                    User Responsibilities
                  </h2>
                  <p className="text-gray-300 mb-4">
                    As a user of our services, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Provide accurate and complete information when required</li>
                    <li>Use our services only for lawful purposes</li>
                    <li>Not attempt to gain unauthorized access to our systems</li>
                    <li>Not interfere with or disrupt our services</li>
                    <li>Respect intellectual property rights</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Maintain the confidentiality of your account credentials</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <AlertTriangle className="h-6 w-6 text-blue-400 mr-3" />
                    Prohibited Uses
                  </h2>
                  <p className="text-gray-300 mb-4">
                    You may not use our services:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                    <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                    <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>To submit false or misleading information</li>
                    <li>To upload or transmit viruses or any other type of malicious code</li>
                    <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
                  <p className="text-gray-300 mb-4">
                    Payment for our services is due according to the terms specified in your service agreement. 
                    We accept various payment methods including credit cards, bank transfers, and other approved methods.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>All fees are non-refundable unless otherwise specified</li>
                    <li>Late payments may result in service suspension</li>
                    <li>Prices are subject to change with 30 days notice</li>
                    <li>Taxes and fees may apply as required by law</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
                  <p className="text-gray-300 mb-4">
                    The service and its original content, features, and functionality are and will remain the exclusive 
                    property of Zion Tech Group and its licensors. The service is protected by copyright, trademark, 
                    and other laws.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                  <p className="text-gray-300 mb-4">
                    In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, 
                    or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, 
                    including without limitation, loss of profits, data, use, goodwill, or other intangible losses, 
                    resulting from your use of the service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
                  <p className="text-gray-300 mb-4">
                    We may terminate or suspend your account and bar access to the service immediately, without prior 
                    notice or liability, under our sole discretion, for any reason whatsoever and without limitation, 
                    including but not limited to a breach of the Terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
                  <p className="text-gray-300 mb-4">
                    These Terms shall be interpreted and governed by the laws of the State of California, United States, 
                    without regard to its conflict of law provisions. Our failure to enforce any right or provision of 
                    these Terms will not be considered a waiver of those rights.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
                  <p className="text-gray-300 mb-4">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                    If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                  <p className="text-gray-300 mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-white/5 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Mail className="h-5 w-5 text-blue-400" />
                      <span className="text-gray-300">legal@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center space-x-3 mb-3">
                      <Phone className="h-5 w-5 text-blue-400" />
                      <span className="text-gray-300">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-blue-400" />
                      <span className="text-gray-300">123 Tech Street, San Francisco, CA 94105</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Questions About Our Terms?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                We're here to help clarify any questions you may have about our terms of service.
              </p>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Z</span>
                  </div>
                  <span className="text-white text-xl font-bold">Zion Tech Group</span>
                </div>
                <p className="text-gray-400">
                  Transforming businesses with cutting-edge technology solutions.
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/ai-services" className="text-gray-400 hover:text-white">AI Services</Link></li>
                  <li><Link href="/it-services" className="text-gray-400 hover:text-white">IT Services</Link></li>
                  <li><Link href="/micro-saas" className="text-gray-400 hover:text-white">Micro SaaS</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                  <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-white font-semibold">Terms of Service</Link></li>
                  <li><Link href="/cookies" className="text-gray-400 hover:text-white">Cookie Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">&copy; 2024 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
=======
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
>>>>>>> 0e13c194c61ccef8858e979cacd4e65279eacdf6
  );
}