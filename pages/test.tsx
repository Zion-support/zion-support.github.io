import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';

export default function TestPage() {
  return (
    <MainLayout title="Test Page">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">Test Page</h1>
      </div>
    </MainLayout>
  );
}