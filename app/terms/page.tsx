import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { FileText, Scale, Shield, AlertTriangle, Users, Mail, Phone, MapPin } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group. Read our terms and conditions for using our services." />
        <meta name="keywords" content="terms of service, terms and conditions, legal terms, service agreement" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <FileText className="w-12 h-12 text-cyan-400 mr-4" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white">Terms of Service</h1>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            These terms govern your use of our services. Please read them carefully.
          </p>
          <p className="text-sm text-gray-400 mt-4">Last updated: January 1, 2024</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Scale className="w-6 h-6 text-cyan-400 mr-3" />
              Acceptance of Terms
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Users className="w-6 h-6 text-purple-400 mr-3" />
              Use License
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>Permission is granted to temporarily download one copy of our services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on our website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Shield className="w-6 h-6 text-green-400 mr-3" />
              Service Availability
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>We strive to provide continuous service availability, but we cannot guarantee that our services will be available at all times. We reserve the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modify or discontinue services with reasonable notice</li>
                <li>Perform maintenance that may temporarily affect availability</li>
                <li>Suspend services for security or legal reasons</li>
                <li>Update features and functionality</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
              Limitation of Liability
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our services, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.</p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Payment Terms</h2>
            <div className="text-gray-300 space-y-4">
              <p>Payment terms for our services include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Payment is due upon receipt of invoice unless otherwise agreed</li>
                <li>Late payments may incur additional charges</li>
                <li>Refunds are subject to our refund policy</li>
                <li>Prices are subject to change with 30 days notice</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <div className="text-gray-300 space-y-4">
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <div className="flex items-center mb-2">
                <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                <span>legal@ziontechgroup.com</span>
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