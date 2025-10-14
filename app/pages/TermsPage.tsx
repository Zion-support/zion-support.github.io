import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group. Please read our terms and conditions carefully." />
        <meta name="keywords" content="terms of service, terms and conditions, legal, Zion Tech Group" />
        <meta property="og:title" content="Terms of Service - Zion Tech Group" />
        <meta property="og:description" content="Terms of Service for Zion Tech Group." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/terms" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 gradient-text neon-text">
              Terms of Service
            </h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-300 mb-4">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
                <p className="text-gray-300 mb-4">
                  Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, 
                  non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
                <p className="text-gray-300 mb-4">
                  The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group makes no warranties, 
                  expressed or implied, and hereby disclaims and negates all other warranties including without limitation, 
                  implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
                <p className="text-gray-300 mb-4">
                  In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, 
                  damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use 
                  the materials on Zion Tech Group's website, even if Zion Tech Group or a Zion Tech Group authorized representative 
                  has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow 
                  limitations on implied warranties, or limitations of liability for consequential or incidental damages, 
                  these limitations may not apply to you.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Accuracy of Materials</h2>
                <p className="text-gray-300 mb-4">
                  The materials appearing on Zion Tech Group's website could include technical, typographical, or photographic errors. 
                  Zion Tech Group does not warrant that any of the materials on its website are accurate, complete, or current. 
                  Zion Tech Group may make changes to the materials contained on its website at any time without notice. 
                  However Zion Tech Group does not make any commitment to update the materials.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Links</h2>
                <p className="text-gray-300 mb-4">
                  Zion Tech Group has not reviewed all of the sites linked to our website and is not responsible for the contents 
                  of any such linked site. The inclusion of any link does not imply endorsement by Zion Tech Group of the site. 
                  Use of any such linked website is at the user's own risk.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. Modifications</h2>
                <p className="text-gray-300 mb-4">
                  Zion Tech Group may revise these terms of service for its website at any time without notice. 
                  By using this website you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
                <p className="text-gray-300 mb-4">
                  These terms and conditions are governed by and construed in accordance with the laws of Delaware, 
                  United States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="text-gray-300 space-y-2">
                  <p>Email: kleber@ziontechgroup.com</p>
                  <p>Phone: +1 (302) 464-0950</p>
                  <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;