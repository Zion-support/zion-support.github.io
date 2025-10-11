'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Shield, Eye, Edit, Trash2, Download, Database, Server, Lock } from 'lucide-react'

const PrivacyPage: React.FC = () => {
  const dataTypes = [
    {
      category: 'Personal Information',
      icon: Database,
      description: 'Name, email, phone number, and other identifying information'
    },
    {
      category: 'Usage Data',
      icon: Server,
      description: 'How you interact with our services and website'
    },
    {
      category: 'Technical Data',
      icon: Server,
      description: 'IP address, browser type, device information, and cookies'
    }
  ];

  const purposes = [
    {
      title: 'Service Delivery',
      description: 'To provide and maintain our AI and IT services',
      icon: Shield
    },
    {
      title: 'Communication',
      description: 'To respond to inquiries and provide customer support',
      icon: Eye
    },
    {
      title: 'Improvement',
      description: 'To analyze usage patterns and improve our services',
      icon: Edit
    }
  ];

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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</title>
        <meta name="description" content="Learn how Zion Tech Group protects your privacy and handles your personal data in compliance with GDPR and other privacy regulations." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal data, privacy rights" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Policy</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      {/* Data Collection Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What Data We Collect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We collect only the data necessary to provide our services and improve your experience.
            </p>
          </div>
          
          <div className="grid md: grid-cols-3 gap-8">
            {dataTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <type.icon className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{type.category}</h3>
                </div>
                <p className="text-gray-300">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Usage Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              How We Use Your Data
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We use your data responsibly and only for legitimate business purposes.
            </p>
          </div>
          
          <div className="grid md: grid-cols-3 gap-8">
            {purposes.map((purpose, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <purpose.icon className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{purpose.title}</h3>
                </div>
                <p className="text-gray-300">{purpose.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Your Privacy Rights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              You have control over your personal data. Here are your rights under GDPR and other privacy laws.
            </p>
          </div>
          
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-6">
            {rights.map((right, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <right.icon className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">{right.title}</h3>
                </div>
                <p className="text-gray-300 text-sm">{right.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Security Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8">
            <Lock className="w-16 h-16 text-blue-400 mr-4" />
            <h2 className="text-4xl font-bold text-white">
              Data Security
            </h2>
          </div>
          <p className="text-xl text-gray-300 mb-8">
            We implement industry-standard security measures to protect your data from unauthorized access, 
            alteration, disclosure, or destruction.
          </p>
          <div className="grid md: grid-cols-3 gap-6 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">Encryption</h3>
              <p className="text-gray-300">All data is encrypted in transit and at rest using AES-256 encryption.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">Access Controls</h3>
              <p className="text-gray-300">Strict access controls ensure only authorized personnel can access your data.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-2">Regular Audits</h3>
              <p className="text-gray-300">Regular security audits and penetration testing ensure our systems remain secure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Questions About Your Privacy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            If you have any questions about this privacy policy or how we handle your data, please contact us.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Contact Us
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Request Data
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPage;