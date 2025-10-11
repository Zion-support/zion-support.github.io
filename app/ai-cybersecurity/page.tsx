'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AiCybersecurityPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Cybersecurity - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Advanced AI-powered cybersecurity solutions to protect your digital assets." />
        <meta name="keywords" content="AI cybersecurity, cybersecurity, security solutions, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">AI Cybersecurity</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI-powered cybersecurity solutions to protect your digital assets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Threat Detection</h3>
                <p className="text-gray-300 mb-4">
                  AI-powered threat detection and prevention to keep your systems secure.
                </p>
                <div className="text-cyan-400 font-semibold">Learn More →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Real-time Monitoring</h3>
                <p className="text-gray-300 mb-4">
                  24/7 monitoring and alerting for potential security threats.
                </p>
                <div className="text-cyan-400 font-semibold">Learn More →</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Incident Response</h3>
                <p className="text-gray-300 mb-4">
                  Rapid response and recovery from security incidents.
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

export default AiCybersecurityPage
