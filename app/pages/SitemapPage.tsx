import React from 'react';
import { Helmet } from 'react-helmet-async';

const SitemapPage = () => {
  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Sitemap for Zion Tech Group website" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Sitemap
          </h1>
          <div className="max-w-4xl mx-auto text-gray-300">
            <h2 className="text-2xl font-semibold text-white mb-4">Main Pages</h2>
            <ul className="list-disc list-inside mb-6">
              <li><a href="/" className="text-cyan-400 hover:text-cyan-300">Home</a></li>
              <li><a href="/about" className="text-cyan-400 hover:text-cyan-300">About</a></li>
              <li><a href="/services" className="text-cyan-400 hover:text-cyan-300">Services</a></li>
              <li><a href="/contact" className="text-cyan-400 hover:text-cyan-300">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;