"use client";

import React from 'react';

const StructuredData = () => {
  return (
    <div className="p-6 rounded-lg bg-white/10 text-white">
      <h3 className="text-xl font-semibold mb-4">Structured Data</h3>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Schema.org</span>
          <span className="text-green-400">✓</span>
        </div>
        <div className="flex justify-between">
          <span>JSON-LD</span>
          <span className="text-green-400">✓</span>
        </div>
        <div className="flex justify-between">
          <span>Rich Snippets</span>
          <span className="text-blue-400">Active</span>
        </div>
      </div>
    </div>
  );
};

export default StructuredData;