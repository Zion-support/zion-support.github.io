import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Lock, Eye, Database, Mail, Phone, Globe } from "lucide-react";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Privacy policy for Zion Tech Group services. Learn how we protect and handle your data with enterprise-grade security." />
        <meta name="keywords" content="privacy policy, data protection, GDPR compliance, data security, Zion Tech Group privacy" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Shield className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Data Protection & Privacy</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Privacy Policy
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your privacy is our priority. Learn how we collect, use, and protect your data with enterprise-grade security measures and compliance with international privacy standards.
            </p>
            
            <p className="text-sm text-gray-400">
              Last updated: January 15, 2024
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-cyan-400 mr-3" />
                  Introduction
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI and IT solutions, micro SAAS products, and related services.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access or use our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Database className="w-6 h-6 text-cyan-400 mr-3" />
                  Information We Collect
                </h2>
                
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Personal Information</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us, including:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Name, email address, phone number, and mailing address</li>
                  <li>Company information and job title</li>
                  <li>Payment and billing information</li>
                  <li>Communication preferences and feedback</li>
                  <li>Account credentials and profile information</li>
                </ul>

                <h3 className="text-xl font-semibold text-cyan-400 mb-3">Usage Information</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We automatically collect certain information about your use of our services:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>IP address, browser type, and device information</li>
                  <li>Pages visited, time spent, and navigation patterns</li>
                  <li>Service usage data and performance metrics</li>
                  <li>Error logs and diagnostic information</li>
                </ul>

                <h3 className="text-xl font-semibold text-cyan-400 mb-3">AI and Analytics Data</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  For our AI-powered services, we may collect and process:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Data inputs for AI processing and analysis</li>
                  <li>AI model performance and accuracy metrics</li>
                  <li>User interaction patterns with AI features</li>
                  <li>Anonymized usage statistics for service improvement</li>
                </ul>
              </div>

              {/* How We Use Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Eye className="w-6 h-6 text-cyan-400 mr-3" />
                  How We Use Your Information
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and manage your account</li>
                  <li>Deliver AI-powered solutions and personalized experiences</li>
                  <li>Communicate with you about services, updates, and support</li>
                  <li>Ensure security and prevent fraud</li>
                  <li>Comply with legal obligations and enforce our terms</li>
                  <li>Conduct research and analytics to improve our offerings</li>
                </ul>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Lock className="w-6 h-6 text-cyan-400 mr-3" />
                  Data Security
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We implement comprehensive security measures to protect your information:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>End-to-end encryption for data transmission and storage</li>
                  <li>Multi-factor authentication and access controls</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Employee training on data protection best practices</li>
                  <li>Incident response procedures and breach notification</li>
                  <li>Compliance with industry security standards (SOC 2, ISO 27001)</li>
                </ul>
              </div>

              {/* Data Sharing */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Data Sharing and Disclosure</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations or court orders</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>With trusted service providers who assist in our operations</li>
                  <li>In connection with a business transfer or acquisition</li>
                </ul>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Your Privacy Rights</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Access and obtain a copy of your personal data</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Delete your personal data (right to be forgotten)</li>
                  <li>Restrict or object to certain processing activities</li>
                  <li>Data portability and transfer to another service</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Email</h3>
                    <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Phone</h3>
                    <p className="text-cyan-400">+1 302 464 0950</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Address</h3>
                    <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </div>

              {/* Updates */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Policy Updates</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Questions About Your Privacy?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're here to help. Contact our privacy team for any questions or concerns about how we handle your data.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Contact Privacy Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
