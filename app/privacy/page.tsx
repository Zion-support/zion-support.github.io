import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Our privacy policy and data protection practices." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
            <p className="text-gray-300 text-lg mb-8">
              Our privacy policy and data protection practices.
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}