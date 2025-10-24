'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, Users } from 'lucide-react'
const securityFeatures = [
  {
    title: 'Advanced Threat Detection',
    description: 'Real-time monitoring and detection of sophisticated cyber threats.',
    icon: <Eye className="w-8 h-8" />,
  },
  {
    title: 'Data Encryption',
    description: 'End-to-end encryption for all data transmission and storage.',
    icon: <Lock className="w-8 h-8" />,
  },
  {
    title: '24/7 Monitoring',
    description: 'Round-the-clock security monitoring and incident response.',
    icon: <AlertTriangle className="w-8 h-8" />,
  },
  {
    title: 'Compliance Management',
    description: 'Automated compliance monitoring and reporting for various standards.',
    icon: <CheckCircle className="w-8 h-8" />,
  },
  {
    title: 'Access Control',
    description: 'Multi-factor authentication and role-based access management.',
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: 'Security Analytics',
    description: 'Advanced analytics and reporting for security insights.',
    icon: <Shield className="w-8 h-8" />,
  },
]
export default function AdvancedSecuritySuitePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <SEOOptimizer
        title="Advanced Security Suite - ZionTechGroup"
        description="Comprehensive security solutions with advanced threat detection, data encryption, and 24/7 monitoring."
        keywords="security, cybersecurity, threat detection, data encryption, compliance"
      />
            <Navigation />
      {/* Hero Section */}
                <section className="relative py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Advanced <span className="text-blue-600">Security Suite</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive security solutions designed to protect your business from evolving cyber threats 
              and ensure compliance with industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive security suite provides multiple layers of protection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Secure Your Business Today
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Don't wait for a security breach. Protect your business with our advanced security solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 transition-colors">
              Get Started
            </button>
            <button className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-red-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}