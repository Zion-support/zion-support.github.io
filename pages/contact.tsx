import React from 'react';
import Layout from '../components/Layout';

export default function ContactPage() {
  return (
    <Layout 
      title="Contact Us - Zion Tech Group"
      description="Get in touch with our expert team for technology solutions and consulting."
    >
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-8">Get in touch with our expert team.</p>
          <div className="space-y-4">
            <p className="text-lg"><strong>Phone:</strong> +1 302 464 0950</p>
            <p className="text-lg"><strong>Email:</strong> kleber@ziontechgroup.com</p>
            <p className="text-lg"><strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}