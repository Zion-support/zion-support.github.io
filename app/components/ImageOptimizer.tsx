"use client";
import React from "react";
import { Helmet } from "react-helmet-async";

const ImageOptimizer: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>ImageOptimizer - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Professional imageoptimizer services." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ImageOptimizer
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional services coming soon.
          </p>
        </div>
      </div>
    </>
  );
};

export default ImageOptimizer;