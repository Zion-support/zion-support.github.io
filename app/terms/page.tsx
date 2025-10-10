'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Scale, Shield, AlertTriangle, Users, Calendar } from 'lucide-react';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms & Conditions</title>
        <meta name="description" content="Read Zion Tech Group's terms of service and legal conditions. Understand your rights and obligations when using our AI and IT services." />
        <meta name="keywords" content="terms of service, legal terms, conditions, user agreement, service terms, legal rights" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
              </p>
              <p className="text-sm text-gray-400 mt-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Scale className="w-6 h-6 text-cyan-400 mr-3" />
                  Acceptance of Terms
                </h2>
                <p className="text-gray-300 mb-4">
                  By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
                <p className="text-gray-300">
                  These terms apply to all visitors, users, and others who access or use our services.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Users className="w-6 h-6 text-cyan-400 mr-3" />
                  Description of Service
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-300 mb-4">
                    Zion Tech Group provides AI and IT services including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Artificial Intelligence solutions and consulting</li>
                    <li>Cloud infrastructure and migration services</li>
                    <li>Cybersecurity solutions and monitoring</li>
                    <li>Custom software development</li>
                    <li>Database management and optimization</li>
                    <li>DevOps and CI/CD services</li>
                    <li>Micro SaaS applications and tools</li>
                    <li>Technical support and consulting</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Shield className="w-6 h-6 text-cyan-400 mr-3" />
                  User Responsibilities
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-300 mb-4">
                    As a user of our services, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Provide accurate and complete information when required</li>
                    <li>Use our services only for lawful purposes</li>
                    <li>Not attempt to gain unauthorized access to our systems</li>
                    <li>Not interfere with or disrupt our services</li>
                    <li>Respect intellectual property rights</li>
                    <li>Comply with all applicable laws and regulations</li>
                    <li>Maintain the confidentiality of your account credentials</li>
                    <li>Notify us immediately of any security breaches</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 text-cyan-400 mr-3" />
                  Prohibited Uses
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-300 mb-4">
                    You may not use our services:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                    <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                    <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>To submit false or misleading information</li>
                    <li>To upload or transmit viruses or any other type of malicious code</li>
                    <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                    <li>For any obscene or immoral purpose</li>
                    <li>To interfere with or circumvent the security features of our services</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Intellectual Property Rights</h2>
                <div className="space-y-4">
                  <p className="text-gray-300 mb-4">
                    The service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors. The service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
                  </p>
                  <p className="text-gray-300">
                    You retain ownership of any content you submit, post, or display on or through our services. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute such content.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Service Availability</h2>
                <div className="space-y-4">
                  <p className="text-gray-300 mb-4">
                    We strive to provide continuous service availability, but we do not guarantee that our services will be uninterrupted or error-free. We reserve the right to:
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Modify or discontinue our services at any time</li>
                    <li>Perform scheduled maintenance and updates</li>
                    <li>Suspend services for security or technical reasons</li>
                    <li>Limit access to certain features or services</li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Limitation of Liability</h2>
                <div className="space-y-4">
                  <p className="text-gray-300 mb-4">
                    In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.
                  </p>
                  <p className="text-gray-300">
                    Our total liability to you for any damages arising from or related to these terms or our services shall not exceed the amount you paid us for the services in the twelve (12) months preceding the claim.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Indemnification</h2>
                <p className="text-gray-300">
                  You agree to defend, indemnify, and hold harmless Zion Tech Group and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of your use and access of our services, or a breach of these terms.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Termination</h2>
                <div className="space-y-4">
                  <p className="text-gray-300 mb-4">
                    We may terminate or suspend your account and bar access to our services immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of these terms.
                  </p>
                  <p className="text-gray-300">
                    If you wish to terminate your account, you may simply discontinue using our services or contact us to request account deletion.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Governing Law</h2>
                <p className="text-gray-300">
                  These terms shall be interpreted and governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these terms will not be considered a waiver of those rights.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Changes to Terms</h2>
                <p className="text-gray-300">
                  We reserve the right, at our sole discretion, to modify or replace these terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Calendar className="w-6 h-6 text-cyan-400 mr-3" />
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-300 mb-4">
                    If you have any questions about these terms of service, please contact us:
                  </p>
                  <div className="space-y-2 text-gray-300">
                    <div>Email: legal@ziontechgroup.com</div>
                    <div>Phone: +1 (302) 464-0950</div>
                    <div>
                      <div>Address:</div>
                      <div>364 E Main St STE 1008</div>
                      <div>Middletown, DE 19709</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsPage;