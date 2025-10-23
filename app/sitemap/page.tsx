"use client";
import React from "react";

const Sitemap = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
          Sitemap
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Main Pages</h2>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">AI Services</h2>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/ai-solutions" className="hover:text-white">AI Solutions</a></li>
              <li><a href="/ai-analytics" className="hover:text-white">AI Analytics</a></li>
              <li><a href="/ai-automation" className="hover:text-white">AI Automation</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;