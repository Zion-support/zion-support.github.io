import React from 'react';
import { SEOHead } from '../components/SEOHead';

const AIBusinessIntelligenceSuite: React.FC = () => {
  return (
    <>
      <SEOHead
        title="AI Business Intelligence Suite | Zion Tech Group"
        description="Comprehensive AI-powered business intelligence suite for enterprise analytics. Advanced reporting, data visualization, and strategic insights."
        keywords="AI business intelligence suite, enterprise BI, data analytics, business insights, AI analytics platform, BI tools"
        canonicalUrl="https://ziontechgroup.com/ai-business-intelligence-suite"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              AI Business Intelligence Suite
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive business intelligence suite powered by artificial intelligence, delivering actionable insights and strategic analytics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-4">
                Complete BI Solution
              </h2>
              <p className="text-gray-300 text-lg">
                Our AI Business Intelligence Suite provides a complete solution for enterprise analytics, 
                combining data integration, advanced analytics, and intelligent reporting in one platform.
              </p>
              <p className="text-gray-300 text-lg">
                From data warehousing to executive dashboards, our suite empowers organizations to 
                transform raw data into strategic insights that drive business growth.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Suite Components</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Data Integration Platform
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Advanced Analytics Engine
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Interactive Dashboards
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Automated Reporting
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Suite Features
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <h3 className="text-lg font-bold text-white mb-2">Data Integration</h3>
                <p className="text-gray-400 text-sm">Connect and unify data sources</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <h3 className="text-lg font-bold text-white mb-2">Analytics Engine</h3>
                <p className="text-gray-400 text-sm">Advanced AI-powered analytics</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <h3 className="text-lg font-bold text-white mb-2">Visualization</h3>
                <p className="text-gray-400 text-sm">Interactive charts and graphs</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl">
                <h3 className="text-lg font-bold text-white mb-2">Reporting</h3>
                <p className="text-gray-400 text-sm">Automated report generation</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              Explore BI Suite
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIBusinessIntelligenceSuite;