import React from 'react';
import { Helmet } from 'react-helmet-async';

const TaskManagerProPage: React.FC = () => {
  return (
    <>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskManagerProPage;