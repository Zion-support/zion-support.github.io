import React from "react";
import { Helmet } from "react-helmet-async";

export default function DemoPage() {
  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group | See Our Solutions</title>
        <meta name="description" content="See our AI solutions, cybersecurity, and cloud services in action. Request a personalized demo today." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Demo</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
}