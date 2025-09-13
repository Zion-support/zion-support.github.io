import React from 'react';
import { Link } from 'react-router-dom';

const UltimateAutomationEcosystem2030PromotionBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-500/10 to-cyan-500/10"></div>
      
      {/* Automation network visualization */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-16 left-16 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-24 w-4 h-4 bg-teal-400 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-24 left-1/4 w-5 h-5 bg-cyan-400 rounded-full animate-pulse delay-400"></div>
        <div className="absolute top-1/2 right-16 w-3 h-3 bg-emerald-300 rounded-full animate-pulse delay-600"></div>
        <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-teal-300 rounded-full animate-pulse delay-800"></div>
        
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" style={{zIndex: 1}}>
          <line x1="4rem" y1="4rem" x2="6rem" y2="8rem" stroke="rgba(52, 211, 153, 0.3)" strokeWidth="1" className="animate-pulse" />
          <line x1="24rem" y1="8rem" x2="16rem" y2="6rem" stroke="rgba(45, 212, 191, 0.3)" strokeWidth="1" className="animate-pulse delay-300" />
          <line x1="25%" y1="60%" x2="33%" y2="75%" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1" className="animate-pulse delay-600" />
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-full text-white text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            Ultimate Automation Ecosystem 2030
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The Complete
            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Automation Revolution
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the ultimate automation ecosystem where AI, robotics, and intelligent systems 
            work in perfect harmony to automate every aspect of business, industry, and daily life, 
            creating unprecedented efficiency and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/ultimate-automation-ecosystem-2030"
              className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Ecosystem
            </Link>
            <Link 
              to="/automation-solutions-2030"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-white/20"
            >
              View Solutions
            </Link>
          </div>
        </div>
        
        {/* Core automation pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/20 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Intelligent Process Automation</h3>
            <p className="text-gray-300 text-sm">
              AI-driven automation that learns, adapts, and optimizes business processes 
              in real-time across all organizational functions.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-teal-500/20 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Autonomous Operations</h3>
            <p className="text-gray-300 text-sm">
              Self-managing systems that operate independently, make decisions, 
              and maintain optimal performance without human intervention.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Integrated Workflow Systems</h3>
            <p className="text-gray-300 text-sm">
              Seamless integration of all business processes, creating unified workflows 
              that span departments, systems, and organizational boundaries.
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Predictive Intelligence</h3>
            <p className="text-gray-300 text-sm">
              Advanced predictive analytics that anticipate needs, prevent issues, 
              and optimize outcomes before they occur.
            </p>
          </div>
        </div>
        
        {/* Automation statistics */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mt-12 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Automation Revolution Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Process Automation</div>
              <div className="text-gray-400 text-xs mt-1">Across all industries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-400 mb-2">80%</div>
              <div className="text-gray-300 text-sm">Cost Reduction</div>
              <div className="text-gray-400 text-xs mt-1">Average savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Accuracy Rate</div>
              <div className="text-gray-400 text-xs mt-1">Automated processes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Operation</div>
              <div className="text-gray-400 text-xs mt-1">Continuous automation</div>
            </div>
          </div>
        </div>
        
        {/* Industry applications */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Industry Applications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Manufacturing', 'Healthcare', 'Finance', 'Retail',
              'Transportation', 'Energy', 'Education', 'Agriculture'
            ].map((industry, index) => (
              <div key={industry} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="text-white font-semibold text-sm">{industry}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateAutomationEcosystem2030PromotionBanner;