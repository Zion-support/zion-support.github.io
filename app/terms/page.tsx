import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Mail, Phone, Globe, Scale } from "lucide-react";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Terms of service for Zion Tech Group. Learn about our service terms and conditions." />
        <meta name="keywords" content="terms of service, service agreement, terms and conditions, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Scale className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Legal Terms</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Terms of Service
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              These terms and conditions govern your use of our website and services. 
              Please read them carefully before using our services.
            </p>
            
            <div className="text-sm text-gray-400">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Agreement to Terms
                  </span>
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  By accessing and using Zion Tech Group's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  These Terms of Service ("Terms") govern your use of our website located at ziontechgroup.com and our services provided by Zion Tech Group ("Company," "we," "our," or "us").
                </p>
              </div>

              {/* Services Description */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Description of Services
                  </span>
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Zion Tech Group provides AI-powered solutions, IT services, micro SAAS applications, and 5G technology solutions. Our services include but are not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>AI Analytics and Business Intelligence</li>
                  <li>AI Content Generation and Marketing Automation</li>
                  <li>Cybersecurity and Data Protection Services</li>
                  <li>Cloud Infrastructure and Migration Services</li>
                  <li>5G Network Solutions and Implementation</li>
                  <li>Custom Software Development and Integration</li>
                  <li>IT Consulting and Support Services</li>
                </ul>
              </div>

              {/* User Responsibilities */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    User Responsibilities
                  </span>
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Provide accurate and complete information when required</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Not interfere with or disrupt our services</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Respect intellectual property rights</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                </ul>
              </div>

              {/* Payment Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Payment Terms
                  </span>
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Payment terms for our services are as follows:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Fees are due in advance for subscription services</li>
                  <li>Payment is required before service activation</li>
                  <li>All fees are non-refundable unless otherwise specified</li>
                  <li>We reserve the right to change pricing with 30 days notice</li>
                  <li>Late payments may result in service suspension</li>
                  <li>All prices are exclusive of applicable taxes</li>
                </ul>
              </div>

              {/* Service Level Agreement */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Service Level Agreement
                  </span>
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We strive to provide reliable services with the following commitments:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>99.9% uptime for hosted services</li>
                  <li>24/7 technical support for enterprise clients</li>
                  <li>Response time of 4 hours for critical issues</li>
                  <li>Regular security updates and maintenance</li>
                  <li>Data backup and disaster recovery procedures</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Intellectual Property
                  </span>
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  All content, trademarks, and intellectual property on our website and services are owned by Zion Tech Group or our licensors. You may not:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Copy, modify, or distribute our content without permission</li>
                  <li>Use our trademarks or logos without authorization</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                  <li>Create derivative works based on our services</li>
                </ul>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Limitation of Liability
                  </span>
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Service interruptions or downtime</li>
                  <li>Third-party actions or content</li>
                  <li>Force majeure events</li>
                </ul>
              </div>

              {/* Termination */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Termination
                  </span>
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Either party may terminate this agreement at any time with written notice. Upon termination:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
                  <li>Your access to our services will be suspended</li>
                  <li>You must cease all use of our services</li>
                  <li>We may delete your data after a reasonable period</li>
                  <li>Outstanding fees remain due and payable</li>
                </ul>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Governing Law
                  </span>
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to conflict of law principles. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Delaware.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Contact Information
                  </span>
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  If you have any questions about these Terms of Service, please contact us:
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

              {/* Changes to Terms */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Changes to Terms
                  </span>
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the updated Terms on our website. Your continued use of our services after such changes constitutes acceptance of the new Terms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Questions About Our Terms?
              </h2>
              <p className="text-gray-300 mb-6">
                We're here to help. Contact us if you have any questions about our terms of service or need clarification on any points.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
