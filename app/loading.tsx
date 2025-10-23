"use client";
import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
        <h1 className="text-4xl font-bold text-white mb-4">Loading</h1>
        <p className="text-xl text-gray-300">Please wait...</p>
      </div>
    </div>
  );
}