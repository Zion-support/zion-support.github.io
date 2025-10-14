import React from "react";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-8 text-center">Demo</h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Experience Our Solutions</h2>
            <p className="text-xl text-gray-300 mb-8">
              Try our AI-powered tools and see how they can transform your business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">AI Chatbot Demo</h3>
                <p className="text-gray-300 mb-4">
                  Experience our intelligent customer service chatbot.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
                  Try Demo
                </button>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">Analytics Dashboard</h3>
                <p className="text-gray-300 mb-4">
                  Explore our advanced data visualization tools.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
                  Try Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}