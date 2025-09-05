<<<<<<< HEAD
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
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
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms of Service</h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Please read these terms carefully before using our services.
              </p>
              <p className="text-sm text-gray-400">Last updated: January 2025</p>
=======
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
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-blue-600" />
                  Acceptance of Terms
                </h2>
                <p className="text-gray-700 mb-8">
                  By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Scale className="w-6 h-6 mr-3 text-blue-600" />
                  Service Description
                </h2>
                <p className="text-gray-700 mb-6">
                  Zion Tech Group provides technology consulting, development, and support services including but not limited to:
                </p>
                <ul className="list-disc pl-6 mb-8 text-gray-700">
                  <li>AI and machine learning solutions</li>
                  <li>IT services and cloud solutions</li>
                  <li>Micro SaaS development</li>
                  <li>Blockchain and IoT solutions</li>
                  <li>Cybersecurity services</li>
                  <li>Custom software development</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-blue-600" />
                  User Responsibilities
                </h2>
                <p className="text-gray-700 mb-6">
                  Users are responsible for:
                </p>
                <ul className="list-disc pl-6 mb-8 text-gray-700">
                  <li>Providing accurate and complete information</li>
                  <li>Maintaining the confidentiality of account credentials</li>
                  <li>Complying with all applicable laws and regulations</li>
                  <li>Not using our services for illegal or unauthorized purposes</li>
                  <li>Respecting intellectual property rights</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <AlertCircle className="w-6 h-6 mr-3 text-blue-600" />
                  Prohibited Uses
                </h2>
                <p className="text-gray-700 mb-6">
                  You may not use our services:
                </p>
                <ul className="list-disc pl-6 mb-8 text-gray-700">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Terms</h2>
                <p className="text-gray-700 mb-6">
                  Payment terms are as follows:
                </p>
                <ul className="list-disc pl-6 mb-8 text-gray-700">
                  <li>Fees are due according to the payment schedule agreed upon in your service contract</li>
                  <li>Late payments may incur additional charges</li>
                  <li>All prices are subject to change with 30 days notice</li>
                  <li>Refunds are subject to our refund policy</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
                <p className="text-gray-700 mb-8">
                  The service and its original content, features, and functionality are and will remain the exclusive property 
                  of Zion Tech Group and its licensors. The service is protected by copyright, trademark, and other laws.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
                <p className="text-gray-700 mb-8">
                  In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                  be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
                  loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
                <p className="text-gray-700 mb-8">
                  We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, 
                  under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
                <p className="text-gray-700 mb-8">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, 
                  we will provide at least 30 days notice prior to any new terms taking effect.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-700 mb-6">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Mail className="w-5 h-5 mr-3 text-blue-600" />
                    <span className="text-gray-700">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Phone className="w-5 h-5 mr-3 text-blue-600" />
                    <span className="text-gray-700">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-blue-600 mt-1" />
                    <span className="text-gray-700">
                      364 E Main St STE 1008<br />
                      Middletown DE 19709
                    </span>
=======
        {/* Terms Content */}
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
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
      </div>
    </MainLayout>
=======

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
import Layout from '../components/Layout';

export default function TermsPage() {
  return (
    <Layout title="Terms of Service - Zion Tech Group" description="Our terms of service and usage guidelines">
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Please read these terms carefully
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Acceptance of Terms
                </h2>
                <p className="text-gray-600 mb-6">
                  By accessing and using our services, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Use License
                </h2>
                <p className="text-gray-600 mb-6">
                  Permission is granted to temporarily download one copy of our materials for personal, 
                  non-commercial transitory viewing only.
                </p>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600">
                  If you have any questions about these Terms of Service, please contact us at 
                  <a href="mailto:kleber@ziontechgroup.com" className="text-purple-600 hover:text-purple-700">
                    kleber@ziontechgroup.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
>>>>>>> 781a25673e534b82e65bf7d34ef223e1e93789fb
>>>>>>> c340d36958b587ef531069bf6cf45d0bd8633ada
  );
}