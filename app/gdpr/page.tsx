import React from 'react';
import Link from 'next/link';
import { Shield, Lock, Eye, Database, FileText, CheckCircle } from 'lucide-react';

const GDPRPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              GDPR Compliance
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Your data protection and privacy rights under GDPR
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is GDPR?</h2>
            <p className="text-gray-600 mb-6">
              The General Data Protection Regulation (GDPR) is a comprehensive data protection law that gives you 
              control over your personal data and ensures that organizations handle your information responsibly.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights Under GDPR</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Right to Access</h3>
                </div>
                <p className="text-gray-600">
                  You have the right to know what personal data we hold about you and how we use it.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <FileText className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Right to Rectification</h3>
                </div>
                <p className="text-gray-600">
                  You can request correction of inaccurate or incomplete personal data.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Lock className="w-8 h-8 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Right to Erasure</h3>
                </div>
                <p className="text-gray-600">
                  You can request deletion of your personal data in certain circumstances.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Database className="w-8 h-8 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Right to Portability</h3>
                </div>
                <p className="text-gray-600">
                  You can request a copy of your data in a structured, machine-readable format.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Protect Your Data</h2>
            <p className="text-gray-600 mb-6">
              We implement appropriate technical and organizational measures to protect your personal data against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about our GDPR compliance or want to exercise your rights, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> kleber@ziontechgroup.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> +1 302 464 0950
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GDPRPage;

