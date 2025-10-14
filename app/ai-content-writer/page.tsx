import React from "react";
import { Helmet } from "react-helmet-async";

const AIContentWriterPage = () => {
  return (
    <>
      <Helmet>
        <title>AI Content Writer - Zion Tech Group</title>
        <meta name="description" content="AI Content Writer - Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">AI Content Writer</h1>
            <p className="text-xl text-gray-300">
              This page is under development. Please check back soon for more information about our AI content writer services.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIContentWriterPage;