import React from 'react';
import { Helmet } from 'react-helmet-async';

const CloudInfrastructurePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Scalable cloud infrastructure solutions including AWS, Azure, and Google Cloud Platform services." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Cloud Infrastructure
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build and manage scalable cloud infrastructure that grows with your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">AWS Solutions</h3>
              <p className="text-gray-300 mb-4">
                Leverage Amazon Web Services for scalable and reliable cloud infrastructure.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• EC2 Instances</li>
                <li>• S3 Storage</li>
                <li>• RDS Databases</li>
                <li>• Lambda Functions</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Azure Services</h3>
              <p className="text-gray-300 mb-4">
                Microsoft Azure cloud solutions for enterprise-grade applications.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Virtual Machines</li>
                <li>• App Services</li>
                <li>• SQL Database</li>
                <li>• Functions</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-green-400">Google Cloud</h3>
              <p className="text-gray-300 mb-4">
                Google Cloud Platform solutions for data analytics and AI workloads.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Compute Engine</li>
                <li>• BigQuery</li>
                <li>• Cloud Storage</li>
                <li>• AI Platform</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudInfrastructurePage;