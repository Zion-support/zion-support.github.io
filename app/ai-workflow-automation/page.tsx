'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';


const AiWorkflowAutomationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Workflow Automation - Zion Tech Group</title>
        <meta name="description" content="Streamline business processes with intelligent workflow automation powered by AI and machine learning." />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Workflow Automation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automate complex business workflows with intelligent AI systems that adapt and optimize over time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Process Optimization</h3>
              <p className="text-gray-600">AI-driven process optimization and workflow improvement.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Task Automation</h3>
              <p className="text-gray-600">Automate repetitive tasks and decision-making processes.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Integration Management</h3>
              <p className="text-gray-600">Seamless integration between different business systems.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default AiWorkflowAutomationPage;