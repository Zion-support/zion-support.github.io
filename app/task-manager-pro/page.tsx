import React from 'react';
import SEOHead from '../components/SEOHead';

const TaskManagerProPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Task Manager Pro - Zion Tech Group"
        description="Advanced task management solution with AI-powered automation, team collaboration, and project tracking capabilities."
        keywords="task management, project management, team collaboration, productivity, AI automation, workflow optimization"
        canonicalUrl="https://ziontechgroup.com/task-manager-pro"
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Task Manager Pro</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced task management solution with AI-powered automation, team collaboration, and intelligent project tracking.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">AI-Powered Task Prioritization</h3>
                    <p className="text-gray-600">Automatically prioritize tasks based on deadlines, importance, and team capacity.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Team Collaboration</h3>
                    <p className="text-gray-600">Real-time collaboration with comments, file sharing, and progress tracking.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Project Analytics</h3>
                    <p className="text-gray-600">Comprehensive analytics and reporting to track team performance and project progress.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Automated Workflows</h3>
                    <p className="text-gray-600">Create custom automation rules to streamline repetitive tasks and processes.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing</h2>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Pro Plan</h3>
                  <div className="text-4xl font-bold text-blue-600 mt-2">$29/month</div>
                  <p className="text-gray-600">per user</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Unlimited projects and tasks</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>AI-powered insights</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Team collaboration tools</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>24/7 support</span>
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskManagerProPage;