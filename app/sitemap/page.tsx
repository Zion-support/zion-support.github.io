import React from "react";
import { Helmet } from "react-helmet-async";

const SitemapPage = () => {
  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group | Complete Site Navigation</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our AI services, IT solutions, and resources." />
        <meta name="keywords" content="sitemap, navigation, AI services, IT solutions, Zion Tech Group" />
        <meta property="og:title" content="Sitemap - Zion Tech Group" />
        <meta property="og:description" content="Complete sitemap of Zion Tech Group website. Find all our AI services, IT solutions, and resources." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Site <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Map</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Navigate through all our services, solutions, and resources. Find exactly what you're looking for.
            </p>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Sitemap</h2>
            <p className="text-gray-300">This sitemap is under construction.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;
