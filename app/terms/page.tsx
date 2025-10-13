import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Read the terms of service for Zion Tech Group's AI and IT solutions. Understand your rights and obligations when using our services." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: January 1, 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-6">
              By accessing and using Zion Tech Group's services, you accept and agree to be bound by 
              the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Use License</h2>
            <p className="text-gray-600 mb-6">
              Permission is granted to temporarily download one copy of the materials on Zion Tech Group's 
              website for personal, non-commercial transitory viewing only.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Disclaimer</h2>
            <p className="text-gray-600 mb-6">
              The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group 
              makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Limitations</h2>
            <p className="text-gray-600 mb-6">
              In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of 
              the use or inability to use the materials on Zion Tech Group's website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Accuracy of Materials</h2>
            <p className="text-gray-600 mb-6">
              The materials appearing on Zion Tech Group's website could include technical, typographical, 
              or photographic errors. Zion Tech Group does not warrant that any of the materials on its 
              website are accurate, complete, or current.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Links</h2>
            <p className="text-gray-600 mb-6">
              Zion Tech Group has not reviewed all of the sites linked to our website and is not responsible 
              for the contents of any such linked site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Modifications</h2>
            <p className="text-gray-600 mb-6">
              Zion Tech Group may revise these terms of service for its website at any time without notice. 
              By using this website, you are agreeing to be bound by the then current version of these terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Governing Law</h2>
            <p className="text-gray-600 mb-6">
              These terms and conditions are governed by and construed in accordance with the laws of Delaware 
              and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-6">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2">Email: legal@ziontechgroup.com</p>
              <p className="text-gray-600 mb-2">Phone: +1-302-464-0950</p>
              <p className="text-gray-600">Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
