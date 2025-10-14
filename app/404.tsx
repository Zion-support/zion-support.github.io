import React from 'react';
import { Helmet  } from "react-helmet-async";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet >
        <title>404 - Page Not Found | Zion Tech Group</>
        <meta name="description" content="The page you're looking for doesn't exist. Explore our AI and IT solutions instead." />
      </>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4 xl font-bold text-white mb-8">
            404 - Page Not Found
          </>
          <p className="text-xl text-gray-300 mb-8">
            The page you're looking for doesn't exist. Let's get you back on track.
          </>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/" 
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              Go Home
            </>
            <a href="/contact" 
              className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300"
            >
              Contact Us
            </>
          </>
        </>
      </>
    </>
  );
}