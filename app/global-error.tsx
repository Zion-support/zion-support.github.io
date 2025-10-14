'use client';
import React from 'react';

export default function GlobalError() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
        <p className="text-gray-300">Please try refreshing the page.</p>
      </div>
    </div>
  );
}