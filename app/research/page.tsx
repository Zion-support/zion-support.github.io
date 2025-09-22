import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research - Zion Tech Group',
  description: 'Explore our latest research and innovations in AI technology',
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Research & Innovation
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Discover our cutting-edge research in artificial intelligence and technology
        </p>
      </div>
    </div>
  );
}