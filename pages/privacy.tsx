<<<<<<< HEAD
<<<<<<< HEAD
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { Shield, Lock, Eye, Database, Mail, Phone, MapPin } from 'lucide-react';
import MainLayout from '../src/components/layout/MainLayout';

export default function PrivacyPage() {
  return (
    <MainLayout
      title="Privacy Policy - Zion Tech Group"
      description="Zion Tech Group's privacy policy outlining how we collect, use, and protect your personal information."
      keywords="privacy policy, data protection, personal information, GDPR compliance"
      canonical="https://ziontechgroup.com/privacy"
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
  Shield, 
  Eye, 
  Lock, 
  Database,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

=======
import { motion } from 'framer-motion';
import Head from 'next/head';
import { 
  Shield, 
  Lock, 
  Eye, 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  Users, 
  Database,
  Cloud,
  Zap,
  ArrowRight,
  Star,
  Award,
  Globe
} from 'lucide-react';

const privacyFeatures = [
  {
    title: 'Data Collection',
    description: 'We only collect data that is necessary for providing our services and improving user experience.',
    icon: Database,
    color: 'from-blue-500 to-cyan-500',
    details: ['Minimal data collection', 'Purpose limitation', 'Data minimization', 'Transparent collection']
  },
  {
    title: 'Data Protection',
    description: 'Your personal information is protected with industry-standard security measures.',
    icon: Shield,
    color: 'from-green-500 to-emerald-500',
    details: ['Encryption at rest', 'Secure transmission', 'Access controls', 'Regular audits']
  },
  {
    title: 'Your Rights',
    description: 'You have full control over your personal data and can exercise your privacy rights.',
    icon: Users,
    color: 'from-purple-500 to-violet-500',
    details: ['Right to access', 'Right to rectification', 'Right to erasure', 'Right to portability']
  },
  {
    title: 'Third Parties',
    description: 'We carefully select third-party services that meet our privacy and security standards.',
    icon: Globe,
    color: 'from-orange-500 to-red-500',
    details: ['Vetted partners', 'Data processing agreements', 'Regular reviews', 'Limited sharing']
  }
];

const dataTypes = [
  {
    category: 'Personal Information',
    items: ['Name', 'Email address', 'Phone number', 'Company information'],
    purpose: 'To provide services and communicate with you'
  },
  {
    category: 'Usage Data',
    items: ['Website visits', 'Feature usage', 'Performance metrics', 'Error logs'],
    purpose: 'To improve our services and user experience'
  },
  {
    category: 'Technical Data',
    items: ['IP address', 'Browser type', 'Device information', 'Cookies'],
    purpose: 'To ensure security and optimize performance'
  }
];

>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Zion Tech Group</title>
<<<<<<< HEAD
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
=======
        <meta name="description" content="Learn about how we collect, use, and protect your personal information." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal information" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Privacy{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, 
                use, and protect your personal information.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Privacy Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
<<<<<<< HEAD
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
                  <Shield className="w-6 h-6 mr-3 text-blue-600" />
                  Information We Collect
                </h2>
                <p className="text-gray-700 mb-6">
                  We collect information you provide directly to us, such as when you create an account, 
                  contact us, or use our services. This may include:
                </p>
                <ul className="list-disc pl-6 mb-8 text-gray-700">
                  <li>Name and contact information (email address, phone number, mailing address)</li>
                  <li>Account credentials and profile information</li>
                  <li>Payment and billing information</li>
                  <li>Communications with us (emails, phone calls, chat messages)</li>
                  <li>Information about your use of our services</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-blue-600" />
                  How We Use Your Information
                </h2>
                <p className="text-gray-700 mb-6">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 mb-8 text-gray-700">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Monitor and analyze trends and usage</li>
                  <li>Personalize and improve your experience</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Database className="w-6 h-6 mr-3 text-blue-600" />
                  Information Sharing
                </h2>
                <p className="text-gray-700 mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
                </p>
                <ul className="list-disc pl-6 mb-8 text-gray-700">
                  <li>With service providers who assist us in operating our business</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or acquisition</li>
                  <li>With your explicit consent</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-blue-600" />
                  Data Security
                </h2>
                <p className="text-gray-700 mb-6">
                  We implement appropriate security measures to protect your personal information against unauthorized access, 
                  alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
                <p className="text-gray-700 mb-6">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 mb-8 text-gray-700">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your data</li>
                  <li>Withdraw consent at any time</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
                <p className="text-gray-700 mb-6">
                  We use cookies and similar technologies to enhance your experience, analyze usage, and personalize content. 
                  You can control cookie settings through your browser preferences.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
                <p className="text-gray-700 mb-8">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new 
                  policy on this page and updating the "Last updated" date.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <p className="text-gray-700 mb-6">
                  If you have any questions about this privacy policy, please contact us:
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
        {/* Privacy Policy Content */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto">
=======
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Privacy Commitment
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We are committed to protecting your privacy and being transparent about our data practices.
              </p>
            </motion.div>

>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
<<<<<<< HEAD
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
import Layout from '../components/Layout';

export default function PrivacyPage() {
  return (
    <Layout title="Privacy Policy - Zion Tech Group" description="Our privacy policy and data protection practices">
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Your privacy is important to us
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Information We Collect
                </h2>
                <p className="text-gray-600 mb-6">
                  We collect information you provide directly to us, such as when you create an account, 
                  make a purchase, or contact us for support.
                </p>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  How We Use Your Information
                </h2>
                <p className="text-gray-600 mb-6">
                  We use the information we collect to provide, maintain, and improve our services, 
                  process transactions, and communicate with you.
                </p>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Us
                </h2>
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy, please contact us at 
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
=======
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {privacyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Key Principles:</h4>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Data Types */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Data We Collect
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We collect only the data necessary to provide our services and improve your experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {dataTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {type.category}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {type.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500">
                    <strong>Purpose:</strong> {type.purpose}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Questions About Privacy?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                If you have any questions about our privacy practices or want to exercise your rights, 
                please contact our privacy team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:privacy@ziontechgroup.com"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Contact Privacy Team
                </a>
                <a 
                  href="/contact"
                  className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors"
                >
                  General Contact
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
  );
}