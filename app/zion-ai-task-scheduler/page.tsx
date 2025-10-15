import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ZionaitaskschedulerPage() {
  return (
    <>
      <Helmet>
        <title>AI Task Scheduler - Zion Tech Group</title>
        <meta name="description" content="Optimize your workflow with our AI-powered task scheduler. Automatically prioritize, schedule, and manage tasks for maximum productivity." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Task Scheduler
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optimize your workflow with our AI-powered task scheduler. Automatically prioritize, schedule, and manage tasks for maximum productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Features</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Smart Prioritization</h3>
                    <p className="text-gray-600">AI automatically prioritizes tasks based on deadlines, importance, and dependencies</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Time Optimization</h3>
                    <p className="text-gray-600">Schedule tasks at optimal times based on your productivity patterns</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Dependency Management</h3>
                    <p className="text-gray-600">Automatically handle task dependencies and blocking relationships</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <svg className="w-3 h-3 text-violet-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Progress Tracking</h3>
                    <p className="text-gray-600">Monitor task completion and adjust schedules automatically</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Benefits</h2>
              <div className="space-y-6">
                <div className="bg-violet-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-violet-900 mb-2">Increased Productivity</h3>
                  <p className="text-violet-700">Complete more tasks efficiently with optimized scheduling</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Reduced Stress</h3>
                  <p className="text-blue-700">Let AI handle the complexity of task management and scheduling</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">Better Focus</h3>
                  <p className="text-green-700">Focus on high-priority tasks while AI manages your schedule</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">Deadline Management</h3>
                  <p className="text-purple-700">Never miss important deadlines with intelligent scheduling</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Optimize Your Tasks?</h2>
            <p className="text-gray-600 mb-6">Start managing your tasks more efficiently with AI-powered scheduling.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-violet-600 text-white px-8 py-3 rounded-lg hover:bg-violet-700 transition-colors">
                Get Started
              </Link>
              <Link to="/pricing" className="border border-violet-600 text-violet-600 px-8 py-3 rounded-lg hover:bg-violet-50 transition-colors">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
