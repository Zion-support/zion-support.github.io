import React from 'react';

export default function MobileApplicationsPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">5G Mobile Applications</h1>
        <p className="text-gray-300 text-lg">
          Next-generation mobile applications powered by 5G technology for enhanced performance and connectivity.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Ultra-fast data transfer</li>
            <li>Low latency communication</li>
            <li>Enhanced mobile experiences</li>
            <li>Real-time collaboration</li>
            <li>Advanced mobile analytics</li>
          </ul>
        </div>
      </div>
    </div>
  );
}