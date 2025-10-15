import React from 'react';
import { Helmet } from 'react-helmet-async';

const LowCodePlatformPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Low-Code Platform - Zion Tech Group</title>
        <meta name="description" content="Build applications faster with our low-code platform. Visual development tools, drag-and-drop interface, and rapid application deployment." />
        <meta name="keywords" content="low-code platform, visual development, rapid application development, drag-and-drop, app builder" />
        <link rel="canonical" href="https://ziontechgroup.com/low-code-platform" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Low-Code Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build applications 10x faster with our visual low-code platform. 
              Drag, drop, and deploy enterprise-grade applications without extensive coding.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Platform Features</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Visual drag-and-drop interface</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Pre-built components and templates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Real-time collaboration tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>One-click deployment and scaling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>API integration and connectors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span>Mobile-responsive design</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Use Cases</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Internal business applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Customer portals and dashboards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Workflow and process management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Data collection and forms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Reporting and analytics tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  <span>Mobile and web applications</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Build Without Limits</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Create powerful applications with visual tools that make development accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Start Building
              </a>
              <a
                href="/demo"
                className="bg-transparent border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Try Platform
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LowCodePlatformPage;