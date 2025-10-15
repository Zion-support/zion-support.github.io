import React from 'react';
import SEOHead from '../components/SEOHead';

const ItSolutionsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="IT Solutions - Zion Tech Group"
        description="Professional IT solutions for modern businesses including infrastructure management, technical support, and system integration."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              IT Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT services and solutions to support your business infrastructure and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Infrastructure Management</h3>
              <p className="text-gray-300 mb-4">
                Complete management of your IT infrastructure including servers, networks, and systems.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Server Administration</li>
                <li>• Network Monitoring</li>
                <li>• System Maintenance</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Technical Support</h3>
              <p className="text-gray-300 mb-4">
                24/7 technical support to keep your systems running smoothly.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Help Desk Services</li>
                <li>• Remote Support</li>
                <li>• On-site Support</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">System Integration</h3>
              <p className="text-gray-300 mb-4">
                Seamless integration of various systems and applications.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• API Integration</li>
                <li>• Data Migration</li>
                <li>• Legacy System Modernization</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">IT Consulting</h3>
              <p className="text-gray-300 mb-4">
                Strategic IT consulting to optimize your technology investments.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Technology Assessment</li>
                <li>• Strategic Planning</li>
                <li>• Digital Transformation</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Cloud Services</h3>
              <p className="text-gray-300 mb-4">
                Cloud migration and management services for scalable solutions.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Cloud Migration</li>
                <li>• Cloud Management</li>
                <li>• Hybrid Cloud Solutions</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Security Services</h3>
              <p className="text-gray-300 mb-4">
                Comprehensive security solutions to protect your IT infrastructure.
              </p>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Security Audits</li>
                <li>• Threat Monitoring</li>
                <li>• Compliance Management</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Get Started with IT Solutions
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItSolutionsPage;