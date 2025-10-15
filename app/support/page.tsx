import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HelpCircle, Mail, Phone } from 'lucide-react';

const SupportPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get support for Zion Tech Group services and solutions." />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Support
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            We&apos;re here to help you succeed with our technology solutions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <Phone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">Phone Support</h3>
              <p className="text-gray-300 mb-4">Call us for immediate assistance</p>
              <p className="text-purple-300 font-medium">+1-302-464-0950</p>
            </div>
            
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">Email Support</h3>
              <p className="text-gray-300 mb-4">Send us an email anytime</p>
              <p className="text-purple-300 font-medium">kleber@ziontechgroup.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
