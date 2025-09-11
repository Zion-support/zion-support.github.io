import React from 'react';

const CloudMigration: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cloud Migration Services</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              Seamlessly migrate your infrastructure to the cloud with our expert cloud migration services. 
              We ensure minimal downtime and maximum efficiency.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Cloud Migration Process</h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-6">
              <li>Assessment and Planning</li>
              <li>Infrastructure Design</li>
              <li>Data Migration Strategy</li>
              <li>Application Modernization</li>
              <li>Testing and Validation</li>
              <li>Go-Live and Optimization</li>
            </ol>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cloud Platforms We Support</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>Amazon Web Services (AWS)</li>
              <li>Microsoft Azure</li>
              <li>Google Cloud Platform (GCP)</li>
              <li>Hybrid Cloud Solutions</li>
              <li>Multi-Cloud Strategies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudMigration;