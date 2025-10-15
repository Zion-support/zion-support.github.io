import React from 'react';
import SEOHead from '../components/SEOHead';

const CloudServicesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Cloud Services - Zion Tech Group"
        description="Comprehensive cloud services including cloud migration, infrastructure management, monitoring, and backup solutions for modern businesses."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Cloud Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Scalable cloud solutions and infrastructure management to power your business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Cloud Migration</h3>
              <p className="text-gray-300 mb-4">
                Seamless migration of your applications and data to the cloud with minimal downtime.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Lift and Shift Migration</li>
                <li>• Cloud-native Transformation</li>
                <li>• Data Migration Services</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Infrastructure as Code</h3>
              <p className="text-gray-300 mb-4">
                Automated infrastructure provisioning and management using modern DevOps practices.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Terraform Automation</li>
                <li>• Kubernetes Orchestration</li>
                <li>• CI/CD Pipeline Setup</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Cloud Monitoring</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive monitoring and alerting for your cloud infrastructure and applications.
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
                Reliable backup and disaster recovery solutions to protect your critical data.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Automated Backups</li>
                <li>• Disaster Recovery Planning</li>
                <li>• Data Retention Policies</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Multi-Cloud Management</h3>
              <p className="text-gray-300 mb-4">
                Unified management across multiple cloud providers for optimal performance and cost.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• AWS Management</li>
                <li>• Azure Management</li>
                <li>• Google Cloud Management</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Cloud Security</h3>
              <p className="text-gray-300 mb-4">
                Advanced security measures to protect your cloud infrastructure and data.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Identity and Access Management</li>
                <li>• Network Security</li>
                <li>• Compliance Management</li>
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