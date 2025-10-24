import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const TermsPage: React.FC = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services.
            </p>
            <p className="text-sm text-gray-400">Last updated: January 1, 2024</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
                <p className="text-gray-300 mb-6">
                  By accessing and using our services, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>
                <p className="text-gray-300 mb-6">
                  Permission is granted to temporarily download one copy of the materials on our website 
                  for personal, non-commercial transitory viewing only.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
                <p className="text-gray-300 mb-6">
                  The materials on our website are provided on an 'as is' basis. We make no warranties, 
                  expressed or implied, and hereby disclaim and negate all other warranties.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">Limitations</h2>
                <p className="text-gray-300 mb-6">
                  In no event shall our company or its suppliers be liable for any damages arising out 
                  of the use or inability to use the materials on our website.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">Accuracy of Materials</h2>
                <p className="text-gray-300 mb-6">
                  The materials appearing on our website could include technical, typographical, or 
                  photographic errors. We do not warrant that any of the materials are accurate, 
                  complete, or current.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">Links</h2>
                <p className="text-gray-300 mb-6">
                  We have not reviewed all of the sites linked to our website and are not responsible 
                  for the contents of any such linked site.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">Modifications</h2>
                <p className="text-gray-300 mb-6">
                  We may revise these terms of service at any time without notice. By using this website, 
                  you are agreeing to be bound by the then current version of these terms.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                <p className="text-gray-300 mb-6">
                  If you have any questions about these Terms of Service, please contact us at 
                  <a href="mailto:legal@ziontech.com" className="text-emerald-400 hover:text-emerald-300">
                    legal@ziontech.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TermsPage;