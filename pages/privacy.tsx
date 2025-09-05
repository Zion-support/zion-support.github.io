import React from 'react';
import Layout from '../components/Layout';

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </div>
    </Layout>
  );
}