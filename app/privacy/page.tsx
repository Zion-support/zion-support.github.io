'use client';
import React from 'react';
import { Shield, Lock, Eye, FileText, CheckCircle, AlertTriangle, User, Settings, Briefcase } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const PrivacyPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';

  const dataTypes = [
    {
      type: 'Personal Information',
      description: 'Name, email address, phone number, company information',
      purpose: 'Communication, service delivery, account management',
      icon: User
    },
    {
      type: 'Usage Data',
      description: 'Website interactions, service usage patterns, performance metrics',
      purpose: 'Service improvement, analytics, personalization',
      icon: Eye
    },
    {
      type: 'Technical Data',
      description: 'IP address, browser type, device information, cookies',
      purpose: 'Security, functionality, analytics',
      icon: Settings
    },
    {
      type: 'Business Data',
      description: 'Project requirements, business processes, confidential information',
      purpose: 'Service delivery, project execution, business intelligence',
      icon: Briefcase
    }
  ];

  const rights = [
    'Access your personal data',
    'Correct inaccurate information',
    'Delete your data',
    'Restrict processing',
    'Data portability',
    'Object to processing',
    'Withdraw consent'
  ];

  return (
    <>
      <SEOOptimizer
        title="Privacy Policy - Zion Tech Group"
        description="Learn how Zion Tech Group protects your privacy and handles your personal data in compliance with GDPR, CCPA, and other privacy regulations."
        keywords={['privacy policy', 'data protection', 'GDPR compliance', 'CCPA compliance', 'data privacy', 'personal information']}
        canonicalUrl="https://ziontechgroup.com/privacy"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePreloading={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHTTPSRedirect={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Privacy Policy">
              Privacy Policy
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Your Privacy is Our Priority
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy explains how we collect, use, and safeguard your data.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: {lastUpdated}
            </div>
          </section>

          {/* Quick Overview */}
          <section className="mb-16">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">Quick Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Secure</h3>
                  <p className="text-gray-300 text-sm">Bank-level encryption and security measures</p>
                </div>
                <div className="text-center">
                  <Lock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Compliant</h3>
                  <p className="text-gray-300 text-sm">GDPR, CCPA, and industry standards</p>
                </div>
                <div className="text-center">
                  <Eye className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Transparent</h3>
                  <p className="text-gray-300 text-sm">Clear information about data usage</p>
                </div>
              </div>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Information We Collect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dataTypes.map((data, index) => (
                <div key={index} className="cyber-card p-6">
                  <div className="flex items-center mb-4">
                    <data.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{data.type}</h3>
                  </div>
                  <p className="text-gray-300 mb-3">{data.description}</p>
                  <div className="text-sm text-cyan-400">
                    <strong>Purpose:</strong> {data.purpose}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">How We Use Your Information</h2>
            <div className="cyber-card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Service Delivery</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      Provide AI and IT services
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      Process transactions and payments
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      Deliver customer support
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      Send service-related communications
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Business Operations</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      Improve our services
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      Conduct analytics and research
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      Ensure security and fraud prevention
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      Comply with legal obligations
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Data Security</h2>
            <div className="cyber-card p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Lock className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Encryption</h3>
                  <p className="text-gray-300 text-sm">All data is encrypted in transit and at rest using industry-standard protocols</p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Access Control</h3>
                  <p className="text-gray-300 text-sm">Strict access controls and authentication measures protect your data</p>
                </div>
                <div className="text-center">
                  <Eye className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">Monitoring</h3>
                  <p className="text-gray-300 text-sm">Continuous monitoring and security audits ensure data protection</p>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Your Rights</h2>
            <div className="cyber-card p-8">
              <p className="text-lg text-gray-300 mb-6 text-center">
                You have the following rights regarding your personal data:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rights.map((right, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>{right}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-cyan-400/10 border border-cyan-400/30 rounded-lg">
                <p className="text-cyan-400 text-center">
                  <strong>To exercise your rights, contact us at:</strong><br />
                  Email: privacy@ziontechgroup.com<br />
                  Phone: +1 302 464 0950
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Contact Us</h2>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-semibold text-white mb-6">Questions About This Privacy Policy?</h3>
              <p className="text-lg text-gray-300 mb-8">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                  <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    privacy@ziontechgroup.com
                  </a>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Phone</h4>
                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Address</h4>
                  <address className="text-cyan-400 not-italic">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </address>
                </div>
              </div>
            </div>
          </section>

          {/* Updates */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Policy Updates
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              <div className="flex items-center justify-center text-cyan-400">
                <AlertTriangle className="w-5 h-5 mr-2" />
                <span>Last updated: {lastUpdated}</span>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPage;
