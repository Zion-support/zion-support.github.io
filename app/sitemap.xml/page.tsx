import React from "react";
import { Helmet } from "react-helmet-async";

const SitemapPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta
          name="description"
          content="Sitemap for Zion Tech Group website."
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>
          <p className="text-lg text-gray-600">
            Find all pages and sections of our website.
          </p>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;
