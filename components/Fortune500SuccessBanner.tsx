// import React from 'react';
import { Link } from 'react-router-dom';

const Fortune500SuccessBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 rounded-2xl p-8 mb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full text-white text-sm font-medium mb-3">
              🏆 SUCCESS STORY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              $2.3B Revenue Increase
            </h2>
            <p className="text-green-100 text-lg mb-4 max-w-2xl">
              See how a Fortune 500 company achieved unprecedented success with AI transformation, generating $2.3B in additional revenue and 450% ROI in just 12 months.
            </p>
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <div className="text-green-300 text-sm font-medium">450% ROI</div>
              </div>
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <div className="text-green-300 text-sm font-medium">12 Months</div>
              </div>
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <div className="text-green-300 text-sm font-medium">85% Cost Reduction</div>
              </div>
            </div>
            <Link to="/case-studies/fortune-500-ai-transformation-mega-success-2026" 
              className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Read Full Case Study
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-center w-32 h-32 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full">
            <div className="text-4xl">💰</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fortune500SuccessBanner;