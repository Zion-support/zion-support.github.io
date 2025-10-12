import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">
          Page
        </h1>
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8">
          <p className="text-white text-lg">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}
