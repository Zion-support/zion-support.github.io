'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SitemapPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Browse our complete sitemap to find all our AI and IT services." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white mb-8">Sitemap</h1>
          <div className="text-gray-300 text-lg space-y-4">
            <p>Find all our services and pages organized for easy navigation.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Main Pages</h3>
                <ul className="space-y-1">
                  <li><a href="/" className="hover:text-cyan-300">Home</a></li>
                  <li><a href="/about" className="hover:text-cyan-300">About</a></li>
                  <li><a href="/contact" className="hover:text-cyan-300">Contact</a></li>
                  <li><a href="/services" className="hover:text-cyan-300">Services</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">AI Services</h3>
                <ul className="space-y-1">
                  <li><a href="/ai-services" className="hover:text-cyan-300">AI Services</a></li>
                  <li><a href="/ai-analytics" className="hover:text-cyan-300">AI Analytics</a></li>
                  <li><a href="/ai-automation" className="hover:text-cyan-300">AI Automation</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">IT Services</h3>
                <ul className="space-y-1">
                  <li><a href="/it-services" className="hover:text-cyan-300">IT Services</a></li>
                  <li><a href="/cloud-infrastructure" className="hover:text-cyan-300">Cloud Infrastructure</a></li>
                  <li><a href="/cybersecurity-solutions" className="hover:text-cyan-300">Cybersecurity</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;