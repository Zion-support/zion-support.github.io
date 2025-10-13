import React from 'react';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">
            Careers at Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join our team of innovative professionals and help shape the future of technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Software Engineer</h3>
            <p className="text-gray-300 mb-4">
              Develop cutting-edge AI and cloud solutions using modern technologies.
            </p>
            <span className="text-blue-400">Full-time • Remote</span>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Data Scientist</h3>
            <p className="text-gray-300 mb-4">
              Build machine learning models and analyze complex datasets.
            </p>
            <span className="text-blue-400">Full-time • Hybrid</span>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">DevOps Engineer</h3>
            <p className="text-gray-300 mb-4">
              Manage cloud infrastructure and deployment pipelines.
            </p>
            <span className="text-blue-400">Full-time • On-site</span>
          </div>
        </div>
      </div>
    </div>
  );
}