import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group's AI and IT solutions." />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-24">
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 space-y-6 text-gray-300">
              <p className="text-sm text-gray-400">Last updated: January 1, 2024</p>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p>By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
                <p>Permission is granted to temporarily download one copy of our materials for personal, non-commercial transitory viewing only.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
                <p>The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">4. Limitations</h2>
                <p>In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">5. Accuracy of Materials</h2>
                <p>The materials appearing on our website could include technical, typographical, or photographic errors. We do not warrant that any of the materials are accurate, complete, or current.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">6. Links</h2>
                <p>We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">7. Modifications</h2>
                <p>We may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the current version of these terms.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
                <p>These terms and conditions are governed by and construed in accordance with the laws of Delaware, United States.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4">9. Contact Information</h2>
                <p>If you have any questions about these Terms of Service, please contact us at legal@ziontechgroup.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsPage;