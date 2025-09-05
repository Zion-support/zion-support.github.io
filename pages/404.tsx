import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';

export default function Custom404() {
  return (
    <MainLayout title="404 - Page Not Found">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">404 - Page Not Found</h1>
        <p className="text-lg text-gray-700">
          The page you are looking for does not exist.
        </p>
      </div>
    </MainLayout>
  );
}