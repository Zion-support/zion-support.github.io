import React from 'react';
import { Helmet } from 'react-helmet-async';

const TaskManagerProPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Task Manager Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced task management solution with AI-powered automation, team collaboration, and project tracking capabilities." />
        <meta name="keywords" content="task manager, project management, team collaboration, productivity, AI automation, workflow" />
        <link rel="canonical" href="https://ziontechgroup.com/task-manager-pro" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Task Manager Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The ultimate task management solution with AI-powered automation, intelligent scheduling, and seamless team collaboration.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Automation</h3>
              <p className="text-gray-300 mb-6">Intelligent task prioritization, automatic deadline management, and smart resource allocation.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Smart task prioritization</li>
                <li>• Automatic deadline tracking</li>
                <li>• Resource optimization</li>
                <li>• Predictive analytics</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Team Collaboration</h3>
              <p className="text-gray-300 mb-6">Real-time collaboration, team communication, and seamless project sharing.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Real-time updates</li>
                <li>• Team messaging</li>
                <li>• File sharing</li>
                <li>• Comment system</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Advanced Analytics</h3>
              <p className="text-gray-300 mb-6">Comprehensive reporting, performance metrics, and productivity insights.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Performance dashboards</li>
                <li>• Time tracking</li>
                <li>• Progress reports</li>
                <li>• Team productivity metrics</li>
              </ul>
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Intelligent Task Management</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Smart Prioritization</h4>
                      <p className="text-gray-300">AI automatically prioritizes tasks based on deadlines, importance, and team capacity.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Time Tracking</h4>
                      <p className="text-gray-300">Automatic time tracking with detailed reports and productivity insights.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Workflow Automation</h4>
                      <p className="text-gray-300">Create custom workflows and automate repetitive tasks to boost productivity.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                    <span className="text-white font-medium">Project Alpha</span>
                    <span className="text-cyan-400 text-sm">85% Complete</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                    <span className="text-white font-medium">Website Redesign</span>
                    <span className="text-blue-400 text-sm">In Progress</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                    <span className="text-white font-medium">Mobile App</span>
                    <span className="text-purple-400 text-sm">Planning</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                    <span className="text-white font-medium">Marketing Campaign</span>
                    <span className="text-green-400 text-sm">Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4">Starter</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$29</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>• Up to 5 team members</li>
                  <li>• Basic task management</li>
                  <li>• Simple reporting</li>
                  <li>• Email support</li>
                </ul>
                <button className="w-full bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors">
                  Get Started
                </button>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/50 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Professional</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$79</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>• Up to 25 team members</li>
                  <li>• AI-powered features</li>
                  <li>• Advanced analytics</li>
                  <li>• Priority support</li>
                  <li>• Custom workflows</li>
                </ul>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
                  Get Started
                </button>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$199</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 text-gray-300 mb-8">
                  <li>• Unlimited team members</li>
                  <li>• Full AI automation</li>
                  <li>• Custom integrations</li>
                  <li>• 24/7 phone support</li>
                  <li>• Dedicated account manager</li>
                </ul>
                <button className="w-full bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of teams who are already using Task Manager Pro to streamline their workflows and achieve better results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Start Free Trial
              </a>
              <a
                href="/pricing"
                className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                View All Plans
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskManagerProPage;