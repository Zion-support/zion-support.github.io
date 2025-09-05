import React from 'react';
import MainLayout from '../components/layout/MainLayout';

export default function HomePage() {
  return (
    <MainLayout title="Zion Tech Group - Leading AI & Technology Solutions">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Welcome to Zion Tech Group</h1>
        <p className="text-xl text-gray-600 mb-8">
          Transform your business with cutting-edge AI solutions, IT services, and micro SaaS applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">AI Services</h2>
            <p className="text-gray-600 mb-4">
              Advanced artificial intelligence solutions for your business needs.
            </p>
            <a href="/ai-services" className="text-blue-600 hover:text-blue-800">
              Learn More →
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">IT Services</h2>
            <p className="text-gray-600 mb-4">
              Comprehensive IT solutions to keep your business running smoothly.
            </p>
            <a href="/it-services" className="text-blue-600 hover:text-blue-800">
              Learn More →
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Micro SaaS</h2>
            <p className="text-gray-600 mb-4">
              Innovative micro SaaS applications to streamline your operations.
            </p>
            <a href="/micro-saas" className="text-blue-600 hover:text-blue-800">
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}