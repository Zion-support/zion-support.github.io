'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Scale, 
  Shield, 
  AlertTriangle, 
  CheckCircle,
  Mail, 
  Phone,
  ArrowRight
} from 'lucide-react';

export default function TermsOfServicePage() {
  const lastUpdated = '2024-01-01';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms & Conditions</title>
        <meta name="description" content="Read Zion Tech Group's terms of service and legal conditions for using our AI and IT services. Understand your rights and obligations." />
        <meta name="keywords" content="terms of service, legal terms, conditions, user agreement, Zion Tech Group" />
        <meta property="og:title" content="Terms of Service - Zion Tech Group" />
        <meta property="og:description" content="Legal terms and conditions for using our services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/terms-of-service" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms of Service - Zion Tech Group" />
        <meta name="twitter:description" content="Legal terms and conditions for using our services." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
            These terms and conditions govern your use of our services and website. Please read them carefully.
          </p>
          <p className="text-sm text-gray-400">
            Last updated: {new Date(lastUpdated).toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Scale className="w-6 h-6 mr-3 text-cyan-400" />
              Acceptance of Terms
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>By accessing and using our website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
              <p>These terms apply to all visitors, users, and others who access or use our services. By using our services, you agree to be bound by these terms.</p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-blue-400" />
              Description of Service
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>Zion Tech Group provides AI-powered solutions, IT services, cloud computing, cybersecurity, and related technology services. Our services include but are not limited to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>AI content generation and automation tools</li>
                <li>Cloud migration and infrastructure services</li>
                <li>Cybersecurity solutions and monitoring</li>
                <li>Mobile and web application development</li>
                <li>Data analytics and business intelligence</li>
                <li>5G implementation and network solutions</li>
                <li>Consulting and technical support services</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-green-400" />
              User Responsibilities
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>As a user of our services, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information when required</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not use our services to transmit harmful or malicious content</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect the intellectual property rights of others</li>
                <li>Notify us immediately of any security breaches</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-3 text-orange-400" />
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
                <li>To interfere with or circumvent the security features of our services</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Payment Terms</h2>
            <div className="space-y-4 text-gray-300">
              <p>For paid services, the following terms apply:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Payment is due in advance unless otherwise agreed in writing</li>
                <li>All fees are non-refundable unless otherwise specified</li>
                <li>We reserve the right to change our pricing with 30 days notice</li>
                <li>Late payments may result in service suspension</li>
                <li>You are responsible for all applicable taxes</li>
                <li>Refunds are handled on a case-by-case basis</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Intellectual Property</h2>
            <div className="space-y-4 text-gray-300">
              <p>Our services and their original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors. Our services are protected by copyright, trademark, and other laws.</p>
              <p>You may not:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Copy, modify, or distribute our software or content</li>
                <li>Reverse engineer, decompile, or disassemble our services</li>
                <li>Remove or alter any proprietary notices</li>
                <li>Use our trademarks without written permission</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Limitation of Liability</h2>
            <div className="space-y-4 text-gray-300">
              <p>In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.</p>
              <p>Our total liability to you for all damages shall not exceed the amount you paid us for the services in the 12 months preceding the claim.</p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Termination</h2>
            <div className="space-y-4 text-gray-300">
              <p>We may terminate or suspend your account and bar access to our services immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of these terms.</p>
              <p>If you wish to terminate your account, you may simply discontinue using our services or contact us to request account deletion.</p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Governing Law</h2>
            <div className="space-y-4 text-gray-300">
              <p>These terms shall be interpreted and governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions.</p>
              <p>Our failure to enforce any right or provision of these terms will not be considered a waiver of those rights.</p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Changes to Terms</h2>
            <div className="space-y-4 text-gray-300">
              <p>We reserve the right, at our sole discretion, to modify or replace these terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.</p>
              <p>By continuing to access or use our services after those revisions become effective, you agree to be bound by the revised terms.</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30 mt-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Questions About These Terms?</h2>
          <p className="text-gray-300 text-center mb-8">
            If you have any questions about these terms of service, please contact us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
            <a
              href="mailto:legal@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              legal@ziontechgroup.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}