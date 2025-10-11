'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Read our terms of service to understand the terms and conditions for using our services." />
        <meta name="keywords" content="terms of service, terms, conditions, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Terms of Service</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Please read these terms carefully before using our services.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
                <p className="text-gray-300 mb-6">
                  By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>
                <p className="text-gray-300 mb-6">
                  Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
                <p className="text-gray-300 mb-6">
                  The materials on our website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                <p className="text-gray-300">
                  If you have any questions about these Terms of Service, please contact us at{' '}
                  <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default TermsPage
