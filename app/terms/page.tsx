import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group. Learn about our terms and conditions for using our services." />
        <meta name="keywords" content="terms of service, terms and conditions, legal terms, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Terms of
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 rounded-xl p-8 backdrop-blur-sm">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
                <p className="text-gray-300 mb-6">
                  By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">2. Use License</h2>
                <p className="text-gray-300 mb-6">
                  Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">3. Disclaimer</h2>
                <p className="text-gray-300 mb-6">
                  The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">4. Limitations</h2>
                <p className="text-gray-300 mb-6">
                  In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use the materials on Zion Tech Group's website.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">5. Accuracy of Materials</h2>
                <p className="text-gray-300 mb-6">
                  The materials appearing on Zion Tech Group's website could include technical, typographical, or photographic errors. Zion Tech Group does not warrant that any of the materials on its website are accurate, complete, or current.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">6. Links</h2>
                <p className="text-gray-300 mb-6">
                  Zion Tech Group has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">7. Modifications</h2>
                <p className="text-gray-300 mb-6">
                  Zion Tech Group may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">8. Governing Law</h2>
                <p className="text-gray-300 mb-6">
                  These terms and conditions are governed by and construed in accordance with the laws of Delaware, United States.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-gray-300 mb-6">
                  If you have any questions about these Terms of Service, please contact us at 
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">
                    kleber@ziontechgroup.com
                  </a>
                </p>

                <p className="text-gray-400 text-sm">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const page = React.lazy(() => import('./page'));
export default page;