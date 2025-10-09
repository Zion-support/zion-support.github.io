'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Contact Zion Tech Group for AI and IT solutions. Get in touch with our experts for a free consultation." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Contact Us
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8">
                  Get in touch with our team for AI and IT solutions tailored to your business needs.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Phone</h2>
                <p className="text-gray-700 mb-6">
                  (302) 464-0950
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Email</h2>
                <p className="text-gray-700 mb-6">
                  info@ziontechgroup.com
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Address</h2>
                <p className="text-gray-700 mb-6">
                  Zion Tech Group<br />
                  Technology Solutions<br />
                  United States
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

export default ContactPage;