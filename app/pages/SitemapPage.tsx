import React from 'react';
import { Helmet } from 'react-helmet-async';

function SitemapPage() {
  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of all pages and services offered by Zion Tech Group" />
        <meta name="keywords" content="sitemap, pages, services, zion tech group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">Sitemap</h1>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-gray-300">
              <p className="text-lg mb-6">
                Find all our pages and services organized in one place.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">Main Pages</h2>
                  <ul className="space-y-2">
                    <li><a href="/" className="text-blue-400 hover:text-blue-300">Home</a></li>
                    <li><a href="/about" className="text-blue-400 hover:text-blue-300">About</a></li>
                    <li><a href="/services" className="text-blue-400 hover:text-blue-300">Services</a></li>
                    <li><a href="/contact" className="text-blue-400 hover:text-blue-300">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">AI Solutions</h2>
                  <ul className="space-y-2">
                    <li><a href="/ai-solutions" className="text-blue-400 hover:text-blue-300">AI Solutions</a></li>
                    <li><a href="/ai-services" className="text-blue-400 hover:text-blue-300">AI Services</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SitemapPage;