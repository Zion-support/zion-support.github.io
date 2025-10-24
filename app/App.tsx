'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function App() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-6xl font-bold mb-6">Zion Tech Group</h1>
        <p className="text-xl mb-8 text-center max-w-2xl">
          Leading provider of AI-powered solutions and cutting-edge technology services
        </p>
        <button
          onClick={() => router.push('/')}
          className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
        >
          Explore Our Services
        </button>
      </div>
    </div>
  );
}