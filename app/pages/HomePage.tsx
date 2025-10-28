import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Welcome Home</h1>
        <p className="text-lg text-center text-gray-600">
          This is the home page of our application.
        </p>
      </div>
    </div>
  );
}
