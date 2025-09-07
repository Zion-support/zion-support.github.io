import React from 'react';

export const metadata = {
  title: 'AI Project Management Suite | Zion Tech Group',
  description: 'Intelligent project management with AI-powered task automation, resource optimization, risk prediction, and smart scheduling for enhanced team productivity.',
  keywords: 'AI project management, task automation, resource optimization, risk prediction, team productivity, project planning AI',
};

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Project Management Suite
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Intelligent project management with AI-powered task automation, resource optimization, risk prediction, and smart scheduling for enhanced team productivity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">AI Task Automation</h3>
            <p className="text-gray-300">
              Automate repetitive tasks and streamline workflows with intelligent AI algorithms.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Resource Optimization</h3>
            <p className="text-gray-300">
              Optimize team resources and allocation for maximum efficiency and productivity.
            </p>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Risk Prediction</h3>
            <p className="text-gray-300">
              Predict and mitigate project risks before they impact your timeline and budget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}