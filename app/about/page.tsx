'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">About Zion Tech Group</h1>
        <p className="text-lg text-gray-600 mb-8">
          We are a leading provider of AI and IT solutions, helping businesses transform their operations with cutting-edge technology.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To empower businesses with innovative AI and IT solutions that drive growth and efficiency.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the global leader in AI and IT transformation services.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}