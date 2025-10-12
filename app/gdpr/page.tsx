'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Shield, Lock, FileText, Users, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const GDPRPage: React.FC = () => {
  const complianceFeatures = [
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Data Protection',
      description: 'Implement robust data protection measures to safeguard personal information.'
    },
    {
      icon: <Lock className="w-8 h-8 text-green-500" />,
      title: 'Privacy by Design',
      description: 'Build privacy considerations into every aspect of your systems and processes.'
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-500" />,
      title: 'Consent Management',
      description: 'Manage user consent effectively with clear, granular consent options.'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Data Subject Rights',
      description: 'Enable users to exercise their rights under GDPR including access, rectification, and deletion.'
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
      title: 'Breach Notification',
      description: 'Implement systems to detect and report data breaches within required timeframes.'
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-cyan-500" />,
      title: 'Compliance Auditing',
      description: 'Regular audits and assessments to ensure ongoing GDPR compliance.'
    }
  ]

  const benefits = [
    'Enhanced data protection and security',
    'Improved customer trust and reputation',
    'Reduced risk of regulatory fines',
    'Better data governance and management',
    'Competitive advantage in privacy-conscious markets',
    'Streamlined compliance processes'
  ]

  const requirements = [
    'Lawful basis for processing personal data',
    'Clear and transparent privacy notices',
    'Data minimization and purpose limitation',
    'Accurate and up-to-date data',
    'Secure storage and processing',
    'Data subject rights implementation',
    'Breach notification procedures',
    'Data Protection Impact Assessments (DPIA)'
  ]

  return (
    <>
      <Helmet>
        <title>GDPR Compliance | Zion Tech Group</title>
        <meta name="description" content="Ensure GDPR compliance with our comprehensive data protection solutions. Privacy by design, consent management, and regulatory compliance services." />
        <meta name="keywords" content="GDPR compliance, data protection, privacy by design, consent management, regulatory compliance, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              GDPR
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Compliance
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ensure full GDPR compliance with our comprehensive data protection solutions. 
              Protect personal data, build trust, and avoid costly regulatory penalties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                GDPR Compliance Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive solutions to help you meet all GDPR requirements and protect personal data.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {complianceFeatures.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Why GDPR Compliance Matters
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  GDPR compliance is not just about avoiding fines - it's about building trust with your customers, 
                  protecting their privacy, and creating a competitive advantage in today's privacy-conscious market.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Key GDPR Requirements</h3>
                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-gray-300 text-sm">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Ensure GDPR Compliance?
                </h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let our experts help you implement comprehensive data protection measures and achieve full GDPR compliance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Schedule Consultation
                  </Link>
                  <Link 
                    to="/cybersecurity" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Explore Security Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default GDPRPage