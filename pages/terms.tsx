import React from 'react';
import Head from 'next/head';
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';
import PageTransition from '../src/components/PageTransition';

export default function Terms() {
  return (
    <PageTransition>
      <Head>
        <title>Terms of Service — Zion Tech Group</title>
        <meta name="description" content="Read Zion Tech Group's terms of service and understand your rights and responsibilities when using our services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/terms" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-base font-semibold leading-7 text-blue-600">Terms of Service</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Terms and Conditions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              These terms and conditions govern your use of Zion Tech Group's services and website. 
              Please read them carefully before using our services.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Last updated: January 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <Scale className="h-5 w-5 mr-2 text-blue-600" />
                Acceptance of Terms
              </h2>
              <p className="text-gray-700">
                By accessing and using Zion Tech Group's services, you accept and agree to be bound by the 
                terms and provision of this agreement. If you do not agree to abide by the above, please 
                do not use this service.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Use License
              </h2>
              <p className="text-gray-700">
                Permission is granted to temporarily download one copy of the materials on Zion Tech Group's 
                website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                not a transfer of title, and under this license you may not:
              </p>
              <ul className="text-gray-700 space-y-2 mt-3">
                <li>• Modify or copy the materials</li>
                <li>• Use the materials for any commercial purpose or for any public display</li>
                <li>• Attempt to reverse engineer any software contained on the website</li>
                <li>• Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-yellow-600" />
                Disclaimer
              </h2>
              <p className="text-gray-700">
                The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group 
                makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                including without limitation, implied warranties or conditions of merchantability, fitness for a 
                particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Availability</h2>
                <p className="text-gray-700 leading-relaxed">
                  We strive to maintain high service availability, but we do not guarantee that our services 
                  will be uninterrupted or error-free. We reserve the right to modify, suspend, or discontinue 
                  any part of our services at any time without notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As a user of our services, you agree to:
                </p>
                <ul className="text-gray-700 space-y-2 ml-4">
                  <li>• Provide accurate and complete information</li>
                  <li>• Maintain the confidentiality of your account credentials</li>
                  <li>• Use our services in compliance with applicable laws</li>
                  <li>• Not engage in any illegal or unauthorized activities</li>
                  <li>• Respect the intellectual property rights of others</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  All content, trademarks, service marks, trade names, logos, and other intellectual property 
                  displayed on our website are the property of Zion Tech Group or their respective owners. 
                  You may not use, reproduce, or distribute any content without our prior written permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  In no event shall Zion Tech Group or its suppliers be liable for any damages (including, 
                  without limitation, damages for loss of data or profit, or due to business interruption) 
                  arising out of the use or inability to use the materials on Zion Tech Group's website, 
                  even if Zion Tech Group or an authorized representative has been notified orally or in 
                  writing of the possibility of such damage.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  Payment terms for our services are specified in individual service agreements. Generally, 
                  payment is due upon receipt of invoice unless otherwise specified. Late payments may be 
                  subject to additional fees and interest charges.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may terminate or suspend your access to our services immediately, without prior notice 
                  or liability, for any reason whatsoever, including without limitation if you breach the 
                  Terms. Upon termination, your right to use the service will cease immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of 
                  California, United States, and you irrevocably submit to the exclusive jurisdiction of 
                  the courts in that state or location.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify users of any 
                  material changes by posting the new terms on this page and updating the "Last updated" 
                  date. Your continued use of our services after such modifications constitutes acceptance 
                  of the updated terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> legal@ziontechgroup.com<br />
                    <strong>Phone:</strong> +1 (302) 464-0950<br />
                    <strong>Address:</strong> San Francisco, CA, United States
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}