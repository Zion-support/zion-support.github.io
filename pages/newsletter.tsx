import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';

export default function NewsletterPage() {
  return (
    <MainLayout title="Newsletter - Zion Tech Group">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Newsletter</h1>
        <p className="text-lg text-gray-700">
          This is a placeholder for the newsletter page.
        </p>
      </div>
    </MainLayout>
  );
}