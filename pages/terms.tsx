import React from 'react';
import Layout from '../components/Layout';

export default function TermsPage() {
  return (
    <Layout title="Terms of Service - Zion Tech Group">
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Terms of Service
              </h1>
              <p className="text-lg text-gray-600">
                Please read these terms carefully before using our services.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="prose prose-lg max-w-none">
                  <h2>Acceptance of Terms</h2>
                  <p>
                    By accessing and using our services, you accept and agree to be bound by the terms 
                    and provision of this agreement.
                  </p>

                  <h2>Use License</h2>
                  <p>
                    Permission is granted to temporarily download one copy of the materials on our website 
                    for personal, non-commercial transitory viewing only.
                  </p>

                  <h2>Disclaimer</h2>
                  <p>
                    The materials on our website are provided on an 'as is' basis. We make no warranties, 
                    expressed or implied, and hereby disclaim and negate all other warranties.
                  </p>

                  <h2>Limitations</h2>
                  <p>
                    In no event shall Zion Tech Group or its suppliers be liable for any damages arising 
                    out of the use or inability to use the materials on our website.
                  </p>

                  <h2>Contact Information</h2>
                  <p>
                    If you have any questions about these Terms of Service, please contact us at 
                    legal@ziontechgroup.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}