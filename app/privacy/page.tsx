import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Shield, Eye, Edit, Trash2, Download, CheckCircle } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const PrivacyPage: React.FC = () => {
  const dataTypes = [
    {
      category: 'Personal Information',
      description: 'Name, email address, phone number, and company information',
      icon: Shield
    },
    {
      category: 'Usage Data',
      description: 'Information about how you use our services and website',
      icon: Eye
    },
    {
      category: 'Technical Data',
      description: 'IP address, browser type, device information, and cookies',
      icon: Shield
    }
  ]

  const purposes = [
    'Provide and improve our services',
    'Communicate with you about our services',
    'Process payments and transactions',
    'Comply with legal obligations',
    'Protect against fraud and security threats'
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
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</title>
        <meta name="description" content="Learn about how Zion Tech Group collects, uses, and protects your personal information. Our commitment to data privacy and security." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, privacy rights, data security" />
      </Helmet>

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
              <div className="text-sm text-gray-400">
                Last updated: January 15, 2024
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Introduction</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use 
                our website and services.
              </p>
              <p className="text-gray-300 leading-relaxed">
                By using our services, you agree to the collection and use of information in accordance with this policy. 
                If you do not agree with the terms of this Privacy Policy, please do not use our services.
              </p>
            </div>
          </div>
        </section>

        {/* Information We Collect */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Information We Collect
              </h2>
              <p className="text-xl text-gray-300">
                We collect various types of information to provide and improve our services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dataTypes.map((type, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{type.category}</h3>
                  <p className="text-gray-300">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Use Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="space-y-3">
                {purposes.map((purpose, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    {purpose}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Your Privacy Rights
              </h2>
              <p className="text-xl text-gray-300">
                You have certain rights regarding your personal information
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {rights.map((right, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <right.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{right.title}</h3>
                  <p className="text-gray-300">{right.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
              <p className="text-gray-300 mb-8">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-4">
                <div className="text-cyan-400 font-semibold">Email: kleber@ziontechgroup.com</div>
                <div className="text-cyan-400 font-semibold">Phone: (302) 464-0950</div>
                <div className="text-gray-300">
                  Address: 364 E Main St STE 1008, Middletown, DE 19709
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

export default PrivacyPage