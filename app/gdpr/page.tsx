import React from 'react';

export default function GDPRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-8">GDPR Compliance</h1>
        <div className="prose prose-invert max-w-4xl">
          <p className="text-gray-300 text-lg">
            Information about our GDPR compliance and data protection practices.
          </p>
        </div>
      </div>
    </div>
  );
}

