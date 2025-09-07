import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'AI Project Management Suite | Zion Tech Group',
  description: 'Intelligent project management with AI-powered task automation, resource optimization, risk prediction, and smart scheduling for enhanced team productivity.',
  keywords: 'AI project management, task automation, resource optimization, risk prediction, team productivity, project planning AI',
};

export default function AiProjectManagementSuitePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI Project Management Suite
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Intelligent project management with AI-powered task automation, resource optimization, 
            risk prediction, and smart scheduling for enhanced team productivity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">AI Task Automation</h3>
            <p className="text-gray-600">
              Automate repetitive tasks and streamline workflows with intelligent AI algorithms 
              that learn from your team's patterns and preferences.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Resource Optimization</h3>
            <p className="text-gray-600">
              Optimize team resources and allocation for maximum efficiency and productivity 
              using advanced AI-powered analytics.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Risk Prediction</h3>
            <p className="text-gray-600">
              Predict and mitigate project risks before they impact your timeline and budget 
              with machine learning-powered risk assessment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}