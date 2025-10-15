import React from 'react';
import { Helmet } from 'react-helmet-async';

const DigitalTransformationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Complete digital transformation services to modernize your business processes and technology stack." />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Digital Transformation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with modern digital technologies and processes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Process Automation</h3>
              <p className="text-gray-300 mb-4">
                Automate repetitive tasks and streamline business processes for efficiency.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Workflow Automation</li>
                <li>• RPA Implementation</li>
                <li>• Business Process Optimization</li>
                <li>• Integration Solutions</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-pink-400">Data Analytics</h3>
              <p className="text-gray-300 mb-4">
                Turn your data into actionable insights with advanced analytics solutions.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Data Visualization</li>
                <li>• Predictive Analytics</li>
                <li>• Business Intelligence</li>
                <li>• Real-time Dashboards</li>
              </ul>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Modern Applications</h3>
              <p className="text-gray-300 mb-4">
                Build modern, scalable applications using the latest technologies.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Web Applications</li>
                <li>• Mobile Apps</li>
                <li>• API Development</li>
                <li>• Microservices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalTransformationPage;