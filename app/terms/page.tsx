'use client';
import React from 'react';
import { FileText, CheckCircle, AlertTriangle, Scale, Shield, Users, Clock, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const TermsPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';

  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using Zion Tech Group\'s services, you accept and agree to be bound by the terms and provision of this agreement.',
      icon: CheckCircle
    },
    {
      title: 'Service Description',
      content: 'Zion Tech Group provides AI-powered solutions, IT services, and digital transformation consulting to businesses of all sizes.',
      icon: FileText
    },
    {
      title: 'User Responsibilities',
      content: 'Users are responsible for providing accurate information, maintaining account security, and using services in compliance with applicable laws.',
      icon: Users
    },
    {
      title: 'Intellectual Property',
      content: 'All content, trademarks, and intellectual property rights remain the property of Zion Tech Group unless otherwise specified.',
      icon: Shield
    },
    {
      title: 'Payment Terms',
      content: 'Payment is due according to the terms specified in your service agreement. Late payments may result in service suspension.',
      icon: Scale
    },
    {
      title: 'Service Availability',
      content: 'We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service due to maintenance or unforeseen circumstances.',
      icon: Clock
    }
  ];

  const prohibitedUses = [
    'Violating any applicable laws or regulations',
    'Transmitting malicious code or harmful content',
    'Attempting to gain unauthorized access to systems',
    'Interfering with service operations',
    'Using services for illegal activities',
    'Violating intellectual property rights',
    'Engaging in fraudulent activities',
    'Spamming or sending unsolicited communications'
  ];

  const limitations = [
    'Services are provided "as is" without warranties',
    'We are not liable for indirect or consequential damages',
    'Total liability is limited to the amount paid for services',
    'We reserve the right to modify or discontinue services',
    'Users are responsible for data backup',
    'Third-party integrations are subject to their own terms'
  ];

  return (
    <>
      <SEOOptimizer
        title="Terms of Service - Zion Tech Group"
        description="Read Zion Tech Group's Terms of Service to understand your rights and responsibilities when using our AI and IT services."
        keywords={['terms of service', 'user agreement', 'service terms', 'legal terms', 'user responsibilities', 'service conditions']}
        canonicalUrl="https://ziontechgroup.com/terms"
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Terms of Service">
              Terms of Service
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Your Agreement with Zion Tech Group
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              These Terms of Service govern your use of Zion Tech Group's AI and IT services. 
              Please read them carefully before using our services.
            </p>
            <div className="text-sm text-gray-400">
              Last updated: {lastUpdated}
            </div>
          </section>

          {/* Quick Overview */}
          <section className="mb-16">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">Quick Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sections.map((section, index) => (
                  <div key={index} className="text-center">
                    <section.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">{section.title}</h3>
                    <p className="text-gray-300 text-sm">{section.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Detailed Terms */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Detailed Terms</h2>
            
            <div className="space-y-8">
              <div className="cyber-card p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h3>
                <p className="text-gray-300 mb-4">
                  By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
                <p className="text-gray-300">
                  These terms apply to all visitors, users, and others who access or use the service.
                </p>
              </div>

              <div className="cyber-card p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">2. Service Description</h3>
                <p className="text-gray-300 mb-4">
                  Zion Tech Group provides comprehensive AI-powered solutions and IT services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>AI and Machine Learning solutions</li>
                  <li>Cloud migration and management services</li>
                  <li>Cybersecurity and compliance solutions</li>
                  <li>Digital transformation consulting</li>
                  <li>Custom software development</li>
                  <li>Data analytics and business intelligence</li>
                  <li>IT infrastructure management</li>
                </ul>
              </div>

              <div className="cyber-card p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">3. User Responsibilities</h3>
                <p className="text-gray-300 mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Provide accurate and complete information when creating an account</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Use our services in compliance with all applicable laws and regulations</li>
                  <li>Respect the intellectual property rights of others</li>
                  <li>Not interfere with or disrupt our services</li>
                  <li>Report any security vulnerabilities or breaches immediately</li>
                </ul>
              </div>

              <div className="cyber-card p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">4. Prohibited Uses</h3>
                <p className="text-gray-300 mb-4">
                  You may not use our services for any unlawful purpose or to solicit others to perform unlawful acts. 
                  Prohibited uses include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {prohibitedUses.map((use, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <AlertTriangle className="w-4 h-4 text-red-400 mr-3 flex-shrink-0" />
                      <span>{use}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="cyber-card p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">5. Payment Terms</h3>
                <p className="text-gray-300 mb-4">
                  Payment terms are as follows:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Payment is due according to the terms specified in your service agreement</li>
                  <li>Late payments may result in service suspension or termination</li>
                  <li>All fees are non-refundable unless otherwise specified</li>
                  <li>We reserve the right to change our pricing with 30 days notice</li>
                  <li>Disputed charges must be reported within 30 days of billing</li>
                </ul>
              </div>

              <div className="cyber-card p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">6. Intellectual Property</h3>
                <p className="text-gray-300 mb-4">
                  The service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors. 
                  The service is protected by copyright, trademark, and other laws.
                </p>
                <p className="text-gray-300">
                  You retain ownership of your data and content. By using our services, you grant us a license to use your data solely for the purpose of providing our services.
                </p>
              </div>

              <div className="cyber-card p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">7. Service Availability</h3>
                <p className="text-gray-300 mb-4">
                  We strive to maintain high service availability but cannot guarantee uninterrupted service. 
                  Service may be temporarily unavailable due to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Scheduled maintenance and updates</li>
                  <li>Unforeseen technical issues</li>
                  <li>Third-party service disruptions</li>
                  <li>Force majeure events</li>
                </ul>
              </div>

              <div className="cyber-card p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">8. Limitation of Liability</h3>
                <p className="text-gray-300 mb-4">
                  To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                  including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
                <div className="bg-red-900/20 border border-red-400/30 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-red-400 mb-2">Important Limitations:</h4>
                  <ul className="space-y-1">
                    {limitations.map((limitation, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <AlertTriangle className="w-3 h-3 text-red-400 mr-2 flex-shrink-0" />
                        <span>{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="cyber-card p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">9. Termination</h3>
                <p className="text-gray-300 mb-4">
                  We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, 
                  under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                </p>
                <p className="text-gray-300">
                  Upon termination, your right to use the service will cease immediately. All provisions of the Terms which by their nature should survive termination shall survive termination.
                </p>
              </div>

              <div className="cyber-card p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">10. Changes to Terms</h3>
                <p className="text-gray-300 mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                  If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                </p>
                <p className="text-gray-300">
                  By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Questions About These Terms?</h2>
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Our Legal Team</h3>
              <p className="text-lg text-gray-300 mb-8">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                  <a href="mailto:legal@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    legal@ziontechgroup.com
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
                Terms Updates
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                We may update these Terms of Service from time to time. We will notify you of any material changes 
                by posting the new Terms of Service on this page and updating the "Last updated" date.
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

export default TermsPage;
