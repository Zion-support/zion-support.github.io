import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ItTraining() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Helmet>
        <title>IT Training - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT training programs and certification courses." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            IT Training Programs
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Comprehensive IT training programs and certification courses.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Computing</h3>
              <p className="text-gray-600">
                Learn cloud technologies including AWS, Azure, and Google Cloud Platform.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cybersecurity</h3>
              <p className="text-gray-600">
                Master cybersecurity fundamentals and advanced threat protection.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Science</h3>
              <p className="text-gray-600">
                Learn data analysis, machine learning, and AI technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}