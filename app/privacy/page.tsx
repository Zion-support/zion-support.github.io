'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Shield, Eye, Database, Lock, Users, Settings, Mail, Phone, MapPin } from 'lucide-react'
import Layout from '../layout'

const PrivacyPage: React.FC = () => {
  const dataTypes = [
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: 'Personal Information',
      description: 'Name, email address, phone number, and other contact details',
      examples: ['Email addresses', 'Names', 'Phone numbers', 'Mailing addresses']
    },
    {
      icon: <Database className="w-6 h-6 text-green-500" />,
      title: 'Usage Data',
      description: 'Information about how you use our services and website',
      examples: ['Page views', 'Click patterns', 'Session duration', 'Feature usage']
    },
    {
      icon: <Settings className="w-6 h-6 text-purple-500" />,
      title: 'Technical Data',
      description: 'Device information, IP addresses, and technical identifiers',
      examples: ['IP addresses', 'Browser type', 'Device information', 'Operating system']
    },
    {
      icon: <Eye className="w-6 h-6 text-orange-500" />,
      title: 'Cookies & Tracking',
      description: 'Data collected through cookies and similar technologies',
      examples: ['Session cookies', 'Analytics cookies', 'Preference cookies', 'Marketing cookies']
    }
  ]

  const purposes = [
    {
      title: 'Service Delivery',
      description: 'To provide and maintain our AI and IT services',
      icon: <Settings className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Communication',
      description: 'To respond to inquiries and provide customer support',
      icon: <Mail className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Improvement',
      description: 'To analyze usage patterns and improve our services',
      icon: <Database className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Security',
      description: 'To protect against fraud and ensure system security',
      icon: <Shield className="w-6 h-6 text-red-500" />
    }
  ]

  const rights = [
    {
      title: 'Access',
      description: 'Request a copy of your personal data we hold',
      icon: <Eye className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Rectification',
      description: 'Correct inaccurate or incomplete personal data',
      icon: <Settings className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Erasure',
      description: 'Request deletion of your personal data',
      icon: <Database className="w-6 h-6 text-red-500" />
    },
    {
      title: 'Portability',
      description: 'Receive your data in a structured, machine-readable format',
      icon: <Lock className="w-6 h-6 text-purple-500" />
    }
  ]

  return (
    <Layout 
      title="Privacy Policy - Zion Tech Group"
      description="Learn how we collect, use, and protect your personal information. Our commitment to privacy and data protection."
      keywords="privacy policy, data protection, GDPR, personal information, privacy rights"
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-16 h-16 text-purple-500" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Privacy <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <div className="text-sm text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6">Introduction</h2>
            <p className="text-gray-300 mb-6">
              At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
            <p className="text-gray-300 mb-8">
              By using our services, you agree to the collection and use of information in accordance with this policy. 
              If you do not agree with our policies and practices, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">Information We Collect</h2>
            <p className="text-gray-300 mb-6">
              We collect several types of information from and about users of our services:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {dataTypes.map((type, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center mb-4">
                    {type.icon}
                    <h3 className="text-lg font-semibold text-white ml-3">{type.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <ul className="space-y-1">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="text-gray-400 text-sm">• {example}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">How We Use Your Information</h2>
            <p className="text-gray-300 mb-6">
              We use the information we collect for various purposes, including:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {purposes.map((purpose, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center mb-3">
                    {purpose.icon}
                    <h3 className="text-lg font-semibold text-white ml-3">{purpose.title}</h3>
                  </div>
                  <p className="text-gray-300">{purpose.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">Information Sharing and Disclosure</h2>
            <p className="text-gray-300 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
            </p>
            <ul className="space-y-2 mb-8 text-gray-300">
              <li>• <strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our services</li>
              <li>• <strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
              <li>• <strong>Business Transfers:</strong> In the event of a merger or acquisition, your information may be transferred to the new entity</li>
              <li>• <strong>Consent:</strong> We may share information with your explicit consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-6">Data Security</h2>
            <p className="text-gray-300 mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="space-y-2 mb-8 text-gray-300">
              <li>• Encryption of data in transit and at rest</li>
              <li>• Regular security assessments and updates</li>
              <li>• Access controls and authentication mechanisms</li>
              <li>• Employee training on data protection practices</li>
              <li>• Incident response procedures</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-6">Your Rights</h2>
            <p className="text-gray-300 mb-6">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {rights.map((right, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="flex items-center mb-3">
                    {right.icon}
                    <h3 className="text-lg font-semibold text-white ml-3">{right.title}</h3>
                  </div>
                  <p className="text-gray-300">{right.description}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">Cookies and Tracking Technologies</h2>
            <p className="text-gray-300 mb-6">
              We use cookies and similar tracking technologies to enhance your experience on our website. 
              You can control cookie preferences through your browser settings or our cookie consent banner.
            </p>
            <p className="text-gray-300 mb-8">
              For more detailed information about our use of cookies, please see our{' '}
              <a href="/cookies" className="text-purple-400 hover:text-purple-300 underline">
                Cookie Policy
              </a>.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">Data Retention</h2>
            <p className="text-gray-300 mb-6">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
              unless a longer retention period is required or permitted by law.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">International Data Transfers</h2>
            <p className="text-gray-300 mb-6">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">Children's Privacy</h2>
            <p className="text-gray-300 mb-6">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. 
              If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">Changes to This Privacy Policy</h2>
            <p className="text-gray-300 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
              and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
            </p>

            <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-300">privacy@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-300">+1 (302) 464-0950</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-300">364 E Main St STE 1008, Middletown, DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PrivacyPage