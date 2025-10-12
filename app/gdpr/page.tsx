import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../layout'

const GDPRPage: React.FC = () => {
  return (
    <Layout
      title="GDPR Compliance - Zion Tech Group"
      description="Comprehensive GDPR compliance solutions including data protection, privacy rights, and regulatory compliance services."
      keywords="GDPR compliance, data protection, privacy rights, regulatory compliance, EU data protection"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                GDPR
              </span>
              <br />
              <span className="text-white">Compliance</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ensure full GDPR compliance with our comprehensive data protection solutions. 
              Protect your business and respect user privacy rights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Data Protection</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive data protection measures to ensure personal data is secure and compliant.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Data encryption</li>
                <li>• Access controls</li>
                <li>• Data minimization</li>
                <li>• Security monitoring</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Privacy Rights</h3>
              <p className="text-gray-300 mb-4">
                Implement user privacy rights including access, rectification, and erasure requests.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Right to access</li>
                <li>• Right to rectification</li>
                <li>• Right to erasure</li>
                <li>• Data portability</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Compliance Management</h3>
              <p className="text-gray-300 mb-4">
                Ongoing compliance management and monitoring to maintain GDPR standards.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li>• Compliance auditing</li>
                <li>• Risk assessments</li>
                <li>• Training programs</li>
                <li>• Documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default GDPRPage