'use client';
import React from 'react';

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Case <span className="text-cyan-400">Studies</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations with our AI and IT solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
            <div className="mb-6">
              <span className="text-cyan-400 text-sm font-medium">Manufacturing</span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                AI-Powered Quality Control System
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Implemented a comprehensive AI solution for a manufacturing company that reduced 
                defect rates by 85% and improved production efficiency by 40%.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Industry:</span>
                <span className="text-white">Manufacturing</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Duration:</span>
                <span className="text-white">6 months</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">ROI:</span>
                <span className="text-cyan-400 font-semibold">340%</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
            <div className="mb-6">
              <span className="text-cyan-400 text-sm font-medium">Healthcare</span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                Patient Data Analytics Platform
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Developed a secure analytics platform for a healthcare provider that improved 
                patient outcomes by 60% and reduced operational costs by 35%.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Industry:</span>
                <span className="text-white">Healthcare</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Duration:</span>
                <span className="text-white">8 months</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">ROI:</span>
                <span className="text-cyan-400 font-semibold">280%</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
            <div className="mb-6">
              <span className="text-cyan-400 text-sm font-medium">Finance</span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                Fraud Detection System
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Created an advanced fraud detection system for a financial institution that 
                reduced false positives by 70% and increased detection accuracy by 95%.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Industry:</span>
                <span className="text-white">Finance</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Duration:</span>
                <span className="text-white">4 months</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">ROI:</span>
                <span className="text-cyan-400 font-semibold">420%</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50">
            <div className="mb-6">
              <span className="text-cyan-400 text-sm font-medium">E-commerce</span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-4">
                Recommendation Engine
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Built a personalized recommendation engine for an e-commerce platform that 
                increased conversion rates by 45% and average order value by 30%.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Industry:</span>
                <span className="text-white">E-commerce</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Duration:</span>
                <span className="text-white">5 months</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">ROI:</span>
                <span className="text-cyan-400 font-semibold">380%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Start Your Success Story?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you achieve similar results with our proven AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
