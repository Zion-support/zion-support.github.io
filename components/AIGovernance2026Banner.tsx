import React from 'react';
import { Link } from 'react-router-dom';

const AIGovernance2026Banner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-indigo-900 via-blue-900 to-cyan-900 rounded-2xl shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-cyan-600/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.3),transparent_70%)]"></div>
      
      <div className="relative z-10 p-8 md:p-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 border border-indigo-400/30 rounded-full text-indigo-300 text-sm font-medium">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                ESSENTIAL GUIDE
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                AI Governance 2026: Enterprise Safety Framework
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Comprehensive guide to implementing robust AI governance, safety protocols, and compliance 
                frameworks. Ensure your AI systems operate safely, ethically, and in full regulatory compliance.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/blog/ai-governance-2026-enterprise-safety"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Read Governance Guide
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link to="/services"
                  className="inline-flex items-center px-6 py-3 border-2 border-indigo-400 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-400 hover:text-white transition-all duration-300"
                >
                  Get Governance Assessment
                </Link>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">100%</div>
                  <div className="text-sm text-gray-400">Compliance</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">$50M+</div>
                  <div className="text-sm text-gray-400">Risk Mitigation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">24/7</div>
                  <div className="text-sm text-gray-400">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">85%</div>
                  <div className="text-sm text-gray-400">Confidence</div>
                </div>
              </div>
            </div>
            
            {/* Visual Elements */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">Governance Framework</h3>
                    <p className="text-gray-400 text-sm">Comprehensive AI safety and compliance</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">Risk Assessment</h4>
                        <p className="text-xs text-gray-400">Continuous monitoring & evaluation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">Safety Controls</h4>
                        <p className="text-xs text-gray-400">Multi-layer protection systems</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">Ethical AI</h4>
                        <p className="text-xs text-gray-400">Fairness, transparency & accountability</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">Compliance</h4>
                        <p className="text-xs text-gray-400">Regulatory adherence & reporting</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIGovernance2026Banner;