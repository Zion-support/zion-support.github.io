import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';

const TermsPage = () => {
  const lastUpdated = 'January 1, 2024';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Terms of Service - Zion Tech Group | Legal Terms and Conditions"
        description="Read Zion Tech Group's terms of service, legal terms, and conditions for using our AI and IT solutions. Understand your rights and obligations."
        keywords="terms of service, legal terms, conditions, user agreement, terms and conditions"
        canonical="https://ziontechgroup.com/terms"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Terms of Service
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            These terms and conditions govern your use of our services. Please read them carefully.
          </p>
          <p className="text-sm text-gray-400">
            Last updated: {lastUpdated}
          </p>
        </ResponsiveContainer>
      </section>

      {/* Key Terms */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Key Terms
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Important terms and conditions for using our services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Service Agreement</h3>
              <p className="text-gray-300">Terms governing the use of our AI and IT services.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                <Scale className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Legal Compliance</h3>
              <p className="text-gray-300">Your obligations to comply with applicable laws and regulations.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Data Protection</h3>
              <p className="text-gray-300">How we protect your data and your responsibilities.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Limitations</h3>
              <p className="text-gray-300">Limitations of liability and service availability.</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Terms Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="max-w-4xl mx-auto prose prose-invert">
            <h2 className="text-2xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-6">
              By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. 
              If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">2. Use License</h2>
            <p className="text-gray-300 mb-6">
              Permission is granted to temporarily download one copy of our services for personal, non-commercial transitory viewing only. 
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained in our services</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-6">3. Service Availability</h2>
            <p className="text-gray-300 mb-6">
              We strive to maintain high service availability, but we do not guarantee uninterrupted access to our services. 
              We reserve the right to modify, suspend, or discontinue any part of our services at any time.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">4. User Responsibilities</h2>
            <p className="text-gray-300 mb-6">
              You are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Ensuring your use of our services complies with applicable laws</li>
              <li>Not using our services for any unlawful or prohibited purpose</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-6">5. Intellectual Property</h2>
            <p className="text-gray-300 mb-6">
              The service and its original content, features, and functionality are and will remain the exclusive property of 
              Zion Tech Group and its licensors. The service is protected by copyright, trademark, and other laws.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">6. Payment Terms</h2>
            <p className="text-gray-300 mb-6">
              Payment for our services is due in advance. We reserve the right to change our pricing at any time with 30 days' notice. 
              Refunds are subject to our refund policy as outlined in our service agreement.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">7. Limitation of Liability</h2>
            <p className="text-gray-300 mb-6">
              In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
              loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">8. Termination</h2>
            <p className="text-gray-300 mb-6">
              We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, 
              under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">9. Governing Law</h2>
            <p className="text-gray-300 mb-6">
              These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, without regard to 
              its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">10. Changes to Terms</h2>
            <p className="text-gray-300 mb-6">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, 
              we will provide at least 30 days' notice prior to any new terms taking effect.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-gray-300 mb-2">
                <strong>Email:</strong> legal@ziontechgroup.com
              </p>
              <p className="text-gray-300 mb-2">
                <strong>Phone:</strong> +1 302 464 0950
              </p>
              <p className="text-gray-300">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default TermsPage;