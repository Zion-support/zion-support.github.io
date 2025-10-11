'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const CybersecuritySolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive cybersecurity solutions to protect your business from threats." />
        <meta name="keywords" content="cybersecurity solutions, security, threat protection, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Cybersecurity Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions to protect your business from threats.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Threat Detection</h3>
                <p className="text-gray-300 mb-4">
                  Advanced threat detection and prevention systems to keep your business secure.
                </p>
                <div className="text-cyan-400 font-semibold">Learn More →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Security Audits</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive security audits to identify and fix vulnerabilities.
                </p>
                <div className="text-cyan-400 font-semibold">Learn More →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Incident Response</h3>
                <p className="text-gray-300 mb-4">
                  Rapid response and recovery from security incidents and breaches.
                </p>
                <div className="text-cyan-400 font-semibold">Learn More →</div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

export default CybersecuritySolutionsPage
