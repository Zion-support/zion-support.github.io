import React from 'react';
import { Helmet } from 'react-helmet-async';

const RoboticProcessAutomationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Robotic Process Automation (RPA) - Zion Tech Group</title>
        <meta name="description" content="Automate repetitive business processes with RPA solutions. Increase efficiency, reduce errors, and free up your team for higher-value work." />
        <meta name="keywords" content="RPA, robotic process automation, business process automation, workflow automation, digital transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/robotic-process-automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Robotic Process Automation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Automate repetitive tasks and streamline business processes with intelligent RPA solutions. 
              Increase efficiency, reduce errors, and accelerate digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">RPA Capabilities</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>End-to-end process automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>AI-powered decision making</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Cross-system integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Exception handling and recovery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Scalable bot deployment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Real-time monitoring and analytics</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Process Areas</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Finance and accounting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Human resources and payroll</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Customer service and support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Data entry and validation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Invoice processing and payments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Report generation and distribution</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Automate for Success</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your business operations with intelligent automation that works 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Get Started
              </a>
              <a
                href="/demo"
                className="bg-transparent border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                See Automation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoboticProcessAutomationPage;