import React from "react";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-8 text-center">Blog</h1>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Latest AI Trends</h2>
              <p className="text-gray-300 mb-4">
                Explore the latest developments in artificial intelligence and machine learning.
              </p>
              <span className="text-blue-400 text-sm">Read More →</span>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">IT Best Practices</h2>
              <p className="text-gray-300 mb-4">
                Learn about modern IT infrastructure and development practices.
              </p>
              <span className="text-blue-400 text-sm">Read More →</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}