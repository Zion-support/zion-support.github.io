'use client'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Shield, Lock, Eye, AlertTriangle, Globe, Database } from 'lucide-react'

interface SecurityEnhancerProps {
  children: React.ReactNode
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({ children }) => {
  useEffect(() => {
    // Security enhancement logic
    const enhanceSecurity = () => {
      // Add security headers
      const securityHeaders = {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'strict-origin-when-cross-origin'
      }

      // Add CSP meta tag
      const cspMeta = document.createElement('meta')
      cspMeta.httpEquiv = 'Content-Security-Policy'
      cspMeta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:;"
      document.head.appendChild(cspMeta)

      // Add security event listeners
      window.addEventListener('beforeunload', (e) => {
        // Prevent accidental data loss
        e.preventDefault()
        e.returnValue = ''
      })

      // Disable right-click context menu in production
      if (process.env.NODE_ENV === 'production') {
        document.addEventListener('contextmenu', (e) => {
          e.preventDefault()
        })
      }

      // Disable F12 and other dev tools shortcuts
      document.addEventListener('keydown', (e) => {
        if (process.env.NODE_ENV === 'production') {
          if (e.key === 'F12' || 
              (e.ctrlKey && e.shiftKey && e.key === 'I') ||
              (e.ctrlKey && e.shiftKey && e.key === 'C') ||
              (e.ctrlKey && e.shiftKey && e.key === 'J') ||
              (e.ctrlKey && e.key === 'U')) {
            e.preventDefault()
          }
        }
      })
    }

    enhanceSecurity()

    return () => {
      // Cleanup if needed
    }
  }, [])

  return (
    <>
      <Helmet>
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      {children}
    </>
  )
}

// Security Features Component
export const SecurityFeatures: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Advanced Threat Protection',
      description: 'Multi-layered security measures to protect against various cyber threats'
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: 'Data Encryption',
      description: 'End-to-end encryption for all data transmission and storage'
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-500" />,
      title: 'Real-time Monitoring',
      description: 'Continuous monitoring and threat detection with instant alerts'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-orange-500" />,
      title: 'Vulnerability Assessment',
      description: 'Regular security audits and vulnerability assessments'
    }
  ]

  const securityMeasures = [
    'SSL/TLS encryption',
    'Two-factor authentication',
    'Regular security updates',
    'Firewall protection',
    'Intrusion detection',
    'Data backup and recovery',
    'Access control management',
    'Security training'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Security Enhancer - Zion Tech Group</title>
        <meta name="description" content="Advanced security enhancement solutions by Zion Tech Group. Protect your business with enterprise-grade security." />
        <meta name="keywords" content="security enhancement, cybersecurity, data protection, threat protection, Zion Tech Group" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Security Enhancer
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Protect your business with our advanced security enhancement solutions. 
              Enterprise-grade protection against cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Secure Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security solutions for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-lg rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border border-white/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Measures
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry-standard security practices and protocols
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityMeasures.map((measure, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{measure}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Secure Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Protect your business with enterprise-grade security solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Start Security Audit
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Contact Security Expert
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SecurityEnhancer