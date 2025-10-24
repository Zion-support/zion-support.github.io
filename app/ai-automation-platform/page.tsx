
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOHead from '../components/SEOHead';

const AiAutomationPlatformPage: React.FC = () => {
  return (<>
      <Helmet>
        <title>AI Automation Platform - Intelligent Process Automation | Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered automation solutions" />
      </Helmet>
      <div className="min-h-screen bg-gray-50"></div>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
              AI Automation Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your business with intelligent process automation
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12"></div>
              <div className="bg-white p-6 rounded-lg shadow-md"></div>
                <h3 className="text-xl font-semibold mb-4">Process Automation</h3>
                <p className="text-gray-600">Automate complex business processes with AI</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md"></div>
                <h3 className="text-xl font-semibold mb-4">Workflow Optimization</h3>
                <p className="text-gray-600">Optimize workflows for maximum efficiency</p>
              </div>
            </div>
            <div className="mt-8"></div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>)
  );
};

export default AiAutomationPlatformPage;


