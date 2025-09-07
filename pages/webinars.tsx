import React from 'react';
import Layout from '../components/layout/MainLayout';

export default function WebinarsPage() {
  return (
    <Layout
      title="Webinars - Zion Tech Group"
      description="Upcoming webinars and on-demand sessions."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Webinars</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Upcoming webinars and on-demand sessions. Coming soon.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-gray-600">
              We're planning exciting webinars and training sessions. 
              Check back soon for upcoming events.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}