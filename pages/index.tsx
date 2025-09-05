import React from 'react';
import MainLayout from '../src/components/layout/MainLayout';

export default function HomePage() {
  return (
    <MainLayout title="Zion Tech Group - Leading AI & Technology Solutions">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Welcome to Zion Tech Group</h1>
        <p className="text-lg text-gray-700">
          Transform your business with cutting-edge AI solutions, cloud services, and technology consulting.
        </p>
        <div className="mt-8">
          <p className="text-lg text-gray-700">
            Mobile: +1 302 464 0950<br />
            E-mail: kleber@ziontechgroup.com<br />
            Address: 364 E Main St STE 1008 Middletown DE 19709
          </p>
        </div>
      </div>
    </MainLayout>
  );
}