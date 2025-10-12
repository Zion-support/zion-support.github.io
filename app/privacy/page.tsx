import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Shield, Lock, Eye, Database, Mail, Phone, MapPin } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</title>
        <meta name="description" content="Zion Tech Group's privacy policy outlining how we collect, use, and protect your personal information in compliance with GDPR and other privacy regulations." />
        <meta name="keywords" content="privacy policy, data protection, GDPR compliance, personal information, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/privacy" />
      </Helmet>

      <div className="min-h-screen bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <Shield className="w-4 h-4" />
              <span>Privacy Policy</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Lock className="w-6 h-6 text-cyan-400 mr-3" />
                Information We Collect
              </h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
                <p className="text-gray-300 mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Create an account or contact us</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Request a quote or demo</li>
                  <li>Use our services</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  This may include your name, email address, phone number, company information, and any other information you choose to provide.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Eye className="w-6 h-6 text-emerald-400 mr-3" />
                How We Use Your Information
              </h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="text-gray-300 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Develop new products and services</li>
                  <li>Monitor and analyze trends and usage</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Database className="w-6 h-6 text-blue-400 mr-3" />
                Information Sharing
              </h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="text-gray-300 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>With trusted service providers who assist us in operating our website</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a merger, acquisition, or sale of assets</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Shield className="w-6 h-6 text-purple-400 mr-3" />
                Data Security
              </h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="text-gray-300 mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Employee training on data protection</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Your Rights</h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="text-gray-300 mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Objection to processing</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Cookies and Tracking</h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="text-gray-300 mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}