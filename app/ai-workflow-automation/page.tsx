import React from 'react';
import { Helmet } from 'react-helmet-async';

const AiWorkflowAutomationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Workflow Automation - Intelligent Process Automation | Zion Tech Group</title>
        <meta name="description" content="Automate complex workflows with AI-powered process automation. Streamline operations, reduce errors, and increase efficiency." />
      </Helmet>
      <div className="min-h-screen pt-16">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Workflow <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Automation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Automate complex workflows with intelligent AI solutions
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiWorkflowAutomationPage;