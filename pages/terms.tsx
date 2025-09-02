import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { FileText, Scale, Shield, AlertTriangle, Users, Gavel } from 'lucide-react';

const Terms: NextPage = () => {
  return (
    <MainLayout
      title="Terms of Service - Zion Tech Group"
      description="Read our terms of service and understand the conditions for using Zion Tech Group's services."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Terms of Service</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Please read these terms carefully before using our services.
          </p>
          <div className="text-sm text-gray-300">
            Last updated: January 27, 2024
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-8 h-8 text-blue-600 mr-3" />
                Agreement to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your use of the Zion Tech Group website located at 
                https://ziontechgroup.com and our services (collectively, the "Service") operated by Zion Tech Group 
                ("us," "we," or "our").
              </p>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any 
                part of these terms, then you may not access the Service.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Scale className="w-8 h-8 text-blue-600 mr-3" />
                Acceptance of Terms
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                By using our Service, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>You are at least 18 years old or have parental consent</li>
                <li>You have the legal capacity to enter into these Terms</li>
                <li>You will comply with all applicable laws and regulations</li>
                <li>You will not use the Service for any unlawful purpose</li>
              </ul>
            </div>

            {/* Use of Service */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                Use of Service
              </h2>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Permitted Uses</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You may use our Service for lawful purposes only. You agree to use the Service in accordance with 
                these Terms and all applicable laws and regulations.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Prohibited Uses</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                You may not use our Service:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
                <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                <li>For any obscene or immoral purpose</li>
                <li>To interfere with or circumvent the security features of the Service</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                Intellectual Property Rights
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Service and its original content, features, and functionality are and will remain the exclusive 
                property of Zion Tech Group and its licensors. The Service is protected by copyright, trademark, 
                and other laws. Our trademarks and trade dress may not be used in connection with any product or 
                service without our prior written consent.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You retain ownership of any content you submit to the Service, but grant us a license to use, 
                modify, and distribute such content in connection with the Service.
              </p>
            </div>

            {/* User Accounts */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">User Accounts</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you create an account with us, you must provide information that is accurate, complete, 
                and current at all times. You are responsible for safeguarding the password and for all activities 
                that occur under your account.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You agree to notify us immediately of any unauthorized use of your account or any other breach 
                of security. We will not be liable for any losses caused by any unauthorized use of your account.
              </p>
            </div>

            {/* Privacy Policy */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use 
                of the Service, to understand our practices.
              </p>
            </div>

            {/* Service Availability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Availability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We strive to provide continuous service availability, but we do not guarantee that the Service 
                will be available at all times. We may experience hardware, software, or other problems or need 
                to perform maintenance related to the Service, resulting in interruptions, delays, or errors.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="w-8 h-8 text-blue-600 mr-3" />
                Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, 
                or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, 
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses, 
                resulting from your use of the Service.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The information on this Service is provided on an "as is" basis. To the fullest extent permitted 
                by law, this Company:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Excludes all representations and warranties relating to this Service and its contents</li>
                <li>Excludes all liability for damages arising out of or in connection with your use of this Service</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Gavel className="w-8 h-8 text-blue-600 mr-3" />
                Governing Law
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, 
                without regard to its conflict of law provisions. Our failure to enforce any right or provision 
                of these Terms will not be considered a waiver of those rights.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will try to provide at least 30 days notice prior to any new 
                terms taking effect.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By continuing to access or use our Service after those revisions become effective, you agree 
                to be bound by the revised terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Zion Tech Group</strong></p>
                <p className="text-gray-700 mb-2">364 E Main St STE 1008</p>
                <p className="text-gray-700 mb-2">Middletown, DE 19709</p>
                <p className="text-gray-700 mb-2">Phone: +1 302 464 0950</p>
                <p className="text-gray-700 mb-2">Email: legal@ziontechgroup.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Terms;