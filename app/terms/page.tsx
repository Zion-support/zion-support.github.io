'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group - Read our terms and conditions for using our services." />
        <meta name="keywords" content="terms of service, terms and conditions, user agreement, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-300 mb-6">
                By accessing and using Zion Tech Group's services, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>

              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Use License</h2>
              <p className="text-gray-300 mb-6">
                Permission is granted to temporarily download one copy of the materials on Zion Tech Group's 
                website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                not a transfer of title, and under this license you may not modify or copy the materials.
              </p>

              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Service Availability</h2>
              <p className="text-gray-300 mb-6">
                We strive to provide continuous service availability, but we do not guarantee that our services 
                will be uninterrupted or error-free. We reserve the right to modify or discontinue any service 
                at any time without notice.
              </p>

              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">User Responsibilities</h2>
              <p className="text-gray-300 mb-6">
                Users are responsible for maintaining the confidentiality of their account information and 
                for all activities that occur under their account. Users agree to use our services only 
                for lawful purposes and in accordance with these terms.
              </p>

              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Intellectual Property</h2>
              <p className="text-gray-300 mb-6">
                All content, trademarks, and other intellectual property on this website are owned by 
                Zion Tech Group or its licensors. You may not use, reproduce, or distribute any content 
                without our written permission.
              </p>

              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Limitation of Liability</h2>
              <p className="text-gray-300 mb-6">
                In no event shall Zion Tech Group or its suppliers be liable for any damages arising out 
                of the use or inability to use the materials on this website, even if Zion Tech Group or 
                an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>

              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Contact Information</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <p className="text-gray-300">
                  <strong>Email:</strong> legal@ziontechgroup.com<br />
                  <strong>Phone:</strong> +1 (302) 464-0950<br />
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
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