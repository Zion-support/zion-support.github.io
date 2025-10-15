import React from 'react';
import { Helmet } from 'react-helmet-async';

const LowCodePlatformPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Low-Code Platform - Zion Tech Group</title>
        <meta name="description" content="Powerful low-code development platform for rapid application development. Build enterprise applications with visual development tools and drag-and-drop interfaces." />
        <meta name="keywords" content="low-code platform, rapid application development, visual development, drag-and-drop, enterprise applications" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Low-Code Platform
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build enterprise applications faster with our visual low-code platform. 
              Drag-and-drop development, pre-built components, and rapid deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Visual Application Development
              </h2>
              <p className="text-gray-300 mb-6">
                Our low-code platform empowers citizen developers and professional 
                developers to build applications quickly using visual tools, 
                pre-built components, and drag-and-drop interfaces.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Drag-and-drop interface
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Pre-built components
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Workflow automation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  One-click deployment
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Platform Features</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-400">10x</div>
                    <div className="text-sm text-gray-300">Faster Development</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-400">500+</div>
                    <div className="text-sm text-gray-300">Components</div>
                  </div>
                </div>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Try Platform
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Business Applications</h3>
              <p className="text-gray-300">
                Build CRM, ERP, and custom business applications with visual tools.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Mobile Apps</h3>
              <p className="text-gray-300">
                Create native and cross-platform mobile applications without coding.
              </p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">Workflow Automation</h3>
              <p className="text-gray-300">
                Automate business processes and workflows with visual automation tools.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Build Applications Faster
            </h2>
            <p className="text-gray-300 mb-8">
              Accelerate your development with our powerful low-code platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Start Building
              </button>
              <button className="border border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
                View Templates
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LowCodePlatformPage;