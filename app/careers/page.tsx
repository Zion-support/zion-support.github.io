import React from 'react';

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Careers at Zion Tech
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold mb-4">Open Positions</h3>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-medium text-gray-900">Senior AI Engineer</h4>
                <p className="text-gray-600 mb-2">
                  Join our AI team to develop cutting-edge machine learning solutions.
                </p>
                <span className="text-sm text-blue-600">Full-time • Remote</span>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-medium text-gray-900">DevOps Engineer</h4>
                <p className="text-gray-600 mb-2">
                  Help us build and maintain our cloud infrastructure and automation systems.
                </p>
                <span className="text-sm text-blue-600">Full-time • Hybrid</span>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h4 className="font-medium text-gray-900">Frontend Developer</h4>
                <p className="text-gray-600 mb-2">
                  Create beautiful and responsive user interfaces for our products.
                </p>
                <span className="text-sm text-blue-600">Full-time • Remote</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Why Work With Us?</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Competitive salary and benefits</li>
              <li>Flexible work arrangements</li>
              <li>Opportunities for growth and learning</li>
              <li>Innovative and collaborative environment</li>
              <li>Cutting-edge technology stack</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;