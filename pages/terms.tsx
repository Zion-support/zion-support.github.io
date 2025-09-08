import React from 'react';
import Layout from '../components/Layout';

const TermsPage: React.FC = () => {
  return (
    <Layout 
      title="Terms of Service - Zion Tech Group" 
      description="Terms of Service for Zion Tech Group. Please read these terms carefully before using our services."
    >
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
            <p className="text-gray-700 mb-6">Last updated: 2025-01-15</p>

            <div className="prose max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>By accessing and using Zion Tech Group's services, you accept and agree to be bound by the terms and provision of this agreement.</p>

              <h2>2. Use License</h2>
              <p>Permission is granted to temporarily download one copy of the materials on Zion Tech Group's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul>
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                <li>attempt to decompile or reverse engineer any software contained on Zion Tech Group's website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>

              <h2>3. Disclaimer</h2>
              <p>The materials on Zion Tech Group's website are provided on an 'as is' basis. Zion Tech Group makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

              <h2>4. Limitations</h2>
              <p>In no event shall Zion Tech Group or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Zion Tech Group's website, even if Zion Tech Group or a Zion Tech Group authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>

              <h2>5. Accuracy of Materials</h2>
              <p>The materials appearing on Zion Tech Group's website could include technical, typographical, or photographic errors. Zion Tech Group does not warrant that any of the materials on its website are accurate, complete, or current. Zion Tech Group may make changes to the materials contained on its website at any time without notice. However, Zion Tech Group does not make any commitment to update the materials.</p>

              <h2>6. Links</h2>
              <p>Zion Tech Group has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Zion Tech Group of the site. Use of any such linked website is at the user's own risk.</p>

              <h2>7. Modifications</h2>
              <p>Zion Tech Group may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>

              <h2>8. Governing Law</h2>
              <p>These terms and conditions are governed by and construed in accordance with the laws of Delaware, United States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.</p>

              <h2>9. Contact Information</h2>
              <p>If you have any questions about these Terms of Service, please contact us at:</p>
              <ul>
                <li>Email: kleber@ziontechgroup.com</li>
                <li>Phone: +1 302 464 0950</li>
                <li>Address: 364 E Main St STE 1008, Middletown DE 19709</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsPage;