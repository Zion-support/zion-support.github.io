import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServerlessArchitecturePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Serverless Architecture Solutions - Zion Tech Group</title>
        <meta name="description" content="Scalable serverless architecture solutions for modern applications. Event-driven computing, microservices, and pay-per-use cloud infrastructure." />
        <meta name="keywords" content="serverless architecture, cloud computing, microservices, event-driven, AWS Lambda, Azure Functions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Serverless Architecture Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build scalable, cost-effective applications with serverless architecture. 
              Event-driven computing, microservices, and pay-per-use infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Event-Driven Computing
              </h2>
              <p className="text-gray-300 mb-6">
                Our serverless architecture solutions eliminate server management overhead 
                while providing automatic scaling, high availability, and pay-per-use pricing. 
                Focus on code, not infrastructure.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Auto-scaling functions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Event-driven architecture
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Microservices integration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Cost optimization
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Serverless Benefits</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">90%</div>
                    <div className="text-sm text-gray-300">Cost Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">99.9%</div>
                    <div className="text-sm text-gray-300">Uptime</div>
                  </div>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  View Architecture
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">API Development</h3>
              <p className="text-gray-300">
                Build scalable APIs with serverless functions and automatic scaling.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Data Processing</h3>
              <p className="text-gray-300">
                Process data streams and batch jobs with event-driven serverless functions.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Web Applications</h3>
              <p className="text-gray-300">
                Build full-stack applications with serverless backend and frontend hosting.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Go Serverless Today
            </h2>
            <p className="text-gray-300 mb-8">
              Transform your applications with modern serverless architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Start Serverless Project
              </button>
              <button className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
                View Examples
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServerlessArchitecturePage;