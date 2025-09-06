import React from 'react';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout
      title="About Us - Zion Tech Group"
      description="Learn about Zion Tech Group, our mission, team, and commitment to delivering cutting-edge technology solutions."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Zion Tech Group</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading technology solutions provider specializing in AI, cybersecurity, and digital transformation.
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">About page is under construction.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
