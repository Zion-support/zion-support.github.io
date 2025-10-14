'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Shield, Eye, Database, Server, Lock, User, Mail, Phone, Edit, Trash2, Download } from 'lucide-react'

const PrivacyPage: React.FC = () => {
  const dataTypes = [
    {
      category: 'Personal Information',
      description: 'Name, email address, phone number, and company information',
      icon: User
    },
    {
      category: 'Usage Data',
      description: 'How you interact with our services and website',
      icon: Database
    },
    {
      category: 'Technical Data',
      description: 'IP address, browser type, device information, and cookies',
      icon: Server
    }
  ]

  const purposes = [
    {
      title: 'Service Delivery',
      description: 'To provide and maintain our AI and IT services'
    },
    {
      title: 'Communication',
      description: 'To respond to inquiries and provide customer support'
    },
    {
      title: 'Improvement',
      description: 'To analyze usage patterns and improve our services'
    },
    {
      title: 'Legal Compliance',
      description: 'To comply with applicable laws and regulations'
    }
  ]

  const rights = [
    {
      title: 'Access',
      description: 'Request access to your personal data',
      icon: Eye
    },
    {
      title: 'Rectification',
      description: 'Correct inaccurate or incomplete data',
      icon: Edit
    },
    {
      title: 'Erasure',
      description: 'Request deletion of your personal data',
      icon: Trash2
    },
    {
      title: 'Portability',
      description: 'Receive your data in a structured format',
      icon: Download
    }
  ]

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</title>
        <meta name="description" content="Learn how we collect, use, and protect your personal information. Our commitment to data privacy and security." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal information, data security, privacy rights" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Privacy Policy</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Your privacy is important to us. Learn how we collect, use, and protect your personal information.
              </p>
              <p className="text-sm text-gray-400">
                Last updated: January 15, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Data We Collect */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Data We Collect</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dataTypes.map((type, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <type.icon className="w-8 h-8 text-cyan-400" />
                    <h3 className="text-xl font-bold text-white">{type.category}</h3>
                  </div>
                  <p className="text-gray-300">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Use Data */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">How We Use Your Data</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {purposes.map((purpose, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">{purpose.title}</h3>
                  <p className="text-gray-300">{purpose.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Your Privacy Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {rights.map((right, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <right.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{right.title}</h3>
                  <p className="text-gray-300 text-sm">{right.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Security */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Data Security</h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-8 h-8 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">We Protect Your Data</h3>
              </div>
              <div className="space-y-4 text-gray-300">
                <p>We implement industry-standard security measures to protect your personal information:</p>
                <ul className="space-y-2 ml-6">
                  <li>• Encryption of data in transit and at rest</li>
                  <li>• Regular security audits and assessments</li>
                  <li>• Access controls and authentication</li>
                  <li>• Secure data centers and infrastructure</li>
                  <li>• Employee training on data protection</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Questions About Privacy?</h2>
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions about this privacy policy or how we handle your data, please contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Contact Us
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Download PDF
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default PrivacyPage
