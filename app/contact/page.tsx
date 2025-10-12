import React from 'react';
import { Helmet } from 'react-helmet-async';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations and support." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-lg text-gray-300 mb-8">
              Get in touch with our team to discuss your AI and IT solution needs.
            </p>
            <div className="bg-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">Get Started Today</h2>
              <p className="text-gray-300 mb-6">
                Ready to transform your business with advanced AI and IT solutions? 
                Contact us for a consultation.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <p className="text-cyan-400">contact@ziontechgroup.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;