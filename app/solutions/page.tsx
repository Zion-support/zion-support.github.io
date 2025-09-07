import React from 'react';

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Our Solutions
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Comprehensive technology solutions designed to meet your business needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">AI & Machine Learning</h2>
            <p className="text-gray-600 mb-4">
              Advanced AI solutions including chatbots, predictive analytics, and automation tools.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Natural Language Processing</li>
              <li>• Computer Vision</li>
              <li>• Predictive Analytics</li>
              <li>• AI Automation</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Micro SaaS Development</h2>
            <p className="text-gray-600 mb-4">
              Scalable micro SaaS applications built with modern technologies.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Web Applications</li>
              <li>• Mobile Apps</li>
              <li>• API Development</li>
              <li>• Cloud Integration</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Enterprise IT Services</h2>
            <p className="text-gray-600 mb-4">
              Complete IT infrastructure and support services for enterprises.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Cloud Migration</li>
              <li>• DevOps & SRE</li>
              <li>• Cybersecurity</li>
              <li>• System Administration</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}