import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Code, Zap, Shield, Users, CheckCircle } from 'lucide-react';

const APIDocumentationPage: React.FC = () => {
  const endpoints = [
    {
      method: "GET",
      path: "/api/services",
      description: "Retrieve all available services",
      response: "Array of service objects"
    },
    {
      method: "POST",
      path: "/api/contact",
      description: "Submit contact form",
      response: "Success confirmation"
    },
    {
      method: "GET",
      path: "/api/health",
      description: "Check API health status",
      response: "Health status object"
    }
  ];

  return (
    <>
      <Head>
        <title>API Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive API documentation for Zion Tech Group services and endpoints." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                API <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Documentation</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive API documentation for integrating with our services.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">API Endpoints</h2>
              <p className="text-xl text-gray-300">Available endpoints for our services</p>
            </div>
            
            <div className="space-y-6">
              {endpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded text-sm font-semibold ${
                        endpoint.method === 'GET' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-blue-400 font-mono">{endpoint.path}</code>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-2">{endpoint.description}</p>
                  <p className="text-sm text-gray-400">Response: {endpoint.response}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-8">Need Help with Integration?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our team is here to help you integrate our APIs into your applications.
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default APIDocumentationPage;