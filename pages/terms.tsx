import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FileText, Mail, Phone, Calendar } from 'lucide-react';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's Terms of Service - Read our terms and conditions for using our services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-blue-600 mr-3" />
                <h1 className="text-4xl font-bold text-gray-900">
                  Terms of Service
                </h1>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Please read these terms carefully before using our services. 
                By using our services, you agree to be bound by these terms.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Last updated: January 15, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using the services provided by Zion Tech Group ("Company", "we", "us", or "our"), 
                you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2>2. Description of Service</h2>
              <p>
                Zion Tech Group provides technology consulting, software development, AI solutions, 
                cloud services, and related technology services. We reserve the right to modify, 
                suspend, or discontinue any aspect of our services at any time.
              </p>

              <h2>3. User Accounts</h2>
              <p>
                When you create an account with us, you must provide information that is accurate, 
                complete, and current at all times. You are responsible for safeguarding the password 
                and for all activities that occur under your account.
              </p>

              <h2>4. Acceptable Use</h2>
              <p>You agree not to use our services to:</p>
              <ul>
                <li>Violate any laws or regulations</li>
                <li>Infringe on the rights of others</li>
                <li>Transmit harmful or malicious code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of our services</li>
                <li>Use our services for any unlawful or prohibited purpose</li>
              </ul>

              <h2>5. Intellectual Property</h2>
              <p>
                The service and its original content, features, and functionality are and will remain 
                the exclusive property of Zion Tech Group and its licensors. The service is protected 
                by copyright, trademark, and other laws.
              </p>

              <h2>6. Payment Terms</h2>
              <p>
                Payment terms are as specified in your service agreement. All fees are non-refundable 
                unless otherwise specified. We reserve the right to change our fees at any time with 
                reasonable notice.
              </p>

              <h2>7. Confidentiality</h2>
              <p>
                Both parties agree to maintain the confidentiality of any proprietary or confidential 
                information disclosed during the course of our business relationship.
              </p>

              <h2>8. Limitation of Liability</h2>
              <p>
                In no event shall Zion Tech Group, nor its directors, employees, partners, agents, 
                suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                or other intangible losses.
              </p>

              <h2>9. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Zion Tech Group and its licensee and 
                licensors, and their employees, contractors, agents, officers and directors, from and 
                against any and all claims, damages, obligations, losses, liabilities, costs or debt, 
                and expenses (including but not limited to attorney's fees).
              </p>

              <h2>10. Termination</h2>
              <p>
                We may terminate or suspend your account and bar access to the service immediately, 
                without prior notice or liability, under our sole discretion, for any reason whatsoever 
                and without limitation, including but not limited to a breach of the Terms.
              </p>

              <h2>11. Governing Law</h2>
              <p>
                These Terms shall be interpreted and governed by the laws of the State of California, 
                without regard to its conflict of law provisions.
              </p>

              <h2>12. Dispute Resolution</h2>
              <p>
                Any disputes arising out of or relating to these terms or our services shall be resolved 
                through binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>

              <h2>13. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will provide at least 30 days notice prior to any new terms 
                taking effect.
              </p>

              <h2>14. Severability</h2>
              <p>
                If any provision of these Terms is held to be invalid or unenforceable by a court, 
                the remaining provisions of these Terms will remain in effect.
              </p>

              <h2>15. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-2">
                  <Mail className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-semibold">Email:</span>
                  <span className="ml-2">legal@ziontechgroup.com</span>
                </div>
                <div className="flex items-center mb-2">
                  <Phone className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-semibold">Phone:</span>
                  <span className="ml-2">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="font-semibold">Business Hours:</span>
                  <span className="ml-2">Mon-Fri, 9 AM - 6 PM PST</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Questions About Our Terms?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our legal team is available to answer any questions you may have 
              about our terms of service.
            </p>
            <Link href="/contact">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Legal Team
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}