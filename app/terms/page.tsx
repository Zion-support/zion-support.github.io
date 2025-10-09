import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <p className="text-gray-300 mb-6">
              <strong className="text-white">Last updated:</strong> October 8, 2024
            </p>
            
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-6">
                By accessing and using our services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please 
                do not use this service.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p className="text-gray-300 mb-6">
                Permission is granted to temporarily download one copy of the materials on our website 
                for personal, non-commercial transitory viewing only. This is the grant of a license, 
                not a transfer of title, and under this license you may not modify or copy the materials.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">3. Service Availability</h2>
              <p className="text-gray-300 mb-6">
                We strive to provide continuous service availability, but we do not guarantee that our 
                services will be uninterrupted or error-free. We reserve the right to modify, suspend, 
                or discontinue any part of our services at any time.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">4. User Responsibilities</h2>
              <p className="text-gray-300 mb-6">
                You are responsible for maintaining the confidentiality of your account and password. 
                You agree to accept responsibility for all activities that occur under your account 
                or password.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">5. Prohibited Uses</h2>
              <p className="text-gray-300 mb-6">
                You may not use our services for any unlawful purpose or to solicit others to perform 
                unlawful acts. You may not violate any international, federal, provincial, or state 
                regulations, rules, laws, or local ordinances.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
              <p className="text-gray-300 mb-6">
                The service and its original content, features, and functionality are and will remain 
                the exclusive property of Zion Tech Group and its licensors. The service is protected 
                by copyright, trademark, and other laws.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-300 mb-6">
                In no event shall Zion Tech Group, nor its directors, employees, partners, agents, 
                suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                or other intangible losses.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
              <p className="text-gray-300 mb-6">
                These terms shall be interpreted and governed by the laws of the State of Delaware, 
                without regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about these terms, please contact us at:
              </p>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-gray-300">
                  <strong className="text-white">Email:</strong> legal@ziontechgroup.com<br />
                  <strong className="text-white">Phone:</strong> +1 (302) 464-0950<br />
                  <strong className="text-white">Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;