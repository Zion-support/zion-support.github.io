import { Helmet } from "react-helmet-async";
const HomePage = () => {"
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><Helmet><title>Home - Zion Tech Group</title><meta name="description" content="Home - Zion Tech Group" /></Helmet><div className="container mx-auto px-4 py-16"><div className="text-center"></div>
          <h1 className="text-4xl font-bold text-white mb-8">Home</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>)
  );
};
export default HomePage;
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
export default function Page() {
  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Sitemap services and solutions from Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Sitemap</h1>
          <p className="text-xl text-gray-600">
            This page is under development. Please check back soon for more information about our sitemap services.
          </p>
        </div>
      </div>
    </>
  );
}
