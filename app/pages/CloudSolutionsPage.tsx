import React from 'react';
import { Helmet } from 'react-helmet-async';

const CloudSolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud solutions including migration, optimization, and management services for AWS, Azure, and Google Cloud." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Cloud Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud solutions to accelerate your digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Cloud Migration</h3>
              <p className="text-gray-300 mb-4">
                Seamlessly migrate your applications and data to the cloud.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Assessment & Planning</li>
                <li>• Data Migration</li>
                <li>• Application Migration</li>
                <li>• Testing & Validation</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Cloud Optimization</h3>
              <p className="text-gray-300 mb-4">
                Optimize your cloud infrastructure for performance and cost efficiency.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Cost Optimization</li>
                <li>• Performance Tuning</li>
                <li>• Resource Scaling</li>
                <li>• Monitoring & Analytics</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-green-400">Cloud Management</h3>
              <p className="text-gray-300 mb-4">
                Ongoing management and support for your cloud infrastructure.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• 24/7 Monitoring</li>
                <li>• Security Management</li>
                <li>• Backup & Recovery</li>
                <li>• Support & Maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudSolutionsPage;