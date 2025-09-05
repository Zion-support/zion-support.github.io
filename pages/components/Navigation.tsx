import React from 'react';
import MainLayout from '../../src/components/layout/MainLayout';

export default function NavigationPage() {
  return (
    <MainLayout title="Navigation">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Navigation</h1>
        <p className="text-lg text-gray-700">
          This is a placeholder for the navigation component.
        </p>
      </div>
    </MainLayout>
  );
}