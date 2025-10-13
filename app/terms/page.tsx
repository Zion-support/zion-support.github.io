import React from "react";
import { Link } from "react-router-dom";
import { FileText, Mail, Phone, MapPin } from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Terms of Service - Zion Tech Group"
        description="Read Zion Tech Group's Terms of Service. Understand the terms and conditions for using our AI solutions, IT services, and platform."
        keywords="terms of service, terms and conditions, user agreement, service terms, legal terms"
        canonical="https://ziontechgroup.com/terms"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <FileText className="w-12 h-12 text-cyan-400 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Terms of Service
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Last updated: December 15, 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                By accessing and using Zion Tech Group's services, you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">2. Description of Service</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Zion Tech Group provides AI-powered solutions, IT services, and digital transformation 
                services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Artificial Intelligence and Machine Learning solutions</li>
                <li>IT infrastructure and cloud services</li>
                <li>Micro SAAS applications and tools</li>
                <li>5G and IoT solutions</li>
                <li>Cybersecurity services</li>
                <li>Custom software development</li>
                <li>Consulting and support services</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">3. User Accounts</h2>
              <h3 className="text-xl font-semibold text-white mb-4">3.1 Account Creation</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                To access certain features of our services, you may be required to create an account. 
                You agree to provide accurate, current, and complete information during the registration 
                process and to update such information to keep it accurate, current, and complete.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">3.2 Account Security</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                You are responsible for maintaining the confidentiality of your account credentials and 
                for all activities that occur under your account. You agree to notify us immediately 
                of any unauthorized use of your account.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">4. Acceptable Use</h2>
              <h3 className="text-xl font-semibold text-white mb-4">4.1 Permitted Use</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                You may use our services only for lawful purposes and in accordance with these Terms. 
                You agree not to use our services:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                <li>To impersonate or attempt to impersonate Zion Tech Group, a Zion Tech Group employee, another user, or any other person or entity</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of our services</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">4.2 Prohibited Activities</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                The following activities are expressly prohibited:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Reverse engineering, decompiling, or disassembling our software</li>
                <li>Attempting to gain unauthorized access to our systems or networks</li>
                <li>Using our services to develop competing products or services</li>
                <li>Distributing malware, viruses, or other harmful code</li>
                <li>Violating any intellectual property rights</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">5. Intellectual Property Rights</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                The service and its original content, features, and functionality are and will remain 
                the exclusive property of Zion Tech Group and its licensors. The service is protected 
                by copyright, trademark, and other laws. Our trademarks and trade dress may not be used 
                in connection with any product or service without our prior written consent.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">6. Payment Terms</h2>
              <h3 className="text-xl font-semibold text-white mb-4">6.1 Fees and Payment</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Fees for our services are as set forth in our pricing plans. You agree to pay all fees 
                associated with your use of our services. All fees are non-refundable unless otherwise 
                specified in writing.
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">6.2 Billing</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We will bill you in advance for recurring services. Payment is due upon receipt of invoice. 
                Late payments may result in suspension or termination of services.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">7. Privacy Policy</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs 
                your use of our services, to understand our practices.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">8. Service Availability</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We strive to maintain high service availability, but we do not guarantee that our services 
                will be available at all times. We may experience downtime for maintenance, updates, or 
                other reasons beyond our control.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">9. Limitation of Liability</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, 
                or affiliates, be liable for any indirect, incidental, special, consequential, or punitive 
                damages, including without limitation, loss of profits, data, use, goodwill, or other 
                intangible losses, resulting from your use of our services.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">10. Indemnification</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                You agree to defend, indemnify, and hold harmless Zion Tech Group and its licensee and 
                licensors, and their employees, contractors, agents, officers and directors, from and 
                against any and all claims, damages, obligations, losses, liabilities, costs or debt, 
                and expenses (including but not limited to attorney's fees).
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">11. Termination</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We may terminate or suspend your account and bar access to our services immediately, 
                without prior notice or liability, under our sole discretion, for any reason whatsoever 
                and without limitation, including but not limited to a breach of the Terms.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">12. Governing Law</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                These Terms shall be interpreted and governed by the laws of the State of Delaware, 
                United States, without regard to its conflict of law provisions. Our failure to enforce 
                any right or provision of these Terms will not be considered a waiver of those rights.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">13. Changes to Terms</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will provide at least 30 days notice prior to any new terms 
                taking effect.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">14. Contact Information</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-white/5 rounded-lg p-6 space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                  <span className="text-gray-300">+1 302 464 0950</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-cyan-400 mr-3 mt-1" />
                  <span className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709, USA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Questions About Our Terms?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We're here to help clarify any questions you may have about our terms of service.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;