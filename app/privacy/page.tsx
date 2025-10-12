import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Shield, Eye, Lock, Database, Users, Mail, Phone, MapPin } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group. Learn how we collect, use, and protect your personal information." />
        <meta name="keywords" content="privacy policy, data protection, personal information, GDPR compliance" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 text-cyan-400 mr-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Privacy Policy</h1>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-400 mt-4">Last updated: January 1, 2024</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Eye className="w-6 h-6 text-cyan-400 mr-3" />
              Information We Collect
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>We collect information you provide directly to us, such as when you:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Create an account or contact us</li>
                <li>Subscribe to our newsletter or services</li>
                <li>Fill out forms on our website</li>
                <li>Communicate with us via email or phone</li>
              </ul>
              <p>This may include your name, email address, phone number, company information, and any other information you choose to provide.</p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Database className="w-6 h-6 text-purple-400 mr-3" />
              How We Use Your Information
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Develop new products and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Lock className="w-6 h-6 text-green-400 mr-3" />
              Data Security
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Users className="w-6 h-6 text-yellow-400 mr-3" />
              Your Rights
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate or incomplete data</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <div className="text-gray-300 space-y-4">
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <div className="flex items-center mb-2">
                <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                <span>privacy@ziontechgroup.com</span>
              </div>
              <div className="flex items-center mb-2">
                <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}