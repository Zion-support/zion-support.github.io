import React from 'react';
import { Helmet } from 'react-helmet-async';

const CareersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of innovative professionals and help shape the future of technology. Explore career opportunities at Zion Tech Group." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Careers
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our team of innovative professionals and help shape the future of technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-yellow-400">Software Engineer</h3>
              <p className="text-gray-300 mb-4">
                Build cutting-edge applications using modern technologies and frameworks.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• React, TypeScript, Node.js</li>
                <li>• Cloud platforms (AWS, Azure)</li>
                <li>• 3+ years experience</li>
                <li>• Remote work available</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-orange-400">AI/ML Engineer</h3>
              <p className="text-gray-300 mb-4">
                Develop intelligent systems and machine learning solutions.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Python, TensorFlow, PyTorch</li>
                <li>• Data science background</li>
                <li>• 2+ years experience</li>
                <li>• Research opportunities</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">DevOps Engineer</h3>
              <p className="text-gray-300 mb-4">
                Manage infrastructure and deployment pipelines for scalable applications.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Docker, Kubernetes, CI/CD</li>
                <li>• Cloud infrastructure</li>
                <li>• 4+ years experience</li>
                <li>• On-call rotation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;