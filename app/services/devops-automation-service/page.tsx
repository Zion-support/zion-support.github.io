import React from 'react';

const DevOpsAutomationServicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          DevOps Automation Service
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Streamline Your DevOps</h3>
            <p className="text-gray-600 mb-4">
              Automate your development and deployment processes with our comprehensive DevOps solutions.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>CI/CD pipeline automation and optimization</li>
              <li>Infrastructure as Code (IaC) implementation</li>
              <li>Container orchestration and management</li>
              <li>Monitoring and alerting systems</li>
              <li>Security scanning and compliance automation</li>
            </ul>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Get Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevOpsAutomationServicePage;