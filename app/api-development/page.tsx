import React from 'react';
import { Helmet } from 'react-helmet-async';

const ApiDevelopmentPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>API Development - Zion Tech Group</title>
        <meta name="description" content="Professional API development services including RESTful APIs, GraphQL, microservices, and API integration solutions for modern applications." />
        <meta name="keywords" content="API development, RESTful APIs, GraphQL, microservices, API integration, web services" />
      </Helmet>
      
      <div className="min-h-screenbg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900">
        <div className="containermx-autopx-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xlfont-boldtext-white mb-6">API Development</h1>
            <p className="text-xltext-gray-300max-w-3xl mx-auto">
              Build robust, scalable APIs that power your applications with our comprehensive
              API development services including RESTful APIs, GraphQL, and microservices.
            </p>
          </div>

          <div className="gridgrid-cols-1md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50backdrop-blur-smrounded-lg p-6 border border-cyan-500/20">
              <h3 className="text-2xlfont-boldtext-cyan-400 mb-4">RESTful APIs</h3>
              <p className="text-gray-300mb-4">Design and develop RESTful APIs following industry best practices and standards.</p>
              <ul className="text-smtext-gray-400space-y-2">
                <li>• RESTful architecture</li>
                <li>• HTTP methods</li>
                <li>• Status codes</li>
                <li>• API documentation</li>
              </ul>
            </div>

            <div className="bg-slate-800/50backdrop-blur-smrounded-lg p-6 border border-purple-500/20">
              <h3 className="text-2xlfont-boldtext-purple-400 mb-4">GraphQL APIs</h3>
              <p className="text-gray-300mb-4">Modern GraphQL APIs for efficient data fetching and real-time subscriptions.</p>
              <ul className="text-smtext-gray-400space-y-2">
                <li>• Schema design</li>
                <li>• Resolvers</li>
                <li>• Subscriptions</li>
                <li>• Type safety</li>
              </ul>
            </div>

            <div className="bg-slate-800/50backdrop-blur-smrounded-lg p-6 border border-green-500/20">
              <h3 className="text-2xlfont-boldtext-green-400 mb-4">Microservices</h3>
              <p className="text-gray-300mb-4">Scalable microservices architecture for modern distributed applications.</p>
              <ul className="text-smtext-gray-400space-y-2">
                <li>• Service decomposition</li>
                <li>• API gateway</li>
                <li>• Service discovery</li>
                <li>• Load balancing</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-rfrom-cyan-500to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              Start Your API Project
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApiDevelopmentPage;
