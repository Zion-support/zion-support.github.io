import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function TermsPage() {
  return (
    <Layout
      title="Terms of Service - Zion Tech Group"
      description="Terms of Service for Zion Tech Group. Please read these terms carefully before using our services."
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
                
                <div className="mb-8">
                  <p className="text-gray-600 mb-4">
                    Last updated: December 15, 2024
                  </p>
                  <p className="text-gray-600">
                    These Terms of Service ("Terms") govern your use of our website and services provided by Zion Tech Group ("we," "our," or "us"). By accessing or using our services, you agree to be bound by these Terms.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Acceptance of Terms
                </h2>
                
                <p className="text-gray-600 mb-6">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Use License
                </h2>
                
                <p className="text-gray-600 mb-4">
                  Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Service Availability
                </h2>
                
                <p className="text-gray-600 mb-6">
                  We strive to maintain high availability of our services, but we do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  User Responsibilities
                </h2>
                
                <p className="text-gray-600 mb-4">
                  When using our services, you agree to:
                </p>
                
                <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use our services in compliance with applicable laws</li>
                  <li>Not engage in any activity that could harm our systems or other users</li>
                </ul>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Intellectual Property
                </h2>
                
                <p className="text-gray-600 mb-6">
                  The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to the website are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use, or publication by you of any such matters or any part of the website is strictly prohibited.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Limitation of Liability
                </h2>
                
                <p className="text-gray-600 mb-6">
                  In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group's website, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Privacy Policy
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, to understand our practices.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Changes to Terms
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Zion Tech Group may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                
                <p className="text-gray-600 mb-6">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Zion Tech Group</strong><br />
                    Email: kleber@ziontechgroup.com<br />
                    Phone: +1 302 464 0950<br />
                    Address: 364 E Main St STE 1008, Middletown DE 19709
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}