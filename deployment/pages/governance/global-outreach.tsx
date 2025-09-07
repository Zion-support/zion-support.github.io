import React from 'react';
import Layout from '../../components/Layout';

export default function UNBridge() {
  return (
    <Layout 
      title="UN Bridge - Global Outreach" 
      description="Connecting nations through technology and innovation"
    >
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              UN Bridge Protocol
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connecting nations through technology, fostering global cooperation,
              and building bridges for sustainable development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Global Connectivity
              </h3>
              <p className="text-gray-600">
                Facilitating seamless communication and collaboration between
                nations through advanced technology infrastructure.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Sustainable Development
              </h3>
              <p className="text-gray-600">
                Supporting UN Sustainable Development Goals through innovative
                technology solutions and partnerships.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Digital Diplomacy
              </h3>
              <p className="text-gray-600">
                Enabling digital diplomacy and international cooperation through
                secure, transparent technology platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}