'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group</title>
        <meta name="description" content="Terms of Service for Zion Tech Group - Terms and conditions for using our AI and IT services." />
        <meta name="keywords" content="terms of service, terms and conditions, user agreement, service terms" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6">Terms of Service</h1>
            <p className="text-xl text-gray-300 mb-8">
              Last updated: December 2024
            </p>
            
            <div className="prose prose-invert max-w-none">
              <div className="bg-slate-800/50 rounded-lg p-8 space-y-6">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Acceptance of Terms</h2>
                  <p className="text-gray-300 mb-4">
                    By accessing and using our services, you accept and agree to be bound by the terms 
                    and provision of this agreement.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>
                  <p className="text-gray-300 mb-4">
                    Permission is granted to temporarily download one copy of our services for personal, 
                    non-commercial transitory viewing only.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Service Availability</h2>
                  <p className="text-gray-300 mb-4">
                    We strive to maintain high service availability but do not guarantee uninterrupted access. 
                    We reserve the right to modify or discontinue services with reasonable notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>
                  <p className="text-gray-300 mb-4">
                    Users are responsible for maintaining the confidentiality of their account information 
                    and for all activities that occur under their account.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                  <p className="text-gray-300 mb-4">
                    In no event shall Zion Tech Group be liable for any damages arising out of the use 
                    or inability to use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                  <p className="text-gray-300 mb-4">
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="text-gray-300">
                    <p>Email: legal@ziontechgroup.com</p>
                    <p>Phone: (302) 464-0950</p>
                    <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default TermsPage;