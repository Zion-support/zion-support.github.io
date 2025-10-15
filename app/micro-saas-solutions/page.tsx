import React from 'react';
import SEOHead from '../components/SEOHead';

const MicroSaasSolutionsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Custom micro SaaS applications tailored to your specific business requirements with scalable architecture and API integration."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Custom micro SaaS applications designed to solve specific business problems with scalable, maintainable solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Custom Development</h3>
              <p className="text-gray-300 mb-4">
                Tailored micro SaaS applications built specifically for your business needs and requirements.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Business Process Automation</li>
                <li>• Custom Workflow Management</li>
                <li>• Industry-specific Solutions</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">API Integration</h3>
              <p className="text-gray-300 mb-4">
                Seamless integration with existing systems and third-party services through robust APIs.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• RESTful API Development</li>
                <li>• Third-party Integrations</li>
                <li>• Webhook Implementation</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Scalable Architecture</h3>
              <p className="text-gray-300 mb-4">
                Cloud-native architecture designed to scale with your business growth and user demand.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Microservices Architecture</li>
                <li>• Auto-scaling Infrastructure</li>
                <li>• Load Balancing</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">User Management</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive user authentication, authorization, and management systems.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Multi-tenant Architecture</li>
                <li>• Role-based Access Control</li>
                <li>• Single Sign-On (SSO)</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Analytics & Reporting</h3>
              <p className="text-gray-300 mb-4">
                Built-in analytics and reporting capabilities to track usage and performance.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Usage Analytics</li>
                <li>• Performance Metrics</li>
                <li>• Custom Dashboards</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Maintenance & Support</h3>
              <p className="text-gray-300 mb-4">
                Ongoing maintenance, updates, and support to keep your micro SaaS running smoothly.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Regular Updates</li>
                <li>• Bug Fixes</li>
                <li>• 24/7 Support</li>
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