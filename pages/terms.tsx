import React from 'react';
import type { NextPage } from 'next';
import { FileText, Scale, AlertCircle, Shield, Users, CreditCard } from 'lucide-react';

const Terms: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-600 p-4 rounded-full">
                <FileText className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto">
              Please read these terms and conditions carefully before using our services.
            </p>
            <p className="text-sm text-gray-300">
              Last updated: January 1, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Use License</h2>
              <p className="text-gray-600 mb-6">
                Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Service Availability</h2>
              <p className="text-gray-600 mb-6">
                We strive to maintain high service availability but do not guarantee uninterrupted access to our services.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. User Responsibilities</h2>
              <p className="text-gray-600 mb-6">
                Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Payment Terms</h2>
              <p className="text-gray-600 mb-6">
                Payment terms are specified in individual service agreements. All fees are non-refundable unless otherwise stated.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                In no event shall Zion Tech Group be liable for any damages arising out of the use or inability to use our services.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Contact Information</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Email:</strong> <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-800">kleber@ziontechgroup.com</a>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Phone:</strong> <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800">+1 302 464 0950</a>
                </p>
                <p className="text-gray-700">
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;