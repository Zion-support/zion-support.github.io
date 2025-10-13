import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Shield, AlertTriangle, Scale, Mail, Phone, MapPin } from "lucide-react";

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms & Conditions</title>
        <meta
          name="description"
          content="Read Zion Tech Group's terms of service and legal conditions. Understand your rights and responsibilities when using our AI and IT services."
        />
        <meta
          name="keywords"
          content="terms of service, legal terms, conditions, user agreement, service terms, legal rights"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <FileText className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Legal Terms</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Terms of Service
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              These terms govern your use of our services. Please read them carefully as they contain important information about your rights and obligations.
            </p>
            
            <div className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              
              {/* Acceptance of Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Scale className="w-6 h-6 mr-3 text-cyan-400" />
                  Acceptance of Terms
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
                </div>
              </div>

              {/* Service Description */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Service Description
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>Zion Tech Group provides AI-powered solutions, IT services, micro SAAS applications, and 5G technology solutions. Our services include but are not limited to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Artificial Intelligence and Machine Learning solutions</li>
                    <li>Cybersecurity and data protection services</li>
                    <li>Cloud infrastructure and migration services</li>
                    <li>Custom software development</li>
                    <li>5G network solutions and implementation</li>
                    <li>Business intelligence and analytics platforms</li>
                    <li>Consulting and technical support services</li>
                  </ul>
                </div>
              </div>

              {/* User Responsibilities */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-cyan-400" />
                  User Responsibilities
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>As a user of our services, you agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate and complete information when required</li>
                    <li>Use our services only for lawful purposes</li>
                    <li>Not attempt to gain unauthorized access to our systems</li>
                    <li>Not interfere with or disrupt our services</li>
                    <li>Respect intellectual property rights</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Maintain the confidentiality of your account credentials</li>
                  </ul>
                </div>
              </div>

              {/* Prohibited Uses */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3 text-red-400" />
                  Prohibited Uses
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>You may not use our services:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                    <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                    <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>To submit false or misleading information</li>
                    <li>To upload or transmit viruses or any other type of malicious code</li>
                    <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                    <li>For any obscene or immoral purpose</li>
                  </ul>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Intellectual Property Rights
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>Our services and their original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors. Our services are protected by copyright, trademark, and other laws.</p>
                  <p>You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of our material without our prior written consent.</p>
                </div>
              </div>

              {/* Service Availability */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Service Availability
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>We strive to maintain high service availability, but we do not guarantee that our services will be uninterrupted or error-free. We reserve the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Modify or discontinue our services at any time</li>
                    <li>Perform scheduled maintenance</li>
                    <li>Suspend services for security or technical reasons</li>
                    <li>Update or change our services without notice</li>
                  </ul>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Limitation of Liability
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.</p>
                </div>
              </div>

              {/* Privacy Policy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Privacy Policy
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices.</p>
                  <Link
                    to="/privacy"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    View Privacy Policy
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>

              {/* Termination */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Termination
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>We may terminate or suspend your account and bar access to our services immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>
                </div>
              </div>

              {/* Changes to Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Changes to Terms
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>If you have any questions about these Terms of Service, please contact us:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
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
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-white font-semibold mb-2">Address</h3>
                      <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Governing Law */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Governing Law
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Our Terms?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions about these terms or need clarification on any point, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/privacy"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Privacy Policy
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}