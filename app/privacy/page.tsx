'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Shield, Eye, Database, Server, Lock, User, Mail, Phone, Edit, Trash2, Download } from 'lucide-react'

const PrivacyPage: React.FC = () => {
  const dataTypes = [
    {
      category: 'Personal Information',
      description: 'Name, email address, phone number, and company information',
      icon: User
    },
    {
      category: 'Usage Data',
      description: 'How you interact with our services and website',
      icon: Database
    },
    {
      category: 'Technical Data',
      description: 'IP address, browser type, device information, and cookies',
      icon: Server
    }
  ]

  const purposes = [
    {
      title: 'Service Delivery',
      description: 'To provide and maintain our AI and IT services'
    },
    {
      title: 'Communication',
      description: 'To respond to inquiries and provide customer support'
    },
    {
      title: 'Improvement',
      description: 'To analyze usage patterns and improve our services'
    },
    {
      title: 'Legal Compliance',
      description: 'To comply with applicable laws and regulations'
    }
  ]

  const rights = [
    {
      title: 'Access',
      description: 'Request access to your personal data',
      icon: Eye
    },
    {
      title: 'Rectification',
      description: 'Correct inaccurate or incomplete data',
      icon: Edit
    },
    {
      title: 'Erasure',
      description: 'Request deletion of your personal data',
      icon: Trash2
    },
    {
      title: 'Portability',
      description: 'Receive your data in a structured format',
      icon: Download
    }
  ]

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</title>
        <meta name="description" content="Learn how we collect, use, and protect your personal information. Our commitment to data privacy and security." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal information, data security, privacy rights" />
      </Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Privacy
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Policy
              </span>859
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>1033
          </div>
        </section>
        {/* Content Section */}

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
                <p className="text-gray-300 mb-6">
                  We collect information you provide directly to us, such as when you create an account, 
                  contact us, or use our services. This may include your name, email address, phone number, 
and other information you choose to provide.
                </p>1655
                <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
                <p className="text-gray-300 mb-6">
                  We use the information we collect to provide, maintain, and improve our services, 
                  communicate with you, and ensure the security of our platform.
                </p>2092
                <h2 className="text-2xl font-semibold text-white mb-4">Information Sharing</h2>
                <p className="text-gray-300 mb-6">
                  We do not sell, trade, or otherwise transfer your personal information to third parties
                  without your consent, except as described in this privacy policy.
                </p>2443
                <h2 className="text-2xl font-semibold text-white mb-4">Data </h2>
                <p className="text-gray-300 mb-6">
                  We implement appropriate security measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                </p>2789
                <h2 className="text-2xl font-semibold text-white mb-4">Your Rights</h2>
                <p className="text-gray-300 mb-6">
                  You have the right to access, update, or delete your personal information. You may also
                  opt out of certain communications from us.
                </p>3136
                <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300 mb-6">
                  If you have any questions about this privacy policy, please contact us at
                  <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                    privacy@ziontechgroup.com
                  </a>3610.
                </p>
                <p className="text-gray-400 text-sm mt-8">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Questions About Privacy?</h2>
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions about this privacy policy or how we handle your data, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Contact Us
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Download PDF
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPage;

