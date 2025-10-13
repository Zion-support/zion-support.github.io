import React from "react";
import { Helmet } from "react-helmet-async";

export default function AiContentStudioPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>AI Content Studio - Zion Tech Group</title>
        <meta name="description" content="Advanced AI Content Studio solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">AI Content Studio</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive AI Content Studio solutions designed to meet your business needs.
          </p>
        </div>
      </div>
    </div>
  );
}
