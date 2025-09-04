import React from 'react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 p-8 rounded-lg space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By accessing and using Zion Tech Group's services, you accept and agree to be bound by 
                the terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Service Description</h2>
              <p className="text-gray-300 mb-4">
                Zion Tech Group provides AI services, IT services, and Micro SaaS solutions. We reserve 
                the right to modify or discontinue any service at any time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">User Responsibilities</h2>
              <p className="text-gray-300 mb-4">
                Users are responsible for:
              </p>
              <ul className="text-gray-300 space-y-2 ml-6">
                <li>• Providing accurate and complete information</li>
                <li>• Maintaining the security of their account</li>
                <li>• Complying with all applicable laws and regulations</li>
                <li>• Using our services in accordance with these terms</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Payment Terms</h2>
              <p className="text-gray-300 mb-4">
                Payment terms are as specified in your service agreement. We reserve the right to 
                change our pricing with 30 days' notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                All content, features, and functionality of our services are owned by Zion Tech Group 
                and are protected by copyright, trademark, and other intellectual property laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                In no event shall Zion Tech Group be liable for any indirect, incidental, special, 
                consequential, or punitive damages arising out of or relating to your use of our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Termination</h2>
              <p className="text-gray-300 mb-4">
                We may terminate or suspend your account and access to our services immediately, 
                without prior notice, for any reason whatsoever.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-cyan-400 mb-4">Contact Information</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="text-gray-300 space-y-2">
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Phone: +1 302 464 0950</p>
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}