import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

const NewContent2025EnterpriseAutomationBanner = () => {
  return (
    <div className="bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            Enterprise Automation 2025
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-emerald-100">
            Transform your enterprise with advanced AI automation that streamlines operationsreduces costsand maximizes efficiency across all business functions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-green-400">Complete Automation</h3>
            <p className="text-emerald-100">End-to-end automation of all business processes and workflows</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-green-400">Intelligent Systems</h3>
            <p className="text-emerald-100">AI-powered systems that learnadaptand optimize continuously</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4 text-green-400">Proven Results</h3>
            <p className="text-emerald-100">2,000% ROI and $5.2B+ in savings across all implementations</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/ai-2025-2026-ultimate-breakthrough" 
            className="bg-gradient-to-r from-green-500 to-teal-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-green-400 hover:to-teal-400 transition-all duration-300 transform hover:scale-105"
          >
            Explore Automation
          </a>
          <a 
            href="/contact" 
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-green-900 transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewContent2025EnterpriseAutomationBanner;