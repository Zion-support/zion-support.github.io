import React from 'react';
import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout
      title="Contact Us - Zion Tech Group"
      description="Get in touch with Zion Tech Group for your technology needs. Contact us for AI services, IT solutions, and more."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team for your technology needs.
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">Contact page is under construction.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}