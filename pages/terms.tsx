import React from 'react';
import Layout from '../components/Layout';

const Terms: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                Welcome to Zion Tech Group. By using our services, you agree to these terms.
              </p>
              
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-6">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
              <p className="text-gray-300 mb-6">
                Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">3. Disclaimer</h2>
              <p className="text-gray-300 mb-6">
                The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">4. Limitations</h2>
              <p className="text-gray-300 mb-6">
                In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use the materials on Zion Tech Group's website.
              </p>

              <h2 className="text-2xl font-semibold text-white mb-4">5. Contact Information</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions about these Terms of Service, please contact us at support@ziontechgroup.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;