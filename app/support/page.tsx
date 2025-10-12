import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../layout';

const SupportPage: React.FC = () => {
  return (
    <Layout
      title="Support - Zion Tech Group"
      description="Get 24/7 technical support and assistance with our comprehensive support services."
      keywords="support, technical support, help desk, customer service, IT support"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Support <span className="text-cyan-400">Center</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get the help you need with our comprehensive support services and expert technical assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">24/7 Phone Support</h3>
              <p className="text-gray-300 mb-6">Call us anytime for immediate technical assistance and support.</p>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-medium">(302) 464-0950</a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Live Chat</h3>
              <p className="text-gray-300 mb-6">Chat with our support team in real-time for quick assistance.</p>
              <a href="#" className="text-cyan-400 hover:text-cyan-300 font-medium">Start Chat →</a>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Email Support</h3>
              <p className="text-gray-300 mb-6">Send us detailed support requests via email for complex issues.</p>
              <a href="mailto:support@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-medium">support@ziontechgroup.com</a>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need Immediate Help?</h2>
            <p className="text-xl text-gray-300 mb-8">Our support team is standing by to assist you with any technical issues.</p>
            <a 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-block"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SupportPage;