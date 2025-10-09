'use client';
import React from 'react';
import { FileText, Scale, Shield, AlertCircle, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, Users, Award, Brain, Cloud, Code, BarChart, Zap, Target, MessageSquare, Eye, Cpu, Lock, Bot, Calculator, Compass, Navigation, PieChart, Activity, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Video, Gamepad2, ShoppingCart, CreditCard, Truck, Link, HardDrive, FileCheck, DollarSign, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import EnhancedSEOOptimizer from '../components/EnhancedSEOOptimizer';

const TermsPage: React.FC = () => {
  const lastUpdated = 'January 15, 2024';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEOOptimizer
        title="Terms of Service - Zion Tech Group"
        description="Read our terms of service to understand the rules and guidelines for using Zion Tech Group's AI and IT services. Learn about your rights and responsibilities."
        keywords={['terms of service', 'terms and conditions', 'user agreement', 'service terms', 'legal terms', 'user rights', 'service guidelines']}
        canonicalUrl="https://ziontechgroup.com/terms"
      />
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            Terms of Service
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
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
              <Scale className="w-6 h-6 text-cyan-400 mr-3" />
              Terms Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <FileText className="w-12 h-12 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Clear Terms</h3>
                <p className="text-gray-300 text-sm">Transparent and easy-to-understand terms</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Fair Use</h3>
                <p className="text-gray-300 text-sm">Reasonable terms that protect both parties</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Your Rights</h3>
                <p className="text-gray-300 text-sm">Clear explanation of your rights and responsibilities</p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Agreement to Terms */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-300 mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you and Zion Tech Group, Inc. ("Company," "we," "our," or "us") regarding your use of our website, services, and applications (collectively, the "Services").
              </p>
              <p className="text-gray-300 mb-4">
                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our Services.
              </p>
              <p className="text-gray-300">
                We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on our website and updating the "Last updated" date. Your continued use of the Services after such modifications constitutes acceptance of the updated Terms.
              </p>
            </div>

            {/* Description of Services */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Services</h2>
              <p className="text-gray-300 mb-4">
                Zion Tech Group provides AI-powered solutions and IT services, including but not limited to:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">AI Services</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    <li>Machine learning solutions</li>
                    <li>Natural language processing</li>
                    <li>Computer vision applications</li>
                    <li>AI automation tools</li>
                    <li>Predictive analytics</li>
                    <li>Custom AI model development</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">IT Services</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    <li>Cloud migration and management</li>
                    <li>Cybersecurity solutions</li>
                    <li>DevOps and CI/CD services</li>
                    <li>Database optimization</li>
                    <li>Network infrastructure</li>
                    <li>IT consulting and support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* User Accounts */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
              
              <h3 className="text-xl font-bold text-cyan-400 mb-3">3.1 Account Creation</h3>
              <p className="text-gray-300 mb-4">
                To access certain features of our Services, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
              </p>

              <h3 className="text-xl font-bold text-cyan-400 mb-3">3.2 Account Security</h3>
              <p className="text-gray-300 mb-4">You are responsible for:</p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use of your account</li>
                <li>Ensuring your account information remains accurate and up-to-date</li>
              </ul>

              <h3 className="text-xl font-bold text-cyan-400 mb-3">3.3 Account Termination</h3>
              <p className="text-gray-300">
                We reserve the right to suspend or terminate your account at any time for violation of these Terms or for any other reason at our sole discretion. You may terminate your account at any time by contacting us.
              </p>
            </div>

            {/* Acceptable Use */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">4. Acceptable Use Policy</h2>
              
              <h3 className="text-xl font-bold text-cyan-400 mb-3">4.1 Permitted Uses</h3>
              <p className="text-gray-300 mb-4">You may use our Services only for lawful purposes and in accordance with these Terms. You agree to use our Services:</p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>In compliance with all applicable laws and regulations</li>
                <li>In a manner that does not infringe on the rights of others</li>
                <li>For legitimate business or personal purposes</li>
                <li>In accordance with any applicable service-specific terms</li>
              </ul>

              <h3 className="text-xl font-bold text-cyan-400 mb-3">4.2 Prohibited Uses</h3>
              <p className="text-gray-300 mb-4">You agree not to use our Services:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
                <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                <li>For any obscene or immoral purpose</li>
                <li>To interfere with or circumvent the security features of our Services</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-bold text-cyan-400 mb-3">5.1 Our Intellectual Property</h3>
              <p className="text-gray-300 mb-4">
                The Services and their original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors. The Services are protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
              </p>

              <h3 className="text-xl font-bold text-cyan-400 mb-3">5.2 Your Content</h3>
              <p className="text-gray-300 mb-4">
                You retain ownership of any content you submit, post, or display on or through our Services ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content in connection with our Services.
              </p>

              <h3 className="text-xl font-bold text-cyan-400 mb-3">5.3 Feedback</h3>
              <p className="text-gray-300">
                Any feedback, comments, or suggestions you provide regarding our Services may be used by us without any obligation to compensate you for such feedback.
              </p>
            </div>

            {/* Payment Terms */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">6. Payment Terms</h2>
              
              <h3 className="text-xl font-bold text-cyan-400 mb-3">6.1 Fees and Billing</h3>
              <p className="text-gray-300 mb-4">
                Some of our Services require payment. You agree to pay all fees associated with your use of such Services in accordance with the pricing terms presented to you at the time of purchase.
              </p>

              <h3 className="text-xl font-bold text-cyan-400 mb-3">6.2 Payment Methods</h3>
              <p className="text-gray-300 mb-4">We accept various payment methods, including:</p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Credit and debit cards</li>
                <li>Bank transfers</li>
                <li>Digital wallets</li>
                <li>Other payment methods as specified</li>
              </ul>

              <h3 className="text-xl font-bold text-cyan-400 mb-3">6.3 Refunds</h3>
              <p className="text-gray-300 mb-4">
                Refunds are handled on a case-by-case basis. We may offer refunds for certain Services within a specified time period or under certain circumstances. Please contact our support team for refund requests.
              </p>

              <h3 className="text-xl font-bold text-cyan-400 mb-3">6.4 Price Changes</h3>
              <p className="text-gray-300">
                We reserve the right to change our prices at any time. We will provide notice of any price changes at least 30 days in advance for existing customers.
              </p>
            </div>

            {/* Privacy */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">7. Privacy</h2>
              <p className="text-gray-300 mb-4">
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our Services. By using our Services, you agree to the collection and use of information in accordance with our Privacy Policy.
              </p>
              <p className="text-gray-300">
                Please review our Privacy Policy, which also governs your use of the Services, to understand our practices.
              </p>
            </div>

            {/* Service Availability */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">8. Service Availability</h2>
              
              <h3 className="text-xl font-bold text-cyan-400 mb-3">8.1 Availability</h3>
              <p className="text-gray-300 mb-4">
                We strive to provide continuous availability of our Services, but we do not guarantee that the Services will be available at all times. We may experience downtime due to maintenance, updates, or other factors beyond our control.
              </p>

              <h3 className="text-xl font-bold text-cyan-400 mb-3">8.2 Modifications</h3>
              <p className="text-gray-300 mb-4">
                We reserve the right to modify, suspend, or discontinue any part of our Services at any time with or without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuation of the Services.
              </p>

              <h3 className="text-xl font-bold text-cyan-400 mb-3">8.3 Updates</h3>
              <p className="text-gray-300">
                We may release updates to our Services from time to time. You may be required to accept such updates to continue using the Services.
              </p>
            </div>

            {/* Disclaimers */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">9. Disclaimers</h2>
              <p className="text-gray-300 mb-4">
                THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-gray-300 mb-4">
                WE MAKE NO WARRANTY THAT THE SERVICES WILL MEET YOUR REQUIREMENTS, BE AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE BASIS, OR BE ACCURATE, RELIABLE, FREE OF VIRUSES OR OTHER HARMFUL CODE, COMPLETE, LEGAL, OR SAFE.
              </p>
              <p className="text-gray-300">
                SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES, SO THE ABOVE EXCLUSION MAY NOT APPLY TO YOU.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL ZION TECH GROUP, ITS AFFILIATES, AGENTS, DIRECTORS, EMPLOYEES, SUPPLIERS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO THE USE OF, OR INABILITY TO USE, THE SERVICES.
              </p>
              <p className="text-gray-300">
                OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES SHALL NOT EXCEED THE AMOUNT YOU PAID US FOR THE SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM. SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.
              </p>
            </div>

            {/* Indemnification */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">11. Indemnification</h2>
              <p className="text-gray-300">
                You agree to defend, indemnify, and hold harmless Zion Tech Group and its affiliates, officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney's fees) arising from your use of the Services or violation of these Terms.
              </p>
            </div>

            {/* Governing Law */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">12. Governing Law and Dispute Resolution</h2>
              
              <h3 className="text-xl font-bold text-cyan-400 mb-3">12.1 Governing Law</h3>
              <p className="text-gray-300 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.
              </p>

              <h3 className="text-xl font-bold text-cyan-400 mb-3">12.2 Dispute Resolution</h3>
              <p className="text-gray-300 mb-4">
                Any disputes arising out of or relating to these Terms or the Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>

              <h3 className="text-xl font-bold text-cyan-400 mb-3">12.3 Jurisdiction</h3>
              <p className="text-gray-300">
                Any legal action or proceeding arising under these Terms will be brought exclusively in the courts of Delaware, and you hereby consent to the jurisdiction of such courts.
              </p>
            </div>

            {/* Severability */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">13. Severability</h2>
              <p className="text-gray-300">
                If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in full force and effect. We will replace any invalid provision with a valid provision that most closely approximates the intent and economic effect of the invalid provision.
              </p>
            </div>

            {/* Entire Agreement */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">14. Entire Agreement</h2>
              <p className="text-gray-300">
                These Terms, together with our Privacy Policy and any other legal notices published by us on the Services, shall constitute the entire agreement between you and Zion Tech Group concerning the Services.
              </p>
            </div>

            {/* Contact Information */}
            <div className="cyber-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">15. Contact Information</h2>
              <p className="text-gray-300 mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">Contact Information</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <span>legal@ziontechgroup.com</span>
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
                  <h3 className="text-lg font-bold text-cyan-400 mb-3">General Inquiries</h3>
                  <p className="text-gray-300 text-sm">
                    For general questions about our services, please contact us at info@ziontechgroup.com or through our contact form.
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
              Questions About Our Terms?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              If you have any questions about these Terms of Service, our legal team is here to help clarify any concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:legal@ziontechgroup.com" className="cyber-button px-8 py-4 text-lg font-semibold">
                Contact Legal Team
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

export default TermsPage;