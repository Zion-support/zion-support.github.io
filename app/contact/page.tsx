'use client';
import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">Contact Us</h1>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <a href="tel:+13026009898" className="text-indigo-600">(302) 600-9898</a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-indigo-600">kleber@ziontechgroup.com</a>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p>364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}