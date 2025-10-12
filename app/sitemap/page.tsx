import React from 'react';
import { Helmet } from 'react-helmet-async';

const SitemapPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Sitemap page for Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-white text-center mb-8">Sitemap</h1>
          <p className="text-xl text-gray-300 text-center">Coming Soon</p>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;
