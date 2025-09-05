import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function TermsPage() {
  return (
    <Layout>
      <Head>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group - Learn about our service terms and conditions." />
        <meta name="keywords" content="terms of service, legal terms, service agreement" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-lg text-gray-300">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <p className="text-gray-600 mb-6">
                  <strong>Last updated: </strong> January 15, 2024
                </p>
                
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-600 mb-6">
                    By accessing and using Zion Tech Group&apos;s services, you accept and agree to be bound by 
                    the terms and provision of this agreement.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
                  <p className="text-gray-600 mb-4">
                    Permission is granted to temporarily download one copy of the materials on Zion Tech Group&apos;s 
                    website for personal, non-commercial transitory viewing only.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Disclaimer</h2>
                  <p className="text-gray-600 mb-4">
                    The materials on Zion Tech Group&apos;s website are provided on an &apos;as is&apos; basis. 
                    Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates 
                    all other warranties including without limitation, implied warranties or conditions of 
                    merchantability, fitness for a particular purpose, or non-infringement of intellectual 
                    property or other violation of rights.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitations</h2>
                  <p className="text-gray-600 mb-4">
                    In no event shall Zion Tech Group or its suppliers be liable for any damages (including, 
                    without limitation, damages for loss of data or profit, or due to business interruption) 
                    arising out of the use or inability to use the materials on Zion Tech Group&apos;s website.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Accuracy of Materials</h2>
                  <p className="text-gray-600 mb-4">
                    The materials appearing on Zion Tech Group&apos;s website could include technical, 
                    typographical, or photographic errors. Zion Tech Group does not warrant that any of the 
                    materials on its website are accurate, complete, or current.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Links</h2>
                  <p className="text-gray-600 mb-4">
                    Zion Tech Group has not reviewed all of the sites linked to our website and is not 
                    responsible for the contents of any such linked site. The inclusion of any link does not 
                    imply endorsement by Zion Tech Group of the site.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modifications</h2>
                  <p className="text-gray-600 mb-4">
                    Zion Tech Group may revise these terms of service for its website at any time without notice. 
                    By using this website you are agreeing to be bound by the then current version of these 
                    terms of service.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
                  <p className="text-gray-600 mb-4">
                    These terms and conditions are governed by and construed in accordance with the laws of 
                    Delaware and you irrevocably submit to the exclusive jurisdiction of the courts in that 
                    state or location.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
                  <p className="text-gray-600 mb-4">
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600">
                      <strong>Email:</strong> kleber@ziontechgroup.com<br />
                      <strong>Phone:</strong> +1 302 464 0950<br />
                      <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}