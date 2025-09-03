import React from 'react';
import type { NextPage } from 'next';

const Privacy: NextPage = () => {
  const lastUpdated = 'January 27, 2025';

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-200">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
            <p className="text-gray-700">
              Zion Tech Group ("we", "our", "us") is committed to protecting your privacy. This policy
              describes what information we collect, how we use it, and your rights.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Information We Collect</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Personal information you provide (e.g., name, email, phone)</li>
              <li>Usage data and analytics</li>
              <li>Technical data such as IP address, browser, and device</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">How We Use Information</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Provide and improve our services</li>
              <li>Communicate with you about updates and support</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Your Rights</h3>
            <p className="text-gray-700">
              Depending on your location, you may have rights to access, correct, or delete your personal
              information, and to object to or restrict certain processing.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p className="text-gray-700">For privacy inquiries, contact privacy@ziontechgroup.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;

