import React from 'react';
import SEOHead from '../components/SEOHead';

const SupportPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Support Center - Zion Tech Group"
        description="Get help and support for all our AI and IT solutions. 24/7 customer support available."
        keywords="support, help, customer service, technical support, contact support"
        canonicalUrl="https://ziontechgroup.com/support"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're here to help you succeed with our AI and IT solutions. Get the support you need, when you need it.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">24/7 Support</h3>
              <p className="text-gray-400 mb-4">
                Round-the-clock technical support for all our services.
              </p>
              <p className="text-sm text-purple-400">Available 24/7</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">Live Chat</h3>
              <p className="text-gray-400 mb-4">
                Get instant help through our live chat support.
              </p>
              <p className="text-sm text-cyan-400">Online Now</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">Phone Support</h3>
              <p className="text-gray-400 mb-4">
                Speak directly with our technical experts.
              </p>
              <p className="text-sm text-green-400">+1 (302) 464-0950</p>
            </div>
          </div>
          
          <div className="bg-slate-800/30 rounded-xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Get in Touch</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400">Email</p>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">
                      +1 (302) 464-0950
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-400">Address</p>
                    <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                <div className="space-y-2">
                  <a href="/help" className="block text-purple-400 hover:text-purple-300 transition-colors">
                    Help Center
                  </a>
                  <a href="/api-docs" className="block text-purple-400 hover:text-purple-300 transition-colors">
                    API Documentation
                  </a>
                  <a href="/tutorials" className="block text-purple-400 hover:text-purple-300 transition-colors">
                    Tutorials
                  </a>
                  <a href="/contact" className="block text-purple-400 hover:text-purple-300 transition-colors">
                    Contact Form
                  </a>
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
