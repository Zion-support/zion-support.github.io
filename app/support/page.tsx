import React from 'react';
import { Helmet } from 'react-helmet-async';

const SupportPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get 24/7 support for all your AI and IT needs." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              24/7 <span className="text-cyan-400">Support</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expert team is here to help you succeed with round-the-clock support.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">Get Help Now</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Contact Support:</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-cyan-400 font-semibold">Phone:</p>
                      <p className="text-white">(302) 464-0950</p>
                    </div>
                    <div>
                      <p className="text-cyan-400 font-semibold">Email:</p>
                      <p className="text-white">support@ziontechgroup.com</p>
                    </div>
                    <div>
                      <p className="text-cyan-400 font-semibold">Live Chat:</p>
                      <p className="text-white">Available 24/7</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Support Hours:</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>Monday - Friday: 8 AM - 8 PM EST</p>
                    <p>Saturday - Sunday: 9 AM - 5 PM EST</p>
                    <p>Emergency Support: 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;