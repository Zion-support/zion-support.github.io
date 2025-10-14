import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>5G Solutions - Zion Tech Group</title>
        <meta name="description" content="Next-generation 5G solutions for faster connectivity." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">5G Solutions</h1>
            <p className="text-gray-300 text-lg mb-8">
              Next-generation 5G solutions for faster connectivity.
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}