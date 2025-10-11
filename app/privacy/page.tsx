import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Shield, Eye, Edit, Trash2, Download, Lock, Database, Server } from 'lucide-react'

const PrivacyPage: React.FC = () => {
  const dataTypes = [
    {
      category: 'Personal Information',
      description: 'Name, email address, phone number, and other contact details',
      icon: Database
    },
    {
      category: 'Usage Data',
      description: 'Information about how you use our services and website',
      icon: Server
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
      description: 'To provide and maintain our AI and IT services'
    },
    {
      title: 'Communication',
      description: 'To respond to your inquiries and send important updates'
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
      description: 'Request correction of inaccurate data',
      icon: Edit
    },
    {
      title: 'Erasure',
      description: 'Request deletion of your personal data',
      icon: Trash2
    },
    {
      title: 'Portability',
      description: 'Request a copy of your data in a portable format',
      icon: Download
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Privacy <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-400">Last updated: January 15, 2024</p>
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Information We Collect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataTypes.map((dataType, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mb-6">
                  <dataType.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{dataType.category}</h3>
                <p className="text-gray-300">{dataType.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">How We Use Your Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {purposes.map((purpose, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{purpose.title}</h3>
                  <p className="text-gray-300">{purpose.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Your Rights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rights.map((right, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl mx-auto mb-6">
                  <right.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{right.title}</h3>
                <p className="text-gray-300">{right.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Security */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Data Security</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">We Protect Your Data</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Lock className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Encryption</h4>
                    <p className="text-gray-300">All data is encrypted in transit and at rest using industry-standard protocols.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Access Controls</h4>
                    <p className="text-gray-300">Strict access controls ensure only authorized personnel can access your data.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Database className="h-6 w-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Regular Audits</h4>
                    <p className="text-gray-300">We regularly audit our security practices and update them as needed.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise-Grade Security</h3>
              <p className="text-gray-300">Your data is protected with the same security measures used by Fortune 500 companies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Questions About Privacy?</h2>
          <p className="text-xl text-gray-300 mb-8">
            If you have any questions about this privacy policy or how we handle your data, please contact us.
          </p>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: privacy@ziontechgroup.com</p>
              <p>Phone: +1 (302) 464-0950</p>
              <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PrivacyPage