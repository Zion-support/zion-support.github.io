import React from "react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-8 text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">AI Services</h2>
            <p className="text-gray-300">
              Advanced artificial intelligence solutions for automation, analytics, and optimization.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">IT Solutions</h2>
            <p className="text-gray-300">
              Comprehensive IT infrastructure and software development services.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Cloud Solutions</h2>
            <p className="text-gray-300">
              Scalable cloud infrastructure and migration services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}