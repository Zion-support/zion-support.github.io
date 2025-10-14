import React from 'react';
import { Helmet } from 'react-helmet-async';

const Main: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Main - Zion Tech Group</title>
        <meta name="description" content="Professional main services by Zion Tech Group." />
      </Helmet>
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for innovative technology solutions and digital transformation.
          </p>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Leading Technology Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We provide cutting-edge AI, cloud, and IT solutions to help businesses 
                transform and grow in the digital age.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AI & Machine Learning Solutions</li>
                <li>• Cloud Infrastructure & Migration</li>
                <li>• Custom Software Development</li>
                <li>• Cybersecurity & Compliance</li>
                <li>• Data Analytics & Business Intelligence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;