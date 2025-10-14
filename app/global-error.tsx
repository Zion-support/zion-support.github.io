import React from 'react';

export default function GlobalError() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Global Error
        </h1>
        <p className="text-xl text-gray-600">
          Something went wrong. Please try again later.
        </p>
      </div>
    </div>
  );
}