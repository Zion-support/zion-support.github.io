import React from 'react';
import { Helmet } from 'react-helmet-async';

const NewsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>News - Zion Tech Group</title>
        <meta name="description" content="Latest news and updates from Zion Tech Group about AI, technology, and industry developments." />
        <link rel="canonical" href="https://ziontechgroup.com/news" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">News & Updates</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Stay updated with the latest news and developments from Zion Tech Group and the technology industry.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Latest News</h2>
          <p className="text-gray-600 mb-6">
            Check back soon for the latest news and updates about our AI solutions, technology innovations, and industry insights.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            For media inquiries or press releases, contact us at kleber@ziontechgroup.com or +1 302 464 0950.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;