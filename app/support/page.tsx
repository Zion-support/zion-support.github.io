import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 quantum-gradient">
            Support Center
          </h1>
          
          <div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Get Help</h2>
            <p className="text-gray-300 mb-6">
              We're here to help you succeed. Contact our support team for assistance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="quantum-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">Contact Support</h3>
                <p className="text-gray-300 mb-4">Get help from our expert support team</p>
                <a 
                  href="tel:+13024640950" 
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  📞 +1 (302) 464-0950
                </a>
                <br />
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  ✉️ kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="quantum-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">Documentation</h3>
                <p className="text-gray-300 mb-4">Browse our comprehensive documentation</p>
                <a 
                  href="/docs" 
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  📚 View Documentation →
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}