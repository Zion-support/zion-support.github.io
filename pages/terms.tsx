import React from 'react';
import Layout from '../components/Layout';

export default function TermsPage() {
  return (
    <Layout
      title="Terms of Service - Zion Tech Group"
      description="Read Zion Tech Group's terms of service and user agreement."
      keywords="terms of service, user agreement, legal terms, service conditions"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
              <p className="text-xl text-blue-100">
                Please read these terms carefully before using our services.
              </p>
              <p className="text-sm text-blue-200 mt-4">
                Last updated: January 15, 2024
              </p>
            </div>
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
                    By accessing and using Zion Tech Group's services, you accept and agree to be bound by 
                    the terms and provision of this agreement.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                  <p className="text-gray-600 mb-4">
                    Zion Tech Group provides technology consulting, AI services, IT solutions, and software 
                    development services to businesses and organizations.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use License</h2>
                  <p className="text-gray-600 mb-4">
                    Permission is granted to temporarily download one copy of the materials on Zion Tech Group's 
                    website for personal, non-commercial transitory viewing only.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Disclaimer</h2>
                  <p className="text-gray-600 mb-4">
                    The materials on Zion Tech Group's website are provided on an 'as is' basis. 
                    Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and 
                    negates all other warranties including without limitation, implied warranties or 
                    conditions of merchantability, fitness for a particular purpose, or non-infringement 
                    of intellectual property or other violation of rights.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitations</h2>
                  <p className="text-gray-600 mb-4">
                    In no event shall Zion Tech Group or its suppliers be liable for any damages 
                    (including, without limitation, damages for loss of data or profit, or due to 
                    business interruption) arising out of the use or inability to use the materials 
                    on Zion Tech Group's website, even if Zion Tech Group or a Zion Tech Group 
                    authorized representative has been notified orally or in writing of the possibility 
                    of such damage.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Accuracy of Materials</h2>
                  <p className="text-gray-600 mb-4">
                    The materials appearing on Zion Tech Group's website could include technical, 
                    typographical, or photographic errors. Zion Tech Group does not warrant that any 
                    of the materials on its website are accurate, complete or current.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Links</h2>
                  <p className="text-gray-600 mb-4">
                    Zion Tech Group has not reviewed all of the sites linked to our website and is not 
                    responsible for the contents of any such linked site. The inclusion of any link does 
                    not imply endorsement by Zion Tech Group of the site.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modifications</h2>
                  <p className="text-gray-600 mb-4">
                    Zion Tech Group may revise these terms of service for its website at any time without 
                    notice. By using this website you are agreeing to be bound by the then current version 
                    of these terms of service.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
                  <p className="text-gray-600 mb-4">
                    These terms and conditions are governed by and construed in accordance with the laws 
                    of Delaware and you irrevocably submit to the exclusive jurisdiction of the courts 
                    in that state or location.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
                  <p className="text-gray-600 mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-700">Email: kleber@ziontechgroup.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-700">Phone: +1 302 464 0950</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-700">Address: 364 E Main St STE 1008, Middletown DE 19709</span>
                      </div>
                    </div>
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