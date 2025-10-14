import React from "react";
import { Helmet } from "react-helmet-async";

const AIFraudDetectionPage = () => {
  return (
    <>
      <Helmet>
        <title>AI Fraud Detection - Zion Tech Group</title>
        <meta name="description" content="AI Fraud Detection - Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">AI Fraud Detection</h1>
            <p className="text-xl text-gray-300">
              This page is under development. Please check back soon for more information about our AI fraud detection services.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIFraudDetectionPage;