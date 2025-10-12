'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Eye, 
  Lock, 
  Database, 
  Mail, 
  Phone,
  ArrowRight,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

export default function PrivacyPolicyPage() {
  const lastUpdated = '2024-01-01';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal data. Our comprehensive privacy policy outlines our data protection practices." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, privacy rights, Zion Tech Group" />
        <meta property="og:title" content="Privacy Policy - Zion Tech Group" />
        <meta property="og:description" content="Learn how we protect your privacy and handle your personal data." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/privacy-policy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy - Zion Tech Group" />
        <meta name="twitter:description" content="Learn how we protect your privacy and handle your personal data." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <p className="text-sm text-gray-400">
            Last updated: {new Date(lastUpdated).toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Eye className="w-6 h-6 mr-3 text-cyan-400" />
              Information We Collect
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>We collect information you provide directly to us, such as when you:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Create an account or profile</li>
                <li>Contact us for support or inquiries</li>
                <li>Subscribe to our newsletter or services</li>
                <li>Participate in surveys or promotions</li>
                <li>Use our website or services</li>
              </ul>
              <p>The types of information we may collect include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name, email address, and contact information</li>
                <li>Company information and job title</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
                <li>Website usage data and analytics</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Database className="w-6 h-6 mr-3 text-blue-400" />
              How We Use Your Information
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Develop new products and services</li>
                <li>Monitor and analyze trends and usage</li>
                <li>Personalize and improve your experience</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Lock className="w-6 h-6 mr-3 text-green-400" />
              Information Sharing and Disclosure
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With trusted service providers who assist us in operating our business</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-purple-400" />
              Data Security
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-yellow-400" />
              Your Rights
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate or incomplete data</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
                <li>Withdrawal of consent</li>
              </ul>
              <p>To exercise these rights, please contact us using the information provided below.</p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-3 text-orange-400" />
              Cookies and Tracking Technologies
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>We use cookies and similar tracking technologies to enhance your experience on our website. These technologies help us:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve website functionality and performance</li>
              </ul>
              <p>You can control cookie settings through your browser preferences, but disabling cookies may affect website functionality.</p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Changes to This Policy</h2>
            <div className="space-y-4 text-gray-300">
              <p>We may update this privacy policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Posting the updated policy on our website</li>
                <li>Sending you an email notification</li>
                <li>Providing notice through our services</li>
              </ul>
              <p>We encourage you to review this policy periodically to stay informed about how we protect your information.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30 mt-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Questions About This Policy?</h2>
          <p className="text-gray-300 text-center mb-8">
            If you have any questions about this privacy policy or our data practices, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
            <a
              href="mailto:privacy@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              privacy@ziontechgroup.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}