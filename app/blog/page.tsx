import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Advanced blog solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and innovations in AI and technology
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">Coming Soon</h3>
              <p className="text-gray-300">
                Our blog is under development. Please check back later for updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}