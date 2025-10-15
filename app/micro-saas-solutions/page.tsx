import React from 'react';
import SEOHead from '../components/SEOHead';

const MicroSAASSolutionsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Specialized micro SaaS solutions for specific business needs and workflows. Discover our comprehensive suite of intelligent business applications."
        keywords="micro saas, business software, task management, crm, analytics, inventory management, hr software, finance management"
        canonicalUrl="https://ziontechgroup.com/micro-saas-solutions"
      />
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Micro SaaS Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized micro SaaS solutions for specific business needs and workflows
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Task Management</h3>
              <p className="text-gray-600">
                Streamline your workflow with our intelligent task management solution.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">CRM System</h3>
              <p className="text-gray-600">
                Manage customer relationships with our powerful CRM platform.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics Dashboard</h3>
              <p className="text-gray-600">
                Get insights into your business with our comprehensive analytics tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSAASSolutionsPage;