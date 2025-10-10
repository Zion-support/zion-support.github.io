'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const MicroSaasCollaborationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS Collaboration - Zion Tech Group</title>
        <meta name="description" content="Team collaboration micro SaaS solution. Enhance productivity with intelligent collaboration tools, communication, and project management features." />
        <meta name="keywords" content="micro SaaS collaboration, team productivity, communication tools, project collaboration, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Collaboration
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Boost team productivity with intelligent collaboration tools that facilitate 
              communication, project management, and seamless teamwork across your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-2xl font-semibold text-cyan-400 mb-4">Smart Communication</h2>
              <p className="text-gray-300 mb-6">
                Enhance team communication with intelligent messaging, video conferencing, 
                and collaboration features that adapt to your team's workflow.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• AI-powered message prioritization</li>
                <li>• Smart meeting scheduling</li>
                <li>• Real-time collaboration tools</li>
                <li>• Intelligent notification management</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/20">
              <h2 className="text-2xl font-semibold text-green-400 mb-4">Project Workspaces</h2>
              <p className="text-gray-300 mb-6">
                Create dedicated workspaces for each project with shared documents, 
                task management, and progress tracking all in one place.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Project-specific workspaces</li>
                <li>• Shared document libraries</li>
                <li>• Task and milestone tracking</li>
                <li>• Team performance analytics</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-cyan-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-green-700 transition-all duration-300">
              Start Collaborating
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaasCollaborationPage;