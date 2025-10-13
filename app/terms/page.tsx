import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Scale, Shield, AlertTriangle } from "lucide-react";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta
          name="description"
          content="Terms of Service for Zion Tech Group. Read our terms and conditions for using our services."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Please read these terms carefully before using our services. 
                By using our services, you agree to be bound by these terms.
              </p>
              <p className="text-sm text-gray-400">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-invert max-w-none">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FileText className="w-6 h-6 text-cyan-400 mr-3" />
                Acceptance of Terms
              </h2>
              
              <div className="space-y-6 text-gray-300">
                <p>
                  By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Use License</h3>
                  <p className="mb-4">
                    Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Service Availability</h3>
                  <p className="mb-4">
                    We strive to maintain high service availability, but we do not guarantee that our services will be uninterrupted or error-free. We reserve the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Modify or discontinue services with reasonable notice</li>
                    <li>Perform maintenance that may temporarily affect service availability</li>
                    <li>Suspend services for security or legal reasons</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">User Responsibilities</h3>
                  <p className="mb-4">
                    When using our services, you agree to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Use services in compliance with applicable laws</li>
                    <li>Not engage in any illegal or unauthorized activities</li>
                    <li>Respect intellectual property rights</li>
                    <li>Not attempt to gain unauthorized access to our systems</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Payment Terms</h3>
                  <p className="mb-4">
                    For paid services:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Fees are due in advance unless otherwise specified</li>
                    <li>All fees are non-refundable unless otherwise stated</li>
                    <li>We may change pricing with 30 days' notice</li>
                    <li>Failure to pay may result in service suspension</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Intellectual Property</h3>
                  <p className="mb-4">
                    All content, trademarks, and intellectual property on our website and services are owned by Zion Tech Group or our licensors. You may not use our intellectual property without written permission.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Privacy</h3>
                  <p className="mb-4">
                    Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Limitation of Liability</h3>
                  <p className="mb-4">
                    In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our services, even if we have been notified orally or in writing of the possibility of such damage.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Disclaimer</h3>
                  <p className="mb-4">
                    The materials on our website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Termination</h3>
                  <p className="mb-4">
                    We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Governing Law</h3>
                  <p className="mb-4">
                    These Terms shall be interpreted and governed by the laws of the State of [Your State], without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Changes to Terms</h3>
                  <p className="mb-4">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Contact Information</h3>
                  <p className="mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <p className="text-cyan-400">Email: legal@ziontechgroup.com</p>
                    <p className="text-cyan-400">Phone: +1 (555) 123-4567</p>
                    <p className="text-cyan-400">Address: 123 Tech Street, Innovation City, IC 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Questions About Our Terms?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Our legal team is available to answer any questions you may have about our terms of service.
              </p>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Contact Legal Team</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}