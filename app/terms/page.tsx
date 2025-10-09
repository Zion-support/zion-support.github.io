'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const TermsPage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="Terms of Service - Legal Terms & Conditions | Zion Tech Group"
        description="Read our terms of service and legal conditions for using Zion Tech Group's AI and IT solutions. Understand your rights and obligations when using our services."
        keywords={['terms of service', 'legal terms', 'terms and conditions', 'service agreement', 'legal conditions']}
        canonicalUrl="https://ziontechgroup.com/terms"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Terms of Service</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  These terms and conditions govern your use of our website and services. 
                  Please read them carefully before using our services.
                </p>
              </div>
            </div>
          </section>

          {/* Terms Content */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="cyber-card p-8 space-y-8">
                <div>
                  <p className="text-gray-400 text-sm mb-8">
                    Last updated: January 15, 2025
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-300 mb-4">
                    By accessing and using the Zion Tech Group website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                  <p className="text-gray-300 mb-4">
                    Zion Tech Group provides AI-powered solutions, IT services, and technology consulting services. Our services include but are not limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                    <li>AI and machine learning solutions</li>
                    <li>IT infrastructure and cloud services</li>
                    <li>Micro SAAS applications</li>
                    <li>Quantum computing consulting</li>
                    <li>Cybersecurity services</li>
                    <li>Digital transformation consulting</li>
                    <li>Technology training and support</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
                  <p className="text-gray-300 mb-4">
                    When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                    <li>Maintaining the confidentiality of your account and password</li>
                    <li>All activities that occur under your account</li>
                    <li>Notifying us immediately of any unauthorized use of your account</li>
                    <li>Ensuring your contact information is up to date</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Acceptable Use</h2>
                  <p className="text-gray-300 mb-4">
                    You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                    <li>Use our services for any illegal or unauthorized purpose</li>
                    <li>Violate any laws in your jurisdiction</li>
                    <li>Transmit any worms, viruses, or any code of a destructive nature</li>
                    <li>Attempt to gain unauthorized access to our systems or networks</li>
                    <li>Interfere with or disrupt our services or servers</li>
                    <li>Use our services to harass, abuse, or harm others</li>
                    <li>Reverse engineer, decompile, or disassemble our software</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property Rights</h2>
                  <p className="text-gray-300 mb-4">
                    The service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors. The service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Payment Terms</h2>
                  <p className="text-gray-300 mb-4">
                    Payment for our services is due according to the terms specified in your service agreement. We accept various payment methods as specified during the ordering process. You agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                    <li>Pay all fees and charges incurred in connection with your account</li>
                    <li>Provide accurate and complete billing information</li>
                    <li>Update billing information promptly if it changes</li>
                    <li>Pay any applicable taxes</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">7. Service Level Agreement</h2>
                  <p className="text-gray-300 mb-4">
                    We strive to provide reliable services and maintain high uptime. However, we do not guarantee that our services will be uninterrupted or error-free. We reserve the right to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
                    <li>Modify or discontinue our services at any time</li>
                    <li>Perform scheduled maintenance</li>
                    <li>Update our services to improve functionality</li>
                    <li>Suspend services for security or legal reasons</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">8. Data and Privacy</h2>
                  <p className="text-gray-300 mb-4">
                    Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our services, you consent to the collection and use of information as described in our Privacy Policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
                  <p className="text-gray-300 mb-4">
                    In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">10. Disclaimer of Warranties</h2>
                  <p className="text-gray-300 mb-4">
                    Our service is provided on an "AS IS" and "AS AVAILABLE" basis. Zion Tech Group and its suppliers and licensors hereby disclaim all warranties of any kind, whether express or implied, statutory, or otherwise, including but not limited to any warranties of merchantability, non-infringement, and fitness for particular purpose.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">11. Indemnification</h2>
                  <p className="text-gray-300 mb-4">
                    You agree to defend, indemnify, and hold harmless Zion Tech Group and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">12. Termination</h2>
                  <p className="text-gray-300 mb-4">
                    We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">13. Governing Law</h2>
                  <p className="text-gray-300 mb-4">
                    These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">14. Changes to Terms</h2>
                  <p className="text-gray-300 mb-4">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">15. Contact Information</h2>
                  <p className="text-gray-300 mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-slate-800 p-6 rounded-lg">
                    <p className="text-gray-300 mb-2"><strong>Zion Tech Group</strong></p>
                    <p className="text-gray-300 mb-2">364 E Main St STE 1008</p>
                    <p className="text-gray-300 mb-2">Middletown, DE 19709</p>
                    <p className="text-gray-300 mb-2">Email: kleber@ziontechgroup.com</p>
                    <p className="text-gray-300">Phone: (302) 464-0950</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default TermsPage;