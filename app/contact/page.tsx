import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact - Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group for AI and IT solutions. Get in touch with our experts." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our team to discuss your AI and IT solution needs.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Get Started Today</h2>
              <p className="text-gray-300 mb-8">
                Ready to transform your business with cutting-edge AI and IT solutions? 
                Contact us today to discuss your project requirements.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Email</h3>
                  <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Phone</h3>
                  <p className="text-gray-300">+1-302-464-0950</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}