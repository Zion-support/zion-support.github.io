import React from 'react';
import SEOHead from '../components/SEOHead';

const MicroSaasSolutionsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Custom micro SaaS applications tailored to your specific business requirements including custom development, API integration, and scalable architecture."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Custom micro SaaS applications designed to solve specific business challenges with scalable, efficient solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Custom Development</h3>
              <p className="text-gray-300 mb-4">
                Tailored micro SaaS applications built specifically for your business needs.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Business Logic Implementation</li>
                <li>• User Interface Design</li>
                <li>• Database Architecture</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">API Integration</h3>
              <p className="text-gray-300 mb-4">
                Seamless integration with existing systems and third-party services.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• RESTful APIs</li>
                <li>• Webhook Integration</li>
                <li>• Third-party Services</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Scalable Architecture</h3>
              <p className="text-gray-300 mb-4">
                Built to scale with your business growth and changing requirements.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Cloud Infrastructure</li>
                <li>• Auto-scaling</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Maintenance & Support</h3>
              <p className="text-gray-300 mb-4">
                Ongoing maintenance and support to keep your application running smoothly.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Bug Fixes</li>
                <li>• Feature Updates</li>
                <li>• Performance Monitoring</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Multi-tenant Architecture</h3>
              <p className="text-gray-300 mb-4">
                Secure multi-tenant solutions for serving multiple customers.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Data Isolation</li>
                <li>• User Management</li>
                <li>• Billing Integration</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Analytics & Reporting</h3>
              <p className="text-gray-300 mb-4">
                Built-in analytics and reporting capabilities for business insights.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Usage Analytics</li>
                <li>• Custom Dashboards</li>
                <li>• Export Capabilities</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Get Started with Micro SaaS
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaasSolutionsPage;