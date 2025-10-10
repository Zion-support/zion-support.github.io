'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FileText, Scale, AlertTriangle, Shield, Users, Gavel } from 'lucide-react'

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's terms of service outlining the rules and regulations for using our website and services." />
        <meta name="keywords" content="terms of service, terms and conditions, user agreement, legal terms" />
      </Helmet>
      
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <FileText className="w-12 h-12 text-cyan-400 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">Terms of Service</h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Please read these terms carefully before using our website and services.
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
                  <Scale className="w-6 h-6 text-cyan-400 mr-3" />
                  Agreement to Terms
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  These Terms of Service ("Terms") govern your use of Zion Tech Group's website and services. 
                  By accessing or using our services, you agree to be bound by these Terms. If you disagree 
                  with any part of these terms, you may not access our services.
                </p>
              </section>

              {/* Services Description */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Users className="w-6 h-6 text-cyan-400 mr-3" />
                  Our Services
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Zion Tech Group provides AI and IT solutions including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Artificial Intelligence solutions and consulting</li>
                  <li>Cloud services and infrastructure management</li>
                  <li>Cybersecurity services and monitoring</li>
                  <li>Data analytics and business intelligence</li>
                  <li>Mobile and web application development</li>
                  <li>IT consulting and managed services</li>
                </ul>
              </section>

              {/* User Responsibilities */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-cyan-400 mr-3" />
                  User Responsibilities
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  By using our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with or disrupt our services</li>
                  <li>Respect intellectual property rights</li>
                  <li>Maintain the confidentiality of your account</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </section>

              {/* Prohibited Uses */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <AlertTriangle className="w-6 h-6 text-cyan-400 mr-3" />
                  Prohibited Uses
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts. 
                  Prohibited activities include:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Violating any applicable laws or regulations</li>
                  <li>Transmitting malicious code or viruses</li>
                  <li>Attempting to gain unauthorized access to our systems</li>
                  <li>Interfering with the proper functioning of our services</li>
                  <li>Collecting user information without consent</li>
                  <li>Engaging in fraudulent or deceptive practices</li>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  All content, trademarks, and intellectual property on our website and services are owned by 
                  Zion Tech Group or our licensors. You may not:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Copy, modify, or distribute our content without permission</li>
                  <li>Use our trademarks without written consent</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                  <li>Create derivative works based on our services</li>
                </ul>
              </section>

              {/* Service Availability */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Service Availability</h2>
                <p className="text-gray-300 leading-relaxed">
                  We strive to maintain high service availability but cannot guarantee uninterrupted access. 
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time 
                  with or without notice. We are not liable for any downtime or service interruptions.
                </p>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed">
                  To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including but not limited to loss of 
                  profits, data, or business opportunities, arising from your use of our services.
                </p>
              </section>

              {/* Indemnification */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
                <p className="text-gray-300 leading-relaxed">
                  You agree to indemnify and hold harmless Zion Tech Group from any claims, damages, or expenses 
                  arising from your use of our services or violation of these Terms.
                </p>
              </section>

              {/* Termination */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may terminate or suspend your access to our services immediately, without prior notice, 
                  for any reason, including breach of these Terms. Upon termination, your right to use our 
                  services will cease immediately.
                </p>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Gavel className="w-6 h-6 text-cyan-400 mr-3" />
                  Governing Law
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State of 
                  Delaware, without regard to conflict of law principles. Any disputes arising from these Terms 
                  shall be resolved in the courts of Delaware.
                </p>
              </section>

              {/* Changes to Terms */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of any material 
                  changes by posting the new Terms on this page and updating the "Last updated" date. Your 
                  continued use of our services after any modifications constitutes acceptance of the updated Terms.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="bg-white/10 rounded-lg p-6">
                  <p className="text-white font-semibold mb-2">Zion Tech Group</p>
                  <p className="text-gray-300">Email: legal@ziontechgroup.com</p>
                  <p className="text-gray-300">Phone: (302) 464-0950</p>
                  <p className="text-gray-300">Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default TermsPage