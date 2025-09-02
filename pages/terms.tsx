import React from 'react';
import Head from 'next/head';
import { FileText, Scale, Shield, AlertTriangle, Users, Mail } from 'lucide-react';
import SimpleNavigation from '../src/components/SimpleNavigation';
import { SimpleFooter } from '../src/components/SimpleFooter';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's terms of service outlining the rules and regulations for using our services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <SimpleNavigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-50 to-green-50 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-green-600 mr-3" />
                <span className="text-base font-semibold leading-7 text-green-600">Terms of Service</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Terms and Conditions
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                These terms and conditions outline the rules and regulations for the use of Zion Tech Group's services. 
                By accessing and using our services, you accept these terms in full.
              </p>
              <p className="mt-4 text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </section>

        {/* Terms Overview */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mb-12">
              <div className="text-center">
                <div className="p-3 bg-green-100 rounded-lg w-fit mx-auto mb-4">
                  <Scale className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Framework</h3>
                <p className="text-gray-600 text-sm">Clear terms that protect both parties</p>
              </div>
              <div className="text-center">
                <div className="p-3 bg-blue-100 rounded-lg w-fit mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Protection</h3>
                <p className="text-gray-600 text-sm">Terms that ensure quality service delivery</p>
              </div>
              <div className="text-center">
                <div className="p-3 bg-purple-100 rounded-lg w-fit mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">User Rights</h3>
                <p className="text-gray-600 text-sm">Your rights and responsibilities clearly defined</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-6">
                By accessing and using Zion Tech Group's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Use License</h2>
              <p className="text-gray-600 mb-4">
                Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Service Description</h2>
              <p className="text-gray-600 mb-4">
                Zion Tech Group provides technology consulting, AI services, IT solutions, and software development services. We reserve the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Modify or discontinue any service at any time</li>
                <li>Refuse service to anyone for any reason</li>
                <li>Change pricing and terms with appropriate notice</li>
                <li>Update and improve our services continuously</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. User Responsibilities</h2>
              <p className="text-gray-600 mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not engage in any illegal or unauthorized activities</li>
                <li>Respect intellectual property rights</li>
                <li>Not interfere with the proper functioning of our services</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Payment Terms</h2>
              <p className="text-gray-600 mb-4">
                For paid services:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Payment is due according to the agreed schedule</li>
                <li>Late payments may result in service suspension</li>
                <li>Refunds are subject to our refund policy</li>
                <li>Prices are subject to change with notice</li>
                <li>All fees are non-refundable unless otherwise specified</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Intellectual Property</h2>
              <p className="text-gray-600 mb-4">
                The service and its original content, features, and functionality are and will remain the exclusive property of Zion Tech Group and its licensors. The service is protected by copyright, trademark, and other laws.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Privacy Policy</h2>
              <p className="text-gray-600 mb-6">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Prohibited Uses</h2>
              <p className="text-gray-600 mb-4">
                You may not use our service:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Disclaimer</h2>
              <p className="text-gray-600 mb-6">
                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, Zion Tech Group excludes all representations, warranties, conditions and terms relating to our website and the use of this website.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Limitation of Liability</h2>
              <p className="text-gray-600 mb-6">
                In no event shall Zion Tech Group, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Indemnification</h2>
              <p className="text-gray-600 mb-6">
                You agree to defend, indemnify, and hold harmless Zion Tech Group and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Termination</h2>
              <p className="text-gray-600 mb-6">
                We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">13. Governing Law</h2>
              <p className="text-gray-600 mb-6">
                These Terms shall be interpreted and governed by the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">14. Changes to Terms</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">15. Contact Information</h2>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Mail className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-gray-900">Email:</span>
                  <a href="mailto:legal@ziontechgroup.com" className="text-green-600 hover:text-green-500">
                    legal@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-gray-900">Address:</span>
                  <span className="text-gray-600">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SimpleFooter />
    </>
  );
}