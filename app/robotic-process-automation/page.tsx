import React from 'react';
import { Helmet } from 'react-helmet-async';

const RoboticProcessAutomationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Robotic Process Automation - Zion Tech Group</title>
        <meta name="description" content="Advanced Robotic Process Automation (RPA) solutions for business process automation, workflow optimization, and digital transformation." />
        <meta name="keywords" content="robotic process automation, RPA, business process automation, workflow automation, digital transformation, process optimization" />
        <link rel="canonical" href="https://ziontechgroup.com/robotic-process-automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
                Robotic Process Automation
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Advanced RPA solutions for automating repetitive business processes and improving operational efficiency
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Process Automation</h2>
                <p className="text-gray-300 mb-4">
                  Automate repetitive business processes with intelligent bots that can handle complex workflows and decision-making.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Data entry automation</li>
                  <li>• Document processing</li>
                  <li>• Email automation</li>
                  <li>• Report generation</li>
                </ul>
              </div>

              <div className="glass-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Workflow Optimization</h2>
                <p className="text-gray-300 mb-4">
                  Optimize business workflows with AI-powered automation that learns and adapts to improve efficiency over time.
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Workflow analysis</li>
                  <li>• Process optimization</li>
                  <li>• Performance monitoring</li>
                  <li>• Continuous improvement</li>
                </ul>
              </div>
            </div>

            <div className="glass-card p-8 mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Intelligent Bots</h3>
                  <p className="text-gray-300 text-sm">AI-powered bots for complex automation</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Analytics & Reporting</h3>
                  <p className="text-gray-300 text-sm">Comprehensive analytics and performance reporting</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Scalability</h3>
                  <p className="text-gray-300 text-sm">Highly scalable automation solutions</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 neon-glow"
              >
                Get Started with RPA
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoboticProcessAutomationPage;