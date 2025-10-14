import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Autonomous Systems - Zion Tech Group</title>
        <meta name="description" content="AI-powered autonomous systems for various industries." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Autonomous Systems</h1>
            <p className="text-gray-300 text-lg mb-8">
              AI-powered autonomous systems for various industries.
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
}
