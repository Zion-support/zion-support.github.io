import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Advanced AI and IT Solutions" />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Coming Soon</h1>
        <p className="text-gray-300">This page is under construction.</p>
      </div>
    </div>
  );
}
