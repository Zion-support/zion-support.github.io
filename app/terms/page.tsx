import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Scale, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group. Please read these terms carefully before using our services." />
        <meta name="keywords" content="terms of service, legal terms, user agreement, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: December 15, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-6">
                By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">2. Description of Service</h2>
              <p className="text-gray-300 mb-6">
                Zion Tech Group provides AI-powered solutions, IT services, cloud computing, and digital transformation services. 
                Our services include but are not limited to:
              </p>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li>• AI content generation and automation tools</li>
                <li>• Cloud migration and infrastructure services</li>
                <li>• Cybersecurity solutions and monitoring</li>
                <li>• 5G implementation and network solutions</li>
                <li>• Digital transformation consulting</li>
                <li>• Micro SaaS applications and tools</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">3. User Accounts</h2>
              <p className="text-gray-300 mb-6">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
                You are responsible for safeguarding the password and for all activities that occur under your account.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">4. Acceptable Use</h2>
              <p className="text-gray-300 mb-6">
                You agree not to use our services:
              </p>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li>• For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>• To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>• To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>• To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>• To submit false or misleading information</li>
                <li>• To upload or transmit viruses or any other type of malicious code</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">5. Payment Terms</h2>
              <p className="text-gray-300 mb-6">
                Payment for services is due according to the terms specified in your service agreement. 
                We reserve the right to change our fees at any time with 30 days' notice. 
                All fees are non-refundable unless otherwise specified in writing.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">6. Intellectual Property</h2>
              <p className="text-gray-300 mb-6">
                The service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group 
                and its licensors. The service is protected by copyright, trademark, and other laws.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">7. Privacy Policy</h2>
              <p className="text-gray-300 mb-6">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, 
                to understand our practices.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">8. Service Availability</h2>
              <p className="text-gray-300 mb-6">
                We strive to maintain high service availability, but we do not guarantee that our services will be uninterrupted or error-free. 
                We may temporarily suspend services for maintenance, updates, or other reasons.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">9. Limitation of Liability</h2>
              <p className="text-gray-300 mb-6">
                In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, 
                loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">10. Indemnification</h2>
              <p className="text-gray-300 mb-6">
                You agree to defend, indemnify, and hold harmless Zion Tech Group and its licensee and licensors, and their employees, 
                contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, 
                liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">11. Termination</h2>
              <p className="text-gray-300 mb-6">
                We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, 
                under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">12. Governing Law</h2>
              <p className="text-gray-300 mb-6">
                These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, 
                without regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">13. Changes to Terms</h2>
              <p className="text-gray-300 mb-6">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">14. Contact Information</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-white/5 rounded-lg p-6 mb-8">
                <p className="text-gray-300 mb-2">
                  <strong>Email:</strong> legal@ziontechgroup.com
                </p>
                <p className="text-gray-300 mb-2">
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                </p>
                <p className="text-gray-300">
                  <strong>Phone:</strong> +1 (302) 464-0950
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Link
            to="/"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}