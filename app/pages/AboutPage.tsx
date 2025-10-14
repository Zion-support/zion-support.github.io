
import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-8">About Us</h1>
          <p className="text-xl text-gray-300 mb-8">
            Zion Tech Group is a leading technology company specializing in AI and IT solutions.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-300">
                To empower businesses with cutting-edge AI and IT solutions that drive innovation and growth.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-300">
                To be the global leader in AI-powered technology solutions that transform industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}