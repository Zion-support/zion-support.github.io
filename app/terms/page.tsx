'use client';

import React from 'react';
import { 
  FileText,
  Scale,
  Shield,
  AlertTriangle,
  Mail,
  Phone
} from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            These terms govern your use of our services. Please read them carefully.
          </p>
          <p className="text-sm text-gray-400">Last updated: January 1, 2024</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cyber-card p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-cyan-400" />
                Acceptance of Terms
              </h2>
              <p className="text-gray-300 mb-4">
                By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Scale className="w-6 h-6 mr-3 text-cyan-400" />
                Use License
              </h2>
              <p className="text-gray-300 mb-4">
                Permission is granted to temporarily download one copy of our services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained in our services</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 mr-3 text-cyan-400" />
                Service Availability
              </h2>
              <p className="text-gray-300 mb-4">
                We strive to maintain high service availability, but we do not guarantee uninterrupted access to our services. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 mr-3 text-cyan-400" />
                User Responsibilities
              </h2>
              <p className="text-gray-300 mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not engage in any unlawful or prohibited activities</li>
                <li>Respect the intellectual property rights of others</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
              <p className="text-gray-300 mb-4">
                Payment for our services is due in advance. We accept various payment methods including credit cards, bank transfers, and other approved methods. All fees are non-refundable unless otherwise specified.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                All content, features, and functionality of our services are owned by Zion Tech Group and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <p className="text-gray-300 mb-4">
                We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p className="text-gray-300 mb-4">
                These terms shall be governed by and construed in accordance with the laws of Delaware, United States, without regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p className="text-gray-300 mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-slate-800/50 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 mb-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400">+1 (302) 464-0950</span>
                </div>
                <div className="text-gray-300">
                  Zion Tech Group<br />
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;