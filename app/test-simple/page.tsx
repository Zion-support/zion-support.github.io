import React from "react";
import { Helmet } from "react-helmet-async";

export default function TestSimplePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Test Simple</h1>
          <p className="text-gray-300 text-xl mb-8">Learn more about test simple</p>
        </div>
      </div>
    </div>
  );
}