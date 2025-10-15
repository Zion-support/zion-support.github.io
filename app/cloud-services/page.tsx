import React from 'react';
import SEOHead from '../components/SEOHead';

const CloudServicesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Cloud Services - Zion Tech Group"
        description="Comprehensive cloud services including cloud migration, infrastructure management, and scalable cloud solutions for modern businesses."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Cloud Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Scalable cloud solutions and infrastructure management to accelerate your digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Cloud Migration</h3>
              <p className="text-gray-300 mb-4">
                Seamless migration of your applications and data to the cloud.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• AWS Migration</li>
                <li>• Azure Migration</li>
                <li>• Google Cloud Migration</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Infrastructure as Code</h3>
              <p className="text-gray-300 mb-4">
                Manage your cloud infrastructure using code for consistency and reliability.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Terraform</li>
                <li>• CloudFormation</li>
                <li>• Kubernetes</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Cloud Monitoring</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive monitoring and alerting for your cloud infrastructure.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Performance Monitoring</li>
                <li>• Cost Optimization</li>
                <li>• Security Monitoring</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Backup Solutions</h3>
              <p className="text-gray-300 mb-4">
                Reliable backup and disaster recovery solutions for your cloud data.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Automated Backups</li>
                <li>• Disaster Recovery</li>
                <li>• Data Retention</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Hybrid Cloud</h3>
              <p className="text-gray-300 mb-4">
                Bridge your on-premises and cloud environments seamlessly.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Hybrid Architecture</li>
                <li>• Data Synchronization</li>
                <li>• Workload Optimization</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Cloud Security</h3>
              <p className="text-gray-300 mb-4">
                Secure your cloud infrastructure with comprehensive security measures.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Identity Management</li>
                <li>• Access Controls</li>
                <li>• Encryption</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Get Started with Cloud Services
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CloudServicesPage;