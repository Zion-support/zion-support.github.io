import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>GDPR Compliance - Zion Tech Group</title>
        <meta name="description" content="Our commitment to GDPR compliance." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">GDPR Compliance</h1>
            <p className="text-gray-300 text-lg mb-8">
              Our commitment to GDPR compliance.
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}