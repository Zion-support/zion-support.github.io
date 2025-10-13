import React from 'react';

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export default function PlaceholderPage({ title, description = "This page is coming soon!" }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          {description}
        </p>
        <a 
          href="/" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}