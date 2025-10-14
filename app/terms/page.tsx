import React from 'react';
import { Helmet  } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group. Read our terms and conditions for using our AI and IT services." />
        <meta name="keywords" content="terms of service, terms and conditions, user agreement, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
            <p className="text-xl text-gray-300 mb-8">
              Please read these Terms of Service carefully before using our services.
            </p>
            
            <div className="max-w-4xl mx-auto text-left">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 border border-white/20 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
                <p className="text-gray-300">
                  By accessing and using Zion Tech Group's services, you accept and agree to be bound by 
                  the terms and provision of this agreement.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 border border-white/20 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>
                <p className="text-gray-300 mb-4">
                  Permission is granted to temporarily use our services for personal, non-commercial 
                  transitory viewing only. This is the grant of a license, not a transfer of title.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>You may not modify or copy the materials</li>
                  <li>You may not use the materials for any commercial purpose</li>
                  <li>You may not attempt to reverse engineer any software</li>
                  <li>You may not remove any copyright or proprietary notations</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 border border-white/20 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Service Availability</h2>
                <p className="text-gray-300">
                  We strive to maintain 99.9% uptime for our services, but we cannot guarantee 
                  uninterrupted access. We reserve the right to modify or discontinue services 
                  with reasonable notice.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 border border-white/20 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                <p className="text-gray-300">
                  In no event shall Zion Tech Group or its suppliers be liable for any damages 
                  (including, without limitation, damages for loss of data or profit, or due to 
                  business interruption) arising out of the use or inability to use our services.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                <p className="text-gray-300">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <p className="text-cyan-400 mt-2">
                  Email: legal@ziontechgroup.com<br />
                  Phone: +1 302 464 0950<br />
                  Address: 364 E Main St STE 1008, Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;