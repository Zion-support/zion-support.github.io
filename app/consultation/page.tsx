'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ConsultationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Free Consultation - Zion Tech Group</title>
        <meta name="description" content="Schedule a free consultation with our AI and IT experts. Get personalized recommendations for your business." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Free Consultation
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8">
                  Get expert advice on how AI and IT solutions can transform your business.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Expect</h2>
                <p className="text-gray-700 mb-6">
                  Our 30-minute consultation will help you understand how our services can benefit your business.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Schedule Your Call</h2>
                <p className="text-gray-700 mb-6">
                  Contact us at (302) 464-0950 or email info@ziontechgroup.com to schedule your free consultation.
                </p>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ConsultationPage;