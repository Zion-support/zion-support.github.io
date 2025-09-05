import React from 'react';
import Layout from '../components/Layout';

export default function TermsPage() {
  return (
    <Layout title="Terms of Service - Zion Tech Group" description="Our terms of service and usage guidelines">
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Terms of Service
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Please read these terms carefully
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Acceptance of Terms
                </h2>
                <p className="text-gray-600 mb-6">
                  By accessing and using our services, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Use License
                </h2>
                <p className="text-gray-600 mb-6">
                  Permission is granted to temporarily download one copy of our materials for personal, 
                  non-commercial transitory viewing only.
                </p>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600">
                  If you have any questions about these Terms of Service, please contact us at 
                  <a href="mailto:kleber@ziontechgroup.com" className="text-purple-600 hover:text-purple-700">
                    kleber@ziontechgroup.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}