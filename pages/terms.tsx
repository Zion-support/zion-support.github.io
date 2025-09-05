import React from 'react';
import Layout from '../components/Layout';

export default function TermsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </div>
    </Layout>
  );
}