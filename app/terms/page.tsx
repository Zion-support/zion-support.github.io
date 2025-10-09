import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's terms of service outlining the terms and conditions for using our services." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24">
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
              <div className="cyber-card p-8 space-y-6 text-gray-300">
                <p className="text-sm text-gray-400">Last updated: January 1, 2024</p>
                
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                  <p>By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
                  <p>Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Service Availability</h2>
                  <p>We strive to maintain high service availability but cannot guarantee uninterrupted access to our services.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
                  <p>In no event shall Zion Tech Group or its suppliers be liable for any damages arising out of the use or inability to use our services.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Contact Information</h2>
                  <p>If you have any questions about these Terms of Service, please contact us at legal@ziontechgroup.com</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TermsPage;
