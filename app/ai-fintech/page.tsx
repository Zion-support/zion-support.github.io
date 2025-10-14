import React from "react";
import { Helmet } from "react-helmet-async";

export default function AiFintechPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Fintech - Zion Tech Group</title>
        <meta name="description" content="Professional AI fintech services by Zion Tech Group." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">AI Fintech</h1>
          <p className="text-gray-300 text-lg">
            This page is under development.
          </p>
        </div>
      </div>
    </div>
  );
}