import React from 'react';
import Layout from '../components/layout/MainLayout';

export default function CommunityPage() {
  return (
    <Layout
      title="Community - Zion Tech Group"
      description="Join the Zion Tech Group community and stay updated."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Community</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the Zion Tech Group community and stay updated.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Developer Forum</h3>
              <p className="text-gray-600 mb-4">
                Connect with other developers and share knowledge.
              </p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Join Forum
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-600 mb-4">
                Stay updated with our latest news and insights.
              </p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Events</h3>
              <p className="text-gray-600 mb-4">
                Join our webinars and networking events.
              </p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                View Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}