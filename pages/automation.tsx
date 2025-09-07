import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function AutomationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>Automation | Zion Tech Group</title>
        <meta name="description" content="Professional automation solutions for your business." />
      </Head>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Automation Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional automation solutions for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Process Automation</h3>
            <p className="text-gray-300">
              Automate repetitive business processes.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Workflow Automation</h3>
            <p className="text-gray-300">
              Streamline workflows with intelligent automation.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">AI Automation</h3>
            <p className="text-gray-300">
              AI-powered automation solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
