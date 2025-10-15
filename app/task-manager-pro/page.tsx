import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
import SEOHead from '../components/SEOHead';
>>>>>>> cursor/analyze-improve-and-merge-code-5d7e

const TaskManagerProPage: React.FC = () => {
  return (
    <>
<<<<<<< HEAD
      <Helmet>
        <title>Task Manager Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced task management solution with AI-powered features. Organize, prioritize, and track tasks with intelligent automation and collaboration tools." />
        <meta name="keywords" content="task manager pro, project management, task automation, productivity tools, team collaboration" />
        <link rel="canonical" href="https://ziontechgroup.com/task-manager-pro" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6 holographic-text">
              Task Manager Pro
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced task management solution with AI-powered features. 
              Organize, prioritize, and track tasks with intelligent automation and collaboration tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-white mb-4">Smart Task Creation</h3>
              <p className="text-gray-300">
                Create tasks with AI assistance, automatic categorization, and priority suggestions.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Automation</h3>
              <p className="text-gray-300">
                Automate repetitive tasks and workflows with intelligent task automation.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-white mb-4">Team Collaboration</h3>
              <p className="text-gray-300">
                Collaborate with team members through shared workspaces and real-time updates.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-4">Progress Tracking</h3>
              <p className="text-gray-300">
                Track progress with detailed analytics, reports, and performance metrics.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold text-white mb-4">Time Management</h3>
              <p className="text-gray-300">
                Manage time effectively with scheduling, reminders, and deadline tracking.
              </p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-transform">
              <div className="text-cyan-400 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-4">Mobile Access</h3>
              <p className="text-gray-300">
                Access and manage tasks from anywhere with mobile and desktop applications.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Boost Your Productivity?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 neon-glow"
              >
                Get Started Today
              </a>
              <a 
                href="/pricing" 
                className="px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Pricing
              </a>
=======
      <SEOHead
        title="Task Manager Pro - Zion Tech Group"
        description="Advanced task management with AI-powered prioritization and team collaboration features."
        keywords="task manager, productivity, project management, AI prioritization, team collaboration"
        canonicalUrl="https://ziontechgroup.com/task-manager-pro"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Task Manager Pro
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced task management with AI-powered prioritization and team collaboration features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">Features</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">AI Task Prioritization</h3>
                    <p className="text-gray-400">Automatically prioritize tasks based on deadlines, importance, and dependencies.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Team Collaboration</h3>
                    <p className="text-gray-400">Real-time collaboration with team members, comments, and file sharing.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Time Tracking</h3>
                    <p className="text-gray-400">Built-in time tracking and productivity analytics.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Project Templates</h3>
                    <p className="text-gray-400">Pre-built templates for common project types and workflows.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <h3 className="text-xl font-bold mb-6 text-white">Pricing</h3>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-green-400 mb-2">$29/mo</div>
                <div className="text-gray-400 line-through">$49/mo</div>
                <div className="text-sm text-green-400">Limited Time Offer</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Unlimited Projects</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Up to 10 Team Members</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">AI Prioritization</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Time Tracking</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Mobile App</span>
                  <span className="text-green-400">✓</span>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Start Free Trial
              </button>
>>>>>>> cursor/analyze-improve-and-merge-code-5d7e
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskManagerProPage;