import React from 'react';

export default function AiAutomation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Automation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Streamline your business processes with intelligent automation solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Workflow Automation</h3>
            <p className="text-gray-300">Automate repetitive tasks and streamline your business workflows.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Process Optimization</h3>
            <p className="text-gray-300">Optimize your business processes with AI-driven insights and recommendations.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">Smart Integration</h3>
            <p className="text-gray-300">Seamlessly integrate with your existing systems and tools.</p>
          </div>
        </div>
      </div>
    </div>
  );
}