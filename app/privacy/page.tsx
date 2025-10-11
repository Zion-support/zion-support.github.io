'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Shield, Lock, Eye, Database, User, Mail, Phone, Calendar, CheckCircle, ArrowRight, Globe, Server, Key, FileText, AlertTriangle } from 'lucide-react'

const PrivacyPage: React.FC = () => {
  const dataTypes = [
    {
      category: 'Personal Information',
      description: 'Name, email address, phone number, and other contact information',
      icon: User
    },
    {
      category: 'Usage Data',
      description: 'Information about how you use our website and services',
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
      title: 'Service Provision',
      description: 'To provide and maintain our services',
      icon: Globe
    },
    {
      title: 'Communication',
      description: 'To communicate with you about our services',
      icon: Mail
    },
    {
      title: 'Analytics',
      description: 'To analyze and improve our website and services',
      icon: Database
    },
    {
      title: 'Legal Compliance',
      description: 'To comply with legal obligations',
      icon: Shield
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
      icon: FileText
    },
    {
      title: 'Erasure',
      description: 'Request deletion of your personal data',
      icon: Trash2
    },
    {
      title: 'Portability',
      description: 'Receive your data in a structured format',
      icon: Database
    },
    {
      title: 'Restriction',
      description: 'Limit how we process your data',
      icon: Lock
    },
    {
      title: 'Objection',
      description: 'Object to processing of your personal data',
      icon: AlertTriangle
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-rain particle-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 glow-cyan">
              <Shield className="w-4 h-4 mr-2" />
              Privacy Policy
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 neon-text-enhanced">
              Your <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Privacy</span> Matters
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              We are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy explains how we collect, use, and protect your data.
            </p>
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
              Information We <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Collect</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We collect different types of information to provide and improve our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataTypes.map((type, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-cyan-500/50 group text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {type.category}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Data */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
              How We Use Your <span className="bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">Data</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use your personal information for specific purposes and always with your consent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {purposes.map((purpose, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-purple-500/50 group text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <purpose.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {purpose.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {purpose.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
              Your <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Rights</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              You have certain rights regarding your personal information under applicable data protection laws.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rights.map((right, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-green-500/50 group">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <right.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                    {right.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {right.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
            Questions About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Privacy?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            If you have any questions about this privacy policy or how we handle your data, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:privacy@ziontechgroup.com"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center glow-cyan"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PrivacyPage