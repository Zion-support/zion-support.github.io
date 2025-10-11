'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const SupportPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Get support for your AI and IT solutions. 24/7 customer support available." />
        <meta name="keywords" content="support, help, customer service, AI support, IT support, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Support</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're here to help you succeed with our AI and IT solutions. Get support 24/7.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Contact Support</h3>
                <p className="text-gray-300 mb-4">
                  Get in touch with our support team for immediate assistance.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-cyan-400 font-semibold">Phone:</span>
                    <a href="tel:+13024640950" className="text-white hover:text-cyan-400 transition-colors">
                      +1 (302) 464-0950
                    </a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-cyan-400 font-semibold">Email:</span>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-cyan-400 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Documentation</h3>
                <p className="text-gray-300 mb-4">
                  Access our comprehensive documentation and guides.
                </p>
                <div className="text-cyan-400 font-semibold">View Docs →</div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default SupportPage
