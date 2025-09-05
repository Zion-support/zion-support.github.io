import React from 'react';
import SimpleLayout from '../components/SimpleLayout';

export default function TestPage() {
  return (
    <SimpleLayout title="Test Page">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">Test Page</h1>
      </div>
    </SimpleLayout>
  );
}