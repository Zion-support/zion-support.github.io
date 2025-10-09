'use client';
import React from 'react';
import { Shield, Lock, Eye, FileText, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Users, Award, Brain, Cloud, Code, BarChart, Zap, Target, MessageSquare, Cpu, Database, Globe, Settings, Bot, Calculator, Compass, Navigation, PieChart, Activity, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Video, Gamepad2, ShoppingCart, CreditCard, Truck, Link, HardDrive, FileCheck, DollarSign, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import EnhancedSEOOptimizer from '../components/EnhancedSEOOptimizer';

const PrivacyPage: React.FC = () => {
  const lastUpdated = 'January 15, 2024';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEOOptimizer
        title="Privacy Policy - Zion Tech Group"
        description="Learn how Zion Tech Group protects your privacy and handles your personal data. Our comprehensive privacy policy outlines our data practices and your rights."
        keywords={['privacy policy', 'data protection', 'privacy', 'GDPR', 'data security', 'personal information', 'privacy rights']}
        canonicalUrl="https://ziontechgroup.com/privacy"
      />
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            Privacy Policy
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
            <Clock className="w-4 h-4" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </section>

        {/* Quick Overview */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Shield className="w-6 h-6 text-cyan-400 mr-3" />
              Privacy Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Lock className="w-12 h-12 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Secure Data</h3>
                <p className="text-gray-300 text-sm">We use industry-standard encryption to protect your data</p>
              </div>
              <div className="text-center">
                <Eye className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Transparent</h3>
                <p className="text-gray-300 text-sm">We're transparent about how we use your information</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Your Control</h3>
                <p className="text-gray-300 text-sm">You have full control over your personal data</p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Introduction */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300 mb-4">
                Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website ziontechgroup.com or use our services.
              </p>
              <p className="text-gray-300">
                By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this Privacy Policy, please do not access our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-bold text-cyan-400 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-300 mb-4">We may collect the following types of personal information:</p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Name and contact information (email address, phone number, mailing address)</li>
                <li>Account credentials and profile information</li>
                <li>Payment and billing information</li>
                <li>Communication preferences</li>
                <li>Professional information (job title, company, industry)</li>
              </ul>

              <h3 className="text-xl font-bold text-cyan-400 mb-3">2.2 Technical Information</h3>
              <p className="text-gray-300 mb-4">We automatically collect certain technical information:</p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-xl font-bold text-cyan-400 mb-3">2.3 Usage Data</h3>
              <p className="text-gray-300 mb-4">We collect information about how you use our services:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Service usage patterns and preferences</li>
                <li>Feature interactions and performance data</li>
                <li>Error logs and diagnostic information</li>
                <li>Customer support interactions</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">We use the collected information for the following purposes:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">Service Delivery</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    <li>Provide and maintain our services</li>
                    <li>Process transactions and payments</li>
                    <li>Deliver customer support</li>
                    <li>Send service-related communications</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">Improvement & Analytics</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    <li>Analyze usage patterns and trends</li>
                    <li>Improve our services and features</li>
                    <li>Develop new products and services</li>
                    <li>Conduct research and analytics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">Communication</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    <li>Send marketing communications</li>
                    <li>Provide updates and notifications</li>
                    <li>Respond to inquiries and requests</li>
                    <li>Conduct surveys and feedback collection</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">Legal & Security</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    <li>Comply with legal obligations</li>
                    <li>Protect against fraud and abuse</li>
                    <li>Enforce our terms of service</li>
                    <li>Maintain security and safety</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Information Sharing */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-300 mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
              
              <h3 className="text-xl font-bold text-cyan-400 mb-3">4.1 Service Providers</h3>
              <p className="text-gray-300 mb-4">We may share information with trusted third-party service providers who assist us in operating our business, such as:</p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Cloud hosting and infrastructure providers</li>
                <li>Payment processing services</li>
                <li>Customer support platforms</li>
                <li>Analytics and monitoring services</li>
                <li>Email and communication services</li>
              </ul>

              <h3 className="text-xl font-bold text-cyan-400 mb-3">4.2 Legal Requirements</h3>
              <p className="text-gray-300 mb-4">We may disclose information when required by law or to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Comply with legal processes or government requests</li>
                <li>Protect our rights, property, or safety</li>
                <li>Prevent fraud or abuse</li>
                <li>Protect the rights and safety of our users</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
              <p className="text-gray-300 mb-4">We implement appropriate technical and organizational measures to protect your personal information:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">Technical Safeguards</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    <li>End-to-end encryption for data transmission</li>
                    <li>Encryption at rest for stored data</li>
                    <li>Secure authentication and access controls</li>
                    <li>Regular security audits and assessments</li>
                    <li>Intrusion detection and monitoring</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">Organizational Measures</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    <li>Employee training on data protection</li>
                    <li>Access controls and role-based permissions</li>
                    <li>Incident response procedures</li>
                    <li>Regular policy reviews and updates</li>
                    <li>Vendor security assessments</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Privacy Rights</h2>
              <p className="text-gray-300 mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">Access & Portability</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    <li>Request access to your personal data</li>
                    <li>Receive a copy of your data in a portable format</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request completion of incomplete data</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">Control & Deletion</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    <li>Request deletion of your personal data</li>
                    <li>Object to processing of your data</li>
                    <li>Request restriction of processing</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cookies */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-gray-300 mb-4">We use cookies and similar technologies to enhance your experience and analyze usage patterns:</p>
              
              <h3 className="text-xl font-bold text-cyan-400 mb-3">7.1 Types of Cookies</h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>

              <h3 className="text-xl font-bold text-cyan-400 mb-3">7.2 Cookie Management</h3>
              <p className="text-gray-300">
                You can control cookies through your browser settings. However, disabling certain cookies may affect the functionality of our services.
              </p>
            </div>

            {/* International Transfers */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. International Data Transfers</h2>
              <p className="text-gray-300 mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Standard contractual clauses approved by relevant authorities</li>
                <li>Adequacy decisions by competent data protection authorities</li>
                <li>Certification schemes and codes of conduct</li>
                <li>Binding corporate rules and other appropriate safeguards</li>
              </ul>
            </div>

            {/* Children's Privacy */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
              <p className="text-gray-300">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-300 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
              <p className="text-gray-300">
                We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </div>

            {/* Contact Information */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">Contact Information</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <span>privacy@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-cyan-400" />
                      <span>+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      <span>364 E Main St STE 1008, Middletown, DE 19709</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">Data Protection Officer</h3>
                  <p className="text-gray-300 text-sm">
                    For privacy-related inquiries, you can also contact our Data Protection Officer at dpo@ziontechgroup.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Questions About Your Privacy?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              We're here to help. Contact our privacy team if you have any questions or concerns about how we handle your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:privacy@ziontechgroup.com" className="cyber-button px-8 py-4 text-lg font-semibold">
                Contact Privacy Team
              </a>
              <a href="/contact" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                General Contact
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;