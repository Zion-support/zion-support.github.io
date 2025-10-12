import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../layout';

const TermsPage: React.FC = () => {
  return (
    <Layout
      title="Terms of Service - Zion Tech Group"
      description="Read our terms of service and understand the conditions for using our services."
      keywords="terms of service, terms and conditions, user agreement, service terms"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
              Terms of <span className="text-cyan-400">Service</span>
            </h1>
            <p className="text-xl text-gray-300 mb-16 text-center">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
              <p className="text-gray-300 mb-6">
                By accessing and using our services, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>
              <p className="text-gray-300 mb-6">
                Permission is granted to temporarily download one copy of our materials for personal, 
                non-commercial transitory viewing only.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer</h2>
              <p className="text-gray-300 mb-6">
                The materials on our website are provided on an 'as is' basis. Zion Tech Group makes 
                no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Limitations</h2>
              <p className="text-gray-300 mb-6">
                In no event shall Zion Tech Group or its suppliers be liable for any damages arising 
                out of the use or inability to use the materials on our website.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p className="text-gray-300 mb-6">
                These terms and conditions are governed by and construed in accordance with the laws 
                of Delaware, United States.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about these terms, please contact us at 
                <a href="mailto:legal@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 ml-1">
                  legal@ziontechgroup.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsPage;