import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';

export default function TeamPage() {
  return (
    <MainLayout title="Our Team - Zion Tech Group">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Our Team</h1>
        <p className="text-lg text-gray-700">
          This is a placeholder for the team page.
        </p>
      </div>
    </MainLayout>
  );
}