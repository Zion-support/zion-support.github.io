import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, AlertTriangle, CheckCircle, Users, Globe } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                Welcome to Zion Tech Group. These Terms of Service ("Terms") govern your use of our website, 
                services, and any related applications. By accessing or using our services, you agree to be bound by these Terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                Acceptance of Terms
              </h2>
              <p className="text-gray-600 mb-6">
                By accessing or using our services, you confirm that you have read, understood, and agree to be bound by these Terms. 
                If you do not agree to these Terms, you must not use our services. These Terms apply to all visitors, users, and others 
                who access or use our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                Description of Services
              </h2>
              <p className="text-gray-600 mb-4">
                Zion Tech Group provides technology solutions including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>AI and machine learning systems</li>
                <li>Cloud infrastructure and platform services</li>
                <li>Cybersecurity solutions</li>
                <li>Custom software development</li>
                <li>Consulting and advisory services</li>
                <li>Technical support and maintenance</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="w-6 h-6 text-blue-600 mr-3" />
                User Accounts and Responsibilities
              </h2>
              <p className="text-gray-600 mb-4">
                When you create an account or use our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
                Acceptable Use Policy
              </h2>
              <p className="text-gray-600 mb-4">
                You agree not to use our services to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of our services</li>
                <li>Engage in any form of harassment or discrimination</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
              <p className="text-gray-600 mb-6">
                All content, features, and functionality of our services, including but not limited to text, graphics, 
                logos, software, and designs, are owned by Zion Tech Group or its licensors and are protected by 
                copyright, trademark, and other intellectual property laws.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy and Data Protection</h2>
              <p className="text-gray-600 mb-6">
                Your privacy is important to us. Our collection and use of personal information is governed by our 
                Privacy Policy, which is incorporated into these Terms by reference. By using our services, you consent 
                to the collection and use of information as described in our Privacy Policy.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Availability and Modifications</h2>
              <p className="text-gray-600 mb-6">
                We strive to provide reliable and uninterrupted services, but we do not guarantee that our services 
                will be available at all times. We may modify, suspend, or discontinue any part of our services 
                with or without notice. We are not liable for any modification, suspension, or discontinuance of our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, 
                arising out of or relating to your use of our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
              <p className="text-gray-600 mb-6">
                You agree to indemnify and hold harmless Zion Tech Group, its officers, directors, employees, and agents 
                from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your 
                use of our services or violation of these Terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-600 mb-6">
                We may terminate or suspend your access to our services immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, 
                your right to use the services will cease immediately.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law and Jurisdiction</h2>
              <p className="text-gray-600 mb-6">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which 
                Zion Tech Group operates, without regard to its conflict of law provisions. Any disputes arising from 
                these Terms shall be resolved in the courts of that jurisdiction.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes 
                by posting the new Terms on this page and updating the "Last updated" date. Your continued use of our 
                services after such modifications constitutes acceptance of the updated Terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-purple-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> legal@ziontechgroup.com
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Address:</strong> Zion Tech Group, Legal Department
                </p>
                <p className="text-gray-700">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Questions About Our Terms?
          </h2>
          <p className="text-gray-600 mb-6">
            Our legal team is here to help clarify any questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
            >
              Contact Us
            </Link>
            <Link
              to="/privacy"
              className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
