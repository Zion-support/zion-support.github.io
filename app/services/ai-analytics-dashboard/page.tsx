import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Analytics Dashboard - Zion Tech Group',
  description: 'Advanced AI-powered analytics dashboard for business intelligence',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          AI Analytics Dashboard
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Transform your data into actionable insights with our AI-powered analytics platform
        </p>
      </div>
    </div>
  );
}