import React from 'react';

const CloudMigrationServicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Cloud Migration Service
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Seamless Cloud Transition</h3>
            <p className="text-gray-600 mb-4">
              Migrate your infrastructure and applications to the cloud with minimal downtime and maximum efficiency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Assessment & Planning</h4>
                <p className="text-gray-600 text-sm">Comprehensive analysis of your current infrastructure</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Migration Execution</h4>
                <p className="text-gray-600 text-sm">Automated migration with zero data loss</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Optimization</h4>
                <p className="text-gray-600 text-sm">Performance tuning and cost optimization</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Ongoing Support</h4>
                <p className="text-gray-600 text-sm">24/7 monitoring and maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudMigrationServicePage;