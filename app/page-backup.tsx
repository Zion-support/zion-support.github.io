'use client';
import React from 'react';

export default function PageBackup() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Page Backup</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-300 text-lg mb-8">
            This page is under development. We're working hard to bring you the best experience.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
              <p className="text-gray-300">Description of the first feature coming soon.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
              <p className="text-gray-300">Description of the second feature coming soon.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
              <p className="text-gray-300">Description of the third feature coming soon.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}