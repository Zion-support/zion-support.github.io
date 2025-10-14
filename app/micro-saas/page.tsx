import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Micro SaaS - Zion Tech Group</title>
        <meta name="description" content="Custom micro SaaS solutions for niche markets." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Micro SaaS</h1>
            <p className="text-gray-300 text-lg mb-8">
              Custom micro SaaS solutions for niche markets.
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}
