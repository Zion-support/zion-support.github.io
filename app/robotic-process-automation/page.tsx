import React from 'react';
import { Helmet } from 'react-helmet-async';

const RoboticProcessAutomationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Robotic Process Automation (RPA) - Zion Tech Group</title>
        <meta name="description" content="Advanced RPA solutions for business process automation. Automate repetitive tasks, improve efficiency, and reduce costs with intelligent robotic process automation." />
        <meta name="keywords" content="RPA, robotic process automation, business process automation, workflow automation, digital transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Robotic Process Automation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Automate repetitive business processes with intelligent RPA solutions. 
              Improve efficiency, reduce costs, and free up your team for higher-value work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Intelligent Process Automation
              </h2>
              <p className="text-gray-300 mb-6">
                Our RPA solutions use software robots to automate repetitive, 
                rule-based business processes. Reduce errors, increase speed, 
                and improve compliance across your organization.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  Process automation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  Data extraction
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  Workflow orchestration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  Exception handling
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">RPA Benefits</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-400">70%</div>
                    <div className="text-sm text-gray-300">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-400">24/7</div>
                    <div className="text-sm text-gray-300">Operation</div>
                  </div>
                </div>
                <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Finance & Accounting</h3>
              <p className="text-gray-300">
                Automate invoice processing, financial reporting, and compliance tasks.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Human Resources</h3>
              <p className="text-gray-300">
                Streamline employee onboarding, payroll processing, and benefits administration.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Customer Service</h3>
              <p className="text-gray-300">
                Automate customer inquiries, order processing, and support ticket routing.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Automate Your Business Processes
            </h2>
            <p className="text-gray-300 mb-8">
              Transform your operations with intelligent robotic process automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Start RPA Project
              </button>
              <button className="border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
                View Use Cases
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoboticProcessAutomationPage;