import React from 'react';
import { Helmet } from 'react-helmet-async';

const DevOpsAutomationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>DevOps & Automation Services - Zion Tech Group</title>
        <meta name="description" content="Complete DevOps solutions including CI/CD pipelines, infrastructure automation, monitoring, and deployment strategies." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">DevOps & Automation Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automate your development workflow with complete DevOps solutions and infrastructure automation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• CI/CD Pipeline Setup</li>
                <li>• Infrastructure as Code</li>
                <li>• Container Orchestration</li>
                <li>• Monitoring & Alerting</li>
                <li>• Automated Testing</li>
                <li>• Deployment Automation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pricing</h3>
              <div className="text-3xl font-bold text-purple-600 mb-2">$2,000 - $25,000/month</div>
              <p className="text-gray-600">Flexible pricing based on infrastructure complexity and team size</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevOpsAutomationPage;