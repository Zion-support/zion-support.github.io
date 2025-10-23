"use client";
import React from "react";

export default function GlobalError() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">Global Error</h1><p className="text-xl text-gray-300 mb-8">Something went wrong globally</p><a
          href="/"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}