'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const MicroSaasCmsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Micro SaaS CMS - Zion Tech Group</title>
        <meta name="description" content="Content management micro SaaS solution. Organize, create, and manage content with AI-powered content optimization and workflow automation." />
        <meta name="keywords" content="micro SaaS CMS, content management, content optimization, workflow automation, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS CMS
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Streamline your content management with an intelligent CMS that combines powerful 
              content creation tools with AI-powered optimization and workflow automation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">AI Content Optimization</h2>
              <p className="text-gray-300 mb-6">
                Enhance your content with AI-powered suggestions for SEO, readability, and engagement. 
                Get real-time feedback and optimization recommendations.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• SEO optimization suggestions</li>
                <li>• Content readability analysis</li>
                <li>• Engagement prediction</li>
                <li>• Automated content tagging</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">Workflow Automation</h2>
              <p className="text-gray-300 mb-6">
                Automate your content workflows with intelligent approval processes, 
                scheduling, and publishing automation that saves time and reduces errors.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Automated approval workflows</li>
                <li>• Content scheduling and publishing</li>
                <li>• Version control and collaboration</li>
                <li>• Multi-channel content distribution</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              Start Managing Content
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicroSaasCmsPage;