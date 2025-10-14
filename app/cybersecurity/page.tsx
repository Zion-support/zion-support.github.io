import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Cybersecurity - Zion Tech Group</title>
        <meta name="description" content="Protect your business with our advanced security solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Cybersecurity</h1>
            <p className="text-gray-300 text-lg mb-8">
              Protect your business with our advanced security solutions.
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}
