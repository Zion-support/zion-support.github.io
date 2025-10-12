import React from 'react';
import { Helmet } from 'react-helmet-async';

const SitemapPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Navigate our website with our comprehensive sitemap." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Site <span className="text-cyan-400">Map</span>
            </h1>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Main Pages</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li><a href="/" className="hover:text-cyan-400 transition-colors">Home</a></li>
                    <li><a href="/about" className="hover:text-cyan-400 transition-colors">About</a></li>
                    <li><a href="/contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
                    <li><a href="/services" className="hover:text-cyan-400 transition-colors">Services</a></li>
                    <li><a href="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">AI Services</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li><a href="/ai-services" className="hover:text-cyan-400 transition-colors">AI Services</a></li>
                    <li><a href="/ai-analytics" className="hover:text-cyan-400 transition-colors">AI Analytics</a></li>
                    <li><a href="/ai-automation" className="hover:text-cyan-400 transition-colors">AI Automation</a></li>
                    <li><a href="/ai-cybersecurity" className="hover:text-cyan-400 transition-colors">AI Cybersecurity</a></li>
                    <li><a href="/ai-crm" className="hover:text-cyan-400 transition-colors">AI CRM</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">IT Services</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li><a href="/it-services" className="hover:text-cyan-400 transition-colors">IT Services</a></li>
                    <li><a href="/cloud-infrastructure" className="hover:text-cyan-400 transition-colors">Cloud Infrastructure</a></li>
                    <li><a href="/cybersecurity-solutions" className="hover:text-cyan-400 transition-colors">Cybersecurity</a></li>
                    <li><a href="/web-development" className="hover:text-cyan-400 transition-colors">Web Development</a></li>
                    <li><a href="/mobile-development" className="hover:text-cyan-400 transition-colors">Mobile Development</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;