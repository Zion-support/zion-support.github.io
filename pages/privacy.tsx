import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Shield, 
  Eye, 
  Lock, 
  Database,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal information." />
        <meta name="keywords" content="privacy policy, data protection, privacy, personal information" />
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
                Privacy
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-gray-400">Last updated: January 15, 2024</p>
=======
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, Users, FileText, Mail, Phone } from 'lucide-react';
import Layout from '../components/Layout';

export default function PrivacyPage() {
  return (
    <Layout
      title="Privacy Policy - Zion Tech Group"
      description="Learn how Zion Tech Group protects your privacy and handles your personal information."
      keywords="privacy policy, data protection, GDPR, personal information"
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
                Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Policy</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Your privacy is important to us. Learn how we collect, use, and protect your personal information.
              </p>
>>>>>>> 0e13c194c61ccef8858e979cacd4e65279eacdf6
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Privacy Policy Content */}
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
                    <Shield className="h-6 w-6 text-blue-400 mr-3" />
                    Information We Collect
                  </h2>
                  <p className="text-gray-300 mb-4">
                    We collect information you provide directly to us, such as when you create an account, 
                    make a purchase, or contact us for support.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Name and contact information (email address, phone number, mailing address)</li>
                    <li>Account credentials (username, password)</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Communications with us (support requests, feedback)</li>
                    <li>Usage data and preferences</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Eye className="h-6 w-6 text-blue-400 mr-3" />
                    How We Use Your Information
                  </h2>
                  <p className="text-gray-300 mb-4">
                    We use the information we collect to provide, maintain, and improve our services:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices, updates, and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Improve our services and develop new features</li>
                    <li>Monitor and analyze usage patterns and trends</li>
                    <li>Detect, prevent, and address technical issues</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Database className="h-6 w-6 text-blue-400 mr-3" />
                    Information Sharing
                  </h2>
                  <p className="text-gray-300 mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>With service providers who assist us in operating our website and conducting business</li>
                    <li>When required by law or to protect our rights and safety</li>
                    <li>In connection with a merger, acquisition, or sale of assets</li>
                    <li>With your explicit consent</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Lock className="h-6 w-6 text-blue-400 mr-3" />
                    Data Security
                  </h2>
                  <p className="text-gray-300 mb-4">
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication measures</li>
                    <li>Employee training on data protection</li>
                    <li>Incident response procedures</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking</h2>
                  <p className="text-gray-300 mb-4">
                    We use cookies and similar technologies to enhance your experience on our website. 
                    You can control cookie settings through your browser preferences.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                  <p className="text-gray-300 mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate or incomplete data</li>
                    <li>Request deletion of your personal information</li>
                    <li>Object to processing of your personal information</li>
                    <li>Data portability</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
                  <p className="text-gray-300 mb-4">
                    We may update this privacy policy from time to time. We will notify you of any changes 
                    by posting the new policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                  <p className="text-gray-300 mb-4">
                    If you have any questions about this privacy policy or our data practices, please contact us:
                  </p>
                  <div className="bg-white/5 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Mail className="h-5 w-5 text-blue-400" />
                      <span className="text-gray-300">privacy@ziontechgroup.com</span>
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
                Questions About Privacy?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                We're here to help. Contact us if you have any questions about our privacy practices.
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
                  <li><Link href="/privacy" className="text-white font-semibold">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
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
        {/* Privacy Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
                <p className="text-gray-600 mb-6">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support.
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
                    <p className="text-gray-600">
                      Name, email address, phone number, company information, and other details you provide when using our services.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Usage Information</h3>
                    <p className="text-gray-600">
                      Information about how you use our services, including features accessed, time spent, and interactions with our platform.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Information</h3>
                    <p className="text-gray-600">
                      IP address, browser type, device information, and other technical data collected automatically.
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">
                  We use the information we collect to provide, maintain, and improve our services:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Provide and deliver our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Improve our services and develop new features</li>
                  <li>Monitor and analyze usage and trends</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Information Sharing</h2>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>With service providers who assist in our operations</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Data Security</h2>
                <p className="text-gray-600 mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction.
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Security Measures</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security audits and assessments</li>
                    <li>Access controls and authentication</li>
                    <li>Employee training on data protection</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Your Rights</h2>
                <p className="text-gray-600 mb-4">
                  You have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your personal information</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 mt-8">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-600">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-600">+1 302 464 0950</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Address: 364 E Main St STE 1008, Middletown DE 19709
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