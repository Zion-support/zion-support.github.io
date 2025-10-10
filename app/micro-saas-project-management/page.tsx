'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const MicroSaasProjectManagementPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Project Management - Zion Tech Group</title>
        <meta name="description" content="Streamlined project management micro SaaS solution. Organize, track, and manage projects with intelligent automation and collaboration tools." />
        <meta name="keywords" content="micro SaaS project management, project tracking, team collaboration, project automation, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Project Management
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A lightweight, intelligent project management solution designed for small to medium teams. 
              Streamline your workflow with AI-powered insights and automation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
              <h2 className="text-2xl font-semibold text-green-400 mb-4">Smart Project Tracking</h2>
              <p className="text-gray-300 mb-6">
                Keep track of all your projects with intelligent task management, progress monitoring, 
                and automated status updates powered by AI.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• AI-powered task prioritization</li>
                <li>• Automated progress tracking</li>
                <li>• Smart deadline management</li>
                <li>• Resource allocation optimization</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">Team Collaboration</h2>
              <p className="text-gray-300 mb-6">
                Enhance team productivity with real-time collaboration tools, communication channels, 
                and shared workspaces designed for modern teams.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Real-time team communication</li>
                <li>• Shared project dashboards</li>
                <li>• File sharing and version control</li>
                <li>• Meeting scheduling and management</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaasProjectManagementPage;