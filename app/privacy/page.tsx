'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Shield, Lock, Eye, Database, UserCheck, AlertCircle } from 'lucide-react'

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's privacy policy outlining how we collect, use, and protect your personal information." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal information, data security" />
      </Helmet>
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-12 h-12 text-cyan-400 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 space-y-8">
              
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Lock className="w-6 h-6 text-cyan-400 mr-3" />
                  Introduction
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you visit our website 
                  ziontechgroup.com or use our services.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Database className="w-6 h-6 text-cyan-400 mr-3" />
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Personal Information</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>Name and contact information (email, phone number, address)</li>
                      <li>Company information and job title</li>
                      <li>Payment and billing information</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Technical Information</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>IP address and device information</li>
                      <li>Browser type and version</li>
                      <li>Website usage data and analytics</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Information */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Eye className="w-6 h-6 text-cyan-400 mr-3" />
                  How We Use Your Information
                </h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Provide and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Develop new products and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              {/* Data Protection */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-cyan-400 mr-3" />
                  Data Protection
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. This includes:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response procedures</li>
                </ul>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <UserCheck className="w-6 h-6 text-cyan-400 mr-3" />
                  Your Rights
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
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
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking</h2>
                <p className="text-gray-300 leading-relaxed">
                  We use cookies and similar technologies to enhance your experience, analyze usage patterns, 
                  and provide personalized content. You can control cookie settings through your browser preferences.
                </p>
              </section>

              {/* Third Parties */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may share your information with trusted third-party service providers who assist us in 
                  operating our website and providing services. These parties are bound by confidentiality 
                  agreements and are prohibited from using your information for any other purpose.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <AlertCircle className="w-6 h-6 text-cyan-400 mr-3" />
                  Contact Us
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-white/10 rounded-lg p-6">
                  <p className="text-white font-semibold mb-2">Zion Tech Group</p>
                  <p className="text-gray-300">Email: privacy@ziontechgroup.com</p>
                  <p className="text-gray-300">Phone: (302) 464-0950</p>
                  <p className="text-gray-300">Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
                </div>
              </section>

              {/* Updates */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Policy Updates</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by 
                  posting the new Privacy Policy on this page and updating the "Last updated" date. Your 
                  continued use of our services after any modifications constitutes acceptance of the updated policy.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PrivacyPage